var axios = require('axios');
var qs = require('qs');

module.exports = {
	fetchCompletedDocuments: function(){
		return axios.get('http://127.0.0.1:9393/documents/')
			.then(function(responce){
				return responce.data
			})
	},
	fetchCompletedDocument: function(document_id){
		return axios.get('http://127.0.0.1:9393/documents/'+ document_id)
			.then(function(responce){
				return responce.data
			})
	},

	CopyComponentInfo: function(document_id){
		console.log("test before axios.all")
		return axios.all([
			this.fetchCompletedDocument(document_id),
			this.fetch_doc_copies(document_id)
		]).then(axios.spread(function(r_document, r_copy_list){
			var data = [];
			data.push(r_document);
			data.push(r_copy_list);
			return data
		}))
	},
	//jesus crist this took me forever to get to work
	//the problem is objects are serialized to JSON by default 
	//while you need to send the data in the 
	//`application/x-www-form-urlencoded' format
	//thank-you 'nickuraltsev'from github i will keep u in my heart 4 ever
	create_new_document: function(document_name){
		var text = ""
		console.log("inside app.js")
		return axios.post('http://127.0.0.1:9393/documents/' , qs.stringify({
			name: document_name,
			document_text: text
			})
		).then(function(responce){
			return responce.data
		}).catch(function(error){
			console.log(error)
		})
	},
	fetch_doc_copies: function(doc_id){
		return axios.get('http://127.0.0.1:9393/copies/docs/'+ doc_id)
			.then(function(responce){
				return responce.data
			})
	},
	create_new_copy: function(doc, copy_name){
		/*Server returns a array of copies*/
		var parent_id = 0
		var document_id = doc.document_id
		var document_text = doc.document_text

		return axios.post('http://127.0.0.1:9393/copies/'+ document_id, qs.stringify({
			name: copy_name,
			parent_id: parent_id,
			document_id: document_id,
			copy_text: document_text
			})
		).then(function(responce){
			return responce.data
		})
	},
	save_copy: function(copy){
		var id = copy.copy_id
		var text = copy.copy_text
		return axios.patch('http://127.0.0.1:9393/copies/'+ id, qs.stringify({
				copy_text: text
		})).then(function(responce){
			return responce.data
		})

	},
	save_document: function(_document){
		var txt = _document.document_text
		var id = _document.document_id
		return axios.patch('http://127.0.0.1:9393/documents/'+id, qs.stringify({
			document_text: txt
		})).then(function(responce){
			return responce.data
		})

	},
	fetch_url_id: function(pURL){
		var id = pURL.substring(pURL.length - 1, pURL.length)
		return id;
	}

}
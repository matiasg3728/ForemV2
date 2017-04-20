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
	}

}
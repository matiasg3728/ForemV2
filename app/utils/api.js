var axios = require('axios');

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
	}
}
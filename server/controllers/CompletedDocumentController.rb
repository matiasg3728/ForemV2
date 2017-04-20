class CompletedDocumentController < ApplicationController

	# '/' === '.../documents/'


	options "*" do
    	response.headers["Allow"] = "HEAD,GET,POST,PUT,PATCH,DELETE,OPTIONS"
	
    	# Needed for AngularJS
    	response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
    	response['Access-Control-Allow-Origin'] = '*'
	
    	"cool"
 	end


	# This will return all the 'Completed Documents'
	# in the data-base
	get '/' do
		response['Access-Control-Allow-Origin'] = '*'

		content_type :json

		@completed_documents = CompletedDocument.all
		@completed_documents.to_json

	end

	# This will return a specific 'Completed Document'
	get '/:id' do
		response['Access-Control-Allow-Origin'] = '*'

		id = params[:id]

		@completed_document = CompletedDocument.find(id)
		@completed_document.to_json

	end

	# Creates a new 'Completed Document'
	# **Dev-Note**  Make sure user is prompted to choose a final name when
	# they submit their document
	# **Dev-Note**  Do we want to destroy all associated copies to this specific Doc once we 
	# submit it?  If we do then we have to do it here and maybe in the patch request too.  
	# We can add that in latter tho...
	post '/' do
		response['Access-Control-Allow-Origin'] = '*'

		# id = params[:id]

		@completed_document = CompletedDocument.new

		@completed_document.name = params[:name]
		@completed_document.document_text = params[:document_text]
		@completed_document.save
		
		
		@completed_documents = CompletedDocument.all
		@completed_documents.to_json
	end

	# Updates specific 'Completed Document' document_text value
	# **Dev-Note** 
	patch '/:id' do

		response['Access-Control-Allow-Origin'] = '*'


		id = params[:id]

		@completed_document = CompletedDocument.find(id)
		# p(@completed_document)
		@completed_document.document_text = params[:document_text]
		@completed_document.save
		# p(@completed_document)

		# @completed_document.to_json

	end

	# Deletes a specific 'Completed Document'
	delete '/:id' do
		response['Access-Control-Allow-Origin'] = '*'

		id = params[:id]

		@completed_document = CompletedDocument.find(id).destroy

		# p @completed_document

	end



end
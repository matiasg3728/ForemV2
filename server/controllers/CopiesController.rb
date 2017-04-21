class CopiesController < ApplicationController


	options "*" do
    	response.headers["Allow"] = "HEAD,GET,POST,PUT,PATCH,DELETE,OPTIONS"
	
    	# Needed for AngularJS
    	response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
    	response['Access-Control-Allow-Origin'] = '*'
	
    	"i dont hate my life"
 	end

	# Returns all copies
	get '/' do
		response['Access-Control-Allow-Origin'] = '*'
		content_type :json

		@copies = Copies.all
		@copies.to_json
	end

	# Returns a specific copy
	get '/:id' do
		response['Access-Control-Allow-Origin'] = '*'
		content_type :json

		id = params[:id]

		@copy = Copies.find(id)
		@copy.to_json
	end


	get '/docs/:id' do
		response['Access-Control-Allow-Origin'] = '*'
		content_type :json

		id = params[:id]
		# @document = CompletedDocument.find(id)
		
		# @document.to_json
		@copies = Copies.where(document_id: id)
		@copies.to_json
	end

	# We need to figure out a way to not use 'where'
	# so bitches cant drop our tables
	get '/parent/:id' do
		response['Access-Control-Allow-Origin'] = '*'
		content_type :json

		id = params[:id]

		@copies = Copies.where(parent_ID: id)
		@copies.to_json

	end


	post '/:id' do
		response['Access-Control-Allow-Origin'] = '*'
		id = params[:id]

		@copy = Copies.new
		@copy.copy_text = params[:copy_text]
		@copy.document_id = params[:document_id]
		@copy.parent_id = params[:parent_id]
		@copy.name = params[:name]
		@copy.save

		@copies = Copies.where(document_id: id)
		@copies.to_json

	end

	patch '/:id' do
		response['Access-Control-Allow-Origin'] = '*'
		id = params[:id]

		@copy = Copies.find(id)
		@copy.copy_text = params[:copy_text]
		@copy.save

		@copy.to_json

	end

end
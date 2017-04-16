class CopiesController < ApplicationController


	# Returns all copies
	get '/' do
		content_type :json

		@copies = Copies.all
		@copies.to_json
	end

	# Returns a specific copy
	get '/:id' do
		content_type :json

		id = params[:id]

		@copy = Copies.find(id)
		@copy.to_json
	end

	# We need to figure out a way to not use 'where'
	# so bitches cant drop our tables
	get '/parent/:id' do
		content_type :json

		id = params[:id]

		@copies = Copies.where(parent_ID: id)
		@copies.to_json

	end


	post '/' do

		@copy = Copies.new
		@copy.copy_text = params[:copy_text]
		@copy.document_id = params[:document_id]
		@copy.parent_id = params[:parent_id]
		@copy.name = params[:name]
		@copy.save

		@copy.to_json

	end



end
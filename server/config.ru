require 'sinatra/base'

require './controllers/ApplicationController'
require './controllers/CompletedDocumentController'
require './controllers/CopiesController'

require './models/CompletedDocumentModel'
require './models/CopiesModel'

map('/'){run ApplicationController}
map('/documents'){run CompletedDocumentController}
map('/copies'){run CopiesController}

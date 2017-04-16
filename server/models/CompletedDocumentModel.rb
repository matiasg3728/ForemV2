class CompletedDocument < ActiveRecord::Base
	has_many :copies
end
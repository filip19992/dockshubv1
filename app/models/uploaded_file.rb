# app/models/uploaded_file.rb

class UploadedFile
  include Mongoid::Document

  field :file_name, type: String
  field :file_data, type: BSON::Binary
end

class FileUploadsController < ApplicationController
    def new
      @uploaded_file = UploadedFile.new
    end
  
    def create
      @uploaded_file = UploadedFile.new(file_params)
  
      if @uploaded_file.save
        render json: { message: 'File uploaded successfully' }, status: :ok
      else
        render json: { error: 'Error uploading file' }, status: :bad_request
      end
    end

    def index
        @uploaded_files = UploadedFile.all
        render json: @uploaded_files
    end
  
    private
  
    def file_params
      if params[:file].present?
        {
          file_name: params[:file].original_filename,
          file_data: BSON::Binary.new(params[:file].read)
        }
      end
    end
  end
  
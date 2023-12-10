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

    def delete
      @uploaded_file = UploadedFile.where(file_name: /^#{params[:file_name]}/i).first
      if @uploaded_file
        @uploaded_file.destroy
        render json: { message: 'File deleted successfully' }, status: :ok
      else
        render json: { error: 'File not found' }, status: :not_found
      end
    end

    def index
        @uploaded_files = UploadedFile.all
        render json: @uploaded_files
    end

    def show
      @uploaded_file = UploadedFile.where(file_name: /^#{params[:id]}/i).first
      if @uploaded_file
        send_data @uploaded_file.file_data.data, type: 'application/octet-stream', disposition: 'inline', filename: @uploaded_file.file_name
      else
        render json: { error: 'File not found' }, status: :not_found
      end
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
  
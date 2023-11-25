class FileEntriesController < ApplicationController
    def new
      @file_entry = FileEntry.new
    end
  
    def create
        @file_entry = FileEntry.new(file_entry_params)
        if @file_entry.save
          render json: { message: 'File was successfully uploaded.' }
        else
          render json: { errors: @file_entry.errors.full_messages }, status: :unprocessable_entity
        end
      end
  
      def show
        @file_entry = FileEntry.find(params[:id])
        render json: @file_entry
      end
  
    private
  
    def file_entry_params
      params.require(:file_entry).permit(:title, :file)
    end
  end
  
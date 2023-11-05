class ApplicationController < ActionController::Base
    def hello
        render json: { message: 'Hello from Rails controller :)' }
    end
end

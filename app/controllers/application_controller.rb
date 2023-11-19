class ApplicationController < ActionController::Base
    def hello
        render json: { message: 'Hello from Rails controller :)' }
    end

    def save_test_model
        # Retrieve values from path parameters
        field1_value = params[:field1]
        field2_value = params[:field2]
    
        # Create an instance of TestModel
        test_instance = TestModel.new(field1: field1_value, field2: field2_value)
    
        # Save the instance
        if test_instance.save
          render json: { message: 'TestModel saved successfully', data: test_instance }
        else
          render json: { error: 'Failed to save TestModel', errors: test_instance.errors.full_messages }
        end
      end

      def test_models_by_field1
        # Retrieve the value for field1 from the query parameters
        field1_value = params[:field1]
    
        # Query TestModel instances where field1 equals the specified value
        test_models = TestModel.where(field1: field1_value)
    
        render json: { test_models: test_models }
      end
end

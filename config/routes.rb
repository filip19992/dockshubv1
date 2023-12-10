Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  resources :file_uploads, only: [:new, :create, :index, :show]
  root to: 'layouts#index'
  get '/api/hello', to: 'application#hello'
  get '/api/save/:field1/:field2', to: 'application#save_test_model'
  get '/api/get/:field1', to: 'application#test_models_by_field1'
  post '/api/upload', to: 'file_uploads#create'
  get '/api/file/get', to: 'file_uploads#index'

  # Defines the root path route ("/")
  # root "posts#index"
end

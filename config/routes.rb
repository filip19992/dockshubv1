Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  resources :file_uploads, only: [:new, :create, :index, :show]
  root to: 'layouts#index'
  delete 'api/file/delete/:filename', to: 'file_uploads#delete'
  post '/api/upload', to: 'file_uploads#create'
  get '/api/file/get', to: 'file_uploads#index'

  # Defines the root path route ("/")
  # root "posts#index"
end

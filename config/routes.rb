Rails.application.routes.draw do
  resources :file_uploads, only: [:new, :create, :index, :show]
  root to: 'layouts#index'
  delete 'api/file/delete/:filename', to: 'file_uploads#delete'
  post '/api/upload', to: 'file_uploads#create'
  get '/api/file/get', to: 'file_uploads#index'"
end

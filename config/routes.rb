Rails.application.routes.draw do
  resources :users
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify' to: 'authentication#verify'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

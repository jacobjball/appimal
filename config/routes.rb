Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :users, only: :update
  end

  namespace :api do
    resources :users do
      resources :dogs #only: [:update, :new, :delete]
    end

    resources :foods
    resources :toys
    resources :cats
    resources :dogs
  end
end

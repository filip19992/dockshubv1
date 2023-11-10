require_relative "boot"

# require "rails/all"
require "rails"
require "mongoid"
require "mongo"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Dockshubv1
  class Application < Rails::Application
    config.mongoid = Mongoid::Config
    config.mongoid.load!(Rails.root.join("config", "mongoid.yml"))

    # Skip unnecessary frameworks
    config.api_only = true
  end
end

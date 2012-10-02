require 'rack/offline'
require 'rack/coffee'
require './app'

require 'rack/coffee_compiler'

use Rack::CoffeeCompiler,
  :source_dir => 'app/coffee',
  :url => '/js',
  :alert_on_error => true

run App


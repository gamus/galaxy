require 'rubygems'
require 'sinatra'

set :root, File.dirname(__FILE__)

get '/' do
  send_file File.join(settings.root, 'public', 'index.html')
end

get '/about' do
  'author: alex.korsak@gmail.com'
end


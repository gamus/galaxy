require 'rubygems'
require 'sinatra'

set :root, File.dirname(__FILE__)
set :static, true

get '/about' do
  'author: alex.korsak@gmail.com'
end


require 'rubygems'
require 'sinatra/base'

module AppHelpers
  SOURCE_FOLDER = 'app/coffee'
  PATH = File.join(File.expand_path(File.dirname(__FILE__)), SOURCE_FOLDER)

  def javascript_include_tag(*sources)
    sources.map do |source|
      unless source.include?('*')
        script_template(source)
      else
        Dir[File.join(PATH, "#{source}.coffee")].map do |filename|
          script_template(filename)
        end
      end
    end.flatten.join
  end

  def script_template(filename)
    filename = "/#{filename}.coffee" unless filename.include?(".coffee")
    filename.gsub!(PATH, '')

    "<script type='text/javascript' src='/js#{filename}'></script>"
  end

  def stylesheet_include_tag(filename)
    "<link rel='stylesheet' type='text/css' href='/css/#{filename}.css'></link>"
  end
end

class App < Sinatra::Base
  helpers AppHelpers

  set :root, File.dirname(__FILE__) + '/app'
  set :public_folder, File.dirname(__FILE__) + '/public'

  get '/' do
    erb :index
  end
end


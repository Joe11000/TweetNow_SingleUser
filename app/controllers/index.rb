get '/' do
  # Look in app/views/index.erb
  erb :index
end


post '/send_tweet' do # :tweeter' do
  user = Twitter.user(params[:username])
  Twitter.update(params[:text])
end

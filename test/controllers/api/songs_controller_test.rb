require 'test_helper'

class Api::SongsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_songs_show_url
    assert_response :success
  end

end

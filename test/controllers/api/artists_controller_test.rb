require 'test_helper'

class Api::ArtistsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_artists_show_url
    assert_response :success
  end

end

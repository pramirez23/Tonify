require 'test_helper'

class Api::PlaylistsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_playlists_show_url
    assert_response :success
  end

end

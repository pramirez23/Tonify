# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
require 'resolv-replace'

User.destroy_all
Song.destroy_all
Album.destroy_all
Artist.destroy_all
Playlist.destroy_all
PlaylistSong.destroy_all

# LOOK UP HOW TO DELETE EXISTING MODELS IN DATABASE BEFORE RESEEDING ************************************
# Artist Seed
artist1 = Artist.create!(name: "Chance the Rapper")
artist1_portrait = URI.open('https://tonify-seeds.s3.amazonaws.com/Chance+The+Rapper/chance_profile.jpg')
artist1_banner = URI.open('https://tonify-seeds.s3.amazonaws.com/Chance+The+Rapper/chance_banner.jpg')
artist1.photos.attach(io: artist1_portrait, filename: 'chance_profile.jpg')
artist1.photos.attach(io: artist1_banner, filename: 'chance_banner.jpg')

artist2 = Artist.create!(name: "Ariana Grande")
artist2_portrait = URI.open('https://tonify-seeds.s3.amazonaws.com/Ariana+Grande/singer-songwriter-ariana-grande-performs-during-the-62nd-news-photo-1580092474.jpg')
artist2_banner = URI.open('https://tonify-seeds.s3.amazonaws.com/Ariana+Grande/ariana-grande-press-photo-by-dave-meyers-2018-billboard-1548-compressed.jpg')
artist2.photos.attach(io: artist2_portrait, filename: 'singer-songwriter-ariana-grande-performs-during-the-62nd-news-photo-1580092474.jpg')
artist2.photos.attach(io: artist2_banner, filename: 'ariana-grande-press-photo-by-dave-meyers-2018-billboard-1548-compressed.jpg')

artist3 = Artist.create!(name: "Jay Park")
artist3_portrait = URI.open('https://tonify-seeds.s3.amazonaws.com/Jay+Park/jay-park-2018-cr-Cynthia-Parkhurst-billboard-1548-compressed.jpg')
artist3_banner = URI.open('https://tonify-seeds.s3.amazonaws.com/Jay+Park/jay-park-2018-cr-Cynthia-Parkhurst-billboard-1548-compressed.jpg')
artist3.photos.attach(io: artist3_portrait, filename: 'jay-park-2018-cr-Cynthia-Parkhurst-billboard-1548-compressed.jpg')
artist3.photos.attach(io: artist3_banner, filename: 'jay-park-2018-cr-Cynthia-Parkhurst-billboard-1548-compressed.jpg')


# Album Seed
album1 = Album.create!(title: "Coloring Book", artist: artist1, year: 2016, single: false, genre: "Hip hop", duration: 3434)
album1_art = URI.open('https://tonify-seeds.s3.amazonaws.com/Chance+The+Rapper/Coloring_Book.jpg')
album1.cover_art.attach(io: album1_art, filename: 'Coloring_Book.jpg')

album2 = Album.create!(title: "positions", artist: artist2, year: 2020, single: false, genre: "Pop", duration: 2467)
album2_art = URI.open('https://tonify-seeds.s3.amazonaws.com/Ariana+Grande/Positions_%E2%80%93_Album_Cover.jpg')
album2.cover_art.attach(io: album2_art, filename: 'Positions_%E2%80%93_Album_Cover.jpg')

album3 = Album.create!(title: "Yacht", artist: artist3, year: 2017, single: true, genre: "Hip hop", duration: 246)
album3_art = URI.open('https://tonify-seeds.s3.amazonaws.com/Jay+Park/yacht.jpg')
album3.cover_art.attach(io: album3_art, filename: 'yacht.jpg')

# Song Seeds
# Chance the Rapper Songs
song1 = Song.create!(title: "All We Got (feat. Kanye West and Chicago Children's Choir)", track_num: 1, duration: 203, album_id: album1.id)
song2 = Song.create!(title: "No Problem (feat. Lil Wayne and 2 Chainz)", track_num: 2, duration: 305, album_id: album1.id)
song3 = Song.create!(title: "Summer Friends (feat. Jeremih and Francis and the Lights)", track_num: 3, duration: 290, album_id: album1.id)
song4 = Song.create!(title: "D.R.A.M. Sings Special", track_num: 4, duration: 101, album_id: album1.id)
song5 = Song.create!(title: "Blessings (feat. Jamila Woods)", track_num: 5, duration: 221, album_id: album1.id)
song6 = Song.create!(title: "Same Drugs", track_num: 6, duration: 257, album_id: album1.id)
song7 = Song.create!(title: "Mixtape (feat. Young Thug and Lil Yachty)", track_num: 7, duration: 292, album_id: album1.id)
song8 = Song.create!(title: "Angels (feat. Saba)", track_num: 8, duration: 206, album_id: album1.id)
song9 = Song.create!(title: "Juke Jam (feat. Justin Bieber and Towkio)", track_num: 9, duration: 219, album_id: album1.id)
song10 = Song.create!(title: "All Night (feat. Knox Fortune)", track_num: 10, duration: 141, album_id: album1.id)
song11 = Song.create!(title: "How Great (feat. Jay Electronica and my cousin Nicole)", track_num: 11, duration: 337, album_id: album1.id)
song12 = Song.create!(title: "Smoke Break (feat. Future)", track_num: 12, duration: 226, album_id: album1.id)
song13 = Song.create!(title: "Finish Line / Drown (feat. T-Pain, Kirk Franklin, Eryn Allen Kane and Noname)", track_num: 13, duration: 406, album_id: album1.id)
song14 = Song.create!(title: "Blessings (feat. Ty Dolla Sign, Raury, BJ the Chicago Kid and Anderson Paak)", track_num: 14, duration: 230, album_id: album1.id)

# Ariana Grande Songs
song15 = Song.create!(title:"34 + 35", track_num: 2, duration:173, album_id: album2.id)
song16 = Song.create!(title:"positions", track_num: 1, duration:172, album_id: album2.id)

# Jay Park Songs
song17 = Song.create!(title:"Yacht (K) (feat. Sik-K)", track_num: 1, duration: 246, album_id: album3.id)

# URI.Open Song URI
song1_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Chance+The+Rapper/Coloring+Book/01+-+All+We+Got+feat+Kanye+West+and+The+Chicago+Childrens+Choir.mp3') 
song2_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Chance+The+Rapper/Coloring+Book/02+-+No+Problem+feat+Lil+Wayne+and+2+Chainz.mp3') 
song3_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Chance+The+Rapper/Coloring+Book/03+-+Summer+Friends+feat+Jeremih+Francis+and+The+Lights.mp3') 
song4_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Chance+The+Rapper/Coloring+Book/04+-+DRAM+Sings+Special.mp3') 
song5_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Chance+The+Rapper/Coloring+Book/05+-+Blessings.mp3') 
song6_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Chance+The+Rapper/Coloring+Book/06+-+Same+Drugs.mp3') 
song7_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Chance+The+Rapper/Coloring+Book/07+-+Mixtape+feat+Young+Thug+and+Lil+Yachty.mp3') 
song8_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Chance+The+Rapper/Coloring+Book/08+-+Angels+feat+Saba.mp3') 
song9_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Chance+The+Rapper/Coloring+Book/09+-+Luke+Jam+feat+Justin+Bieber+and+Towkio.mp3') 
song10_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Chance+The+Rapper/Coloring+Book/10+-+All+Night+feat+Knox+Fortune.mp3') 
song11_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Chance+The+Rapper/Coloring+Book/11+-+How+Great+feat+Jay+Electronica+and+My+Cousin+Nicole.mp3') 
song12_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Chance+The+Rapper/Coloring+Book/12+-+Smoke+Break+feat+Future.mp3') 
song13_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Chance+The+Rapper/Coloring+Book/13+-+Finish+Line++Drown+feat+TPain+Kirk+Franklin+Eryn+Allen+Kane+and+No+Name.mp3') 
song14_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Chance+The+Rapper/Coloring+Book/14+-+Blessings+(Explicit+Version).mp3') 

song15_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Ariana+Grande/Ariana+Grande+-+34%2B35.mp3')
song16_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Ariana+Grande/Ariana+Grande+-+positions.mp3')

song17_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Jay+Park/Jay+Park+-+Yacht+(K)+(Feat.+Sik-K).mp3')

# Attach audio
song1.audio_file.attach(io: song1_audio, filename: '01+-+All+We+Got+feat+Kanye+West+and+The+Chicago+Childrens+Choir.mp3')
song2.audio_file.attach(io: song2_audio, filename: '02+-+No+Problem+feat+Lil+Wayne+and+2+Chainz.mp3')
song3.audio_file.attach(io: song3_audio, filename: '03+-+Summer+Friends+feat+Jeremih+Francis+and+The+Lights.mp3')
song4.audio_file.attach(io: song4_audio, filename: '04+-+DRAM+Sings+Special.mp3')
song5.audio_file.attach(io: song5_audio, filename: '05+-+Blessings.mp3')
song6.audio_file.attach(io: song6_audio, filename: '06+-+Same+Drugs.mp3')
song7.audio_file.attach(io: song7_audio, filename: '07+-+Mixtape+feat+Young+Thug+and+Lil+Yachty.mp3')
song8.audio_file.attach(io: song8_audio, filename: '08+-+Angels+feat+Saba.mp3')
song9.audio_file.attach(io: song9_audio, filename: '09+-+Luke+Jam+feat+Justin+Bieber+and+Towkio.mp3')
song10.audio_file.attach(io: song10_audio, filename: '10+-+All+Night+feat+Knox+Fortune.mp3')
song11.audio_file.attach(io: song11_audio, filename: '11+-+How+Great+feat+Jay+Electronica+and+My+Cousin+Nicole.mp3')
song12.audio_file.attach(io: song12_audio, filename: '12+-+Smoke+Break+feat+Future.mp3')
song13.audio_file.attach(io: song13_audio, filename: '13+-+Finish+Line++Drown+feat+TPain+Kirk+Franklin+Eryn+Allen+Kane+and+No+Name.mp3')
song14.audio_file.attach(io: song14_audio, filename: '14+-+Blessings+(Explicit+Version).mp3')

song15.audio_file.attach(io: song15_audio, filename: 'Ariana+Grande+-+34%2B35.mp3')
song16.audio_file.attach(io: song16_audio, filename: 'Ariana+Grande+-+positions.mp3')
song17.audio_file.attach(io: song17_audio, filename: 'Jay+Park+-+Yacht+(K)+(Feat.+Sik-K).mp3')

# User seed
user1 = User.create!(username: "Demo User", password: "demopassword123", email: "demoemail@demo.com", email_confirmation: "demoemail@demo.com", gender: "NB", birthday:"1997/12/23")

# Playlist seed

playlist1 = Playlist.create!(user_id: user1.id, name: "Shower Time!", description: "Songs to shower to...", private: "false")
playlist2 = Playlist.create!(user_id: user1.id, name: "Workout Jams", description: "GET PUMPED", private: "false")
playlist3 = Playlist.create!(user_id: user1.id, name: "Coding Beats", description: "Songs to listen to while debugging at 4AM", private: "false")

playlist_photo1 = URI.open('https://tonify-seeds.s3.amazonaws.com/default_playlist_image.png')
playlist_photo2 = URI.open('https://tonify-seeds.s3.amazonaws.com/default_playlist_image.png')
playlist_photo3 = URI.open('https://tonify-seeds.s3.amazonaws.com/default_playlist_image.png')

playlist1.photo.attach(io: playlist_photo1, filename: 'default_playlist_image.png')
playlist2.photo.attach(io: playlist_photo2, filename: 'default_playlist_image.png')
playlist3.photo.attach(io: playlist_photo3, filename: 'default_playlist_image.png')
# Playlist song seed (Add songs to playlist)
playlistSong1 = PlaylistSong.create!(playlist_id: playlist1.id, song_id: song10.id)
playlistSong2 = PlaylistSong.create!(playlist_id: playlist1.id, song_id: song1.id)
playlistSong3 = PlaylistSong.create!(playlist_id: playlist1.id, song_id: song2.id)
playlistSong4 = PlaylistSong.create!(playlist_id: playlist1.id, song_id: song8.id)
playlistSong5 = PlaylistSong.create!(playlist_id: playlist1.id, song_id: song4.id)
playlistSong6 = PlaylistSong.create!(playlist_id: playlist1.id, song_id: song5.id)
playlistSong7 = PlaylistSong.create!(playlist_id: playlist1.id, song_id: song9.id)
playlistSong8 = PlaylistSong.create!(playlist_id: playlist1.id, song_id: song12.id)
playlistSong9 = PlaylistSong.create!(playlist_id: playlist1.id, song_id: song11.id)
playlistSong10 = PlaylistSong.create!(playlist_id: playlist1.id, song_id: song16.id)
playlistSong11 = PlaylistSong.create!(playlist_id: playlist1.id, song_id: song15.id)
playlistSong12 = PlaylistSong.create!(playlist_id: playlist1.id, song_id: song4.id)

playlistSong13 = PlaylistSong.create!(playlist_id: playlist2.id, song_id: song17.id)
playlistSong14 = PlaylistSong.create!(playlist_id: playlist2.id, song_id: song16.id)
playlistSong15 = PlaylistSong.create!(playlist_id: playlist2.id, song_id: song15.id)
playlistSong16 = PlaylistSong.create!(playlist_id: playlist2.id, song_id: song7.id)
playlistSong17 = PlaylistSong.create!(playlist_id: playlist2.id, song_id: song3.id)
playlistSong18 = PlaylistSong.create!(playlist_id: playlist2.id, song_id: song9.id)

playlistSong19 = PlaylistSong.create!(playlist_id: playlist3.id, song_id: song2.id)
playlistSong20 = PlaylistSong.create!(playlist_id: playlist3.id, song_id: song6.id)
playlistSong21 = PlaylistSong.create!(playlist_id: playlist3.id, song_id: song7.id)
playlistSong22 = PlaylistSong.create!(playlist_id: playlist3.id, song_id: song15.id)
playlistSong23 = PlaylistSong.create!(playlist_id: playlist3.id, song_id: song12.id)
playlistSong24 = PlaylistSong.create!(playlist_id: playlist3.id, song_id: song17.id)


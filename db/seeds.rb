# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Album Seed
album1 = Album.create!(title: "Coloring Book", year: 2016, single: false, genre: "Hip hop", duration: 3434)
album1_art = open('https://tonify-dev.s3.amazonaws.com/albumart/Chance+the+Rapper/Coloring_Book.jpg')
album1.cover_art.attach(io: album1_art, filename: 'Coloring_Book.jpg')
# Artist Seed
artist1 = Artist.create!(name: "Chance the Rapper")

# Song Seed
song1 = Song.create!(title: "All We Got (feat. Kanye West and Chicago Children's Choir", track_num: 1, duration: 203, album_id: album1.id)
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

song1_audio = open('https://tonify-dev.s3.amazonaws.com/songs/Chance+The+Rapper/Coloring+Book/01+-+All+We+Got+feat+Kanye+West+and+The+Chicago+Childrens+Choir.mp3') 
song2_audio = open('ttps://tonify-dev.s3.amazonaws.com/songs/Chance+The+Rapper/Coloring+Book/02+-+No+Problem+feat+Lil+Wayne+and+2+Chainz.mp3') 
song3_audio = open('https://tonify-dev.s3.amazonaws.com/songs/Chance+The+Rapper/Coloring+Book/03+-+Summer+Friends+feat+Jeremih+Francis+and+The+Lights.mp3') 
song4_audio = open('https://tonify-dev.s3.amazonaws.com/songs/Chance+The+Rapper/Coloring+Book/04+-+DRAM+Sings+Special.mp3') 
song5_audio = open('https://tonify-dev.s3.amazonaws.com/songs/Chance+The+Rapper/Coloring+Book/05+-+Blessings.mp3') 
song6_audio = open('https://tonify-dev.s3.amazonaws.com/songs/Chance+The+Rapper/Coloring+Book/06+-+Same+Drugs.mp3') 
song7_audio = open('https://tonify-dev.s3.amazonaws.com/songs/Chance+The+Rapper/Coloring+Book/07+-+Mixtape+feat+Young+Thug+and+Lil+Yachty.mp3') 
song8_audio = open('https://tonify-dev.s3.amazonaws.com/songs/Chance+The+Rapper/Coloring+Book/08+-+Angels+feat+Saba.mp3') 
song9_audio = open('https://tonify-dev.s3.amazonaws.com/songs/Chance+The+Rapper/Coloring+Book/09+-+Luke+Jam+feat+Justin+Bieber+and+Towkio.mp3') 
song10_audio = open('https://tonify-dev.s3.amazonaws.com/songs/Chance+The+Rapper/Coloring+Book/10+-+All+Night+feat+Knox+Fortune.mp3') 
song11_audio = open('https://tonify-dev.s3.amazonaws.com/songs/Chance+The+Rapper/Coloring+Book/11+-+How+Great+feat+Jay+Electronica+and+My+Cousin+Nicole.mp3') 
song12_audio = open('https://tonify-dev.s3.amazonaws.com/songs/Chance+The+Rapper/Coloring+Book/12+-+Smoke+Break+feat+Future.mp3') 
song13_audio = open('https://tonify-dev.s3.amazonaws.com/songs/Chance+The+Rapper/Coloring+Book/13+-+Finish+Line++Drown+feat+TPain+Kirk+Franklin+Eryn+Allen+Kane+and+No+Name.mp3') 
song14_audio = open('https://tonify-dev.s3.amazonaws.com/songs/Chance+The+Rapper/Coloring+Book/14+-+Blessings+(Explicit+Version).mp3') 

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
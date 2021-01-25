# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Album Seed
album1 = Album.create!(title: "Coloring Book", year: 2016, single: false, genre: "Hip hop", duration: 3434)

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
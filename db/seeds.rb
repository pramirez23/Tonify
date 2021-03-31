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
Like.destroy_all

# LOOK UP HOW TO DELETE EXISTING MODELS IN DATABASE BEFORE RESEEDING ************************************
# Artist Seed
artist1 = Artist.create!(name: "Chance the Rapper", bio: "Despite his evasion of stylistic pigeonholing and no label affiliation -- not even a major-bankrolled vanity imprint -- Chance the Rapper became one of the most significant artists to infiltrate the mainstream during the 2010s. Through several mixtapes, his output underwent a rapid evolution as he celebrated life and faith, mourned personal loss, and hit upon lighter everyday experiences with high-aptitude wordplay served with a variety of mostly genial styles. All the while, the productions that supported the verses and hooks included various regional contemporary rap production styles, and among other genres synthesized elements of gospel, jazz, and soul. Previously unthinkable achievements, such as winning a Grammy Award for Best Rap Album with 2016\'s Coloring Book -- a mixtape available only on streaming platforms -- prompted headlines, yet they didn\'t overshadow the creative accomplishments that vaulted him onto the top tier.\n\nA native of Chicago\'s West Chatham neighborhood, Chancelor Bennett made his mixtape debut in April 2012 with 10 Day, a wide-ranging effort recorded during -- and partly inspired by -- a high-school suspension of the same duration. Featuring beats from\u{A0}Flying Lotus,\u{A0}Chuck Inglish, and Lex Luger, it was was preceded by advance notice from Complex and followed by praise from Forbes. One of Bennett\'s early supporters was\u{A0}Childish Gambino, who took him on as opener for a U.S. tour. Increasing popularity didn\'t prevent Bennett from visiting local schools, deepening a lasting humanitarian connection with his community. Second tape Acid Rap, Bennett\'s first release to register on Billboard\'s album charts, arrived in April 2013 and intensified efforts from major labels who wanted to sign the artist, only to be turned down. By the end of that year, Bennett had strengthened his commercial appeal with an appearance on\u{A0}Justin Bieber\'s \"Confident,\" a single that nearly reached the Top 40 on its way to a gold RIAA certification. Months later, XXL magazine selected Bennett for their 2014 Freshman list, a group that included fellow Chicagoans\u{A0}Vic Mensa\u{A0}and\u{A0}Lil Durk.\n\nFrom 2014 through the first four months of 2016, Bennett was heard primarily on collaborations with artists who included\u{A0}Madonna\u{A0}(\"Iconic\"),\u{A0}Action Bronson\u{A0}(\"Baby Blue\"),\u{A0}Snakehips\u{A0}(\"All My Friends\"), and\u{A0}Kanye West\u{A0}(\"Ultralight Beam\"). There was also extensive involvement in Surf, an album from\u{A0}Donnie Trumpet & the Social Experiment, and Free, a six-track mixtape co-billed with\u{A0}Lil B. The next proper release from Bennett, Coloring Book, arrived in May 2016. Enhanced by collaborators ranging from\u{A0}Ty Dolla $ign\u{A0}to\u{A0}Kirk Franklin, the full-length was well received by critics and listeners, and peaked at number eight on the Billboard 200. Bennett\'s 2016 output as a headliner and featured artist led to seven Grammy nominations. He took the award for Best New Artist, Coloring Book won Best Rap Album, and Best Rap Performance went to him,\u{A0}Lil Wayne, and\u{A0}2 Chainz\u{A0}for \"No Problem.\" During the first half of 2017, Bennett lengthened his discography of featured appearances through tracks by brother\u{A0}Taylor Bennett\u{A0}and\u{A0}Brian Fresco, as well as\u{A0}DJ Khaled, whose \"I\'m the One\" topped the Billboard Hot 100. In July 2018, Chance simultaneously released four singles, including \"I Might Need Security,\" and appeared on another\u{A0}Khaled\u{A0}hit, \"No Brainer,\" which quickly went Top Ten pop. The non-album single \"Groceries\" arrived in 2019, and the following year saw Bennett team up with\u{A0}Jeremih\u{A0}for the holiday offering \"Are You Live.\" ~ Andy Kellman\n")
artist1_portrait = URI.open('https://tonify-seeds.s3.amazonaws.com/Chance+The+Rapper/chance-portrait.jpeg')
artist1_banner = URI.open('https://tonify-seeds.s3.amazonaws.com/Chance+The+Rapper/chance_banner.jpg')
artist1_bio_photo = URI.open('https://tonify-seeds.s3.amazonaws.com/Chance+The+Rapper/chance-bio.jpeg')
artist1.photos.attach(io: artist1_portrait, filename: 'chance-portrait.jpeg')
artist1.photos.attach(io: artist1_banner, filename: 'chance_banner.jpg')
artist1.photos.attach(io: artist1_bio_photo, filename: 'chance-bio.jpeg')

artist2 = Artist.create!(name: "Ariana Grande", bio: "Ariana Grande is perhaps the quintessential pop star of the last half of the 2010s, capturing the era\'s spirit and style. Emerging in 2013 with the hit single \"The Way,\" Grande initially appeared to be the heir to the throne of Mariah Carey, due in part to her powerhouse vocals. With its Babyface production, her debut Yours Truly underscored her debt to \'90s R&B, but Grande quickly incorporated hip-hop and EDM into her music. \"Problem,\" a 2014 smash duet with Iggy Azalea, was the first indication of her development, an evolution underscored by the hits \"Bang Bang\" and \"Love Me Harder,\" which featured Jessie J & Nicki Minaj and the Weeknd, respectively. Grande maintained her popularity with 2016\'s Dangerous Woman, then really hit her stride with 2018\'s Sweetener and its swift sequel Thank U, Next, whose title track became her first number one pop hit. That achievement was quickly equaled by \"7 Rings,\" a glitzy anthem for the Instagram age that consolidated her stardom and artistry, as well as \"Positions,\" the lead single from 2020\'s R&B-heavy album of the same name.\n\nA native of Boca Raton, Florida, where she was born in 1993 to graphic designer Edward Butera and Joan Grande (the CEO of Hose-McCann Communications), Grande began singing and acting at an early age, appearing in local theater productions. In 2008, when she was 15 years old, she landed the role of Charlotte in the Broadway production of 13; her performance was well-received, winning a National Youth Theatre Association Award. Following an appearance in the 2010 Desmond Child-written musical Cuba Libre, Grande was cast as Cat Valentine in the Nickelodeon television program Victorious. The show ran until 2012, at which time Grande\'s Cat Valentine was spun off into a show called Sam & Cat, which also starred Jennette McCurdy of iCarly.\n\nAs she kept herself busy with television, Grande began to pursue a musical career. She frequently made appearances at sporting events and with symphonies, and she made her first appearances on record via the soundtracks to Victorious. In 2011, she released the single \"Put Your Hearts Up,\" which was cut during sessions for a teen-oriented pop album; she later disowned the single due to its kiddie feel. Grande felt much more comfortable with \"The Way,\" her 2013 single featuring Mac Miller. This signaled a mature direction and audiences responded, taking it to the Top Ten in the U.S., where it was eventually certified triple platinum. It was the first single from her 2013 debut, Yours Truly, which also featured hits in \"Baby I\" and \"Right There.\"\n\nAt the end of the year she released a seasonal EP called Christmas Kisses, but her real efforts went into the recording of her second album, My Everything. Preceded by the single \"Problem\" -- a song that featured a guest spot from Iggy Azalea, the \"it girl\" of the summer of 2014; it peaked at two on the U.S. charts and was certified double platinum -- the album featured a host of different producers, including Max Martin, Shellback, Ryan Tedder, and Benny Blanco. It was released at the end of August 2014, hitting number one on charts across the globe. Subsequent singles featured assists by  (\"Break Free\"), Jessie J and Nicki Minaj (\"Bang Bang\"), and the Weeknd (\"Love Me Harder\"). At one point in 2014, three of her songs were in the Billboard Top Ten at the same time, a feat matched only be Adele. By the time fifth single \"One Last Time\" charted in early 2015, My Everything had sold nearly 600,000 copies.\n\nAs that album\'s cycle wound down, Grande guest-starred on Ryan Murphy\'s campy slasher series Scream Queens and she also recorded another holiday EP, Christmas & Chill. In October 2015, Grande released the single \"Focus,\" which debuted at number seven on the Hot 100 and was certified platinum the following January. That February, she announced her third album, Dangerous Woman, and released the album\'s title track as a single in March. The song hit number eight on the Hot 100, making Grande the first artist to have the lead single from each of her first three albums debut in the Top Ten. Featuring collaborations with Macy Gray, Future, and Nicki Minaj, the album appeared in May 2016 and debuted at number two. It eventually went platinum, helped by a trio of Top Ten hits and a Grammy nomination for Best Pop Vocal Album. Grande began 2017 by duetting with John Legend on \"Beauty and the Beast,\" the title track for Disney\'s live-action remake of their 1991 animated classic. She then mounted her Dangerous Woman Tour, performing across North America and Europe during the first half of 2017.\n\nTragedy struck on May 22, 2017, when a suicide bomber attacked Grande\'s concert at the Manchester Arena in Manchester, England. Grande returned to performing on June 4, when she held a star-studded charity concert called One Love Manchester to aid the victims of the bombing. Following the show, she resumed the Dangerous Woman Tour, which concluded in Hong Kong that September.\n\nIn April 2018, Grande kicked off promotion for her fourth album, Sweetener, by issuing the single \"No Tears Left to Cry,\" which debuted at number three on the Hot 100. It was followed by \"God Is a Woman\" later that year. Upon its release in August 2018, Sweetener debuted at number one in both the U.S. and U.K.\n\nThree months after the release of Sweetener, Grande returned with the non-LP single \"Thank U, Next.\" Quickly becoming an internet sensation, \"Thank U, Next\" shot to number one throughout the world, as did Grande\'s next single, \"7 Rings.\" Both songs were featured on the full-length album Thank U, Next, which appeared in February 2019. Her fourth U.S. number one, the set also topped the charts in over a dozen countries, further buoyed by third single \"Break Up with Your Girlfriend, I\'m Bored.\" Mere months after the release of Thank U, Next, Grande moved on with a series of collaborations, including \"Monopoly\" with Victoria Monet, \"Boyfriend\" with Social House, and the Charlie\'s Angels reboot theme \"Don\'t Call Me Angel\" with Miley Cyrus and Lana Del Rey. Capping off the year, Grande was nominated for five Grammy Awards: Album of the Year and Best Pop Vocal Album for Thank U, Next, Record of the Year and Best Pop Solo Performance for \"7 Rings,\" and Best Pop Duo/Group Performance for \"Boyfriend.\"\n\nGrande had duets reach the top of the Billboard charts in early 2020 -- first it was \"Stuck with U\" with Justin Bieber, then it was \"Rain on Me\" with Lady Gaga -- before she launched her next album, Positions, with the release of its title track. The single reached number one just before the October 30 release of the album, which crowned the Billboard 200. ~ Stephen Thomas Erlewine, Rovi")
artist2_portrait = URI.open('https://tonify-seeds.s3.amazonaws.com/Ariana+Grande/singer-songwriter-ariana-grande-performs-during-the-62nd-news-photo-1580092474.jpg')
artist2_banner = URI.open('https://tonify-seeds.s3.amazonaws.com/Ariana+Grande/ariana-grande-press-photo-by-dave-meyers-2018-billboard-1548-compressed.jpg')
artist2_bio_photo = URI.open('https://tonify-seeds.s3.amazonaws.com/Ariana+Grande/ariana-bio.png')
artist2.photos.attach(io: artist2_portrait, filename: 'singer-songwriter-ariana-grande-performs-during-the-62nd-news-photo-1580092474.jpg')
artist2.photos.attach(io: artist2_banner, filename: 'ariana-grande-press-photo-by-dave-meyers-2018-billboard-1548-compressed.jpg')
artist2.photos.attach(io: artist2_bio_photo, filename: 'ariana-bio.png')

artist3 = Artist.create!(name: "Jay Park", bio: "A multi-platinum, Korean-American hip-hop and R&B artist Jay Park has become one of the key figures within Asian hip-hop scene. In 2013, Jay Park founded an independent hip-hop/urban label, AOMG, whose artists have topped all mainstream music charts in South Korea and Asia within two years, and founded another label H1GHR MUSIC in 2017 as well.\n\nJay Park has gained international recognition by becoming the first-ever Asian artist to be signed with JAY-Z\u{2019}s label, \u{2018}Roc Nation,\u{2019} moving beyond Asia to Europe and North America. Jay Park successfully wrapped his first world tour \u{2018}JAY PARK 2019 SEXY 4EVA WORLD TOUR\u{2019} which stretched 31 cities in 18 countries in total, proving his ever-growing influence as a global talent.")
artist3_portrait = URI.open('https://tonify-seeds.s3.amazonaws.com/Jay+Park/jay-park-profile.jpeg')
artist3_banner = URI.open('https://tonify-seeds.s3.amazonaws.com/Jay+Park/jay-park-banner.jpg')
artist3_bio_photo = URI.open('https://tonify-seeds.s3.amazonaws.com/Jay+Park/jay-park-bio.jpeg')
artist3.photos.attach(io: artist3_portrait, filename: 'jay-park-profile.jpeg')
artist3.photos.attach(io: artist3_banner, filename: 'jay-park-banner.jpg')
artist3.photos.attach(io: artist3_bio_photo, filename: 'jay-park-bio.jpeg')

artist4 = Artist.create!(name: "blink-182", bio: "One of the most prominent bands to emerge from the Southern California punk scene, blink-182 gained mainstream success in the early 2000s. Arriving in the wake of the pop-punk explosion set off by Green Day, blink-182 gained a large fan base with their hooky, high-energy songs. At a time when competition with teen pop and nu-metal was not unheard of, they broke through with their third album, 1999\'s Enema of the State, releasing a steady stream of hits, bolstered by humorous, tongue-in-cheek music videos that were popular in the waning days of MTV\'s musical programming. Though the pop-punk trend faded, blink-182 have remained chart favorites, scoring five Top Ten albums and two number one Billboard 200 hits, including 2016\'s California.\n\nBlink-182 formed in the suburbs of San Diego around guitarist/vocalist Tom Delonge, bassist/vocalist Mark Hoppus, and drummer Scott Raynor. Originally known as simply Blink, the band debuted in 1993 with the self-released EP Fly Swatter. After releasing the album Buddha in 1994, the trio signed to Grilled Cheese/Cargo and released Cheshire Cat the following year. The threat of a lawsuit from a similarly named Irish band forced them to change their name to blink-182, but that did not slow them down: the group earned a higher profile by touring the world with Pennywise and NOFX on the 1996-1997 Warped Tour, in addition to appearing on innumerable skate/surf/snowboarding videos.\n\nThe third blink-182 LP, Dude Ranch, was jointly released in 1997 by Cargo and MCA. Dude Ranch expanded the group\'s audience and went platinum by the end of 1998, due in part to the popularity of the infectious teen anthem \"Dammit (Growing Up).\" The group also officially signed with MCA, which released the band\'s fourth album, Enema of the State, in the summer of 1999. The album, produced by Jerry Finn (Green Day, Rancid), also welcomed a new member into the trio\'s ranks; Travis Barker, formerly with the Aquabats, settled in on drums after Raynor left midway through a 1998 U.S. tour. Enema was greeted with almost immediate success, and helped the band achieve the mainstream status of toilet-humored pop-punk kings that Dude Ranch had only hinted at. Driven by the commercially successful singles \"What\'s My Age Again?,\" \"All the Small Things,\" and \"Adam\'s Song,\" music videos for the three songs (whose clips included themes of streaking and boy band spoofs) were MTV smashes as well.\n\nAfter selling over four million copies of Enema of the State, the trio played on with the limited-edition release The Mark, Tom, and Travis Show (The Enema Strikes Back) in fall 2000. The album featured their radio hits in a live setting, intertwined with their quirky sense of humor as well as the new song \"Man Overboard.\" Take Off Your Pants and Jacket, issued in spring 2001, saw the band return to their SoCal punk roots and became their first number one album in the U.S. Maturity, of a sort, came with 2003\'s self-titled album, released on Geffen. Not only did the album sport a song (\"All of This\") that featured Robert Smith of the Cure, but \"I Miss You\" also topped the modern rock chart in 2005. In February of 2005, however, popular as ever and seemingly indestructible, blink-182 unexpectedly announced they would be going on an \"indefinite hiatus,\" supposedly to spend more time with their growing families. Asking fans for help in selecting tracks, the group issued Greatest Hits that November.\n\nThe bandmembers also continued with other projects. Barker -- who had previously released an album with Delonge as Boxcar Racer -- continued playing with the Transplants and running his clothing company, Famous Stars and Straps. His family was also spotlighted in the MTV reality show Meet the Barkers. Hoppus carried on with his Atticus fashion venture and began producing -- starting with Motion City Soundtrack\'s Commit This to Memory -- and hosting his own podcasts. He further began work with Barker in a new band, Plus 44. Delonge also continued work with his lifestyle clothing company, Macbeth, and formally announced his new project, Angels and Airwaves, that fall.\n\nWhile still on hiatus in 2008, the group endured a handful of personal setbacks including the death of longtime producer Jerry Finn, who suffered a brain hemorrhage and subsequent heart attack, eventually taken off life support and passing away that August. Then in September, both Barker and frequent collaborator DJ AM were seriously injured in a plane crash in which both pilots and two of Barker\'s associates died. It ultimately took 11 months for Barker to fully recover from his injuries and led to the drummer suffering from post-traumatic stress disorder. The crash prompted Hoppus and DeLonge to reconnect with the drummer in support of his recovery, and in 2009, blink-182 announced that they were reuniting, hitting the road with Weezer for their reunion tour. They went into the studio later that year and began laying down the groundwork for a new album, which would be plagued by delays until 2011, when they were eventually able to release their sixth studio album, Neighborhoods.\n\nDespite growing evidence of friction within the band, blink-182 toured throughout much of the rest of 2011, joining My Chemical Romance, Rancid, and Against Me! on the tenth annual Honda Civic Tour. A 20th anniversary tour found the group members appearing together again in 2012. Later that year, blink-182 parted with Interscope, a transition they marked with the release of their self-produced Dogs Eating Dogs EP.\n\nFollowing a string of sold-out dates in Los Angeles in 2013, as well as headlining appearances at the Reading and Leeds Festivals in August 2014, blink-182 began discussions concerning a follow-up to Neighborhoods. However, in January 2015, Hoppus and Barker were quoted in Rolling Stone saying that DeLonge had left the band and announcing the possibility that Alkaline Trio\'s Matt Skiba would fill in for the guitarist at future shows. DeLonge then quickly responded via Facebook that he had not quit blink-182, and that any decision for the band to move forward was made without him. In the end, Skiba officially joined blink-182 and the band entered the studio at the end of the year to begin recording new songs. The first taste from the new trio was \"Bored to Death,\" which was released in April 2016. Their seventh LP, California, was released that summer and debuted at number one, just before they embarked on a tour featuring All Time Low, A Day to Remember, and All-American Rejects. That same year, blink-182 also released the career-spanning vinyl anthology Box Set, which featured all six of the band\'s studio albums prior to California.\n\nThe group returned to the studio to begin recording a follow-up and, in the years between blink releases, tended to their other musical responsibilities. Skiba recorded another album with Alkaline Trio, while Barker added numerous collaborations to his ever-expanding resum\u{E9}, including work with Yungblud, Machine Gun Kelly, XXXTentacion, and others. Meanwhile, Hoppus debuted Simple Creatures, his side project with All Time Low\'s Alex Gaskarth, releasing a pair of EPs.\n\nIn 2019, blink-182 returned with their aptly titled ninth set (according to Barker and Hoppus), Nine. Despite a bright and colorful album cover, Nine featured dark lyrical content stemming from Hoppus\' struggles with depression. The LP included singles \"Blame It on My Youth\" and \"Happy Days.\" In 2020, the band returned with the single \"Quarantine.\" ~ John Bush & Corey Apar")
artist4_portrait = URI.open('https://tonify-seeds.s3.amazonaws.com/blink-182/blink-182-profile.jpeg')
artist4_banner = URI.open('https://tonify-seeds.s3.amazonaws.com/blink-182/blink-182-banner.jpeg')
artist4_bio_photo = URI.open('https://tonify-seeds.s3.amazonaws.com/blink-182/blink-182-bio.jpeg')
artist4.photos.attach(io: artist4_portrait, filename: 'blink-182-profile.jpeg')
artist4.photos.attach(io: artist4_banner, filename: 'blink-182-banner.jpeg')
artist4.photos.attach(io: artist4_bio_photo, filename: 'blink-182-bio.jpeg')

artist5 = Artist.create!(name: "Mac Miller", bio: "Coming on the scene with a throwback style that betrayed his years, Pittsburgh-based rapper and producer Mac Miller combined languid vocals, playful rhymes, and hypnotic production influenced by OutKast, Beastie Boys, A Tribe Called Quest, and Lauryn Hill. His debut full-length, Blue Slide Park, topped the charts upon release. Subsequent efforts kept him in the Top Five into 2016, when he hit another peak with The Divine Feminine, which topped the R&B and rap charts. Miller followed up with the Top Three-charting Swimming in 2018, but the rapper died a month after the album\'s release. Following his death, his albums crashed the Billboard 200 as mourning fans flocked to his early output. Miller\'s first posthumous album, Circles, was completed by producer Jon Brion and released in early 2020, peaking at number three on the U.S. charts.\n\nBorn Malcolm McCormick, Miller first used the alias Easy Mac, a name referenced on his debut mixtape, 2007\'s But My Mackin\' Ain\'t Easy. His KIDS mixtape became his breakthrough when it was released in August of 2010, earning plenty of attention from hip-hop blogs and landing Miller a recording contract with Rostrum Records.  released his debut EP, On and on and Beyond, and his debut album, Blue Slide Park, in 2011. The album debuted at number one on the Billboard 200. His seventh mixtape, Macadelic, arrived the next year, featuring appearances by Kendrick Lamar, Juicy J, Cam\'ron, Lil Wayne, and more (the set was later remastered for a spring 2018 release). The more experimental effort Watching Movies with the Sound Off followed in 2013, with left-field hip-hop names like Action Bronson, Earl Sweatshirt, and  Flying Lotus lending a hand. A year later he signed with Warner Bros. and launched his own imprint, REMember Music, under the major label.\n\nGO:OD AM followed in 2015 with Lil B, Chief Keef, and Miguel on the album\'s guest list. The single \"100 Grandkids\" peaked appropriately at number 100, while \"Weekend\" was certified gold. Just a year after GO:OD AM ascended to the Top Five of the Billboard 200 and rap charts, Miller returned with his fourth LP, The Divine Feminine. The album featured contributions from guests like Kendrick Lamar, Cee Lo Green, Ariana Grande, Robert Glasper, and Anderson.Paak, who lent his soulful rasp to first single \"Dang!\" A pair of non-album singles (\"Buttons\" and \"Programs\") kept Miller busy into 2018, when he issued his fifth album, Swimming. Debuting at number three on both the Billboard 200 and R&B/hip-hop charts, the set included the songs \"Small Worlds,\" \"Self-Care,\" and \"What\'s the Use?\" A month after the release of the effort, Miller died from a suspected drug overdose in his San Fernando Valley home. He was 26 years old. Following his death, seven of his albums posthumously charted on the Billboard 200, including the debut appearances of Best Day Ever and Macadelic. In early 2020, his first posthumous set was released. Intended as a companion to Swimming, Circles featured vocals recorded for this eventual project, which was completed by producer Jon Brion. The LP became Miller\'s fifth Top Three showing on the U.S. charts. Later that year, KIDS was released to streaming services for the first time, which helped place it back on the Billboard 200. ~ David Jeffries & Neil Z. Yeung, Rovi")
artist5_portrait = URI.open('https://tonify-seeds.s3.amazonaws.com/Mac+Miller/mac-miller-portrait.jpg')
artist5_banner = URI.open('https://tonify-seeds.s3.amazonaws.com/Mac+Miller/mac-miller-banner.jpeg')
artist5_bio_photo = URI.open('https://tonify-seeds.s3.amazonaws.com/Mac+Miller/mac-miller-bio.jpg')
artist5.photos.attach(io: artist5_portrait, filename: 'mac-miller-portrait.jpg')
artist5.photos.attach(io: artist5_banner, filename: 'mac-miller-banner.jpeg')
artist5.photos.attach(io: artist5_bio_photo, filename: 'mac-miller-bio.jpg')

# Album Seed
album1 = Album.create!(title: "Coloring Book", artist: artist1, year: 2016, single: false, genre: "Hip hop", duration: 3434)
album1_art = URI.open('https://tonify-seeds.s3.amazonaws.com/Chance+The+Rapper/Coloring_Book.jpg')
album1.cover_art.attach(io: album1_art, filename: 'Coloring_Book.jpg')

album2 = Album.create!(title: "positions", artist: artist2, year: 2020, single: false, genre: "Pop", duration: 2467)
album2_art = URI.open('https://tonify-seeds.s3.amazonaws.com/Ariana+Grande/Positions_%E2%80%93_Album_Cover.jpg')
album2.cover_art.attach(io: album2_art, filename: 'Positions_%E2%80%93_Album_Cover.jpg')

album3 = Album.create!(title: "Stuck with U", artist: artist2, year: 2020, single: true, genre: "Pop", duration: 228)
album3_art = URI.open('https://tonify-seeds.s3.amazonaws.com/Ariana+Grande/Justin_Bieber_and_Ariana_Grande_-_Stuck_with_You.png')
album3.cover_art.attach(io: album3_art, filename: 'Justin_Bieber_and_Ariana_Grande_-_Stuck_with_You.png')

album4 = Album.create!(title: "Yacht", artist: artist3, year: 2017, single: true, genre: "Pop", duration: 246)
album4_art = URI.open('https://tonify-seeds.s3.amazonaws.com/Jay+Park/yacht.jpg')
album4.cover_art.attach(io: album4_art, filename: 'yacht.jpg')

album5 = Album.create!(title: "Joah", artist: artist3, year: 2013, single: true, genre: "Pop", duration: 230)
album5_art = URI.open('https://tonify-seeds.s3.amazonaws.com/Jay+Park/Jay_Park_-_Joah.png')
album5.cover_art.attach(io: album5_art, filename: '/Jay_Park_-_Joah.png')

album6 = Album.create!(title: "blink-182", artist: artist4, year: 2003, single: false, genre: "Rock", duration: 2956)
album6_art = URI.open('https://tonify-seeds.s3.amazonaws.com/album_art/blink-182/blink-182-album-art.jpeg')
album6.cover_art.attach(io: album6_art, filename: 'blink-182-album-art.jpeg')

album7 = Album.create!(title: "K.I.D.S.", artist: artist5, year: 2010, single: false, genre: "Hip hop", duration: 3014)
album7_art = URI.open('https://tonify-seeds.s3.amazonaws.com/Mac+Miller/00+-+Mac_Miller_Kids-front-large.jpg')
album7.cover_art.attach(io: album7_art, filename: '00+-+Mac_Miller_Kids-front-large.jpg')

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
song15 = Song.create!(title:"34 + 35", track_num: 2, duration: 173, album_id: album2.id)
song16 = Song.create!(title:"positions", track_num: 1, duration: 172, album_id: album2.id)
song17 = Song.create!(title:"Stuck with U (with Justin Bieber)", track_num: 1, duration: 228, album_id: album3.id)

# Jay Park Songs
song18 = Song.create!(title:"Yacht (K) (feat. Sik-K)", track_num: 1, duration: 246, album_id: album4.id)
song19 = Song.create!(title:"Joah", track_num: 1, duration: 230, album_id: album5.id)

# blink-182 Songs
song20 = Song.create!(title: "Feeling This", track_num: 1, duration: 173, album_id: album6.id)
song21 = Song.create!(title: "Obvious", track_num: 2, duration: 163, album_id: album6.id)
song22 = Song.create!(title: "I Miss You", track_num: 3, duration: 227, album_id: album6.id)
song23 = Song.create!(title: "Violence", track_num: 4, duration: 320, album_id: album6.id)
song24 = Song.create!(title: "Stockholm Syndrome", track_num: 5, duration: 162, album_id: album6.id)
song25 = Song.create!(title: "Down", track_num: 6, duration: 183, album_id: album6.id)
song26 = Song.create!(title: "The Fallen Interlude", track_num: 7, duration: 133, album_id: album6.id)
song27 = Song.create!(title: "Go", track_num: 8, duration: 113, album_id: album6.id)
song28 = Song.create!(title: "Asthenia", track_num: 9, duration: 260, album_id: album6.id)
song29 = Song.create!(title: "Always", track_num: 10, duration: 252, album_id: album6.id)
song30 = Song.create!(title: "Easy Target", track_num: 11, duration: 140, album_id: album6.id)
song31 = Song.create!(title: "All of This", track_num: 12, duration: 280, album_id: album6.id)
song32 = Song.create!(title: "Here's Your Letter", track_num: 13, duration: 175, album_id: album6.id)
song33 = Song.create!(title: "I'm Lost Without You", track_num: 14, duration: 382, album_id: album6.id)

# Mac Miller Songs
song34 = Song.create!(title: "Kickin' Incredibly Dope Shit (Intro)", track_num: 1, duration: 225, album_id: album7.id)
song35 = Song.create!(title: "Outside", track_num: 2, duration: 217, album_id: album7.id)
song36 = Song.create!(title: "Get Em Up", track_num: 3, duration: 198, album_id: album7.id)
song37 = Song.create!(title: "Nikes on My Feet", track_num: 4, duration: 164, album_id: album7.id)
song38 = Song.create!(title: "Senior Skip Day", track_num: 5, duration: 176, album_id: album7.id)
song39 = Song.create!(title: "The Spins", track_num: 6, duration: 196, album_id: album7.id)
song40 = Song.create!(title: "Traffic in the Sky", track_num: 7, duration: 153, album_id: album7.id)
song41 = Song.create!(title: "Don't Mind If I Do", track_num: 8, duration: 138, album_id: album7.id)
song42 = Song.create!(title: "Paper Route (featuring Chevy Woods)", track_num: 9, duration: 180, album_id: album7.id)
song43 = Song.create!(title: "Good Evening", track_num: 10, duration: 235, album_id: album7.id)
song44 = Song.create!(title: "Ride Around", track_num: 11, duration: 144, album_id: album7.id)
song45 = Song.create!(title: "Knock Knock", track_num: 12, duration: 198, album_id: album7.id)
song46 = Song.create!(title: "Mad Flava, Heavy Flow (Interlude) (featuring DJ Bonics)", track_num: 13, duration: 27, album_id: album7.id)
song47 = Song.create!(title: "Kool Aid & Frozen Pizza", track_num: 14, duration: 158, album_id: album7.id)
song48 = Song.create!(title: "All I Want Is You", track_num: 15, duration: 223, album_id: album7.id)
song49 = Song.create!(title: "Poppy", track_num: 16, duration: 173, album_id: album7.id)
song50 = Song.create!(title: "Face in the Crowd", track_num: 17, duration: 209, album_id: album7.id)

# URI.Open Song URI
# Chance the Rapper Songs
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

# Ariana Grande Songs
song15_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Ariana+Grande/Ariana+Grande+-+34%2B35.mp3')
song16_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Ariana+Grande/Ariana+Grande+-+positions.mp3')
song17_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Ariana+Grande/Ariana+Grande%2C+Justin+Bieber+-+Stuck+With+U+(Lyrics).mp3')

# Jay Park Songs
song18_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Jay+Park/Jay+Park+-+Yacht+(K)+(Feat.+Sik-K).mp3') 
song19_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Jay+Park/%EC%A2%8B%EC%95%84+Joah+(Remastered).mp3') 

# blink-182 Songs
song20_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/blink-182/2003+-+Blink-182/01+-+Feeling+This.mp3') 
song21_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/blink-182/2003+-+Blink-182/02+-+Obvious.mp3') 
song22_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/blink-182/2003+-+Blink-182/03+-+I+Miss+You.mp3') 
song23_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/blink-182/2003+-+Blink-182/04+-+Violence.mp3') 
song24_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/blink-182/2003+-+Blink-182/05+-+Stockholm+Syndrome.mp3') 
song25_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/blink-182/2003+-+Blink-182/06+-+Down.mp3') 
song26_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/blink-182/2003+-+Blink-182/07+-+The+Fallen+Interlude.mp3') 
song27_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/blink-182/2003+-+Blink-182/08+-+Go.mp3') 
song28_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/blink-182/2003+-+Blink-182/09+-+Asthenia.mp3') 
song29_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/blink-182/2003+-+Blink-182/10+-+Always.mp3') 
song30_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/blink-182/2003+-+Blink-182/11+-+Easy+Target.mp3') 
song31_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/blink-182/2003+-+Blink-182/12+-+All+Of+This.mp3') 
song32_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/blink-182/2003+-+Blink-182/13+-+Heres+Your+Letter.mp3')
song33_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/blink-182/2003+-+Blink-182/14+-+Im+Lost+Without+You.mp3')

# Mac Miller Songs
song34_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Mac+Miller/Mac+Miller+-+KIDS+(DatPiff.com)/01+-+Kickin+Incredibly+Dope+Shit+(Intro)+(DatPiff+Exclusive).mp3')
song35_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Mac+Miller/Mac+Miller+-+KIDS+(DatPiff.com)/02+-+Outside+(DatPiff+Exclusive).mp3')
song36_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Mac+Miller/Mac+Miller+-+KIDS+(DatPiff.com)/03+-+Get+Em+Up+(DatPiff+Exclusive).mp3')
song37_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Mac+Miller/Mac+Miller+-+KIDS+(DatPiff.com)/04+-+Nikes+On+My+Feet+(DatPiff+Exclusive).mp3')
song38_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Mac+Miller/Mac+Miller+-+KIDS+(DatPiff.com)/05+-+Senior+Skip+Day+(DatPiff+Exclusive).mp3')
song39_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Mac+Miller/Mac+Miller+-+KIDS+(DatPiff.com)/06+-+The+Spins+(DatPiff+Exclusive).mp3')
song40_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Mac+Miller/Mac+Miller+-+KIDS+(DatPiff.com)/07+-+Traffic+In+The+Sky+(DatPiff+Exclusive).mp3')
song41_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Mac+Miller/Mac+Miller+-+KIDS+(DatPiff.com)/08+-+Dont+Mind+If+I+Do+(DatPiff+Exclusive).mp3')
song42_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Mac+Miller/Mac+Miller+-+KIDS+(DatPiff.com)/09+-+Paper+Route+feat+Chevy+Woods+(DatPiff+Exclusive).mp3')
song43_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Mac+Miller/Mac+Miller+-+KIDS+(DatPiff.com)/10+-+Good+Evening+(DatPiff+Exclusive).mp3')
song44_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Mac+Miller/Mac+Miller+-+KIDS+(DatPiff.com)/11+-+Ride+Around+(DatPiff+Exclusive).mp3')
song45_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Mac+Miller/Mac+Miller+-+KIDS+(DatPiff.com)/12+-+Knock+Knock+(DatPiff+Exclusive).mp3')
song46_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Mac+Miller/Mac+Miller+-+KIDS+(DatPiff.com)/13+-+Mad+Flava+Heavy+Flow+(Interlude)+feat+DJ+Bonics+(DatPiff+Exclusive).mp3')
song47_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Mac+Miller/Mac+Miller+-+KIDS+(DatPiff.com)/14+-+Kool+Aid+%26+Frozen+Pizza+(DatPiff+Exclusive).mp3')
song48_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Mac+Miller/Mac+Miller+-+KIDS+(DatPiff.com)/15+-+All+I+Want+Is+You+(DatPiff+Exclusive).mp3')
song49_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Mac+Miller/Mac+Miller+-+KIDS+(DatPiff.com)/16+-+Poppy+(DatPiff+Exclusive).mp3')
song50_audio = URI.open('https://tonify-seeds.s3.amazonaws.com/Mac+Miller/Mac+Miller+-+KIDS+(DatPiff.com)/17+-+Face+In+The+Crowd+(DatPiff+Exclusive).mp3')

# Attach audio
# Chance the Rapper Songs
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

# Ariana Grande Songs
song15.audio_file.attach(io: song15_audio, filename: 'Ariana+Grande+-+34%2B35.mp3')
song16.audio_file.attach(io: song16_audio, filename: 'Ariana+Grande+-+positions.mp3')
song17.audio_file.attach(io: song17_audio, filename: 'Ariana+Grande%2C+Justin+Bieber+-+Stuck+With+U+(Lyrics).mp3')

# Jay Park Songs
song18.audio_file.attach(io: song18_audio, filename: 'Jay+Park+-+Yacht+(K)+(Feat.+Sik-K).mp3')
song19.audio_file.attach(io: song19_audio, filename: '%EC%A2%8B%EC%95%84+Joah+(Remastered).mp3')

# blink-182 Songs
song20.audio_file.attach(io: song20_audio, filename: '01+-+Feeling+This.mp3')
song21.audio_file.attach(io: song21_audio, filename: '02+-+Obvious.mp3')
song22.audio_file.attach(io: song22_audio, filename: '03+-+I+Miss+You.mp3')
song23.audio_file.attach(io: song23_audio, filename: '04+-+Violence.mp3')
song24.audio_file.attach(io: song24_audio, filename: '05+-+Stockholm+Syndrome.mp3')
song25.audio_file.attach(io: song25_audio, filename: '06+-+Down.mp3')
song26.audio_file.attach(io: song26_audio, filename: '07+-+The+Fallen+Interlude.mp3')
song27.audio_file.attach(io: song27_audio, filename: '08+-+Go.mp3')
song28.audio_file.attach(io: song28_audio, filename: '09+-+Asthenia.mp3')
song29.audio_file.attach(io: song29_audio, filename: '10+-+Always.mp3')
song30.audio_file.attach(io: song30_audio, filename: '11+-+Easy+Target.mp3')
song31.audio_file.attach(io: song31_audio, filename: '12+-+All+Of+This.mp3')
song32.audio_file.attach(io: song32_audio, filename: '13+-+Heres+Your+Letter.mp3')
song33.audio_file.attach(io: song33_audio, filename: '14+-+Im+Lost+Without+You.mp3')

# Mac Miller Songs
song34.audio_file.attach(io: song34_audio, filename: '01+-+Kickin+Incredibly+Dope+Shit+(Intro)+(DatPiff+Exclusive).mp3')
song35.audio_file.attach(io: song35_audio, filename: '02+-+Outside+(DatPiff+Exclusive).mp3')
song36.audio_file.attach(io: song36_audio, filename: '03+-+Get+Em+Up+(DatPiff+Exclusive).mp3')
song37.audio_file.attach(io: song37_audio, filename: '04+-+Nikes+On+My+Feet+(DatPiff+Exclusive).mp3')
song38.audio_file.attach(io: song38_audio, filename: '05+-+Senior+Skip+Day+(DatPiff+Exclusive).mp3')
song39.audio_file.attach(io: song39_audio, filename: '06+-+The+Spins+(DatPiff+Exclusive).mp3')
song40.audio_file.attach(io: song40_audio, filename: '07+-+Traffic+In+The+Sky+(DatPiff+Exclusive).mp3')
song41.audio_file.attach(io: song41_audio, filename: '08+-+Dont+Mind+If+I+Do+(DatPiff+Exclusive).mp3')
song42.audio_file.attach(io: song42_audio, filename: '09+-+Paper+Route+feat+Chevy+Woods+(DatPiff+Exclusive).mp3')
song43.audio_file.attach(io: song43_audio, filename: '10+-+Good+Evening+(DatPiff+Exclusive).mp3')
song44.audio_file.attach(io: song44_audio, filename: '11+-+Ride+Around+(DatPiff+Exclusive).mp3')
song45.audio_file.attach(io: song45_audio, filename: '12+-+Knock+Knock+(DatPiff+Exclusive).mp3')
song46.audio_file.attach(io: song46_audio, filename: '13+-+Mad+Flava+Heavy+Flow+(Interlude)+feat+DJ+Bonics+(DatPiff+Exclusive).mp3')
song47.audio_file.attach(io: song47_audio, filename: '14+-+Kool+Aid+%26+Frozen+Pizza+(DatPiff+Exclusive).mp3')
song48.audio_file.attach(io: song48_audio, filename: '15+-+All+I+Want+Is+You+(DatPiff+Exclusive).mp3')
song49.audio_file.attach(io: song49_audio, filename: '16+-+Poppy+(DatPiff+Exclusive).mp3')
song50.audio_file.attach(io: song50_audio, filename: '17+-+Face+In+The+Crowd+(DatPiff+Exclusive).mp3')

# User seed
user1 = User.create!(username: "Demo User", password: "demopassword123", email: "demoemail@demo.com", email_confirmation: "demoemail@demo.com", gender: "NB", birthday:"1997/12/23")
user2 = User.create!(username: "Paul Ramirez", password: "Maxmanmaxman1!", email: "pramirez7230@bths.edu", email_confirmation: "pramirez7230@bths.edu", gender: "M", birthday:"1997/12/23")

# Playlist seed
playlist1 = Playlist.create!(user_id: user1.id, name: "Shower Time!", description: "Songs to shower to...", private: "false")
playlist2 = Playlist.create!(user_id: user1.id, name: "Workout Jams", description: "GET PUMPED", private: "false")
playlist3 = Playlist.create!(user_id: user2.id, name: "Coding Beats", description: "Songs to listen to while debugging at 4AM", private: "false")

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
playlistSong5 = PlaylistSong.create!(playlist_id: playlist1.id, song_id: song22.id)
playlistSong6 = PlaylistSong.create!(playlist_id: playlist1.id, song_id: song44.id)
playlistSong7 = PlaylistSong.create!(playlist_id: playlist1.id, song_id: song9.id)
playlistSong8 = PlaylistSong.create!(playlist_id: playlist1.id, song_id: song12.id)
playlistSong9 = PlaylistSong.create!(playlist_id: playlist1.id, song_id: song45.id)
playlistSong10 = PlaylistSong.create!(playlist_id: playlist1.id, song_id: song16.id)
playlistSong11 = PlaylistSong.create!(playlist_id: playlist1.id, song_id: song15.id)
playlistSong12 = PlaylistSong.create!(playlist_id: playlist1.id, song_id: song4.id)

playlistSong13 = PlaylistSong.create!(playlist_id: playlist2.id, song_id: song17.id)
playlistSong14 = PlaylistSong.create!(playlist_id: playlist2.id, song_id: song16.id)
playlistSong15 = PlaylistSong.create!(playlist_id: playlist2.id, song_id: song15.id)
playlistSong16 = PlaylistSong.create!(playlist_id: playlist2.id, song_id: song7.id)
playlistSong17 = PlaylistSong.create!(playlist_id: playlist2.id, song_id: song3.id)
playlistSong18 = PlaylistSong.create!(playlist_id: playlist2.id, song_id: song9.id)
playlistSong18 = PlaylistSong.create!(playlist_id: playlist2.id, song_id: song25.id)
playlistSong18 = PlaylistSong.create!(playlist_id: playlist2.id, song_id: song29.id)
playlistSong18 = PlaylistSong.create!(playlist_id: playlist2.id, song_id: song19.id)
playlistSong18 = PlaylistSong.create!(playlist_id: playlist2.id, song_id: song18.id)
playlistSong18 = PlaylistSong.create!(playlist_id: playlist2.id, song_id: song50.id)
playlistSong18 = PlaylistSong.create!(playlist_id: playlist2.id, song_id: song9.id)

playlistSong19 = PlaylistSong.create!(playlist_id: playlist3.id, song_id: song2.id)
playlistSong20 = PlaylistSong.create!(playlist_id: playlist3.id, song_id: song6.id)
playlistSong21 = PlaylistSong.create!(playlist_id: playlist3.id, song_id: song7.id)
playlistSong22 = PlaylistSong.create!(playlist_id: playlist3.id, song_id: song15.id)
playlistSong23 = PlaylistSong.create!(playlist_id: playlist3.id, song_id: song12.id)
playlistSong24 = PlaylistSong.create!(playlist_id: playlist3.id, song_id: song17.id)
playlistSong24 = PlaylistSong.create!(playlist_id: playlist3.id, song_id: song20.id)
playlistSong24 = PlaylistSong.create!(playlist_id: playlist3.id, song_id: song47.id)
playlistSong24 = PlaylistSong.create!(playlist_id: playlist3.id, song_id: song30.id)
playlistSong24 = PlaylistSong.create!(playlist_id: playlist3.id, song_id: song39.id)
playlistSong24 = PlaylistSong.create!(playlist_id: playlist3.id, song_id: song21.id)

# Demo User Likes
Like.create!(user_id: user1.id, likable_id: playlist1.id, likable_type: "Playlist")
Like.create!(user_id: user1.id, likable_id: playlist2.id, likable_type: "Playlist")
Like.create!(user_id: user1.id, likable_id: playlist3.id, likable_type: "Playlist")
Like.create!(user_id: user2.id, likable_id: playlist3.id, likable_type: "Playlist")

Like.create!(user_id: user1.id, likable_id: artist1.id, likable_type: "Artist")
Like.create!(user_id: user1.id, likable_id: artist2.id, likable_type: "Artist")
Like.create!(user_id: user1.id, likable_id: artist3.id, likable_type: "Artist")
Like.create!(user_id: user1.id, likable_id: artist4.id, likable_type: "Artist")
Like.create!(user_id: user1.id, likable_id: artist5.id, likable_type: "Artist")

Like.create!(user_id: user1.id, likable_id: album6.id, likable_type: "Album")
Like.create!(user_id: user1.id, likable_id: album7.id, likable_type: "Album")
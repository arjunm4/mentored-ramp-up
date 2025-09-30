// Album data
const albumData = {
    beatopia: {
        title: "Beatopia",
        artist: "beabadoobee",
        year: "2022",
        genre: "Indie Rock",
        trackCount: 14,
        thoughts: "My favorite Beababoobee project. The guitar throughout the album is soo good, such a unique sound that I really don't find in a lot of other places. Lyrics are super down to earth and relatable, while still carrying so much emotional weight. Her voice is so sweet and makes everything hit so so so much harder. Favorite songs on the album are 10:36, Don't get the deal, and Sunny Day. 9/10.",
        tracks: [
            "Beatopia Cultsong",
            "10:36",
            "Sunny Day",
            "See you Soon",
            "Ripples",
            "the perfect pair",
            "broken cd",
            "Talk",
            "Lovesong",
            "Pictures of Us",
            "fairy song",
            "Don't Get the Deal",
            "Tinkerbell is Overrated",
            "You're Here That's the Thing"
        ]
    },
    bewitched: {
        title: "Bewitched",
        artist: "Laufey",
        year: "2023",
        genre: "Jazz Pop",
        trackCount: 14,
        thoughts: "Laufey will always have such a special place in my heart for her ability to bring classic jazz sounds into the mainstream, and it's clear she's mastered that ability in her second studio album. Her ability to speak to the soul is truly remarkable and keeps me coming back to her music. Her range is also on full display in this album. With everyting from slow ballads in songs like Misty, to full on grand symphonies in Lovesick, Laufey shows us why she's one of the best artists to come out of the last 5 years. Favorite songs are Dreamer, Promise, and Letter To My 13 Year Old Self. 8/10.",
        tracks: [
            "Dreamer",
            "Second Best",
            "Haunted",
            "Must Be Love",
            "While You Were Sleeping",
            "Lovesick",
            "Valentine",
            "Like the Movies",
            "Misty",
            "Let You Break My Heart Again",
            "I Wish You Love",
            "California and Me",
            "From the Start",
            "Letter to My 13 Year Old Self"
        ]
    },
    born_to_die: {
        title: "Born to Die",
        artist: "Lana Del Rey",
        year: "2012",
        genre: "Dream Pop",
        trackCount: 12,
        thoughts: "A near-perfect epic. This album is so grand and hypontizing and exactly the type of sound that has made Lana so dominant for over a decade. No song encapsulates this feeling better than the title track, which sounds so cinematic it feels like you're watching a movie through the song. This album is what made me realize how talented of an artist she is. Her voice is also on full display on this album. One of the most recognizable tones in recent memory, and for good reason. It's completely hypnotizing. Favorite songs are Diet Mountain Dew, Dark Paradise, and Radio. 9/10.",
        tracks: [
            "Born to Die",
            "Off to the Races",
            "Blue Jeans",
            "Video Games",
            "Diet Mountain Dew",
            "National Anthem",
            "Dark Paradise",
            "Radio",
            "Carmen",
            "Million Dollar Man",
            "Summertime Sadness",
            "This Is What Makes Us Girls"
        ]
    },
    certified_lover_boy: {
        title: "Certified Lover Boy",
        artist: "Drake",
        year: "2021",
        genre: "Hip-Hop",
        trackCount: 21,
        thoughts: "My hottest take is that this is a top 3 Drake album. If it had a better cover it would be hailed as a modern classic. Drake does what Drake does best on this project. A lot of you guys are hearing him, but you're not listening. Some of my favorite Drake lines ever show up on this thing: 'Angel eyes but you been giving me hell all night', 'They tried to give me a slice of the pie and I took the knife home.' Just so goated. 10/10 perfect project. Favorite songs are Pipe Down, Get Along Better, The Remorse. Drizzy the goat. 10/10.",
        tracks: [
            "Champagne Poetry",
            "Papi's Home",
            "Girls Want Girls",
            "In The Bible",
            "Love All",
            "Fair Trade",
            "Way 2 Sexy",
            "TSU",
            "N 2 Deep",
            "Pipe Down",
            "Yebba's Heartbreak",
            "No Friends in the Industry",
            "Knife Talk",
            "7AM on the Bridle Path",
            "Race My Mind",
            "Fountains",
            "Get Along Better",
            "You Only Live Twice",
            "IMY2",
            "Love You Better",
            "The Remorse"
        ]
    },
    charm: {
        title: "Charm",
        artist: "Clairo",
        year: "2024",
        genre: "Indie",
        trackCount: 11,
        thoughts: "Enchanting is the best way to describe this album. Clairo puts a spell on you as soon as Nomad starts playing and that spell isn't lifted until the album is finished. I've always loved Clairo's voice and thought her music was great, but this was the album that really made me appreciate her as an artist. With fantastic lyrics, and mystifying delivery, Charm is firmly one of my favorite releases of last year. Favorite songs are Terrapin, Slow Dance, and Second Nature. 8.5/10.",
        tracks: [
            "Nomad",
            "Sexy to Someone",
            "Second Nature",
            "Slow Dance",
            "Thank You",
            "Terrapin",
            "Juna",
            "Add Up My Love",
            "Echo",
            "Glory of the Snow",
            "Pier 4"
        ]
    },
    die_lit: {
        title: "Die Lit",
        artist: "Playboi Carti",
        year: "2018",
        genre: "Trap",
        trackCount: 19,
        thoughts: "The album with my favorite song of all time on it. A genuine masterpiece in every sense of the word. I could write (and I have) an entire essay about Long Time by itself, but combined with the rest of the album, it somehow becomes even better. Carti has reinvented himself in every major release since his first, and has continued to prove himself one of the most innovative, influential, and generational artists of this new era of trap music. Just such a unique sound and atmosphere, his influence is just undeniable. Favorite songs are Long Time, Flatbed Freestyle, and Shoota. 9/10.",
        tracks: [
            "Long Time (Intro)",
            "R.I.P.",
            "Lean 4 Real",
            "Old Money",
            "Love Hurts",
            "Shoota",
            "Right Now",
            "Poke It Out",
            "Home (KOD)",
            "Fell in Luv",
            "Foreign",
            "Pull Up",
            "Mileage",
            "FlatBed Freestyle",
            "No Time",
            "Middle of the Summer",
            "Choppa Won't Miss",
            "R.I.P. Fredo",
            "Top"
        ]
    },
    french_exit: {
        title: "French Exit",
        artist: "TV Girl",
        year: "2014",
        genre: "Indie Pop",
        trackCount: 12,
        thoughts: "Since I heard TV Girl for the first time, I have searched and searched for music that sounds like it, but I haven't been able to find anything even close. French Exit was the first TV Girl album I listened through all the way, and I loved it immediately. I was captivated. My favorite thing in music is when a song is able to make me feel that poignant feeling of nostalgia, and this album just does that so well. Some of my favorite songs on the album are Birds Don't Sing, The Blonde, and Louise. 9/10.",
        tracks: [
            "Pantyhose",
            "Birds Don't Sing",
            "Louise",
            "Hate Yourself",
            "The Getaway",
            "Talk to Strangers",
            "The Blonde",
            "Daughter of a Cop",
            "Lovers Rock",
            "Her and Her Friend",
            "Come When You Call",
            "Anjela"
        ]
    },
    freudian: {
        title: "Freudian",
        artist: "Daniel Caesar",
        year: "2017",
        genre: "R&B",
        trackCount: 10,
        thoughts: "Daniel Ceaser has one of the best voices I've ever heard, and he allows it to go on full display in Freudian. There is no way to describe the music on this album other than beautiful. It is so full of love and passion that it takes a genuine effort not to end a full listen of this project in tears. Production is also incredible. Some of my favorite tracks are Loose, Hold Me Down, and We Find Love. 9/10.",
        tracks: [
            "Get You (Ft. Kali Uchis)",
            "Best Part (Ft. H.E.R.)",
            "Hold Me Down",
            "Neu Roses (Transgressor's Song)",
            "Loose",
            "We Find Love",
            "Blessed",
            "Take Me Away (Ft. Syd)",
            "Transform (Ft. Charlotte Day Wilson)",
            "Freudian"
        ]
    },
    graduation: {
        title: "Graduation",
        artist: "Kanye West",
        year: "2007",
        genre: "Hip-Hop",
        trackCount: 15,
        thoughts: "He made Graduation... No but seriously despite all the terrible things Kanye has said since Graduation, it is truly a priveledge to listen to all his music. He is, without a doubt, a genius when it comes to music and has such a good sense of what makes good music great. Really breaking down Kanye songs is almost like English class, where you ask yourself 'Was the author really thinking allat?' But in the case of Kanye, I can assure you he was thinking allat. Favorite songs are Big Brother, I Wonder, and Can't Tell Me Nothing. 10/10",
        tracks: [
            "Good Morning",
            "Champion",
            "Stronger",
            "I Wonder",
            "Good Life",
            "Can't Tell Me Nothing",
            "Barry Bonds",
            "Drunk and Hot Girls ",
            "Flashing Lights",
            "Everything I Am",
            "The Glory",
            "Homecoming",
            "Big Brother",
            "Good Night",
            "Bittersweet Poetry"
        ]
    },
    house_of_balloons: {
        title: "House of Balloons",
        artist: "The Weeknd",
        year: "2011",
        genre: "R&B",
        trackCount: 9,
        thoughts: "My favorite Weeknd album, and favorite R&B album of all time. Just generational. Every single song is genuinely perfect and I would change nothing about any of them. Even the things I wish I thought were different on my first couple full listens have grown on me so much I would never wish for them to be different. The Weeknd crawls up your spine this whole album and whispers every messed up thing he's thinking in your ear, and I loved every second of it. Best songs on the album are the best Weeknd songs too: What You Need, Coming Down, and Wicked Games. 10/10",
        tracks: [
            "High for This",
            "What You Need",
            "House of Balloons / Glass Table Girls",
            "The Morning",
            "Wicked Games",
            "The Party & The After Party",
            "Coming Down",
            "Loft Music",
            "The Knowing"
        ]
    },
    
    in_rainbows: {
        title: "In Rainbows",
        artist: "Radiohead",
        year: "2007",
        genre: "Alternative Rock",
        trackCount: 10,
        thoughts: "Masterpiece. Not much can be said about this album that hasn't been said before. My favorite Radiohead album (Sorry OK Computer!) and is the best evidence for why Radiohead is one of the best bands of all time. Favorite song on the album (and my favorite Radiohead song) is Weird Fishes/Arpeggi. 10/10.",
        title: "In Rainbows",
        tracks: [
            "15 Step",
            "Bodysnatchers",
            "Nude",
            "Weird Fishes/Arpeggi",
            "All I Need",
            "Faust Arp",
            "Reckoner",
            "House of Cards",
            "Jigsaw Falling into Place",
            "Videotape"
        ]
    },
    
    norman_rockwell: {
        title: "Norman Fucking Rockwell!",
        artist: "Lana Del Rey",
        year: "2019",
        genre: "Dream Pop",
        trackCount: 14,
        thoughts: "Born to Die is what got me hooked on Lana, and this album made me fall in love with her. A perfect album that doesn't get as much love as it deserves. So many bangers it's honestly baffling that they're all on the same project. Happiness Is a Butterfly is one of my favorite songs of all time and I'm forever indebted to this album for giving me such a masterpiece. Favorite songs are Happiness is a Butterfly, Mariners Apartment Complex (You're lost at sea, then I'll command your boat to me again. so good), and Norman Fucking Rockwell. 9.5/10.",
        title: "Norman Fucking Rockwell!",
        tracks: [
            "Norman fucking Rockwell",
            "Mariners Apartment Complex",
            "Venice Bitch",
            "Fuck It I Love You",
            "Doin’ Time",
            "Love Song",
            "Cinnamon Girl",
            "How to Disappear",
            "California",
            "The Next Best American Record",
            "The greatest",
            "Bartender",
            "Happiness Is a Butterfly",
            "hope is a dangerous thing for a woman like me to have - but I have it"
        ]
    },
    
    rodeo: {
        title: "Rodeo",
        artist: "Travis Scott",
        year: "2015",
        genre: "Trap",
        trackCount: 16,
        thoughts: "My granny called she said travvy you work too hard. Man, what a classic album. Loved every second of this thing and there's a reason many people say it's the greatest Trap album of all time. Travis is just so captivating on this thing you can't look away. All the features are also so good and enhance every song they're on. Favorite songs are 90210, Apple Pie, Maria I'm Drunk. 10/10",
        title: "Rodeo",
        tracks: [
            "Pornography",
            "Oh My Dis Side",
            "3500",
            "Wasted",
            "90210",
            "Pray 4 Love",
            "Nightcrawler",
            "Piss on Your Grave",
            "Antidote",
            "Impossible",
            "Maria I’m Drunk",
            "Flying High",
            "I Can Tell",
            "Apple Pie",
            "Ok Alright",
            "Never Catch Me"
        ]
    },
    
    self_titled: {
        title: "Playboi Carti",
        artist: "Playboi Carti",
        year: "2017",
        genre: "Trap",
        trackCount: 15,
        thoughts: "A tear forms in my eye as I write this. This album is so nostalgic. First Carti song I ever heard was Magnolia in 7th Grade and I couldn't believe what I was hearing. This album stays in its lane, doesn't try to do anything too crazy, but it does what it does absolutely perfectly. This album is gonna get played till the end of time without a doubt. Carti the goat. Favorite tracks are Kelly K, Location, and dothatshit! 8/10.",
        title: "Playboi Carti",
        tracks: [
            "Location",
            "Magnolia",
            "Lookin",
            "Wokeuplikethis*",
            "Let It Go",
            "Half & Half",
            "New Choppa",
            "Other Shit",
            "No. 9",
            "Dothatshit!",
            "Lame N*ggaz",
            "Yah Mean",
            "Flex",
            "Kelly K",
            "Had 2"
        ]
    },
    take_care: {
        title: "Take Care",
        artist: "Drake",
        year: "2011",
        genre: "Hip-Hop",
        trackCount: 19,
        thoughts: "If someone ever talks trash about Drake, all you gotta do is play them this album. If they still think he's trash you rest assured that they never had the reasoning skills to understand music in the first place. Jokes aside, this is Drake's best album. His debut project and it has set the tone for the utter dominance Drake has maintained for 15+ years. A flawless album with 0 skips. Favorite songs: The Ride (my favorite drake song), Look What You've Done, and The Real Her. 10/10.",
        title: "Take Care",
        tracks: [
            "Over My Dead Body",
            "Shot For Me",
            "Headlines",
            "Crew Love",
            "Take Care",
            "Marvins Room",
            "Buried Alive Interlude",
            "Under Ground Kings",
            "We'll Be Fine",
            "Make Me Proud",
            "Lord Knows",
            "Cameras / Good Ones Go Interlude",
            "Doing It Wrong",
            "The Real Her",
            "Look What You've Done",
            "HYFR (Hell Ya Fucking Right)",
            "Practice",
            "The Ride",
            "The Motto"
        ]
    },
    whole_lotta_red: {
        title: "Whole Lotta Red",
        artist: "Playboi Carti",
        year: "2020",
        genre: "Trap",
        trackCount: 24,
        thoughts: "Jump out the house baby. This is my second favorite album ever, and my favorite Carti album by a mile (see die lit info if you want to know how much that means). This album created an entire genre of music, and has been the most influential album of the last 5 years. A modern day masterpiece and Carti's Magnum Opus in my opinion. While I think he is capable of releasing great music for many years to come, I don't think he'll ever come close to topping this absolute masterpiece. I'm blessed to have ever heard this. Favorite songs are Control, Over, and F33l Lik3 Dyin. 10/10.",
        title: "Whole Lotta Red",
        tracks: [
            "Rockstar Made",
            "Go2DaMoon",
            "Stop Breathing",
            "Beno!",
            "JumpOutTheHouse",
            "M3tamorphosis",
            "Slay3r",
            "No Sl33p",
            "New Tank",
            "Teen X",
            "Meh",
            "Vamp Anthem",
            "New N3on",
            "Control",
            "Punk Monk",
            "On That Time",
            "King Vamp",
            "Place",
            "Sky",
            "Over",
            "ILoveUIHateU",
            "Die4Guy",
            "NotPLaying",
            "F33l Lik3 Dyin"
        ]
    }
};

// Get album from URL parameter
function getAlbumFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('album');
}

// Initialize the tier list
document.addEventListener('DOMContentLoaded', function() {
    const album = getAlbumFromURL();
    const albumInfo = albumData[album];
    
    // Update page title
    document.getElementById('albumTitle').textContent = `${albumInfo.title} - Tier List`;
    document.title = `${albumInfo.title} Tier List`;
    
    // Load tracks into the pool
    loadTracks(albumInfo.tracks);
    
    // Add event listeners for buttons
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', goBack);
    }
    
    const infoButton = document.querySelector('.info-button');
    if (infoButton) {
        infoButton.addEventListener('click', showThoughts);
    }
    
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', hideThoughts);
    }
    
    // Add event listeners for drag and drop
    const tierContents = document.querySelectorAll('.tier-content');
    tierContents.forEach(content => {
        content.addEventListener('drop', drop);
        content.addEventListener('dragover', allowDrop);
    });
});

// Load tracks into the track pool
function loadTracks(tracks) {
    const trackPool = document.getElementById('trackPool');
    trackPool.innerHTML = '';
    
    tracks.forEach(track => {
        const trackElement = createTrackElement(track);
        trackPool.appendChild(trackElement);
    });
}

// Create a draggable track element
function createTrackElement(trackName) {
    const trackElement = document.createElement('div');
    trackElement.className = 'track-item';
    trackElement.draggable = true;
    trackElement.textContent = trackName;
    trackElement.id = `track-${trackName.replace(/\s+/g, '-').toLowerCase()}`;
    
    trackElement.addEventListener('dragstart', handleDragStart);
    trackElement.addEventListener('dragend', handleDragEnd);
    
    return trackElement;
}

// Drag and drop event handlers
function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.target.classList.add('dragging');
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function allowDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

function drop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    
    const trackId = e.dataTransfer.getData('text/plain');
    const trackElement = document.getElementById(trackId);
    
    if (trackElement && e.currentTarget.classList.contains('tier-content')) {
        // Remove from current location
        trackElement.remove();
        
        // Add to new tier
        e.currentTarget.appendChild(trackElement);
        
        // Add visual feedback
        trackElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            trackElement.style.transform = '';
        }, 200);
    }
}

// Remove drag-over class when leaving drop zone
document.addEventListener('dragleave', function(e) {
    if (e.target.classList.contains('tier-content')) {
        e.target.classList.remove('drag-over');
    }
});

// Back button functionality
function goBack() {
    window.location.href = 'index.html';
}

// Thoughts functionality
function showThoughts() {
    const album = getAlbumFromURL();
    const modal = document.getElementById('thoughtsModal');
    const thoughtsContent = document.getElementById('thoughtsContent');
    
    //Thought data
    const albumInfo = albumData[album];
    thoughtsContent.textContent = albumInfo.thoughts;
    modal.classList.add('show');
}

function hideThoughts() {
    const modal = document.getElementById('thoughtsModal');
    modal.classList.remove('show');
}

// Close thoughts when clicking outside thought box
document.addEventListener('click', function(e) {
    const modal = document.getElementById('thoughtsModal');
    if (e.target === modal) {
        hideThoughts();
    }
});

// Visual feedback for drops
function showDropFeedback(element) {
    element.style.background = '#2a2a2a';
    setTimeout(() => {
        element.style.background = '';
    }, 300);
}

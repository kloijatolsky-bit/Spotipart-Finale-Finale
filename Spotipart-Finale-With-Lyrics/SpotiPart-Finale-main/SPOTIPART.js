// =====================================
// 1. PLAYLIST DATA
// =====================================
const playlist = [
    {
        id: 1,
        title: "All Too Well",
        artist: "Taylor Swift",
        album: "Red",
        duration: "5:30",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJV7dSKwjMZDENwAc8suPRR1QsrDiDFavW_3pu5Z2rvA&s",
        audio: "songs/all-too-well.mp3",
        lyrics: [
            { time: 0.0, text: "♪ (Acoustic guitar intro) ♪" },
            { time: 20.0, text: "I walked through the door with you, the air was cold" },
            { time: 25.0, text: "But something bout it felt like home somehow" },
            { time: 30.0, text: "And I left my scarf there at your sisters house" },
            { time: 35.0, text: "And you have still got it in your drawer, even now" },
            { time: 40.5, text: "Oh, your sweet disposition and my wide-eyed gaze" },
            { time: 46.0, text: "We are singing in the car, getting lost upstate" },
            { time: 51.5, text: "Autumn leaves falling down like pieces into place" },
            { time: 56.5, text: "And I can picture it after all these days" },
            { time: 61.0, text: "And I know its long gone and that magics not here no more" },
            { time: 69.0, text: "And I might be okay, but I am not fine at all" },
            { time: 75.0, text: "Cause there we are again on that little town street" },
            { time: 80.0, text: "You almost ran the red cause you were lookin over at me" },
            { time: 85.5, text: "Wind in my hair, I was there" },
            { time: 90.0, text: "I remember it all too well" },
            { time: 95.0, text: "♪ (Acoustic rhythm groove) ♪" },
            { time: 99.0, text: "Photo album on the counter, your cheeks were turning red" },
            { time: 105.0, text: "You used to be a little kid with glasses in a twin-sized bed" },
            { time: 110.0, text: "And your mother is telling stories bout you on the tee-ball team" },
            { time: 115.0, text: "You taught me bout your past, thinking your future was me" },
            { time: 120.0, text: "And you were tossing me the car keys, keychain on the ground" },
            { time: 126.0, text: "We were always skipping town" },
            { time: 129.0, text: "And I know its long gone and there was nothing else I could do" },
            { time: 137.0, text: "And I forget about you long enough to forget why I needed to" },
            { time: 143.0, text: "Cause there we are again in the middle of the night" },
            { time: 148.0, text: "We are dancing round the kitchen in the refrigerator light" },
            { time: 154.0, text: "Down the stairs, I was there" },
            { time: 158.0, text: "I remember it all too well, yeah" },
            { time: 164.0, text: "♪ (Drum swell & building tension) ♪" },
            { time: 170.0, text: "And maybe we got lost in translation, maybe I asked for too much" },
            { time: 176.0, text: "But maybe this thing was a masterpiece til you tore it all up" },
            { time: 181.5, text: "Running scared, I was there" },
            { time: 185.0, text: "I remember it all too well" },
            { time: 189.0, text: "And you call me up again just to break me like a promise" },
            { time: 194.0, text: "So casually cruel in the name of being honest" },
            { time: 199.5, text: "I am a crumpled up piece of paper lying here" },
            { time: 205.5, text: "Cause I remember it all, all, all..." },
            { time: 213.0, text: "...too well!" },
            { time: 218.0, text: "♪ (Crying electric guitar solo & heavy beat drop) ♪" },
            { time: 228.0, text: "Time wont fly, its like I am paralyzed by it" },
            { time: 234.0, text: "I would like to be my old self again, but I am still trying to find it" },
            { time: 239.0, text: "After plaid shirt days and nights when you made me your own" },
            { time: 245.0, text: "Now you mail back my things and I walk home alone" },
            { time: 250.0, text: "But you keep my old scarf from that very first week" },
            { time: 255.0, text: "Cause it reminds you of innocence and it smells like me" },
            { time: 261.0, text: "You cannot get rid of it..." },
            { time: 264.5, text: "Cause you remember it all too well, yeah!" },
            { time: 270.0, text: "Cause there we are again when I loved you so" },
            { time: 275.0, text: "Back before you lost the one real thing you have ever known" },
            { time: 281.0, text: "It was rare, I was there, I remember it all too well!" },
            { time: 288.0, text: "Wind in my hair, you were there, you remember it all" },
            { time: 294.0, text: "Down the stairs, you were there, you remember it all" },
            { time: 299.0, text: "It was rare, I was there, I remember it all too well" },
            { time: 306.0, text: "Wind in my hair, I was there, I was there" },
            { time: 311.0, text: "Down the stairs, I was there, I was there" },
            { time: 316.5, text: "Sacred prayer, I was there, I was there" },
            { time: 322.0, text: "It was rare, you remember it all too well" },
            { time: 326.0, text: "Wind in my hair, I was there, I was there" },
            { time: 328.5, text: "Down the stairs, I was there, I was there..." },
            { time: 330.0, text: "♪ (Soft piano chords fade out) ♪" }
        ]
    },
    {
        id: 2,
        title: "cardigan",
        artist: "Taylor Swift",
        album: "Folklore",
        duration: "4:00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh2KpbN5jx0EgNOYhmvro00rgMx1HXTRaO1AtihEj4A&s=10",
        audio: "songs/Taylor Swift - cardigan (Official Lyric Video).mp3",
        lyrics: [
            { time: 0.0, text: "♪ (Gentle piano intro) ♪" },
            { time: 7.5, text: "Vintage tee, brand new phone" },
            { time: 11.2, text: "High heels on cobblestones" },
            { time: 15.0, text: "When you are young, they assume you know nothing" },
            { time: 20.5, text: "Sequin smile, black lipstick" },
            { time: 24.8, text: "Sensual politics" },
            { time: 28.5, text: "When you are young, they assume you know nothing" },
            { time: 34.0, text: "But I knew you" },
            { time: 37.2, text: "Dancin in your Levis, drunk under a streetlight" },
            { time: 42.5, text: "I knew you" },
            { time: 45.8, text: "Hand under my sweatshirt, baby, kiss it better" },
            { time: 50.0, text: "And when I felt like I was an old cardigan" },
            { time: 55.4, text: "Under someones bed" },
            { time: 58.6, text: "You put me on and said I was your favorite" },
            { time: 64.0, text: "♪ (Lush melodic break) ♪" },
            { time: 70.0, text: "A friend to all is a friend to none" },
            { time: 74.0, text: "Chase two girls, lose the one" },
            { time: 78.0, text: "When you are young, they assume you know nothing" },
            { time: 83.5, text: "But I knew you" },
            { time: 87.0, text: "Playing hide-and-seek and giving me your weekends" },
            { time: 92.0, text: "I knew you" },
            { time: 95.5, text: "Your heartbeat on the High Line, once in twenty lifetimes" },
            { time: 101.0, text: "And when I felt like I was an old cardigan" },
            { time: 106.0, text: "Under someones bed" },
            { time: 109.5, text: "You put me on and said I was your favorite" },
            { time: 114.0, text: "♪ (Strings & building beat) ♪" },
            { time: 118.5, text: "To kiss in cars and downtown bars" },
            { time: 123.0, text: "Was all we needed" },
            { time: 126.5, text: "You drew stars around my scars" },
            { time: 131.0, text: "But now I am bleedin" },
            { time: 136.0, text: "Cause I knew you" },
            { time: 140.0, text: "Steppin on the last train, marked me like a bloodstain" },
            { time: 145.0, text: "I knew you" },
            { time: 148.5, text: "Tried to change the ending, Peter losing Wendy" },
            { time: 153.5, text: "I knew you" },
            { time: 157.0, text: "Leavin like a father, running like water" },
            { time: 162.0, text: "When you are young, they assume you know nothing" },
            { time: 169.0, text: "But I knew youd linger like a tattoo kiss" },
            { time: 174.0, text: "I knew youd haunt all of my what-ifs" },
            { time: 178.5, text: "The smell of smoke would hang around this long" },
            { time: 183.0, text: "Cause I knew everything when I was young" },
            { time: 187.0, text: "I knew Id curse you for the longest time" },
            { time: 191.5, text: "Chasin shadows in the grocery line" },
            { time: 196.0, text: "I knew youd miss me once the thrill expired" },
            { time: 200.5, text: "And youd be standin in my front porch light" },
            { time: 205.0, text: "And I knew youd come back to me" },
            { time: 208.5, text: "Youd come back to me" },
            { time: 212.0, text: "And youd come back to me" },
            { time: 215.5, text: "And youd come back..." },
            { time: 220.0, text: "And when I felt like I was an old cardigan" },
            { time: 225.0, text: "Under someones bed" },
            { time: 228.5, text: "You put me on and said I was your favorite" },
            { time: 236.0, text: "♪ (Soft piano & gentle fading chords) ♪" }
        ]
    },
    {
        id: 3,
        title: "I Think They Call This Love",
        artist: "Elliot James Reay",
        album: "Single",
        duration: "3:16",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrySlnzUw9rvQLwgxUT1DhWAKcoW1opk_76amACMSRfw&s=10",
        audio: "songs/Elliot James Reay - I Think They Call This Love (Lyrics).mp3",
        lyrics: [
        { time: 0.0, text: "♪ (Vintage guitar intro) ♪" },
        { time: 10.0, text: "They say you know when you know" },
        { time: 17.5, text: "So, let's face it, you had me at Hello" },
        { time: 24.0, text: "Hesitation never helps" },
        { time: 27.5, text: "How could this be anything anything else?" },
        { time: 33.0, text: "When all I dream of is your eyes" },
        { time: 38.0, text: "All I long for is your touch" },
        { time: 41.0, text: "And, darling, something tells me that's enough, mm-mm-mm-mm" },
        { time: 48.0, text: "You can say that Im a fool, and I dont know very much" },
        { time: 55.0, text: "But I think they call this love" },
        { time: 65.0, text: "One smile, one kiss, two lonely hearts is all that it takes" },
        { time: 72.0, text: "Now, baby, you're on my mind every night, every day" },
        { time: 80.0, text: "Good vibrations getting loud" },
        { time: 83.0, text: "How could this be anything anything else?" },
        { time: 87.0, text: "When" },
        { time: 90.0, text: "All I dream of is your eyes" },
        { time: 93.0, text: "All I long for is your touch" },
        { time: 96.0, text: "And, darling, something tells me that's enough, mm-mm-mm-mm" },
        { time: 103.0, text: "You can say that Im a fool, and I dont know very much" },
        { time: 110.0, text: "But I think they call this love" },
        { time: 117.0, text: "Oh, I think they call this love" },
        { time: 123.0, text: "Hmm, ooh-ooh, mm" },
        { time: 127.0, text: "♪ (Music) ♪" },
        { time: 135.0, text: "What could this be" },
        { time: 138.0, text: "Between you and me? Oh, oh" },
        { time: 144.0, text: "All I dream of is your eyes" },
        { time: 147.0, text: "All I long for is your touch" },
        { time: 150.0, text: "And, darling, something tells, tells me it's enough" },
        { time: 157.0, text: "You can say that Im a fool, and I dont know very much" },
        { time: 164.0, text: "But I think they call" },
        { time: 168.5, text: "Oh, I think they call" },
        { time: 171.5, text: "Yes, I think they call" },
        { time: 178.0, text: "This love~" },
        { time: 185.0, text: "This love~" }
        ]
},
    {
        id: 4,
        title: "Chanel",
        artist: "Frank Ocean",
        album: "Single",
        duration: "3:30",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8tT9oEKK6iauHhqw16J9VszhuxGgqTiyMDsYSDmu94Q&s=10",
        audio: "songs/Frank+Ocean+-+Chanel+(+Lyrics) [l_8sYrH3lb0].mp3",
        lyrics: [
    { time: 0, text: "♪ (Intro) ♪" },
    { time: 17, text: "My guy pretty like a girl And he got fight stories to tell" },
    { time: 21, text: "I see both sides like Chanel See on both sides like Chanel" },
    { time: 26, text: "Swimmin' laps through pool water Heated like I'm underworld" },
    { time: 31, text: "Hide my tattoos in Shibuya Police think I'm of the underworld" },
    { time: 35, text: "12 treat a nigga like he 12 How you lookin' up to me and talkin' down?" },
    { time: 39, text: "Can't you see I am the big man? (Big man) God level, I am the I am (Whoa)" },
    { time: 43, text: "Now film it with that drone cam, in the pink like Killa Cam Put a zoom on that stick; Noé, up so close I'm on that kill" },
    { time: 48, text: "Remote controller on your lower back, yeah that's the good Dick could roll the eyes back in the skull" },
    { time: 52, text: "Rollin' when you ride, poppin' Rollin' when you ride, ride the Rodman" },
    { time: 57, text: "Got one that's straight actin' Turnt out like some dirty plastic (Ride) " },
    { time: 61, text: "2016 burnt some discs 2017 ideas playin' off a Walkman" },
    { time: 66, text: "This a cult, not a clique on the net With a cup in a cup, Actavis " },
    { time: 70, text: "That's a double edge, \"Issa knife\" And I don't like to fight 'til I'm fightin'" },
    { time: 75, text: "Revenge in the air make my lungs sick Chopper in the sky like a gun trick " },
    { time: 79, text: "Clips on clips like Mike It's really you " },
    { time: 83, text: "I see both sides like Chanel See on both sides like Chanel " },
    { time: 90, text: "It's really you on my mind It's really you on my mind" },
    { time: 98, text: "It's really you, It's really you on my mind" },
    { time: 105, text: "V both sides of the 12 Steam both sides of the L" },
    { time: 109, text: "Freeze smoke rings and they hail Sleet snow grind for the wealth" },
    { time: 114, text: "Whole team diamonds is real Showed 'em how to shine by themselves" },
    { time: 118, text: "You need a cosign for your health I need that bitch to grind on my belt" },
    { time: 122, text: "I know you need to try for my belt I know you seen it drivin' itself" },
    { time: 127, text: "No matte black on the ride 'cause it's stale, but it's stealth " },
    { time: 131, text: "I see both sides like Chanel I see both sides like Chanel" },
    { time: 139, text: "My pockets snug They can't hold my 7" },
    { time: 142, text: "They banned my Visa My Amex and Mastercards" },
    { time: 148, text: "I got new money And it's all cash" },
    { time: 152, text: "I got new bags And they all collabs" },
    { time: 157, text: "I rubber band a bunch of thousand dollar Delta gift cards (I mean, my baby bi)" },
    { time: 161, text: "Amazin' the cash online unknown (I mean, my baby bi) " },
    { time: 166, text: "Blazin' the dash, countin' money at home" },
    { time: 173, text: "My pockets snug They can't hold my 7" },
    { time: 178, text: "They banned my Visa My Amex and Mastercards" },
    { time: 183, text: "I got new money And it's all cash" },
    { time: 187, text: "I got new bags And they all collabs" },
    { time: 192, text: "I rubber band a bunch of thousand dollar Delta gift cards (I mean, my baby bi)" },
    { time: 196, text: "Amazin' the cash online unknown (I mean, my baby bi)" },
    { time: 201, text: "Blazin' the dash, countin' money at home" }
]
    },
    {
        id: 5,
        title: "Trust Issues",
        artist: "Drake",
        album: "Single",
        duration: "4:45",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZNWsdb7iBURoLsjyzxehmAwFZHL15BYScLriuITIuA&s=10",
        audio: "songs/Drake - Trust Issues (Lyrics) - (original Kbps).mp3",
        lyrics: [
    { time: 0, text: "♪ (Intro) ♪" },
    { time: 5, text: "Uh" },
    { time: 7, text: "Aw, yeah, aw, yeah" },
    { time: 11, text: "Call up on drank and let's," },
    { time: 14, text: "let's call up and" },
    { time: 15, text: "Uh" },
    { time: 17, text: "All I care about is money and the city that I'm from" },
    { time: 22, text: "I'ma sip until I feel it, I'ma smoke it 'til it's done" },
    { time: 26, text: "And I don't really give a fuck and my excuse is that I'm young" },
    { time: 31, text: "And I'm only getting older, somebody should've told you" },
    { time: 35, text: "I'm on one " },
    { time: 37, text: "Ay" },
    { time: 38, text: "fuck it I'm on one " },
    { time: 42, text: "yeah" },
    { time: 43, text: "I said im on one " },
    { time: 47, text: "fuck it I'm on one " },
    { time: 50, text: "a strong whole one " },
    { time: 52, text: "Two white cups and I got that drink" },
    { time: 54, text: "It could be purple, it could be pink" },
    { time: 56, text: "Depending on how you mix that shit" },
    { time: 58, text: "Money to be got, and I'ma get that shit" },
    { time: 60, text: "Cause I'm on one" },
    { time: 65, text: "fuck it I'm on one" },
    { time: 68, text: "Aw yeah, aw yeah" },
    { time: 70, text: "You know what I'm" },
    { time: 73, text: "Oh yes, oh yeah" },
    { time: 77, text: "Oh yes, oh yeah" },
    { time: 80, text: "Uh" },
    { time: 82, text: "oh yes, oh yeah" },
    { time: 84, text: "Yeah!" },
    { time: 86, text: "Ahh!" },
    { time: 88, text: "You know what I'm sipping, " },
    { time: 90, text: "I'll teach you how to mix it" },
    { time: 92, text: "But you're the only one" },
    { time: 94, text: "cause I don't trust these bitches" },
    { time: 96, text: "I don't,  I don't trust these bitches" },
    { time: 98, text: "They might catch me slipping" },
    { time: 100, text: "So, you're the only one" },
    { time: 102, text: "cause I don't trust these bitches" },
    { time: 104, text: "They might, they might catch me slipping" },
    { time: 107, text: "And put in something different" },
    { time: 109, text: "So you're the only one" },
    { time: 111, text: "cause I don't trust these bitches" },
    { time: 113, text: "I don't trust, I don't trust these bitches" },
    { time: 116, text: "They might catch me slipping" },
    { time: 118, text: "So you're the only one" },
    { time: 122, text: "Oh whoa, " },
    { time: 125, text: "trust issues" },
    { time: 126, text: "Oh whoa," },
    { time: 129, text: "trust issues" },
    { time: 130, text: "Oh whoa," },
    { time: 133, text: "trust issues" },
    { time: 135, text: "Oh whoa," },
    { time: 142, text: "Yeah!" },
    { time: 143, text: "Oh yeah!" },
    { time: 146, text: "Let's call up on drank and let's all get wasted" },
    { time: 152, text: "On drank and let's all get faded," },
    { time: 155, text: "Yeah!" },
    { time: 158, text: "Drizzy Drake, check me out" },
    { time: 160, text: "Coming live from the mothafuckin' North Side" },
    { time: 162, text: "Kick game, run game, run it real good" },
    { time: 164, text: "But never ever have my bitches sitting courtside" },
    { time: 166, text: "Same nigga that you knew way back when" },
    { time: 169, text: "You acting like it's somebody you don't know" },
    { time: 171, text: "Tell me, how the fuck we supposed to stay friends" },
    { time: 173, text: "When you got a bunch of feelings that you don't show?" },
    { time: 176, text: "I could tell, I could tell         " },
    { time: 178, text: " I could tell Certain people don't like me no more" },
    { time: 180, text: "New shit don't excite me no more" },
    { time: 182, text: "Guess that they don't really make them like me no more" },
    { time: 184, text: "Uh, you can look me in my eyes and see I ain't myself" },
    { time: 189, text: "'Cause if y'all what I created then I hate myself" },
    { time: 192, text: "But still, let them girls in " },
    { time: 194, text: "and tell 'em all Leave their cell phones on the table where we see them" },
    { time: 197, text: "I'm all day with it man, a.m. to the p.m" },
    { time: 199, text: "Niggas hating, I just wish that they would say it when they see him, oh" },
    { time: 204, text: "That's that shit that drives me crazy" },
    { time: 207, text: "And that's all I've been getting lately" },
    { time: 211, text: "And it's probably why I'm scared to put the time in" },
    { time: 214, text: "Women want to fuck like they're me and I'm them" },
    { time: 218, text: "Looking for some things and I think that I can find 'em in you, in you" },
    { time: 225, text: "in you" },
    { time: 227, text: "Oh whoa, trust issues" },
    { time: 231, text: "Oh whoa, trust issues" },
    { time: 236, text: "Oh whoa, trust issues" },
    { time: 240, text: "Oh Oh..." },
    { time: 247, text: "aw yeah, aw yeah" },
    { time: 251, text: "Let's call up on drank and let's all get wasted" },
    { time: 256, text: "On drank and let's all get faded" },
    { time: 260, text: "aw yeah, aw yeah" },
    { time: 264, text: "Call up on drank" },
    { time: 266, text: "Let's" },
    { time: 268, text: "Let's call up..!" }
]
    },
    {
        id: 6,
        title: "Daisies",
        artist: "Justin Bieber",
        album: "SWAG",
        duration: "2:56",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-W4Irqex1NBJ2DjXx9AVlAY0APkUCC1PxoriErzJynA&s=10E",
        audio: "songs/Justin Bieber - DAISIES (Lyrics).mp3",
        lyrics: [
  { time: 0     , text: "Intro" },
  { time: 17.4   , text: "Throwing pedals like do you love me or not" },
  { time: 21.6  , text: "Head is spinning and it don't know when to stop" },
  { time: 26.5  , text: "Cause you said forever babe did you mean it or not" },
  { time: 29.8  , text: "Hold on hold on" },
  { time: 34.4  , text: "You leave me on read babe but I still get the message" },
  { time: 38.8  , text: "Instead of a line its 3 dots but I can connect em" },
  { time: 43.2  , text: "And if it ain't right babe" },
  { time: 45.6  , text: "You know I respect it" },
  { time: 48.2  , text: "But if you need time just take your time" },
  { time: 50.1  , text: "Honey I get it I get it I get it" },
  { time: 55    , text: "The way you got me all in my head" },
  { time: 58    , text: "Think I'd rather you in my bed" },
  { time: 63.1  , text: "Whatever it is you know I can take it" },
  { time: 66.4  , text: "I'm counting the days how many days" },
  { time: 68.5  , text: "Til I can see you again" },
  { time: 70.2  , text: "Blowing kisses like will you catch 'em or not" },
  { time: 74.2  , text: "I'm Cupid with arrows babe I'm just shooting my shot mhmm" },
  { time: 78.8  , text: "If I could get in drop me a pin" },
  { time: 80.5  , text: "Hop in the — and come over" },
  { time: 82.4  , text: "Don't wanna be friends just skin to skin" },
  { time: 85.6  , text: "I wanna get closer and closer and closer" },
  { time: 89.4  , text: "The way you got me all in my head" },
  { time: 94.4 , text: "Think I'd rather you in my bed" },
  { time: 96.5 , text: "Whatever it is you know I can take it" },
  { time: 99.8 , text: "I'm counting the days how many days" },
  { time: 102.9 , text: "Til I can see you again" },
  { time: 120.8 , text: "You got me all in my feelings" },
  { time: 125   , text: "And you got me all I've been all in my feelings" },
  { time: 129.6 , text: "And you got me all weak in my knees every time" },
  { time: 134.4 , text: "Cause you got me all, all in my feelings" },
  { time: 141.2 , text: "The way you got me all in my head" },
  { time: 145.2 , text: "Think I'd rather you in my bed" },
  { time: 149.3 , text: "Whatever it is you know I can take it" },
  { time: 153.6 , text: "I'm counting the days how many days" },
  { time: 155.8 , text: "Til I can see you again" },
  { time: 159.8 , text: "♪ (Thank you for choosing Spotipart dawg) ♪" },
]

},
    {
        id: 7,
        title: "One More Night",
        artist: "Maroon 5",
        album: "Overexposed",
        duration: "3:42",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDOQYdSKVMLyE-NrxaqK0NHZ32JrGrc9IVZLUpMkAPfQ&s=10",
        audio: "songs/Maroon 5 - One More Night (Lyric Video).mp3",
        lyrics: [
  { time: 0, text: "♪ (Intro) ♪" },
  { time: 1.1, text: "Ooh, ooh-ooh, ooh-ooh, ooh" },
  { time: 6.3, text: "Ooh, ooh-ooh, ooh-ooh, ooh" },
  { time: 10.6, text: "You and I go hard at each other like we're going to war" },
  { time: 15.7, text: "You and I go rough, we keep throwing things and slamming the door" },
  { time: 20.8, text: "You and I get so damn dysfunctional, we stopped keeping score" },
  { time: 26, text: "You and I get sick, yeah, I know that we can't do this no more" },
  { time: 30.8, text: "Yeah, but baby, there you go again, there you go again, making me love you" },
  { time: 36, text: "Yeah, I stopped using my head, using my head, let it all go" },
  { time: 41.1, text: "Got you stuck on my body, on my body, like a tattoo" },
  { time: 46.2, text: "And now I'm feeling stupid, feeling stupid, crawling back to you" },
  { time: 51.3, text: "So I cross my heart and I hope to die" },
  { time: 56, text: "That I'll only stay with you one more night" },
  { time: 61.5, text: "And I know I said it a million times" },
  { time: 67.1, text: "But I'll only stay with you one more night" },
  { time: 70.2, text: "Try to tell you \"no\", but my body keeps on telling you \"yes\"" },
  { time: 76.3, text: "Try to tell you \"stop\", but your lipstick got me so out of breath" },
  { time: 82.5, text: "I'll be waking up in the morning, probably hating myself" },
  { time: 87.6, text: "And I'll be waking up, feeling satisfied, but guilty as hell" },
  { time: 92.4, text: "Yeah, but baby, there you go again, there you go again, making me love you" },
  { time: 96.6, text: "Yeah, I stopped using my head, using my head, let it all go" },
  { time: 103.7, text: "Got you stuck on my body, on my body, like a tattoo" },
  { time: 108.8, text: "And now I'm feeling stupid, feeling stupid, crawling back to you" },
  { time: 113.9, text: "So I cross my heart and I hope to die" },
  { time: 118.5, text: "That I'll only stay with you one more night" },
  { time: 124.1, text: "And I know I said it a million times" },
  { time: 128.7, text: "But I'll only stay with you one more night" },
  { time: 130.8, text: "Yeah, baby, give me one more night" },
  { time: 132.5, text: "Whoa, yeah, yeah, yeah" },
  { time: 134.8, text: "Ooh, ooh-ooh, ooh-ooh, ooh" },
  { time: 154.2, text: "But baby, there you go again, there you go again, making me love you" },
  { time: 159.3, text: "Yeah, I stopped using my head, using my head, let it all go" },
  { time: 165.4, text: "Got you stuck on my body, on my body, like a tattoo" },
  { time: 169.5, text: "Yeah, yeah, yeah, yeah" },
  { time: 175.6, text: "So I cross my heart and I hope to die" },
  { time: 179.2, text: "That I'll only stay with you one more night" },
  { time: 184.8, text: "And I know I said it a million times" },
  { time: 189.4, text: "But I'll only stay with you one more night" },
  { time: 193, text: "Yeah, baby, give me one more night" },
  { time: 196.2, text: "So I cross my heart and I hope to die" },
  { time: 200.8, text: "That I'll only stay with you one more night" },
  { time: 206.4, text: "And I know I said it a million times" },
  { time: 211, text: "But I'll only stay with you one more night" },
  { time: 216.2, text: "I don't know, whatever" },
  { time: 219.5, text: "♪ (Thank you for choosing Spotipart dawg) ♪" },
  
]
    },
    {
        id: 8,
        title: "Angel Of My Dreams",
        artist: "JADE",
        album: "That's Showbiz Baby!",
        duration: "3:19",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsbx33G7R3dZcbA8FNWh4cS1YtDAGXBynrQ1Bm8MDGBw&s=10",
        audio: "songs/JADE+-+Angel+Of+My+Dreams+(Lyric+Video) [ZP3XMEayaVo].mp3",
        lyrics: [
  { time: 0.2,   text: "I wonder if one day that you'll say that you care (Hey, Mike)" },
  { time: 7.12,  text: "If you say you love me madly— (Let's do somethin' crazy)" },
  { time: 10.33, text: "Angel of my dreams, I will always" },
  { time: 15.34, text: "Love you and hate you, it's not fair" },
  { time: 22.34, text: "It's so bittersweet, I will always" },
  { time: 27.21, text: "Want you and need you, you don't care" },
  { time: 32.16, text: "You don't care" },
  { time: 35.78, text: "You don't care" },
  { time: 39.66, text: "You don't— ♪ (Sub-bass drop & synth surge) ♪" },
  { time: 40.99, text: "Care that I'm mad, care that I'm sad, it's so bad, it's funny" },
  { time: 44.67, text: "Care if I cry, care if I die, you only care about money (Mm)" },
  { time: 48.25, text: "Sellin' my soul to a psycho, they say I'm so lucky" },
  { time: 52.08, text: "Better act like you're lucky, honey" },
  { time: 55.04, text: "But it feels nice" },
  { time: 58.62, text: "In the spotlight" },
  { time: 62.32, text: "When the camera flashy, I act so happy" },
  { time: 66.28, text: "I'm in heaven when you're lookin' at me" },
  { time: 71.27, text: "Angel of my dreams, I will always" },
  { time: 74.44, text: "Love you and hate you, it's not fair" },
  { time: 79.06, text: "It's so bittersweet, I will always" },
  { time: 81.95, text: "Want you and need you, you don't care" },
  { time: 85.34, text: "Love when you call me a star" },
  { time: 87.30, text: "You let me down in the dark" },
  { time: 89.46, text: "Want you and need you, you don't care" },
  { time: 92.31, text: "It's not fair (Ah)" },
  { time: 95.77, text: "It's not fair" },
  { time: 99.53, text: "It's not fair" },
  { time: 103.28, text: "It's not f— ♪ (Stuttered electro cut) ♪" },
  { time: 104.51, text: "Fair that I try, fair that I grind, fair that I buy you sushi" },
  { time: 108.34, text: "Got you a car, got you a house, got you a suit, it's Gucci" },
  { time: 112.12, text: "If I don't win, I'm in the bin, you say you never knew me" },
  { time: 115.81, text: "But when I pop off, you sue me, so sue me" },
  { time: 118.66, text: "But it feels nice (It feels nice)" },
  { time: 122.46, text: "In the spotlight (In the spotlight)" },
  { time: 126.15, text: "When the camera flashy, I act so happy (Happy)" },
  { time: 129.91, text: "I'm in heaven when you're lookin' at me" },
  { time: 135.17, text: "Angel of my dreams, I will always" },
  { time: 138.02, text: "Love you and hate you, it's not fair" },
  { time: 142.49, text: "It's so bittersweet, I will always" },
  { time: 145.63, text: "Want you and need you, you don't care" },
  { time: 149.02, text: "Love when you call me a star" },
  { time: 151.07, text: "You let me down in the dark" },
  { time: 153.19, text: "Want you and need you, you don't care" },
  { time: 156.20, text: "It's not fair" },
  { time: 159.51, text: "It's not fair" },
  { time: 163.42, text: "(I) Angel of my dreams, I will always (Wonder if one day that)" },
  { time: 169.82, text: "Love you and hate you (You'll say that), it's not fair (You care) (Oh)" },
  { time: 175.40, text: "(I) It's so bittersweet, I will always (Love you)" },
  { time: 181.89, text: "Want you and need you (Forever), you don't care (I swear)" },
  { time: 186.46, text: "I'll always love you" },
  { time: 190.41, text: "♪ (Thank you for choosing Spotipart dawg) ♪" }
]

    },
    {
        id: 9,
        title: "her",
        artist: "JVKE",
        album: "Single",
        duration: "2:22",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMJwssb_mU1hvfCltlTWnmh3EZnrmtSg-jyWWzdo2iHQ&s",
        audio: "songs/JVKE - her (Lyrics).mp3",
        lyrics: [
    { time: 0.0, text: "♪ (Instrumental intro) ♪" },
    { time: 6.0, text: "(Hold me close) Look me dead in my eyes" },
    { time: 10.0, text: "(Dead in my) 'Til the day that I die" },
    { time: 13.0, text: "(Dead inside) I just wanna feel alive" },
    { time: 16.0, text: "(With you, I'm alive) With you, I'm alive" },
    { time: 20.0, text: "Fell in love, but it left me lonely" },
    { time: 23.0, text: "Tried to trust, but it burned me slowly" },
    { time: 27.0, text: "I didn't know what I was looking for" },

    { time: 30.0, text: "'Til I found her" },
    { time: 38.0, text: "I found her" },
    { time: 45.0, text: "Without her" },
    { time: 47.0, text: "I'm a mess (I'm a mess)" },
    { time: 48.0, text: "There was nothing 'bout that love that made sense, I was stressed" },
    { time: 51.0, text: "'Til I found her (Oh, oh)" },

    { time: 60.0, text: "I've run for many miles trying to find love" },
    { time: 63.0, text: "From a woman that could love me and nevеr leave my side" },
    { time: 66.0, text: "And I'vе run for many miles trying to get away from" },
    { time: 68.0, text: "The things I'm afraid of and everything inside" },
    { time: 74.0, text: "You say that we're already done (Done)" },
    { time: 75.0, text: "But what does that even mean?" },
    { time: 77.0, text: "You tell me to open my eyes" },
    { time: 79.0, text: "Thank God it was just a dream" },
    { time: 80.0, text: "I guess that's how you know that it's love" },
    { time: 82.0, text: "When you're scared to death they'll leave" },
    { time: 83.0, text: "Just say that you'll never leave, never leave" },

    { time: 86.0, text: "(Baby, hold me close) Look me dead in my eyes" },
    { time: 90.0, text: "(Dead in my) 'Til the day that I die" },
    { time: 93.0, text: "(Dead inside) I just wanna feel alive" },
    { time: 96.0, text: "(With you, I'm alive) With you, I'm a—, uh" },
    { time: 100.0, text: "Fell in love, but it left me lonely" },
    { time: 103.0, text: "Tried to trust, but it burned me slowly" },
    { time: 107.0, text: "I didn't know what I was looking for" },

    { time: 110.0, text: "'Til I found her" },
    { time: 118.0, text: "I found her" },
    { time: 125.0, text: "Without her" },
    { time: 127.0, text: "I'm a mess (I'm a mess)" },
    { time: 128.0, text: "There was nothing 'bout that love that made sense, I was stressed" },
    { time: 131.0, text: "'Til I found her (Oh, oh)" },
    { time: 137.0, text: "Without her" },
    { time: 140.0, text: "I'm a mess (I'm a mess)" },
    { time: 141.0, text: "There was nothing 'bout that love that made sense, I was stressed" },
    { time: 144.0, text: "'Til I found her (Oh, oh)" },

    { time: 151.0, text: "'Til I found her" },
    { time: 158.5, text: "Ooh-ooh-ooh" }
]
    },
    {
        id: 10,
        title: "A Thousand Years",
        artist: "John Michael Howell, JVKE, ZVC",
        album: "Single",
        duration: "3:00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF57Ui2gD6_q-Ts1rT6nNL6YZ6iWTixMgiSKvlm4Sikw&s",
        audio: "songs/John Michael Howell, JVKE, ZVC - A Thousand Years (Lyrics).mp3",
        lyrics: [
    { time: 8.0, text: "i was a kid looking for love" },
    { time: 9.7, text: "full of hope inside" },
    { time: 11.9, text: "but time was never kind to me" },
    { time: 14.2, text: "my heart grew cold as ice" },

    { time: 16.2, text: "all out of luck" },
    { time: 17.3, text: "thought is was stuck" },
    { time: 18.3, text: "alone for all my life" },
    { time: 20.2, text: "but i was proven wrong" },
    { time: 22.1, text: "the moment i looked in your eyes" },

    { time: 24.3, text: "it's true" },
    { time: 26.1, text: "until i'm in the grave" },
    { time: 28.9, text: "darling i'll love you" },

    { time: 30.9, text: "for a thousand years dear" },
    { time: 35.2, text: "time is nothing when i'm here with you" },
    { time: 38.5, text: "ohh" },
    { time: 40.4, text: "all my fears tears" },
    { time: 43.3, text: "those memories they disappear with you" },
    { time: 46.7, text: "ohh" },
    { time: 48.7, text: "till i turn into dust" },
    { time: 51.5, text: "i'll carry this love my dear" },
    { time: 56.1, text: "for a thousand years" },

    { time: 62.3, text: "Saw very soon\nsomething will bloom" },
    { time: 64.2, text: "like a lotus flower" },
    { time: 66.4, text: "the bluest moon will soon be sun" },
    { time: 68.5, text: "and turn to golden hour" },

    { time: 70.7, text: "Hours and days\nlost in your gaze" },
    { time: 72.7, text: "losing track of time" },
    { time: 74.0, text: "learning how to slow it down" },
    { time: 76.9, text: "appreciate our live" },

    { time: 78.7, text: "just know" },
    { time: 80.5, text: "until i'm in the grave" },
    { time: 83.2, text: "darling i love you" },

    { time: 85.5, text: "for a thousand years dear" },
    { time: 89.7, text: "time is nothing when i'm here with you" },
    { time: 93.0, text: "ohh" },
    { time: 94.9, text: "all my fears tears" },
    { time: 96.5, text: "those memories they disappear with you" },
    { time: 100.8, text: "ohh" },
    { time: 103.1, text: "till i turn into dust" },
    { time: 108.0, text: "i'll carry this love my dear" },
    { time: 110.5, text: "for a thousand years" },

    { time: 113.4, text: "ohh" },
    { time: 114.0, text: "aye" },

    { time: 116.7, text: "set it all on fire" },
    { time: 118.8, text: "let it burn up brighter" },
    { time: 120.9, text: "love is a flame" },
    { time: 121.9, text: "And it's dancing away" },
    { time: 122.9, text: "To David playing on a lyre" },

    { time: 125.2, text: "set it all on fire" },
    { time: 127.2, text: "let the smoke go higher" },
    { time: 129.2, text: "'cause darling i love you" },

    { time: 131.5, text: "for a thousand years dear" },
    { time: 135.6, text: "time is nothing when i'm here with you" },
    { time: 138.9, text: "Ooh" },
    { time: 140.8, text: "all my fears tears" },
    { time: 143.5, text: "those memories they disappear with you" },
    { time: 147.0, text: "Ooh" },
    { time: 149.3, text: "till the air leaves my lungs" },
    { time: 153.5, text: "with each breath i'll hold you near" },
    { time: 157.7, text: "till i turn into dust" },
    { time: 160.4, text: "i'll carry this love my dear" },
    { time: 164.7, text: "for a thousand years" }
]
    }
];

// =====================================
// 2. HTML ELEMENTS
// =====================================
const tracksTitle = document.getElementById("tracksTitle");
const tracksContainer = document.getElementById("tracksContainer");
const lyricsContainer = document.getElementById("lyricsContainer");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const volumeBar = document.getElementById("volumeBar");
const playerTitle = document.getElementById("playerTitle");
const playerArtist = document.getElementById("playerArtist");
const playerArt = document.getElementById("playerArt");
const currentTime = document.getElementById("currentTime");
const totalDuration = document.getElementById("totalDuration");
const searchInput = document.getElementById("searchInput");
const playAllBtn = document.getElementById("playAllBtn");
const createPlaylistBtn = document.getElementById("createPlaylistBtn");
const playlistList = document.getElementById("playlistList");
const viewButtons = document.querySelectorAll("[data-view]");
const playlistButtons = document.querySelectorAll("[data-playlist]");

const playlistCollections = {
    favorites: {
        title: "Favorites",
        songIds: [1, 2]
    },
    "chill-vibes": {
        title: "Chill Vibes",
        songIds: [2, 3, 4, 5]
    }
};
let activeCollection = "home";

// =====================================
// 3. AUDIO PLAYER INSTANCE
// =====================================
const audio = new Audio();
audio.volume = 0.8;
let currentTrackIndex = 0;
let isPlaying = false;
let currentLyricIndex = -1;
let lyricElements = [];

// =====================================
// 4. HELPER: FORMAT TIME
// =====================================
function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return minutes + ":" + String(remainingSeconds).padStart(2, "0");
}

// =====================================
// 5. SYNCHRONIZED LYRICS
// =====================================
function renderLyrics(song) {
    if (!lyricsContainer) return;
    lyricsContainer.innerHTML = "";
    currentLyricIndex = -1;
    lyricElements = [];

    if (!song || !song.lyrics || song.lyrics.length === 0) {
        lyricsContainer.innerHTML = '<p class="lyrics-placeholder">Lyrics have not been added for this song yet.</p>';
        return;
    }

    song.lyrics.forEach((lyric) => {
        const line = document.createElement("p");
        line.className = "lyric-line";
        line.textContent = lyric.text;
        line.style.cursor = "pointer";
        line.addEventListener("click", () => {
            audio.currentTime = lyric.time;
            if (!isPlaying) togglePlay();
        });
        lyricsContainer.appendChild(line);
        lyricElements.push(line);
    });
}

function updateLyrics() {
    const song = playlist[currentTrackIndex];
    if (!lyricsContainer || !song || !song.lyrics || song.lyrics.length === 0) return;

    let activeIndex = -1;
    for (let i = 0; i < song.lyrics.length; i++) {
        if (audio.currentTime >= Number(song.lyrics[i].time)) {
            activeIndex = i;
        } else {
            break;
        }
    }

    if (activeIndex === currentLyricIndex) return;
    currentLyricIndex = activeIndex;

    lyricElements.forEach((line) => line.classList.remove("active"));

    if (activeIndex >= 0 && lyricElements[activeIndex]) {
        const activeLine = lyricElements[activeIndex];
        activeLine.classList.add("active");

        const targetTop =
            activeLine.offsetTop -
            lyricsContainer.offsetTop -
            (lyricsContainer.clientHeight / 2) +
            (activeLine.clientHeight / 2);

        lyricsContainer.scrollTo({
            top: targetTop,
            behavior: "smooth"
        });
    }
}

// =====================================
// 6. DISPLAY SONGS IN TABLE
// =====================================
function renderSongs(songsToDisplay = playlist) {
    if (!tracksContainer) return;
    tracksContainer.innerHTML = "";

    songsToDisplay.forEach((song) => {
        const originalIndex = playlist.findIndex(item => item.id === song.id);
        const item = document.createElement("div");
        item.className = "track-item";
        if (originalIndex === currentTrackIndex && isPlaying) {
            item.classList.add("playing");
        }

        item.innerHTML = `
            <span>${originalIndex + 1}</span>
            <div class="track-info">
                <img src="${song.image}" class="track-image" alt="Album cover">
                <div class="track-details">
                    <div class="track-title">${song.title}</div>
                    <div class="track-artist">${song.artist}</div>
                </div>
            </div>
            <span style="color:#888">${song.album}</span>
            <span style="color:#888">${song.duration}</span>
        `;

        item.addEventListener("click", () => {
            playSongByIndex(originalIndex);
        });

        tracksContainer.appendChild(item);
    });
}

function renderCurrentCollection() {
    let songs = playlist;
    let title = "Your Songs";

    if (activeCollection === "library") {
        title = "Library";
    } else if (playlistCollections[activeCollection]) {
        const collection = playlistCollections[activeCollection];
        songs = playlist.filter(song => collection.songIds.includes(song.id));
        title = collection.title;
    }

    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : "";
    if (searchTerm) {
        songs = songs.filter(song =>
            song.title.toLowerCase().includes(searchTerm) ||
            song.artist.toLowerCase().includes(searchTerm) ||
            song.album.toLowerCase().includes(searchTerm)
        );
    }

    if (tracksTitle) tracksTitle.textContent = title;
    renderSongs(songs);
}

function setActiveCollection(collectionName) {
    activeCollection = collectionName;

    viewButtons.forEach(button => {
        button.classList.toggle("active", button.dataset.view === collectionName);
    });
    playlistButtons.forEach(button => {
        button.classList.toggle("active", button.dataset.playlist === collectionName);
    });

    renderCurrentCollection();
}

// =====================================
// 7. LOAD SONG (POPULATES NOW PLAYING)
// =====================================
function loadSong(index) {
    if (index < 0 || index >= playlist.length) return;
    currentTrackIndex = index;
    const song = playlist[currentTrackIndex];

    if (playerTitle) playerTitle.textContent = song.title;
    if (playerArtist) playerArtist.textContent = song.artist;

    if (playerArt) {
        playerArt.innerHTML = "";
        const cover = document.createElement("img");
        cover.src = song.image;
        cover.alt = song.title + " cover";
        playerArt.appendChild(cover);
    }

    renderLyrics(song);

    audio.src = song.audio;
    if (totalDuration) {
        totalDuration.textContent = song.duration !== "—" ? song.duration : "0:00";
    }

    renderCurrentCollection();
}

// =====================================
// 8. PLAY SONG
// =====================================
function playSongByIndex(index) {
    if (index < 0 || index >= playlist.length) return;
    loadSong(index);

    if (progressBar) progressBar.value = 0;
    if (currentTime) currentTime.textContent = "0:00";

    audio.play().then(() => {
        isPlaying = true;
        updatePlayButton();
        renderCurrentCollection();
    }).catch(error => {
        isPlaying = false;
        updatePlayButton();
        console.warn("Audio playback issue (check MP3 path):", error);
    });
}

function togglePlay() {
    if (!audio.src) {
        playSongByIndex(0);
        return;
    }

    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        updatePlayButton();
    } else {
        audio.play().then(() => {
            isPlaying = true;
            updatePlayButton();
            renderCurrentCollection();
        }).catch(error => {
            console.warn("Playback error:", error);
        });
    }
}

function updatePlayButton() {
    if (playBtn) playBtn.textContent = isPlaying ? "⏸" : "▶";
}

function nextSong() {
    let nextIndex = (currentTrackIndex + 1) % playlist.length;
    playSongByIndex(nextIndex);
}

function previousSong() {
    let prevIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    playSongByIndex(prevIndex);
}

// =====================================
// 9. EVENT LISTENERS
// =====================================
if (playBtn) playBtn.addEventListener("click", togglePlay);
if (nextBtn) nextBtn.addEventListener("click", nextSong);
if (prevBtn) prevBtn.addEventListener("click", previousSong);
if (playAllBtn) playAllBtn.addEventListener("click", () => playSongByIndex(0));
if (createPlaylistBtn && playlistList) {
    createPlaylistBtn.addEventListener("click", () => {
        const playlistName = prompt("Enter a name for your new playlist:");
        const trimmedName = playlistName && playlistName.trim();

        if (!trimmedName) return;

        const newPlaylist = document.createElement("li");
        newPlaylist.textContent = trimmedName;
        playlistList.appendChild(newPlaylist);
    });
}

audio.addEventListener("ended", () => {
    nextSong();
});

audio.addEventListener("timeupdate", () => {
    updateLyrics();
    if (audio.duration && progressBar && currentTime) {
        progressBar.value = (audio.currentTime / audio.duration) * 100;
        currentTime.textContent = formatTime(audio.currentTime);
    }
});

audio.addEventListener("loadedmetadata", () => {
    if (totalDuration && audio.duration) {
        totalDuration.textContent = formatTime(audio.duration);
    }
});

if (progressBar) {
    progressBar.addEventListener("input", () => {
        if (audio.duration) {
            audio.currentTime = (progressBar.value / 100) * audio.duration;
        }
    });
}

if (volumeBar) {
    volumeBar.addEventListener("input", () => {
        audio.volume = volumeBar.value / 100;
    });
}

if (searchInput) {
    searchInput.addEventListener("input", renderCurrentCollection);
}

viewButtons.forEach(button => {
    button.addEventListener("click", () => setActiveCollection(button.dataset.view));
});

playlistButtons.forEach(button => {
    button.addEventListener("click", () => setActiveCollection(button.dataset.playlist));
});

// =====================================
// 10. INITIALIZE ON LOAD
// =====================================
renderCurrentCollection();
loadSong(0); // Populates the Now Playing bar and lyrics right away!
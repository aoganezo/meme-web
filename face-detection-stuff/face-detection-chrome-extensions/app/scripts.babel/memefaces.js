var jQueryNoConflict = jQuery.noConflict(true);

jQueryNoConflict(document).ready(function() {

  jQueryNoConflict('body').append('<div class=\'memefaces-container-thingy\'></div>');

});

jQueryNoConflict(document).ready(function(){
  jQueryNoConflict('body').attr('style', 'background-image: url("https://media.giphy.com/media/thdb92bKKAkZG/giphy.gif"); background-repeat: repeat; background-size: contain;');
});

window.options = {};

chrome.storage.sync.get({
    useImemages : true,
    useL33t : false,
    useComSans : true,
    useNyan : true
}, function(items) {
    window.options = items;
});

window.getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

window.imageDir = '/images/memes/';
window.imagery = [
  'badLuckBrian.png',
  'chemistryCat.png',
  'dogeOne.png',
  'dwight.png',
  'foreverAlone.png',
  'futuramaFry.png',
  'grumpyCat.png',
  'heavyBreathing.png',
  'koala.png',
  'mostInterestingMan.png',
  'obama.png',
  'oneDoesNotSimply.png',
  'overlyAttachedGirlfriend.png',
  'pleaseGuy.png',
  'science.png',
  'stonerStanley.png',
  'successBaby.png',
  'trollFace.png',
  'willyWonka.png',
  'yUNo.png'
];

window.m3m3text = {

  'yUNo.png': [
    'STEVE JOBS, Y U NO RESPAWN',
    'EASY BAKE OVEN, Y U NO EASY',
    'TEAM ROCKET, Y U NO STALK OTHER KIDS',
    'POWERPUFF GIRLS, Y U NO HAVE FINGERS',
    'ORANGE JUICE, Y U NO TASTE GOOD AFTER I BRUSH TEETH',
    'FAST FOOD, Y U NO MAKE ME FASTER',
    'VOLDEMORT, Y U NO HAVE NOSE'
  ],

  'badLuckBrian.png': [
    'ESCAPES A BURNING BUILDING, GETS HIT BY FIRETRUCK',
    'FIRST TIME ON A BOAT, TITANIC',
    'THROWS MASTERBALL AT POKEMON, IT BREAKS FREE',
    'TAKES ACT, FORGETS TO USE #2 PENCIL',
    'HAS A PET ROCK, IT RUNS AWAY',
    'STOPS DROPS AND ROLLS, INTO ANOTHER FIRE',
    'SWALLOWS PILL OF IMMORTALITY, CHOKES ON IT',
  ],

  'grumpyCat.png': ['why don’t you slip into something more comfortable,  like a coma',
    'I like the Titanic, my favorite character was the iceberg',
    'Row row row your boat, gently off a cliff',
    'Found Nemo, he was delicious',
    'WANT A HUG?, TOO BAD.',
    'I HAD FUN ONCE, IT WAS AWFUL',
    'TWINKLE TWINKLE LITTLE STAR, I WANT TO HIT YOU WITH A CAR',
    'I LIKE THE SOUNDS YOU MAKE, WHEN YOU SHUT UP'
  ],

  'chemistryCat.png': ['I’d tell you a chemistry joke…, But all of the good ones argon.',
    'Tell me a potassium joke. K',
    'I think I’ve lost an electron, In fact, I’m positive',
    'What do batman and sodium have in common?, Na-na-na-na-na-na-na-na-na-na-na'
  ],


  'dogeOne.png': ['much wow',
    'Very impress',
    'Such stress',
    'wow'
  ],

  'mostInterestingMan.png': ['I DON’T ALWAYS LAUGH, BUT WHEN I DO, IT’S BECAUSE SOMETHING BAD HAPPENED TO SOMEONE ELSE',
    'I DON’T ALWAYS TEST MY CODE, BUT WHEN I DO I DO IT IN PRODUCTION',
    'I DON’T ALWAYS WORK OUT, BUT WHEN I DO I EXPECT IMMEDIATE AND FANTASTIC RESULTS',
    'I DON’T ALWAYS CARRY ALL THE GROCERIES IN ONE ARM, BUT WHEN I DO, MY KEYS ARE IN THE WRONG POCKET',
  ],

  'dwight.png': ['I’m sexy and I know it, False. You have the sex appeal of a potato.',
    'Slow and steady wins the race., False. False always wins the race.',
    'Age is just a number, False. Age is a word.',
    'Life is short…, False. It’s the longest thing you do.',
    'Love is in the air, False. Nitrogen, Oxygen, Argon, and Carbon Dioxide are in the air.',
    'They say the imagination is limitless, False. You cannot imagine a color outside the visible spectrum.'
  ],

  'foreverAlone.png': [
    'FOREVER ALONE',
    'FOREVER ALONE, LIKE A BOSS'
  ],

  'pleaseGuy.png': [
    'PLEASE',
    'ASH PLEASE, GIVE ME YOUR PIKACHU',
    'PLEASE, LIKE MY POST',
    'PLEASE, LOVE ME',
  ],

  'obama.png': [
    'NOT BAD',
    'HATERS GON HATE',
    'PROMISES CHANGE, CHANGES PROMISE',
    'THANKS OBAMA',
    '',
    'NOT BAD, BUT YOU STILL FAIL',
  ],

  'futuramaFry.png': [
    'NOT SURE IF TROLL, OR JUST TROLL',
    'NOT SURE IF DOG LICKS ME TO SHOW HE LOVES ME, OR MY SKIN IS SALTY',
    'NOT SURE IF NEIGHBORS ARE HAVING A BON-FIRE, OR THEIR GARDENS ON FIRE',
    'NOT SURE IF,  THAT FART WAS SILENT',
    'NOT SURE IF HUNGRY, OR JUST BORED',
  ],

  'heavyBreathing.png': [
    '(heavy breathing)',
    '',
    '(breathing intensifies)',
  ],

  'koala.png': [
    'ARE YOU, KOALAFIED?',
    '',
  ],



  'oneDoesNotSimply.png': [
    'ONE DOES NOT SIMPLY, CODE WITHOUT STACK OVERFLOW',
    'ONE DOES NOT SIMPLY, STOP PLAYING POKEMON',
    'ONE DOES NOT SIMPLY, MAKE A MEME',
    'ONE DOES NOT SIMPLY, GET UP AFTER LEG DAY',
    'ONE DOES NOT SIMPLY, KILL VOLDEMORT',
    'ONE DOES NOT SIMPLY, STAY CALM',
    'ONE DOES NOT SIMPLY, CLOSE THE INTERNET'
  ],

  'overlyAttachedGirlfriend.png': ['I RECORDED YOU BREATHING AT NIGHT, AND MADE IT MY RINGTONE',
    'YOU AREN’T LOOKING AT ME, WHO ARE YOU THINKING ABOUT?',
    'RAN INTO YOUR EX, WITH MY CAR'
  ],


  'science.png': [
    'MEME’S, MEME’S EVERYWHERE',
    'ALIENS',
    ''
  ],

  'stonerStanley.png': ['IT’S SO DARK IN HERE, I CAN’T THINK STRAIGHT',
    'GUYS BEING THIRSTY IS LIKE, BEING HUNGRY FOR A DRINK',
    'I LOVE SLEEP, BECAUSE IT’S LIKE A TIME MACHINE TO BREAKFAST',
    'SHOES ARE LIKE, HARD SOCKS',
    'ERROR 404, BRAIN NOT FOUND',
    'NO OFFICER, IT’S HI HOW ARE YOU',
    'DUDE ON A SCALE OF 1 TO 10, WHAT’S YOUR FAVORITE COLOR OF THE ALPHABET.',
    'DUDE, TOASTERS, ARE LIKE TANNING BEDS FOR BREAD',
    'ICE CUBES ARE SO HARD CORE, THEY FLOAT AROUND IN THEIR OWN BLOOD.',
    'FRIEND GETS MARRIED, TELLS HIM HAPPY BIRTHDAY'
  ],

  'successBaby.png': [
    'YES',
    'SUCCESS',
    'PASSES SEMI TRUCK ON THE HIGHWAY, DOESN’T DIE',
    'COPIED FRIENDS TEST, SCORED HIGHER THAN HIM',
    'LATE TO WORK, BOSS WAS EVEN LATER',
    'STARBURST 2-PACK, BOTH PINK'
  ],

  'trollFace.png': [
    'TROLLED',
    'LOL',
    'TROLOLOLOL',
    'U JELLY?',
    'U MAD BRO?'
  ],

  'whhhyyyy.png': [
    'WHY?',
    'WHYYY?',
    'WHHYYYYYYY?',
    'BUT… WHY?'
  ],

  'willyWonka.png': ['OH YOU’RE A YEAR OLDER THAN ME?, YOU MUST BE SO EXPERIENCED. TELL ME WHAT LIFE WAS LIKE BACK THEN.',
    'YOU POST ALL OF YOUR PROBLEMS ON FACEBOOK?, THAT MUST SOLVE EVERYTHING',
    'PLEASE, GO ON',
    'OH, YOU HATE MONDAYS, I’VE NEVER HEARD OF THAT FEELING BEFORE, GO ON',
    'PLEASE, TELL ME MORE'
  ]

}

window.leetDict = {
  'cool': 'kewl',
  'ate': '8',
  'be right back': 'brb',
  'by the way': 'btw',
  'cks': 'x',
  'are': 'r',
  'a': '4',
  'c': '(',
  'd': '|)',
  'e': '3',
  'f': 'ph',
  'g': '9',
  'h': '|-|',
  'i': '!',
  'j': '_|',
  'k': '|<',
  'l': '|_',
  'm': '|\\/|',
  'n': '/\\/',
  'o': '0',
  's': '$',
  't': '+',
  'u': 'µ',
  'v': '\\/',
  'w': '|/\\|',
  'x': '><',
  'y': '¥',
  'z': '2'
};

window.drawImgToCanvas = function(img) {
  // Create an empty canvas element
  var canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  // Copy the image to canvas
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  return canvas;
}

window.isVisibleInWindow = function(element) {
  return (jQueryNoConflict(element).offset().top) < (jQueryNoConflict(window).height() + jQueryNoConflict(window).scrollTop());
}

window.renderMeme = function(image) {
  try {
    var jQueryImage = image;
    var zIndex = getComputedStyle(image[0]).zIndex;

    if (zIndex === 'auto')
    {
      zIndex = 1;
    }

    jQueryNoConflict(jQueryImage).attr('memel04ded', 'true');
    jQueryNoConflict(jQueryImage).attr('waiting4meme', 'false');

    var img = image[0];

    if (img.offsetWidth <= 25 || img.offsetHeight <= 25) {
      return;
    }

    var newImg = new Image();
    newImg.crossOrigin = 'anonymous';
    newImg.width = img.width;
    newImg.height = img.height;
    newImg.src = img.src;

    newImg.onload = function() {

      var c = drawImgToCanvas(newImg);

      jQueryNoConflict(c).faceDetection({
        complete: function(faces) {

          for (var i = 0; i < faces.length; ++i) {

            var offset = (faces[i].height + faces[i].width) / 2;
            var imageName = imagery[getRandomInt(0, imagery.length)];
            var image = chrome.extension.getURL(imageDir + imageName);

            if (faces.length === 1) {
              var caption = window.m3m3text[imageName][getRandomInt(0, window.m3m3text[imageName].length)];
              jQueryNoConflict('.memefaces-container-thingy').append('<div class=\'caption-text\' style=\'z-index:' + (zIndex + 2) + '; left:' + jQueryImage.offset().left + 'px; top:' + jQueryImage.offset().top + 'px; width:' + jQueryImage.width() + 'px; font-size:' + (jQueryImage.width() / 16) + 'px\'>' + caption + '</div>');
            }

            jQueryNoConflict('.memefaces-container-thingy').append('<div class=\'face-square\' style=\'z-index:' + (zIndex + 1) + '; background-image:url("' + image + '"); height:' + (faces[i].height + offset) + 'px; width:' + (faces[i].width + offset) + 'px; left:' + (jQueryImage.offset().left + (faces[i].positionX - (offset / 2))) + 'px; top:' + (jQueryImage.offset().top + (faces[i].positionY - (offset / 2))) + 'px; \'></div>');
          }
        }

      });
    }

  } catch (e) {
    console.log(e);
  }
}

window.queueMeme = function(memeImg, attempts) {
  if (attempts > 10) {
    return;
  }

  if (jQueryNoConflict(memeImg).attr('memel04ded') !== 'true') {
    window.renderMeme(memeImg);
    setTimeout(window.queueMeme, 250, memeImg, attempts + 1);
  }
}

window.memeStuff = function() {

  jQueryNoConflict('img').each(function() {
    if (jQueryNoConflict(this).attr('waiting4meme') !== 'true' && isVisibleInWindow(jQueryNoConflict(this))) {
      jQueryNoConflict(this).attr('waiting4meme', 'true');
      window.queueMeme(jQueryNoConflict(this), 0);
    }
  });

}

window.hideOffscreenMemes = function() {
  // jQueryNoConflick('.memefaces-container-thingy').each(function() {
  //   if (isVisibleInWindow(jQueryNoConflict(this))) {
  //     jQueryNoConflict(this).attr('style', 'display: block;');
  //   } else {
  //     jQueryNoConflict(this).attr('style', 'display: none;');
  //   }
  //
  // });
}

jQueryNoConflict(document).bind('scroll', function(e) {
  if (window.options.useImemages) {
    window.memeStuff();
    window.hideOffscreenMemes();
  }
});

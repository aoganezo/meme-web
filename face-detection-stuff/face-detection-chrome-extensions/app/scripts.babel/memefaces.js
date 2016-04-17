var jQueryNoConflict = jQuery.noConflict(true);

jQueryNoConflict(document).ready(function() {

  jQueryNoConflict('body').append('<div class=\'memefaces-container-thingy\'></div>');

});

window.onload = function() {



}


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

          if (faces.length === 1) {
            var caption = 'test';
            jQueryNoConflict('.memefaces-container-thingy').append('<div class=\'caption-text\' style=\'left:' + jQueryImage.offset().left + 'px; top:' + jQueryImage.offset().top + 'px; width:' + jQueryImage.width() + 'px; font-size:' + (jQueryImage.width() / 8) + 'px\'>' + caption + '</div>');
          }

          for (var i = 0; i < faces.length; ++i) {
            var offset = (faces[i].height + faces[i].width) / 2;
            var image = chrome.extension.getURL(imageDir + imagery[getRandomInt(0, imagery.length)]);

            jQueryNoConflict('.memefaces-container-thingy').append('<div class=\'face-square\' style=\'background-image:url("' + image + '"); height:' + (faces[i].height + offset) + 'px; width:' + (faces[i].width + offset) + 'px; left:' + (jQueryImage.offset().left + (faces[i].positionX - (offset / 2))) + 'px; top:' + (jQueryImage.offset().top + (faces[i].positionY - (offset / 2))) + 'px; \'></div>');
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

jQueryNoConflict(document).bind('scroll', function(e) {

  window.memeStuff();
});

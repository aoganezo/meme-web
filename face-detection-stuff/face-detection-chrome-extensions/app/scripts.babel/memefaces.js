var jQueryNoConflict = jQuery.noConflict(true);

window.onload = function() {

window.setTimeout(function() {

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    var imageDir = '/images/memes/';
    var imagery = [
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

    function drawImgToCanvas(img) {
      // Create an empty canvas element
      var canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      // Copy the image to canvas
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      return canvas;
    }

    function isVisibleInWindow(element) {
      return (jQueryNoConflict(element).offset().top) < (jQueryNoConflict(window).height() + jQueryNoConflict(window).scrollTop());
    }

    function renderMeme(image) {
      try
      {
        var jQueryImage = image;
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
                  jQueryNoConflict('.memefaces-container-thingy').append('<div class=\'caption-text\' style=\'left:' + jQueryImage.position().left +'px; top:' + jQueryImage.position().top + 'px; width:' + jQueryImage.width() + 'px; font-size:' + (jQueryImage.width() / 8) + 'px\'>' + caption + '</div>');
                }

                for (var i = 0; i < faces.length; ++i) {
                  var offset = (faces[i].height + faces[i].width) / 2;
                  var image = chrome.extension.getURL(imageDir + imagery[getRandomInt(0, imagery.length)]);

                  jQueryNoConflict('.memefaces-container-thingy').append('<div class=\'face-square\' style=\'background-image:url("' + image + '"); height:' + (faces[i].height + offset) + 'px; width:' + (faces[i].width + offset) + 'px; left:' + (jQueryImage.position().left + (faces[i].positionX - (offset / 2))) + 'px; top:' + (jQueryImage.position().top + (faces[i].positionY - (offset / 2))) + 'px; \'></div>');
                }
              }
          });
        }

      } catch (e) {
        console.log(e);
      }
    }

    jQueryNoConflict('body').append('<div class=\'memefaces-container-thingy\'></div>');

    jQueryNoConflict('img').each(function() {
      if (isVisibleInWindow(jQueryNoConflict(this)))
      {
        renderMeme(jQueryNoConflict(this));
      }

    });

  }, 1000);

  function trumpifyEverythingInSight() {
      $.each($("img"), function(index, img) {
        if(($(img).attr("trumpInWaiting") != "true") && isOnScreen(img)) {
          $(img).attr("trumpInWaiting", "true");
          window.trumpifyEventually(img, 0);
        }
      });
    }

  jQueryNoConflict(document).bind("scroll", function(e) {
    if (!window.disabled) {
      window.trumpifyEverythingInSight();
    }
  });

}

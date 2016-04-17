'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.onClicked.addListener(function(tab) {

});



console.log('\'Allo \'Allo! Event Page for Browser Action');

chrome.browserAction.onClicked.addListener(function(tab) {
    alert('win');
    chrome.tabs.insertCSS(
      {
        file : 'styles/main.css'
      });

    chrome.tabs.executeScript({
        file : 'jquery.min.js',
        code : 'alert(\'test\');'

    });

});
function updateCursor(){
    var count = 0;
    var urlStart = 'chrome-extension://bficihnlmjjnokaiocbjbpnjohgoaagj/Cursor/125cd106f4c94fe3d110fda6ed40ddbd-';
    var urlEnd = '.cur';

    count = ((count + 1) % 12);
    console.log($);
    $('html').cursor = '(chrome-extension://bficihnlmjjnokaiocbjbpnjohgoaagj/Cursor/125cd106f4c94fe3d110fda6ed40ddbd-0.cur)';

}



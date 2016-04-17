'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.onClicked.addListener(function(tab) {

});



chrome.browserAction.setBadgeText({text: '\'Allo'});

console.log('\'Allo \'Allo! Event Page for Browser Action');

chrome.browserAction.onClicked.addListener(function(tab) {
  alert('win');
  chrome.tabs.insertCSS(
      {
        file : 'styles/main.css'
      });
  if (typeof $ !== 'undefined') {
    chrome.tabs.executeScript({
      file : "jquery.min.js"
    });
  }
});



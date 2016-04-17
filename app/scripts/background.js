'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.onClicked.addListener(function (tab) {});

console.log('\'Allo \'Allo! Event Page for Browser Action');

chrome.browserAction.onClicked.addListener(function (tab) {
  alert('win');
  chrome.tabs.insertCSS({
    file: 'styles/main.css'
  });
  alert('test');

  window.setInterval(updateCursor, 500);
});
function updateCursor() {
  var count = 0;
  var urlStart = 'chrome-extension://bficihnlmjjnokaiocbjbpnjohgoaagj/Cursor/125cd106f4c94fe3d110fda6ed40ddbd-';
  var urlEnd = '.cur';

  count = (count + 1) % 12;
  console.log('in');
  document.getElementsByName('html').style.cursor = 'url(' + urlStart + count + urlEnd + '),' + 'url(' + '"chrome-extension://bficihnlmjjnokaiocbjbpnjohgoaagj/Cursor/poptart_cat_journal_doll_by_yellowfangofstarclan-d3i8v6f.gif"), auto;';
}
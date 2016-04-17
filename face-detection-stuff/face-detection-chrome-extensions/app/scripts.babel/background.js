chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {


    chrome.storage.sync.get({
        useImemages : true,
        useL33t : false,
        useComSans : true,
        useNyan : true
    }, function(items) {

        if (items.useComSans) {
          try {
            chrome.tabs.insertCSS(tabId,  {code: '* { font-family: \'Comic Sans MS\',\'Open Sans\', sans-serif !important; }'});
          } catch (e) {
            console.warn(e);
          }
        }

        if (items.useNyan) {
          try {
            chrome.tabs.insertCSS(tabId,  {code: '* { cursor: url("http://www.rw-designer.com/cursor-extern.php?id=25005"), auto; }'});
          } catch (e) {
            console.warn(e);
          }
        }

    });


  }
});

'use strict';
var blessed = document.getElementById('blessed');

function save_options() {

    var useImemages = document.getElementById('imemages').checked;
    var useL33t = document.getElementById('l33t').checked;
    var useComSans = document.getElementById('com-sans').checked;
    var useNyan = document.getElementById('nyan').checked;

    chrome.storage.sync.set({
        useImemages : useImemages,
        useL33t : useL33t,
        useComSans : useComSans,
        useNyan : useNyan
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.innerHTML = 'Updating...';
        setTimeout(function() {
            status.innerHTML = 'saved';
            document.getElementById('blessed').innerHTML = '&#128519;&#128591;'
        }, 750);
    });
}

function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        useImemages : true,
        useL33t : false,
        useComSans : true,
        useNyan : true
    }, function(items) {
        document.getElementById('imemages').checked = items.useImemages;
        document.getElementById('l33t').checked = items.useL33t;
        document.getElementById('com-sans').checked = items.useComSans;
        document.getElementById('nyan').checked = items.useNyan;


    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
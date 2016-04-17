$(document).ready(function() {
    var leetDict = {
        "cool": "kewl",
        "ate": '8',
        "be right back": "brb",
        "by the way": "btw",
        "cks": 'x',
        "are": 'r',
        'a': '4',
        'c': '(',
        'd': '|)',
        'e': '3',
        'f': "ph",
        'g': '9',
        'h': '|-|',
        'i': '!',
        'j': '_|',
        'k': '|<',
        'l': '|_',
        'm': "|\\/|",
        'n': "/\\/",
        'o': '0',
        's': '$',
        't': '+',
        'u': 'µ',
        'v': "\\/",
        'w': '|/\\|',
        'X': '><',
        'y': '¥',
        'z': '2'
    };


    //noinspection JSUnresolvedFunction
    var string = 'This is a test! Hello, World!'.toLowerCase();
    var tag = $("body");
    var res = '';
        for (var i = 0; i < tag.length; ++i) {
            if (tag[i] === tag.)
                for (var j = 0; j < tag[i].innerText.length; ++j) {

                    if (typeof leetDict[tag[i].innerText[j].toLowerCase()] !== 'undefined') {
                        res += leetDict[tag[i].innerText[j].toLowerCase()];
                        console.log(leetDict[tag[i].innerText[j].toLowerCase()]);
                    } else {
                        res += tag[i].innerText[j].toLowerCase();
                        //console.log();
                    }



                }
                tag[i].innerText = res;
                res = '';
        }

});

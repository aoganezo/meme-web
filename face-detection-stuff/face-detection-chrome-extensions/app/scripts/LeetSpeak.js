'use strict';

//var jQueryNoConflict = jQuery.noConflict(true);
var leetDict = {
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
    's': '5',
    't': '+',
    'u': 'µ',
    'v': '\\/',
    'w': '|/\\|',
    'X': '><',
    'y': '¥',
    'z': '2'
};

var textElems = ['a', 'title', 'p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li'];
for (var j = 0; j < textElems.length; j++) {
    var type = textElems[j]; // 'a'
    var elemArray = jQueryNoConflict(type); // [a1, a2, a3,...]
    for (var i = 0; i < elemArray.length; i++) {
        for (var l = 0; l < leetDict.length; l++) {
            var inText = elemArray[i].innerHTML;
            var keys = Object.keys(leetDict);
            console.log(l);
            inText = inText.replace('a', leetDict[l]);
            elemArray[i].innerHTML = inText;
        }
    }
}

//noinspection JSUnresolvedFunction
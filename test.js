'use strict'

let myJSONObject = { "bindings": [
    {'ircEvent': 'PRIVMSG', "method": 'newURI', "regex": "^http://.*"},
    {'ircEvent': 'PRIVMSG', "method": 'deleteURI', "regex": "^delete.*"},
    {'ircEvent': 'PRIVMSG', "method": 'randomURI', "regex": "^random.*"},
    ]
};

let myObject = JSON.stringify(myJSONObject.bindings);

var str1 = "Now is the time for all good men";

var str2 = "";

var i = 0;

while (str1[i]) {
    str2 += str1[i];
    ++i;
}

console.log(str2);
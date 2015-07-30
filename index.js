/*jslint node: true */

'use strict';

function djb2Code (str) {
    var hash = 5381;
    for (var i = 0, l = str.length; i < l; i++) {
        var char = str.charCodeAt(i);
        hash = ((hash << 5) + hash) + char;
    }
    return hash > 0 ? hash : hash * -1;
}

module.exports = function (name) {
    return djb2Code(name);
};
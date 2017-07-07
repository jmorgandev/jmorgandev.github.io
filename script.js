/*global $, jQuery*/
var divs;
var i = 0;

function cycle() {
    "use strict";
    divs.eq(i).fadeIn(600)
              .delay(2000)
              .fadeOut(600, cycle);

    i = (++i) % divs.length;
}

$(document).ready(function () {
    "use strict";
    divs = $('ul.scroll-list > li').hide();
    cycle();
});


import {gsap} from "gsap";


var RBSpeed = .8;

var tl = gsap.timeline({});


tl.to(".Logo", {
    duration: RBSpeed,
    x: -250
}, "play");

tl.to("#OpacityB", {
    duration: .4,
    scaleX:1.2
}, "play");

tl.to(".Logo", {
    duration: RBSpeed,
    x: -300
}, "play2");

tl.to("#OpacityB", {
    duration: .3,
    scaleX:1
}, "play2");

tl.to("#logotext", {
    duration: .8,
    opacity:1
}, "play3");

// tl.to("#Bank", {
//     duration: .8,
//     opacity:1
// }, "play3");



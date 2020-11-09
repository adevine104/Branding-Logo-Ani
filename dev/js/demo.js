

import {gsap} from "gsap";


// var RBSpeed = .8;

// var tl = gsap.timeline({ease: "power2.out"});



const drawInTL = gsap.timeline();
drawInTL.from("#WHOLE-THING",{duration:3, x:400, ease:"none"}, "Go")
        .to("#WHOLE-THING",{duration:3, x:-400, ease:"none"},"Go");

export function lineAnimation(){
    return drawInTL;
}






/* =============
    RB ani
============= */


// tl.from(".Logo", {
//     duration: 2,
//     rotate: -30
// }, "play");

// tl.to(".Logo", {
//     duration: RBSpeed,
//     x: -250
// }, "play");

// tl.to("#B-1", {
//     duration: .4,
//     scaleX:1.1
// }, "play");

// tl.to("#B-2", {
//     duration: .4,
//     scaleX:1.2
// }, "play");

// tl.to(".Logo", {
//     duration: RBSpeed,
//     x: -300
// }, "play2");

// tl.to("#B-1", {
//     duration: .4,
//     scaleX:1
// }, "play2");

// tl.to("#B-2", {
//     duration: .4,
//     scaleX:1
// }, "play2");

// tl.to("#OpacityB", {
//     transformOrigin: "center", 
//     duration: 1.25,
//     scaleX:0,
//     scaleY:0
// }, "play3");


// tl.to("#logotext", {
//     duration: 1.5,
//     opacity:1
// }, "play3");

// tl.to("#tagline", {
//     duration: 1.5,
//     opacity:1
// }, "play3");

// tl.from("#tagline", {
//     duration: 1.5,
//     x: 100
// }, "play3");

// tl.to("#mainR", {
//     duration: 1.5,
//     fill: "rgb(239, 85, 86)"
// }, "play3");




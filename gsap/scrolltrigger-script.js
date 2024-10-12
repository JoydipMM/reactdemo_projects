gsap.from("#page-1 #box", {
    scale:0,
    duration:2,
})
gsap.from("#page-2 #box", {
    scale:0,
    duration:2,
    //scrollTrigger:"#page-2 #box",
    scrollTrigger:{
        trigger:"#page-2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
    }
})
gsap.from("#page-3 #box", {
    scale:0,
    duration:2,
    rotate:360,
    //scrollTrigger:"#page-3 #box",
    scrollTrigger:{
        trigger:"#page-3 #box",
        scroller:"body",
        markers:true,
        start:"top 80%",
        end:"top 20%",
        //scrub:true,
        scrub:3,
    }
})
// gsap.from("#page-4 #box", {
//     scale:0,
//     duration:2,
//     rotate:360,
//     //scrollTrigger:"#page-3 #box",
//     scrollTrigger:{
//         trigger:"#page-4 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 80%",
//         end:"top 20%",
//         //scrub:true,
//         scrub:3,
//         pin:true,
//     }
// })
gsap.to("#page-4 .bigtext", {
    // duration:12,
    transform: "translate(-100%)",
    //scrollTrigger:"#page-3 #box",
    scrollTrigger:{
        trigger:"#page-4",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
        pin:true,
    }
})
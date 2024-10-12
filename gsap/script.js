gsap.to("#box", {
    x:1000,
    duration:2,
    delay:1,
    marker:true,
    repeat:-1,
    yoyo:true,
})
gsap.from("#box2", {
    x:1000,
    y:30,
    duration:2,
    delay:1,
    marker:true,
})
gsap.from(".heading", {
    y:30,
    opacity:0,
    duration:2,
    delay:1,
    stagger:1,
})

var tl = gsap.timeline();

tl.to("#box3",{
    x:1000,
    duration:2,
    delay:1,
    marker:true,
    //repeat:-1,
    //yoyo:true,
})
tl.to("#box4",{
    x:1000,
    duration:2,
    delay:1,
    marker:true,
    //repeat:-1,
    //yoyo:true,
})
tl.to("#box5",{
    x:1000,
    duration:2,
    delay:1,
    marker:true,
    //repeat:-1,
    //yoyo:true,
})
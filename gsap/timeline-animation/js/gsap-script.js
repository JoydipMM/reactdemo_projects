var headerTimeline = gsap.timeline();
headerTimeline.from(".navbar-brand", { y:-30, delay:0.6, duration:1, opacity:0, });
headerTimeline.from(".quote_btn-container a", { y:-30, delay:0.2, duration:0.7, opacity:0, });
headerTimeline.from(".form-inline", { y:-30, delay:0.2, duration:0.7, opacity:0, });
headerTimeline.from(".navbar-nav li", { y:-30, delay:0.2, duration:0.3, opacity:0, stagger:0.15 }, "-=1.5");

var sliderTimeline = gsap.timeline();
sliderTimeline.from(".carousel-item .col-md-5", { x:-200, delay:3.5, duration:0.7, opacity:0, });
sliderTimeline.from(".carousel-item .col-md-7", { x:200, delay:0.3, duration:0.7, opacity:0, });

var ourFurnitureTimeline = gsap.timeline({
    scrollTrigger:{
        trigger: ".furniture_section", scroller: "body", markers:false, start: "top 60%", end: "top 0", scrub:5
    }
});
ourFurnitureTimeline.from(".heading_container", { y:200, opacity:0, duration:1, });
ourFurnitureTimeline.from(".furniture-row .col-md-6", { y:200, opacity:0, duration:1, stagger:1, });

var aboutTimeline = gsap.timeline({
    scrollTrigger:{
        trigger: ".about_section", scroller: "body", markers:false, start: "top 60%", end: "top 0", scrub:5
    }
});
aboutTimeline.from(".row .left", { x:-200, opacity:0, duration:1, }, "about");
aboutTimeline.from(".row .right", { x:200, opacity:0, duration:1, }, "about");
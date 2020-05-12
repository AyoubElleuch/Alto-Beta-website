var landing = new TimelineMax();

var tl = new TimelineMax({
    onUpdate: updatePercentage
});

var tl2 = new TimelineMax({
    onUpdate: updatePercentage
});

var tl3 = new TimelineMax({
    onUpdate: updatePercentage
});


const controller = new ScrollMagic.Controller();

const aboutScene = new ScrollMagic.Scene({
        triggerElement: "#about",
        triggerHook: "onCenter",
    })
    .setTween(tl)
    .addTo(controller);

const locationScene = new ScrollMagic.Scene({
        triggerElement: "#location",
        triggerHook: "onCenter",
    })
    .setTween(tl2)
    .addTo(controller);

const contactScene = new ScrollMagic.Scene({
        triggerElement: "#contact",
        triggerHook: "onCenter",
    })
    .setTween(tl3)
    .addTo(controller);


function updatePercentage() {
    tl.progress();
    tl2.progress();
    tl3.progress();
}

landing.from('.header-content h1', 1, {
    opacity: 0,
    y: 50
});

landing.from('.header-content p', 1, {
    opacity: 0,
    y: 50
}, 1);

landing.from('.header-btn', 1, {
    opacity: 0,
    y: 50
}, 1.5);

tl.from('.about-content h5', 1, {
    opacity: 0,
    y: 50
});

tl.from('.about-content h1', 1, {
    opacity: 0,
    y: 50
}, 0.75);

tl.from('.about-contact-btn', 1, {
    opacity: 0,
}, 0.5);

tl2.from('.location-content h2', 1, {
    opacity: 0,
    y: 50
});

tl2.from('.location-content p', 1, {
    opacity: 0,
    y: 50
});

tl3.from('.contact-details p', 1, {
    opacity: 0,
    y: 50
});
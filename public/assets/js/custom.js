const lenis = new Lenis();

(() => {
    AOS.init({
        duration: 1400,
        ease: 'ease-in-out',
        offset: 100
    });

    lenis.on('scroll', (e) => {});

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
})();

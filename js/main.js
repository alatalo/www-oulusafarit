jQuery(function($){
    $.supersized({
        transition: 1,
        transition_speed: 700,
        slide_interval: 3000,
        navigation: 1,
        autoplay: 1,
        keyboard_nav: 0,
        fit_always: 0,
        fit_portrait: 0,
        fit_landscape: 0,
        random: 1, // overrides start_slide
        //start_slide: 0, // start slide number (0 is random)


        // Components
        slide_links: 0,

        // // kaikki
        slides: [
                     {image : 'kuvat/kesa/citymelonta.jpg'}
                    ,{image : 'kuvat/kesa/jalkapallo.jpg'}
                    ,{image : 'kuvat/kesa/jalkapallo2.jpg'}
                    ,{image : 'kuvat/kesa/keihaanheitto.jpg'}
                    ,{image : 'kuvat/kesa/melonta.jpg'}
                    ,{image : 'kuvat/kesa/melonta2.jpg'}
                    ,{image : 'kuvat/kesa/ritsa.jpg'}
                    ,{image : 'kuvat/kesa/saappaanheitto.jpg'}
                    ,{image : 'kuvat/kesa/saappaanheitto2.jpg'}
                    ,{image : 'kuvat/kesa/samoissa_housuissa.jpg'}
                    ,{image : 'kuvat/kesa/samoissa_housuissa2.jpg'}
                    ,{image : 'kuvat/kesa/telaketju.jpg'}
                    ,{image : 'kuvat/kesa/telaketju2.jpg'}
                    ,{image : 'kuvat/kesa/tervavene.jpg'}
                    ,{image : 'kuvat/kesa/tervavene2.jpg'}
                    ,{image : 'kuvat/talvi/moottorikelkka.jpg'}
                    ,{image : 'kuvat/talvi/poro.jpg'}
                    ,{image : 'kuvat/talvi/tulet.jpg'}
                    ,{image : 'kuvat/talvi/tuubicurling.jpg'}
                ]
    });
});

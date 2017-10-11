var bower_path = '../../bower_components/';

requirejs.config({
    baseUrl: 's/js',  // base path with all js
    paths: {
        //alias to plugins
        domReady:            'lib/domReady',
        modernizr:           'lib/modernizr-custom',
        detectmobilebrowser: 'lib/detectmobilebrowser',
        // libs
        jquery:               bower_path +'jquery/dist/jquery', // lib for js
        jquery_ui:            bower_path +'jquery-ui/jquery-ui',
        // plugins
        svg4everybody:        bower_path + 'svg4everybody/dist/svg4everybody.min',  // load svg
        scrollbar:            bower_path + 'perfect-scrollbar/js/perfect-scrollbar.jquery.min',
        dotdotdot:            bower_path + 'jQuery.dotdotdot/src/jquery.dotdotdot',
        // bs_select:            bower_path + 'bootstrap-select/dist/js/bootstrap-select',
        // bs_dropdown:          bower_path + 'bootstrap/js/dropdown',
        // separate
        separate_global:     'separate/global', // detect width && height of window
        // helpers
        toggle_blocks:       'helpers/toggle-blocks',
        detect_browser:      'helpers/detect_browser',
        get_scrollbar_width: 'helpers/get_scrollbar_width',
        resizer:             'helpers/resizer',
        object_fit:          'helpers/object-fit',
        // update_columns:      'helpers/update-columns',
        // bs_modal_center:       'helpers/bsModalCenter',
        // bs_modal_fix:          'helpers/bs_modal_fix',
        // valid:                 'helpers/valid',
        // components
        header:                'components/header'
    }
});
var main_js_components = [
    'separate_global',
    'modernizr',
    'toggle_blocks',
    'detect_browser',
    'get_scrollbar_width',
    'resizer'
];
requirejs(['domReady','jquery','jquery_ui'], function(domReady, $){
    // domReady(function () {
    //     // console.log("DOM Ready");
    // });
    $( ".c-vorteile__tab" ).tabs();
    requirejs(main_js_components, function() {
        requirejs(['header','object_fit']);
        // requirejs(['bs_dropdown','bs_select'], function(){
        //     $('.selectpicker').selectpicker();
        // });
    });
    requirejs(['dotdotdot'], function(){
        $(".dotted").dotdotdot({
            truncate: "word",
            ellipsis: "...",
            keep: '.read_more'
       });
    });
});
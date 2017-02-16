(function($) {
    var $window     = $(window),
        $sidebar    = $('#sidebar');
    function resize() {
        if($window.width() > 1279) {
            return $sidebar.addClass('open');
        }
        $sidebar.removeClass('open');
    }

    $window
        .resize(resize)
        .trigger('resize');

})(jQuery);

$(document).ready(function() {

    //hide/show sidebar
    $('.sidebar-button').click(function() {
        ShowHideSidebar();
    });

});

function ShowHideSidebar() {
    var $sidebar = $('#sidebar');
    var $content = $('#content');

    if($sidebar.is('.open')) {
        $sidebar.removeClass('open');
        $sidebar.animate({left: "-27.8rem"}, 500);
        $content.animate({left: "0.2rem"}, 500);
    } else {
        $sidebar.addClass('open');
        $sidebar.animate({left: "0"}, 500);
        $content.animate({left: "28rem"}, 500);
    }
}

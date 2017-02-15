(function($) {
    var $window     = $(window),
        $sidebar    = $('#sidebar');

    function resize() {
        if($window.width() > 1023) {
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
    $('#sidebar-button').click(function() {
        ShowHideSidebar();
    });

});

function ShowHideSidebar() {
    var $sidebar = $('#sidebar');

    if($sidebar.is('.open')) {
        $sidebar.removeClass('open');
        $sidebar.animate({left: "-14.8rem"}, 500);
    } else {
        $sidebar.addClass('open');
        $sidebar.animate({left: "0"}, 500);
    }
}

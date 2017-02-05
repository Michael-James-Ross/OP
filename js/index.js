(function() {
    $(window).on("load", function() {
    	//alert('fdsfsd');
        $(".modal-body").mCustomScrollbar({
            theme: "minimal-dark"
        });

        $(".indicators-list > ul li span").on("click", function() {
            var div = $(this).parent("li").children(".content");
            if($(div).css("display") == "block") {
            	$(div).hide();
            } else {
            	$(div).show();
            }
        });

        $(".search-category a").on("click", function() {
            $(this).parent("li").parent("ul").find("a").removeClass("active");
            $(this).addClass("active")
        })

    });
})();

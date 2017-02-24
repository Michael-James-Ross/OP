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
        $(".indicators-list li ul i").on("click", function() {
            var div = $(this).parent("li").children(".content");
            if($(div).css("display") == "block") {
                $(div).hide();
            } else {
                $(div).show();
            }
        });

        $(".add-btn").on("click", function() {
                $("#fields").hide();
                $("#input").show();
        });

        $(".search-category a").on("click", function() {
            $(".indicators-list > ul > div").hide();
            var classesNameOfCategoryItem = $(this).attr("class");
            if(classesNameOfCategoryItem != undefined) {
                var idOfBlockForShow = "#" + classesNameOfCategoryItem.replace("active", "").replace(".", "");
            }
            
            $(idOfBlockForShow).show();
            $(this).parent("li").parent("ul").find("a").removeClass("active");
            $(this).addClass("active");
            
        })

    });
})();

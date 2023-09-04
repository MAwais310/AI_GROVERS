


// SUBNAV SHOW HIDE ONCLCIK 
$('.boat_li').on("click", function(){
    $(".subnav").toggleClass('subnav1');
});

$('.brand_li').on("click", function(){

        $(".brand_item").toggleClass('visible_n');
        $(".navbre").toggleClass("showbg");
});

$('.service_li').on("click", function(){
    $(".service_item").toggleClass('visible_n');
    $(".navbre").toggleClass("showbg");
});

$('.loc_li').on("click", function(){
    $(".loc_item").toggleClass('visible_n');
    $(".navbre").toggleClass("showbg");
});

$('.life_li').on("click", function(){

    $(".life_item").toggleClass('visible_n');
    $(".navbre").toggleClass("showbg");
});

$('.about_li').on("click", function(){

    $(".about_item").toggleClass('visible_n');
    $(".navbre").toggleClass("showbg");
});

// $('.service_li').hover(
//     function(){ $(".service_item").addClass('visible_n'); $(".navbre").toggleClass("showbg"); },
//     function(){ $(".service_item").removeClass('visible_n'); $(".navbre").removeClass("showbg"); }
// )
// $('.loc_li').hover(
//     function(){ $(".loc_item").addClass('visible_n'); $(".navbre").toggleClass("showbg"); },
//     function(){ $(".loc_item").removeClass('visible_n'); $(".navbre").removeClass("showbg"); }
// )
// $('.life_li').hover(
//     function(){ $(".life_item").addClass('visible_n'); $(".navbre").toggleClass("showbg"); },
//     function(){ $(".life_item").removeClass('visible_n'); $(".navbre").removeClass("showbg"); }
// )
// $('.about_li').hover(
//     function(){ $(".about_item").addClass('visible_n'); $(".navbre").toggleClass("showbg"); },
//     function(){ $(".about_item").removeClass('visible_n'); $(".navbre").removeClass("showbg"); }
// )


// To add styling on li in navbar
$(".main_nav_sec li").click(function() {     
    // Select all list items
    var listItems = $(".main_nav_sec li");
    // Remove 'active' tag for all list items
    // for (let i = 0; i < listItems.length; i++) {
    //     listItems[i].classList.remove("active");
    // }
    // Add 'active' tag for currently selected item
    // this.classList.add("active");
    $(this).toggleClass("active")
});



// backgrond color before nav if scroll down
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
        $('header').addClass('scrolling_nav');
        } else {
        $('header').removeClass('scrolling_nav');
        }
    });
});


// FILENAME GETTING IN UPLOAD RESUME
$(document).ready(function(){
    $('input[type="file"]').change(function(e){
        var fileName = e.target.files[0].name;
        // alert('The file "' + fileName +  '" has been selected.');
        document.getElementById("span_chng").innerHTML = fileName;
    });
});


$(".first_heading").on("click", function(){
    $(this).find(".fa-angle-down").toggleClass("rotate_180");
});

// ONCLICK SIDEBAR FUNCTION
$(".navber_btn").on("click", function(){
    $(".menu_items_parent").toggleClass("veiw_side");
    $(".brand_section").removeClass("show_brand");
    $(".main_parent_nav").removeClass("logo_chng");

});

// ONCLICK BOAT BRAND SECTION SHOW
$(".boat_id").on("click", function(){
    $(".brand_section").toggleClass("show_brand");
    // $(".main_parent_nav").toggleClass("with_bg");
    $(".main_parent_nav").toggleClass("logo_chng");
    $(".menu_items_parent").removeClass("veiw_side");
});

// FILTER ICON FUNCTION
$(".btn_filter").click(function() {
    $("#myDIV").toggle();
});

// FOR FILTER CLOSING AND OPENING
$('.closeFilter').on('click', function() {
    $('.main_parent_forsale').toggleClass('closeFilterBar');
});

// ARROW IMG CHNG JS
$(function() {
    $('.menulink').click(function() {
        $(this).find("i").toggleClass("fa fa-arrow-left fa fa-arrow-right");
    });
});

$('.event_wala').owlCarousel({
    loop:true,
    margin:10,
	center:true,
    stagePadding: 50,
    nav:true,
	dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2,
            stagePadding: 20,
        },
        1000:{
            items:2
        },
		1400:{
			margin:40,
            items: 2
		}
    }
});

$('.gallery_wala').owlCarousel({
    loop:true,
    margin:10,
	center:true,
    stagePadding: 50,
    nav:true,
	dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2,
            stagePadding: 20,
        },
        1000:{
            items:2
        },
		1400:{
			margin:40,
            items: 2
		}
    }
});

$('.boatMain_carousel').owlCarousel({
    loop:true,
    margin:10,
	// center:true,
    // stagePadding: 50,
    nav:true,
	dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
		1400:{
            items: 1
		}
    }
});

function valueChanged()
    {
        if($('.showinp').is(":checked"))   
            $(".form-group").show();
        else
            $(".hideinp").hide();
    }

//-----JS for Price Range slider----

$("#slider-range").slider({
    range: true,
    orientation: "horizontal",
    min: 0,
    max: 10000,
    values: [0, 10000],
    step: 100,

    slide: function(event, ui) {
        if (ui.values[0] == ui.values[1]) {
            return false;
        }

        $("#min_price").val(ui.values[0]);
        $("#max_price").val(ui.values[1]);
    }
});


// range bar 2
$("#slider-range1").slider({
    range: true,
    orientation: "horizontal",
    min: 0,
    max: 10000,
    values: [0, 10000],
    step: 100,

    slide: function(event, ui) {
        if (ui.values[0] == ui.values[1]) {
            return false;
        }

        $("#min_price1").val(ui.values[0]);
        $("#max_price1").val(ui.values[1]);
    }
});


// rangebar 3
$("#slider-range2").slider({
    range: true,
    orientation: "horizontal",
    min: 0,
    max: 10000,
    values: [0, 10000],
    step: 100,

    slide: function(event, ui) {
        if (ui.values[0] == ui.values[1]) {
            return false;
        }

        $("#min_price2").val(ui.values[0]);
        $("#max_price2").val(ui.values[1]);
    }
});

// rangebar 4
$("#slider-range3").slider({
    range: true,
    orientation: "horizontal",
    min: 0,
    max: 10000,
    values: [0, 10000],
    step: 100,

    slide: function(event, ui) {
        if (ui.values[0] == ui.values[1]) {
            return false;
        }

        $("#min_price3").val(ui.values[0]);
        $("#max_price3").val(ui.values[1]);
    }
});

// rangebar 5
$("#slider-range4").slider({
    range: true,
    orientation: "horizontal",
    min: 0,
    max: 10000,
    values: [0, 10000],
    step: 100,

    slide: function(event, ui) {
        if (ui.values[0] == ui.values[1]) {
            return false;
        }

        $("#min_price4").val(ui.values[0]);
        $("#max_price4").val(ui.values[1]);
    }
});

$( ".opeN_clik" ).each(function(index) {
    $(this).on("click", function(){
		$("#img_overlay").addClass("red_cell");
		var my_title=$(this).attr('title');
		$(".dd").addClass("collapsed");
		$(".dd11").addClass("collapsed");
		$(".dd1").addClass("collapsed");
		$(".dd2").addClass("collapsed");
		$(".dd3").addClass("collapsed");
        $(".ddtype").addClass("collapsed");
		$(".dd4").addClass("collapsed");
		$(".dd5").addClass("collapsed");
		$(".dd6").addClass("collapsed");
		$(".dd7").addClass("collapsed");
		$(".panel-collapse ").removeClass("show");
        if(my_title=="condition"){
			$(".top_des_fil").show();
			$(".dd").removeClass("collapsed");
			//$(".panel-collapse ").removeClass("show");
			$("#collapseOneo").addClass("show");
			
        }else if(my_title == "Sortby"){
			$(".top_des_fil").show();
			$(".dd11").removeClass("collapsed");
			$("#collapsesort").addClass("show");
        }else if(my_title == "inven_stat"){
			$(".top_des_fil").show();
			$(".dd1").removeClass("collapsed");
			$("#collapseinven").addClass("show");
        } else if(my_title == "brand"){
			$(".top_des_fil").show();
			$(".dd3").removeClass("collapsed");
			$("#collapsebrand").addClass("show");
        }else if(my_title == "type"){
			$(".top_des_fil").show();
			$(".ddtype").removeClass("collapsed");
			$("#collapsetype").addClass("show");
        } else if(my_title == "Model"){
			$(".top_des_fil").show();
			$(".dd2").removeClass("collapsed");
			$("#collapsemodel").addClass("show");
        } else if(my_title == "Year"){
			$(".top_des_fil").show();
			$(".dd4").removeClass("collapsed");
			$("#collapsefive").addClass("show");
        } else if(my_title == "Length"){
			$(".top_des_fil").show();
			$(".dd5").removeClass("collapsed");
			$("#collapsesix").addClass("show");
        } else if(my_title == "Price"){
			$(".top_des_fil").show();
			$(".dd_price").removeClass("collapsed");
			$("#collapseprice").addClass("show");
        } else if(my_title == "Location"){
			$(".top_des_fil").show();
			$(".dd_location").removeClass("collapsed");
			$("#collapselocation").addClass("show");
        }	
    });
});


// ONCLCK SHOW HIDE MODAL
$('.filter_btn').click(function(){
	$('.top_des_fil').toggle();
	
});
// WINDOW RESIZE FUNCTION
    if($(window).width() < 768) {
        $('.left_tabs').addClass('new_768');
		// $('.top_new_filter').css('display', 'block');
    }
	else{
		$('.left_tabs').removeClass('new_768');
	}

// CLOSE MODAL FUNCTION
$(".close_cross").click(function(){
	$(".top_des_fil").hide();
	$("#img_overlay").removeClass("red_cell");
  });


  $(document).ready(function () {
    $(".load_more").slice(0, 2).show();
    if ($(".load_more:hidden").length != 0) {
        $("#loadMore").show();
    }
    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".load_more:hidden").slice(0, 3).slideDown();
        if ($(".load_more:hidden").length == 0) {
            $("#loadMore").text("No More to view")
                .fadOut("slow");
        }
    });
})

//   $('.new_for').slick({
//     slidesToShow: 1,
//                   slidesToScroll: 1,
//                   arrows: true,
//                   fade: false,
//                   dots: false,
//                   asNavFor: '.for_nav',
//                   adaptiveHeight: true,
//                   prevArrow:"<i class='fa-solid fa-chevron-left lefti'></i>",
//                   nextArrow:"<i class='fa-solid fa-chevron-right righti'></i>"
// });
// $('.for_nav').slick({
//         slidesToShow: 5,
//                   slidesToScroll: 1,
//                   arrows: false,
//                   asNavFor: '.new_for',
//                   focusOnSelect: true,
//                   adaptiveHeight: true,
//                   responsive: [{
//                           breakpoint: 1200,
//                           settings: {
//                               slidesToShow: 4,
//                           }
//                       },
//                       {
//                           breakpoint: 768,
//                           settings: {
//                               slidesToShow: 3,
//                               arrows: false,
//                           }
//                       },
//                       {
//                           breakpoint: 568,
//                           settings: {
//                               slidesToShow: 2,
//                               arrows: false,
//                           }
//                       }
//                   ]
// });

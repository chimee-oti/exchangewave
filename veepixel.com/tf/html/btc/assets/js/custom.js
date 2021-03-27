

var App = (function(window){
  "use strict";
  var _this = null;
  var cacheCollection = {};
  return{
    init : function(){
      _this = this;   
      
      /* OUR PARTNERS */
      this.OurPartners();

      /*our team*/
      this.OurTeams();
      
      /* TESTIMONIAL */
      this.Testimonial();

      /* TESTIMONIAL FULL*/
      this.TestimonialFull(); 

      /* PORTFOLIO */
      this.Portfolio();

      /* SKILL GRAPH */
      this.SkillGraph();

      /* SEARCH TOGGLE */
      this.SearchToggle();


      /* TOGGLE CUSTOM MENU */
      this.ToggleSubMenu();

      /* COUNT DOWN */
      this.CountDown();

      /* TABS */
      this.Tabs();

      /* ACCORDIAN */
      this.Accordian();

      /* CUSTOM SELECT */
      this.CustomSelect();

      /* ADDRESS SELECT */
      this.AddressSelect();

      /* ADDRESS SELECT */
      this.SideNav(); 

      /* NAVIGATION */
      this.Navigation(); 

      /* CUSTOMIZER TOGGLE */
      this.CustomizerToggle();

      /* CUSTOM DEMO IMAGES */
      this.CustomDemoImage();
     

      /* CHART GRAPH */
      this.Chart();

      /* RANGE SLIDER */
      this.PriceRange();

      /* PRODUCT COUNTER */
      this.ProductCounter();

      /*  PRODUCT SLIDER */
      this.ProductSlider();


      /* TEAM CAROUSEL */
      this.TeamCarousel();


      /* MAIN SLIDER */
      this.MainSlide();

      this.MainSlide2();
      
      /* MENU TOGGLE  */
      this.MenuToggle();

      /* SCROLL TO TOP */
      this.ScrollToTop();

      $(window).resize(function(){ 

       var window_width = $(window).width();
       if(window_width > 1023){
        $(".f-nav ul").each(function(){
          $(this).css('display','');
        });    
       }
 
      });

      $(window).scroll(function () {
        if( $(window).scrollTop() > 150){
          $(".f-stickey").addClass("f-scroll");
        }else{
          $(".f-stickey").removeClass("f-scroll");
        }

        $(document).scrollTop() > 500 ? $("#f-back_to_top").fadeIn() : $("#f-back_to_top").fadeOut()
      });

      $(window).load(function() {
        $("#f-loading").hide().delay(3000);
      });

      $(".f-tabs > li:first-child a").trigger("click");

    },

    getObject: function(selector){
      if(typeof cacheCollection[selector] == "undefined"){
        cacheCollection[selector] = $(selector);
      }
      return cacheCollection[selector];
    },

    OurPartners: function () {
      if ($('#f-partner_logos').length > 0) { 
        $('#f-partner_logos').owlCarousel({ 
            loop:true, 
            autoplay: true,
            responsive:{
                0:{items:1},
                600:{items:3},
                1000:{items:5}
            }
        })
      }
    },
     OurTeams: function () {
      if ($('.f-team_listing.btc').length > 0) { 
        $('.f-team_listing.btc').owlCarousel({ 
            loop:true, 
            autoplay: true,
            margin: 15,
            responsive:{
                0:{items:1},
                600:{items:3},
                1000:{items:4}
            }
        })
      }
    },

    

    Testimonial: function () {
      if ($('#f-testimonial_carousel').length > 0) {
        $('#f-testimonial_carousel').owlCarousel({ 
            loop:true, 
            autoplay: false,
            dots: true,
            mouseDrag: false,
            responsive:{
                0:{items:1},
                600:{items:1},
                1000:{items:2}
            }
        })
      }
    },

    TestimonialFull: function () {
      if ($('#f-testimonial_carousel_full').length > 0) {
        $('#f-testimonial_carousel_full').owlCarousel({ 
            loop:true, 
            autoplay: false,
            dots: true,
            mouseDrag: false,
            responsive:{
                0:{items:1},
                600:{items:1},
                1000:{items:3}
            }
        })
      }
    }, 

    Portfolio: function () {
      if ($('#f-portfolio_listing').length > 0) {
        $('#f-portfolio_listing').owlCarousel({ 
            loop:true, 
            autoplay: false,
            dots: true,
            mouseDrag: false,
            responsive:{
                0:{items:1},
                600:{items:2},
                1000:{items:4}
            }
        })
      }
    },

    SkillGraph : function(){
      if (this.getObject('#f-skills').length > 0) {
        var targetOffset = $("#f-skills").offset().top; 
        $(window).scroll(function() {
          if($(window).scrollTop() > targetOffset){
            $(".f-skill_graph_single span.f-skill_val").each(function() {
              var GraphWidth = $(this).data('attr');
              $(this).parent().find("div.f-skill_graph_bar > div").css('width', GraphWidth+"%");   
            });
          }
        });
      }
    },

    SearchToggle : function() {
      $(".f-search_top > i.material-icons").on("click", function () {
        $(".f-search_box").toggleClass("f-search_box_toggle");
        $(this).toggleClass("f-search_toggle");
        $(".f-search_box form").find("input").val("");
      });
    },


    ToggleSubMenu : function(){
      $(".f-sub_menu").on("click", function(){
        $(this).find("ul").slideToggle();
        $(this).toggleClass("f-toggle_submenu");
      });
    },

    CountDown : function(){
       if (this.getObject('.f-countdown').length > 0) {
         var CountdownVal = $(".f-countdown").data("show");
         $('.f-countdown').countdown(CountdownVal, function(event) { 
            $(".f-countd_day").html(event.strftime('%D'));
            $(".f-countd_hour").html(event.strftime('%H'));
            $(".f-countd_min").html(event.strftime('%M'));
            $(".f-countd_sec").html(event.strftime('%S'));
         });
       }
    },

    Tabs : function(){
      if (this.getObject('.f-tabs').length > 0) {
      jQuery.jQueryTab({
          responsive: true, // enable accordian on smaller screens
          collapsible: true, // allow all accordions to collapse 
          useCookie: true, // remember last active tab using cookie
          openOnhover: false, // open tab on hover
          initialTab: 4, // tab to open initially; start count at 1 not 0

          cookieName: 'active-tab', // name of the cookie set to remember last active tab
          cookieExpires: 4, // when it expires in days or standard UTC time
          cookiePath: '/', // path on which cookie is accessible
          cookieDomain: '', // domain of the cookie
          cookieSecure: false, // enable secure cookie - requires https connection to transfer

          tabClass: 'f-tabs', // class of the tabs
          headerClass: 'accordion_tabs', // class of the header of accordion on smaller screens
          contentClass: 'f-tab_content', // class of container
          activeClass: 'active', // name of the class used for active tab

          tabTransition: 'fade', // transitions to use - normal or fade
          tabIntime: 500, // time for animation IN (1000 = 1s)
          tabOuttime: 0, // time for animation OUT (1000 = 1s)

          accordionTransition: 'slide', // transitions to use - normal or slide
          accordionIntime: 500, // time for animation IN (1000 = 1s)
          accordionOuttime: 400, // time for animation OUT (1000 = 1s)

          before: function() {}, // function to call before tab is opened
          after: function() {} // function to call after tab is opened
      });
      }
    },

    Accordian : function(){
      $(".f-accord_title").on("click", function(){
        $(".f-accord_single").removeClass("f-active_accord");
        $(this).parent().addClass("f-active_accord");
      });
    },

    CustomSelect : function(){
      $("form select").each(function(){
          $(this).wrap("<span class='f-select-wrapper'></span>");
          $(this).after("<span class='f-holder'></span>");
      });
      $("form select").on("change", function(){
          var selectedOption = $(this).find(":selected").text();
          $(this).next(".f-holder").text(selectedOption);
      }).trigger('change');
    },

    AddressSelect : function(){
      $(".f-selected_add").on("click", function(){
        $(".f-dropdown").slideToggle();
      });
      $("ul.f-dropdown li").on("click", function(){
        var address_val = $(this).data("value");
        $(".f-selected_add span").html($(this).html());
        $(".f-dropdown").slideToggle();
        $(".f-address_listing ul").hide();
        $(".f-address_listing ul."+address_val+"").show();
      });
    },

    SideNav : function(){ 
      if (this.getObject('#f-side_menu').length > 0) {
        $('#f-slide_menu').sideNav({'edge': 'left'}); 
        $(".f-card input").on("focus", function(){
          $(this).parent().addClass("f-focus");
        });
        $(".f-card input").on("focusout", function(){
          $(this).parent().removeClass("f-focus");
        });
      }  
    },

    Navigation : function(){
      var window_width = $(window).width();
      if(window_width < 1023){
        $(".f-nav nav ul li.f-has_child").on("click", function(e){
          $(this).toggleClass("f-slide_move")
          $(this).find("ul").fadeToggle('fast');
          //e.preventDefault();
          //$(this).find("a:first").siblings("ul").slideToggle('fast');
          //$(this).toggleClass("f-slide_menu");
          //e.stopPropagation();
        });
      }  
    },

    CustomizerToggle : function(){
      $("#f-selector_icon").on("click", function(){
        $("#f-customizer").toggleClass("f-toggle");
      });
    },

    CustomDemoImage : function(){
      $("#f-selected_demo").on("click", function(){
        $("#f-dropdown_demo").slideToggle();
      });
      $("#f-header_demo").on("click", function(){
        $("#f-header_dropdown").slideToggle();
      });
      $("ul#f-dropdown_demo li").hover(function(){
         $(".f-demo_view").toggleClass("f-show_demo_img");
         var data_val = $(this).data("value");
         $(".f-demo_view img").attr("src","assets/images/demo_view_0"+data_val+".jpg")
      });
      $("ul.f-dropdown_demo li").on("click", function(){
        var address_val = $(this).data("value");
        $(".f-selected_demo span").html($(this).html());
        $(".f-dropdown_demo").slideToggle();
        var data_src = $(this).data("src");
        if(data_src != ""){
          var url = document.URL;
          var url = url.slice(0, url.lastIndexOf('/'));
          var url = url.slice(0, url.lastIndexOf('/')); 
          var redirect_path = url+"/"+data_src;
          window.location.replace(redirect_path);
        }
      });
    },




    Chart : function(){
        if ($('#f-chart').length > 0) {
          $('#f-chart').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Monthly Chart'
            },
            xAxis: {
                categories: ['JAN', 'FEB', 'MAR']
            },
            yAxis: {
                title: {
                    text: 'Chart'
                }
            },
            series: [{
                name: 'JAN',
                data: [1, 0, 4]
            }, {
                name: 'FEB',
                data: [5, 7, 3]
            }, {
                name: 'MAR',
                data: [5, 7, 1]
            }],
        });
      }
    },

    PriceRange : function (){
      if ($('#f-price_range').length > 0){ 
          var slider = document.getElementById('f-price_range');
          noUiSlider.create(slider, {
            start: [250, 2000],
            connect: true,
            range: {
              'min': 0,
              'max': 2000
            }
          })
          var valueInput = document.getElementById('f-value_input'),
            valueSpan = document.getElementById('f-value_span');
          // When the slider value changes, update the input and span
          slider.noUiSlider.on('update', function( values, handle ) {
            if ( handle ) {
              valueInput.value = values[handle];
            } else {
              valueSpan.innerHTML = values[handle];
            }
          });
          // When the input changes, set the slider value
          valueInput.addEventListener('change', function(){
            slider.noUiSlider.set([null, this.value]);
          });
      }
    },

    ProductCounter : function (){
      var mpc = ".f-prod_counter";
      if ($(mpc).length > 0){ 
        $("#f-prod_plus").on("click",function(){
          var prod_current = $("#f-prod_count").val(); 
          var plus_val = parseFloat(prod_current)+1; 
          $("#f-prod_count").val(plus_val);
        });
        $("#f-prod_minus").on("click",function(){
          var prod_current = $("#f-prod_count").val();
          if(prod_current == 1)
          {
            minus_val = 1;
          }else{ 
            var minus_val = parseFloat(prod_current)-1; 
          }
          $("#f-prod_count").val(minus_val);
        });
      }  
    },

    ProductSlider : function (){ 
        var mms = '.f-blog_slider';
        if ($(mms).length > 0){  
          var main_slider = $(mms).bxSlider({
            pager: false,
            controls: false,
            mode: "fade"
          });
          $($(".f-main_slide_nav").find('.f-slide_left')).on('click', function() { 
            main_slider.goToPrevSlide();
          });
          $($(".f-main_slide_nav").find('.f-slide_right')).on('click', function() { 
            main_slider.goToNextSlide();
          }); 
        }
    },



  TeamCarousel: function () {
    if ($('#f-team_carousel').length > 0) {
      $('#f-team_carousel').owlCarousel({ 
          loop:true, 
          autoplay: true,
          dots: true, 
          responsive:{
              0:{items:1},
              600:{items:2},
              1000:{items:3}
          }
      })
    }
  },


  MainSlide: function() { 
        var mms = '#f-slider';
        if ($(mms).length > 0){  
          var main_slider = $(mms).bxSlider({
            pager: true,
            autoplay: true,
            controls: false,
            mode: "fade"
          });
          $($(".f-main_slide_nav").find('.f-slide_left')).on('click', function() { 
            main_slider.goToPrevSlide();
          });
          $($(".f-main_slide_nav").find('.f-slide_right')).on('click', function() { 
            main_slider.goToNextSlide();
          }); 
        } 
  },

    MainSlide2: function() { 
        var mms = '#f-slider-bx';
        if ($(mms).length > 0){  
          var main_slider = $(mms).bxSlider({
            pager: true,
            autoplay: true,
            controls: true,
            mode: "fade"
          });
          $($(".f-main_slide_nav").find('.f-slide_left')).on('click', function() { 
            main_slider.goToPrevSlide();
          });
          $($(".f-main_slide_nav").find('.f-slide_right')).on('click', function() { 
            main_slider.goToNextSlide();
          }); 
        } 
  },

  MenuToggle : function(){
    $("#f-menu_toggle").on("click", function(){
      $(".f-header .f-nav_sec > div.f-nav").slideToggle();
    });
  },

  ScrollToTop : function(){
    $("#f-back_to_top").on("click", function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 800), !1
    })
  }


 }
})(window);


$(document).ready(function($) {
  App.init();
});
 



 $(document).ready(function() {

// Making 2 variable month and day
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// make single object
var newDate = new Date();
// make current time
newDate.setDate(newDate.getDate());
// setting date and time
$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

setInterval( function() {
// Create a newDate() object and extract the seconds of the current time on the visitor's
var seconds = new Date().getSeconds();
// Add a leading zero to seconds value
$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
},1000);

setInterval( function() {
// Create a newDate() object and extract the minutes of the current time on the visitor's
var minutes = new Date().getMinutes();
// Add a leading zero to the minutes value
$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
},1000);

setInterval( function() {
// Create a newDate() object and extract the hours of the current time on the visitor's
var hours = new Date().getHours();
// Add a leading zero to the hours value
$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
}, 1000); 


 

});
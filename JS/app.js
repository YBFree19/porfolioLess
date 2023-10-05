$(function() {

   const worksSlider = $('[data-slider="slick"]');

/**********Filter*********************** */

   let filter = $("[data-filter]");
   filter.on("click", function(event) {
      event.preventDefault();

      let cat = $(this).data('filter');

      if(cat == 'all') {
         $("[data-cat]").removeClass('hide');
      } else {
         $("[data-cat]").each(function(){

            let workCat = $(this).data('cat');
   
            if(workCat != cat) {
               $(this).addClass("hide");
            } else {
               $(this).removeClass("hide");
            }
   
         });
      };

      
   });

/**********Model*********************** */

   const modelCall = $("[data-model]");
   const modelClose = $("[data-close]");

   modelCall.on("click", function(event) {
      event.preventDefault();

      let $this = $(this);
      let modelId = $this.data("model");

      $(modelId).addClass("show");
      $('body').addClass("no-scroll");

      setTimeout(function() {

         $(modelId).find(".model__dialog").css({
            transform: "rotateX(0)"
         });
         
      }, 200);

      worksSlider.slick('setPosition');
      
   });


   modelClose.on("click", function(event) {
      event.preventDefault();

      let $this = $(this);
      let modelParent = $this.parents(".model");

      $(modelParent).find(".model__dialog").css({
         transform: "rotateX(90deg)"
      });

      setTimeout(function() {

         modelParent.removeClass("show");
         $('body').removeClass("no-scroll");
         
      }, 200);

      
   });

   $(".model").on("click", function(event) {

      let $this = $(this);


      $(this).find(".model__dialog").css({
         transform: "rotateX(90deg)"
      });

      setTimeout(function() {

         $this.removeClass("show");
         $('body').removeClass("no-scroll");
         
      }, 200);

   });

   $(".model__dialog").on("click", function(event) {

      event.stopPropagation();

   });


   /* Slider: https://kenwheeler.github.io/slick/
   ========================*/

   worksSlider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      dots: true, 
   });


   $(".slick__prev").on("click", function(event) {
      event.preventDefault();

      let currentSlider = $(this).parents(".model").find('[data-slider="slick"]');

      currentSlider.slick('slickPrev');
   });

   $(".slick__next").on("click", function(event) {
      event.preventDefault();

      let currentSlider = $(this).parents(".model").find('[data-slider="slick"]');

      currentSlider.slick('slickNext');
   });

   /* NavToggle */

   const navToggle = $("#navToggle");
   const nav = $("#nav");

   navToggle.on("click", function(event) {
      event.preventDefault();

      nav.toggleClass("show");
   });

});
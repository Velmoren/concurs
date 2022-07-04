$(document).ready(function () {
  if ($(window).width() > 980) {
      let hero = $('.hero').innerHeight();

      $(window).scroll(function () {
          var temp = $(window).scrollTop();

          if (temp > hero) {
              $('.request').addClass('request_show');
          } else {
              $('.request').removeClass('request_show');
          }
      })
  }

  $("a[href^='#']").click(function () {
      var _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top - 105 + "px" });
      $('.request-menu').toggleClass('request-menu_active');
      $('body').removeClass('overflowHidden');
      return false;
  });

  $('.request-burger').on("click", ()=> {
      $('.request-menu').toggleClass('request-menu_active');
      $('body').toggleClass('overflowHidden');
  }); 
})

function SvgSpritesLoader(svgSpritesUrl) {
  $.ajax({
      type: "GET",
      dataType: 'text',
      url: svgSpritesUrl,
      success: function (data, status, response) {
          $(".page-main").append(response.responseText);
      },
      error: function () {
      }
  });
}
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21tb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDk4MCkge1xyXG4gICAgICBsZXQgaGVybyA9ICQoJy5oZXJvJykuaW5uZXJIZWlnaHQoKTtcclxuXHJcbiAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIHRlbXAgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgICAgaWYgKHRlbXAgPiBoZXJvKSB7XHJcbiAgICAgICAgICAgICAgJCgnLnJlcXVlc3QnKS5hZGRDbGFzcygncmVxdWVzdF9zaG93Jyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICQoJy5yZXF1ZXN0JykucmVtb3ZlQ2xhc3MoJ3JlcXVlc3Rfc2hvdycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgJChcImFbaHJlZl49JyMnXVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBfaHJlZiA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XHJcbiAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoX2hyZWYpLm9mZnNldCgpLnRvcCAtIDEwNSArIFwicHhcIiB9KTtcclxuICAgICAgJCgnLnJlcXVlc3QtbWVudScpLnRvZ2dsZUNsYXNzKCdyZXF1ZXN0LW1lbnVfYWN0aXZlJyk7XHJcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3dIaWRkZW4nKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG5cclxuICAkKCcucmVxdWVzdC1idXJnZXInKS5vbihcImNsaWNrXCIsICgpPT4ge1xyXG4gICAgICAkKCcucmVxdWVzdC1tZW51JykudG9nZ2xlQ2xhc3MoJ3JlcXVlc3QtbWVudV9hY3RpdmUnKTtcclxuICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvd0hpZGRlbicpO1xyXG4gIH0pOyBcclxufSlcclxuXHJcbmZ1bmN0aW9uIFN2Z1Nwcml0ZXNMb2FkZXIoc3ZnU3ByaXRlc1VybCkge1xyXG4gICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgIGRhdGFUeXBlOiAndGV4dCcsXHJcbiAgICAgIHVybDogc3ZnU3ByaXRlc1VybCxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgcmVzcG9uc2UpIHtcclxuICAgICAgICAgICQoXCIucGFnZS1tYWluXCIpLmFwcGVuZChyZXNwb25zZS5yZXNwb25zZVRleHQpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICB9XHJcbiAgfSk7XHJcbn0iXSwiZmlsZSI6ImNvbW1vbi5qcyJ9

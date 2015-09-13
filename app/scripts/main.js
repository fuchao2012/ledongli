slide({
  slide_page_wrap: '.slide_div',
  slide_page_dom: '.slide_page',
  startCallback: function(scope) {
    console.log('touch start', scope);
  },
  moveCallback: function(scope) {
    console.log('touch move', scope);
  },
  endCallback: function(scope) {
    console.log('touch end', scope);
  }
});

/**
 * Created by fuchao on 15/9/18.
 */
/*global $*/
/*global ldl*/
'use strict';
ldl.getUserDataInapp().done(function () {
  var a = ldl.showObj(ldl.userData);
  console.log(a);
});
var percenttage, uid = 5054, pc = '862949026965264';
function lazyLoad($el) {
  $el.find('img[lazy-src]').each(function (i, pic) {
    var $pic = $(pic),
      src = $pic.attr('lazy-src');
    if (src) {
      var img = new Image();
      img.src = src;
      img.onload = function () {
        $pic.attr('src', src);
      };
      $pic.attr('lazy-src', '');
    }
  });
}
function render(d) {
  var html = '';
  for (var i = 0; i < d.length; i++) {
    //'<img src="" lazy-src="'+data.avatar+'" alt=""/>'+
    var data = d[i], percent = Math.abs(Math.floor(data.votes / data.goal)) + 1;
    html += '<div class="project" id="' + data.id + '">' + '<div class="project-tag done"></div><div class="title">' + data.name + '</div>' + '<canvas class="loader" data-value="' + percent + '" ></canvas>' + '<div class="target">目标' + data.goal + '万大卡</div>' + '<div class="deadline">' + data.description + '</div></div>';
  }
  $('.list-wrap').html(html);
  lazyLoad($('.list-wrap'));
}
$.ajax({
  url: 'http://test.ledongli.cn:7080/v2/rest/event/target_list?uid=' + uid + '&pc=' + pc + '&eid=2&callback=render',
  dataType: 'jsonp',
  success: function (d) {
    render(d.ret.data);
  }
}).done(function () {
  $('.loader').each(function () {
    percenttage = this.dataset.value;
    $(this).ClassyLoader({percentage: percenttage});
  });
}).then(function () {
  $('.project').each(function () {
    $(this).on('click', function (e) {
      if ($(e.currentTarget).context.id !== '') {
        window.location.href = 'detail.html?uid=' + uid + '&pc=' + pc + '&eid=2&tid=' + $(e.currentTarget).context.id;
      }
    });
  });
});


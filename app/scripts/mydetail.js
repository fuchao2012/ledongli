/**
 * Created by fuchao on 15/9/18.
 */
/*global $*/
/*global ldl*/
'use strict';
var uid = 5054, pc = '862949026965264', tid = ldl.getUrlObj().search.tid;
function afterRenderMy() {
  var percentage, loader = $('.loader');
  percentage = loader[0].dataset.value;
  loader.ClassyLoader({percentage: percentage});
  $('.see-others').bind('click', function () {
    window.location.href = 'list.html?uid=' + uid + '&pc=' + pc + '&eid=2';
  });
  $('.my-invite').bind('click', function () {
    window.location.href = 'share.html?uid=' + uid + '&pc=' + pc + '&eid=2&tid=' + tid;
  });
  $('.hero-belongs').bind('click', function () {
    window.location.href = 'http://ledongli.mikecrm.com/f.php?t=OUtw3E';
  });
  $('.about').bind('scroll', function () {
    $('.project-footer').hide();
  });
  $('.about').bind('touchend', function () {
    $('.project-footer').show();
  });
}
function renderMyDetail(data) {
 console.log(data);
}
$.ajax({
  url: 'http://test.ledongli.cn:7080/v2/rest/event/target_detail?uid=' + uid + '&pc=' + pc + '&eid=2&tid=' + tid + '&callback=renderMyDetail',
  dataType: 'jsonp',
  success: function (d) {
    renderMyDetail(d.ret.data);
  },
  error: function () {
    afterRenderMy();
  }
}).done(function () {
  afterRenderMy();
});

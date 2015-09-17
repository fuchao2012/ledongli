/**
 * Created by fuchao on 15/9/18.
 */
/*global $*/
/*global ldl*/
'use strict';
var uid = 5054, pc = '862949026965264', tid = ldl.getUrlObj().search.tid;
function afterRender() {
  var percentage, loader = $('.loader');
  percentage = loader[0].dataset.value;
  loader.ClassyLoader({percentage: percentage});
  var footer = $('#footer-button');
  if (!ldl.isWeixin) {
    footer.removeClass('download-app').addClass('join-this');
    $(footer).bind('click', function () {
      window.location.href = 'success.html?uid=' + uid + '&pc=' + pc + '&eid=2&tid=' + tid;
    });
  } else {
    $(footer).bind('click', function () {
      window.location.href = 'http://www.ledongli.cn';
    });
  }
}
function renderDetail() {

}
$.ajax({
  url: 'http://test.ledongli.cn:7080/v2/rest/event/target_detail?uid=' + uid + '&pc=' + pc + '&eid=2&tid=' + tid + '&callback=renderDetail',
  dataType: 'jsonp',
  success: function (d) {
    renderDetail(d.ret.data);
  },
  error: function () {
    afterRender();
  }
}).done(function () {
  afterRender();
});

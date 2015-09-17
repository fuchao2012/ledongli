/**
 * Created by fuchao on 15/9/18.
 */
  /*global $*/
  /*global ldl*/
'use strict';
var uid = 5054, pc = '862949026965264', tid = ldl.getUrlObj().search.tid;

$.ajax({
  url: 'http://test.ledongli.cn:7080/v2/rest/event/participated_event?uid=' + uid + '&pc=' + pc + '&eid=2&tid=' + tid + '&callback=callback',
  dataType: 'jsonp',
  data: {
    username: $('#name').val(),
    phone: $('#phone').val(),
    address: $('#address').val(),
    inventor: $('inventor').val(),
    otherInfo: {
      gender: 'male'
    }
  }
})
  .done(function () {
    $('.form-submit').bind('click', function () {
      window.location.href = 'share.html?uid=' + uid + '&pc=' + pc + '&eid=2&tid=' + tid;
    });
  })
  .fail(function () {
    console.log('error');
  })
  .always(function () {
    $('.form-submit').bind('click', function () {
      window.location.href = 'share.html?uid=' + uid + '&pc=' + pc + '&eid=2&tid=' + tid;
    });
  });

/**
 * Created by fuchao on 15/9/18.
 */
/*global $*/
/*global ldl*/
/*global slide*/
'use strict';
var uid = 5054, pc = '862949026965264';
ldl.getUserDataInapp().done(function () {
  ldl.showObj(ldl.userData);
});
slide({
  slidePageWrap: '.slide_div',
  slidePageDom: '.slide_page'
});
$('.join').bind('click', function () {
  window.location.href = 'list.html?uid=' + uid + '&pc=' + pc + '&eid=2';
});

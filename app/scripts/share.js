/**
 * Created by fuchao on 15/9/18.
 */
/*global $*/
/*global ldl*/
'use strict';
var uid = 5054, pc = '862949026965264', tid = ldl.getUrlObj().search.tid;
function share() {
  var shareData = {
    title: '乐动力北京线上马拉松，同天异地挑战京城！',
    content: '完赛即可获得纪念奖牌，比赛火热报名中！'
  };
  if (ldl.isApp) {
    //分享
    ldl.shareBy('app', {
      imageUrl: 'http://h5.ledongli.cn/h5/walker_product/marathon/v1/malasong/images/shareImg.jpg',
      linkUrl: location.href,
      title: shareData.title,
      content: shareData.content,
      sharedTo: 1
    });
  } else if (ldl.isWeixin) {
    ldl.shareBy('weixin', {
      title: shareData.title,
      desc: shareData.content,
      link: location.href,
      imgUrl: 'http://h5.ledongli.cn/h5/walker_product/marathon/v1/malasong/images/shareImg.jpg'
    });
  }
}
$('.invite').bind('click', function () {
  share();
});
$('.return-click').bind('click', function () {
  window.location.href = 'mydetail.html?uid=' + uid + '&pc=' + pc + '&eid=2&tid=' + tid;
});

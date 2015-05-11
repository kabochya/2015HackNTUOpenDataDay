/* jshint devel:true */
console.log('\'Allo \'Allo!');

var map = new GMaps({
    el:'#map',
    lat:25.0221324,
    lng:121.547979
  });
  map.addMarker({
    lat:25.0221324,
    lng:121.547979,
    title:"DO!T TAIWAN 共創公域",
    infoWindow: {
      content: '<p style="color:#999;">DO!T TAIWAN 共創公域</p>'
    }
  });
$(function(){
  var s = skrollr.init();
  skrollr.menu.init(s, {
    animate: true
  })
});

/* jshint devel:true */

'use strict' ;

var map = new GMaps({
    el:'#map',
    lat:25.0221324,
    lng:121.547979
  });
  map.addMarker({
    lat:25.0221324,
    lng:121.547979,
<<<<<<< Updated upstream
    title:"DO!T TAIWAN 共創公域",
=======
    title:'DO!T 共創公域',
>>>>>>> Stashed changes
    infoWindow: {
      content: '<p style="color:#999;">DO!T TAIWAN 共創公域</p>'
    }
  });
$(function(){
  var s = skrollr.init();
  skrollr.menu.init(s, {
    animate: true
  });
});

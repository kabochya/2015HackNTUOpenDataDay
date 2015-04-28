/* jshint devel:true */
console.log('\'Allo \'Allo!');
$(function(){
  var map = new GMaps({
    el:'#map',
    lat:25.0221324,
    lng:121.547979
  });
  map.addMarker({
    lat:25.0221324,
    lng:121.547979,
    title:"DO!T 共創公域"
  })
  $('#fullpage').fullpage(
    {
      fixedElements:".header .footer",
      fitToSection: false,
      //verticalCentered: false,

      paddingTop:'60px',
      paddingBottom:'40px',
      anchors: ["top","why","who","what","when-where"],
      menu: '#menu'
    }
  );
})

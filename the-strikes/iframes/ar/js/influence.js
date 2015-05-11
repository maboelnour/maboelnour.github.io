function preloadImage(url){
  var img=new Image();
  img.src=url;
}

function changeImage(a) {
  if(maps_index[a] !== undefined){
    map = document.getElementById("inf-map")
    if(map.src != "../../maps/inf-maps/"+maps_index[a]+".png"){
      map.src= "../../maps/inf-maps/"+maps_index[a]+".png";
    }
  }

}

window.onload = function() {
  cartodb.createVis('cartodb-inf-map', ' https://maboelnour.cartodb.com/api/v2/viz/01efa282-f50e-11e4-aba9-0e43f3deba5a/viz.json', {scrollwheel: 'disabled'}).done(function(vis, layers) {

    //==============================================
    vis.getNativeMap().doubleClickZoom.disable();
    vis.getNativeMap().dragging.disable();
    vis.getNativeMap().scrollWheelZoom.disable();
    //==============================================

    //==============================================
    var inf_map = "<img id=\"inf-map\" alt=\"Syria and Iraq 2014-onward War map\" src=\"../../maps/inf-maps/26-9-14.png\"/>"
    $('.cartodb-map-wrapper').prepend(inf_map);
    //==============================================

    //==============================================
    layers[2].on('change:time', function(time) {
      // console.log(time.time);
      var date = new Date(time.time);
      var day = date.getDate();
      var monthIndex = date.getMonth()+1;
      var year = date.getYear()-100;
      changeImage(day+"-"+monthIndex+"-"+year);
    });
    //==============================================

    //==============================================
    layers[0].setOpacity(0);
    //==============================================

    //==============================================
    // element = document.getElementsByClassName("cartodb-timeslider")[0]
    // element.style.bottom =  "-95px";
    // element.style.left =  "85px";
    //==============================================

  })
  .error(function(err) {
    alert(err);
  });
}

var maps = []
for (var map in maps_index) {
  if(maps.indexOf(maps_index[map]) == -1){
    maps.push(maps_index[map]);
  }
}
for (var i in maps) {
  console.log("preloading: "+maps[i]+".png");
  preloadImage("../../maps/inf-maps/"+maps[i]+".png")
}
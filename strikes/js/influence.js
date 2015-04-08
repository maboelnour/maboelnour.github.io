function changeImage(a) {
  map = document.getElementById("inf-map")
  if(map.src != "./maps/inf-maps/"+maps_index[a]+".png"){
    map.src= "./maps/inf-maps/"+maps_index[a]+".png";
  }
}

window.onload = function() {
  cartodb.createVis('cartodb-inf-map', ' https://maboelnour.cartodb.com/api/v2/viz/8c763a06-dde4-11e4-a22c-0e853d047bba/viz.json', {scrollwheel: 'disabled'}).done(function(vis, layers) {

    //==============================================
    vis.getNativeMap().doubleClickZoom.disable();
    vis.getNativeMap().dragging.disable();
    vis.getNativeMap().scrollWheelZoom.disable();
    //==============================================

    //==============================================
    var inf_map = "<img id=\"inf-map\" alt=\"Syria and Iraq 2014-onward War map\" src=\"./maps/inf-maps/31-12-14.png\"/>"
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

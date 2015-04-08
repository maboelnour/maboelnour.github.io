function fighting_map(){
  if ($("#support_map").is(":visible")){
      $("#support_map").hide();
      $("#fighting_map").show();
    }
  };

  function support_map(){
    if ($("#fighting_map").is(":visible")){
      $("#support_map").show();
      $("#fighting_map").hide();
    }
  };

var fighting = { // both: 1, iraq:2, syria: 3
  "US": 1,
  "CA": 1,
  "JO": 1,
  "MA": 1,
  "UK": 1,
  "AU": 2,
  "BE": 2,
  "FR": 2,
  "DE": 2,
  "IT": 2,
  "NL": 2,
  "NO": 2,
  "PT": 2,
  "ES": 2,
  "TR": 2,
  "BHR": 3,
  "QA": 3,
  "SA": 3,
  "AE": 3
};

var fighting_text = { 
  "US": "Launch Operation Inherent Resolve",
  "CA": "-Launch Operation Impact<br />-Strikes with F-18's<br />-Sent special forces advisers",
  "JO": "Strikes With F-16's",
  "MA": "Strikes With F-16's",
  "UK": "Launch Operation Shader<br />-Strikes with Tornado's",
  "AU": "-Launch Operation Okra<br />-Strikes with F-18's",
  "BE": "Strikes With F-16's",
  "FR": "-Launch Opération Chammal<br />-Strikes with Rafale's and Mirage-2000",
  "DE": "-Sent paratroopers to Iraq to provide weapons training<br />-Sent weapons and ammunition to Iraqi kurds forces",
  "IT": "Sent Tornado's for reconnaissance and intelligence",
  "NL": "Strikes With F-16's",
  "NO": "Sent troops to Iraq to train the Iraqi army",
  "PT": "Sent troops to Iraq to train the Iraqi army",
  "ES": "Sent troops to Iraq to train the Iraqi army",
  "TR": "Sent troops to Iraq to train the Iraqi kurds forces",
  "BHR": "Strikes With F-16's",
  "QA": "Strikes With aircrafts",
  "SA": "Strikes With aircrafts",
  "AE": "Strikes With F-16's",
};

var support = { //1: Military aid, 2:Humanitarian aid, 3:Intelligence aid
  "AL": 1,
  "BA": 1,
  "BG": 1,
  "HR": 1,
  "CZ": 1,
  "EE": 1,
  "GR": 1,
  "HU": 1,
  "KW": 1,
  "LB": 1,
  "RU": 1,
  "SGP": 1,
  "DK": 2,
  "AT": 2,
  "IE": 2,
  "JP": 2,
  "LU": 2,
  "PL": 2,
  "SK": 2,
  "KR": 2,
  "SE": 2,
  "SZ": 2,
  "NZ": 2,
  "IL": 3
}

var support_text = { 
  "AL": "Sent weapons and ammunition to Iraqi kurds forces",
  "BA": "Sent weapons and ammunition to the Iraqi army",
  "BG": "Sent weapons and ammunition to the Iraqi army",
  "HR": "Sent weapons and ammunition to Iraqi kurds",
  "CZ": "Sent fighter jets, weapons and ammunition to the Iraqi army",
  "EE": "Sent weapons and ammunition to the Iraqi army",
  "GR": "Sent weapons and ammunition to Iraqi kurds forces",
  "HU": "Sent weapons and ammunition to the Iraqi army",
  "KW": "Donated to the United Nations for aid in Iraq",
  "LB": "Receive military help to fight ISIS through the Army",
  "RU": "-Exchange of Intelligence Information with US<br />-Sent 10 'Su-25' to the Iraqi Army",
  "SGP": "",
  "DK": "Sent emergency aid to Iraq",
  "AT": "Provided aid to Iraqi Government",
  "IE": "Provided aid to Iraqi Government",
  "JP": "Provided aid to Iraqi Government",
  "LU": "Step up humanitarian assistance for the Iraqi people",
  "PL": "Sent aid for Iraqi refugees",
  "SK": "Sent aid for Iraqi refugees",
  "KR": "Sent aid for Iraqi refugees",
  "SE": "Donated aid to Iraqi Government",
  "SZ": "Donated aid to Iraqi Government",
  "NZ": "Donated aid to Iraqi Government",        
  "IL": "Providing Intelligence Information"
}

$(function(){
  new jvm.Map({
    onRegionTipShow: function(event, label, code) {
      if (fighting[code] != undefined){
        label.html(label.html()+": <br />"+fighting_text[code]);               
      }else{
        label.style.visibility = "hidden";             
      };
    },
    onRegionClick: function(event, tip, code) {
     alert("hi");
    },
    map: 'world_mill_en',
    container: $('#fighting_map'),
    backgroundColor: "#D9D9D9",
    regionStyle: {
      initial: { fill: "#7C96A1" },
      hover: { fill: "#A0D1DC" }
    },
    series: {
      regions: [{
        scale: {
          '1': '#EBAB73',
          '2': '#60B160',
          '3': '#5793BF'
        },
        attribute: 'fill',
        values: fighting
      }]
    }
 });
});

$(function(){
  new jvm.Map({
    onRegionTipShow: function(event, label, code) {
      if (support[code] != undefined){
        label.html(label.html()+": <br />"+support_text[code]);                
      }else{
        label.style.visibility = "hidden";             
      };
    },
    // onRegionClick: function(event, tip, code) {
    //  alert("hi");
    // },
    map: 'world_mill_en',
    container: $('#support_map'),
    backgroundColor: "#D9D9D9",
    regionStyle: {
      initial: { fill: "#7C96A1" },
      hover: { fill: "#A0D1DC" }
    },
    series: {
      regions: [{
        scale: {
          '1': '#EBAB73',
          '2': '#60B160',
          '3': '#5793BF'
        },
        attribute: 'fill',
        values: support
      }]
    }
 });
  $("#support_map").hide();
});    
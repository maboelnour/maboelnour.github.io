function fighting_map(){
  if ($("#support_map").is(":visible")){
      $("#support_map").hide();
      $("#fighting_map").show();
      document.getElementById('L-contributor-1').innerHTML="<span class=\"region-1\"></span>تدخل في العراق وسوريا.";
      document.getElementById('L-contributor-2').innerHTML="<span class=\"region-2\"></span>تدخل في العراق فقط."
      document.getElementById('L-contributor-3').innerHTML="<span class=\"region-3\"></span>تدخل في سوريا فقط."
    }
  };

  function support_map(){
    if ($("#fighting_map").is(":visible")){
      $("#support_map").show();
      $("#fighting_map").hide();
      document.getElementById('L-contributor-1').innerHTML="<span class=\"region-1\"></span>مساعدات عسكرية."
      document.getElementById('L-contributor-2').innerHTML="<span class=\"region-2\"></span>مساعدات إنسانية."
      document.getElementById('L-contributor-3').innerHTML="<span class=\"region-3\"></span>مساعدات استخباراتية."

    }
  };

var countries_ar = {
  "US": "الولايات المتحدة",
  "CA": "كندا",
  "JO": "الأردن",
  "MA": "المغرب",
  "UK": "المملكة المتحدة",
  "AU": "أستراليا",
  "BE": "بلجيكا",
  "FR": "فرنسا",
  "DE": "ألمانيا",
  "IT": "إيطاليا",
  "NL": "هولندا",
  "NO": "النرويج",
  "PT": "البرتغال",
  "ES": "اسبانيا",
  "TR": "تركيا",
  "BHR": "البحرين",
  "QA": "قطر",
  "SA": "السعودية",
  "AE": "الإمارات",
  "AL": "ألبانيا",
  "BA": "البوسنة والهرسك",
  "BG": "بلغاريا",
  "HR": "كرواتيا",
  "CZ": "التشيك",
  "EE": "استونيا",
  "GR": "اليونان",
  "HU": "المجر",
  "KW": "الكويت",
  "LB": "لبنان",
  "RU": "روسيا",
  "SGP": "سنغافورة",
  "DK": "الدنمارك",
  "AT": "النمسا",
  "IE": "ايرلندا",
  "JP": "اليابان",
  "LU": "لوكسمبورج",
  "PL": "بولندا",
  "SK": "سلوفاكيا",
  "KR": "كوريا الجنوبية",
  "SE": "السويد",
  "SZ": "سويسرا",
  "NZ": "نيوزلاند",
  "IL": "اسرائيل"


}
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
  "US": "إطلاق عملية 'Inherent Resolve'",
  "CA": "-إطلاق عملية 'Impact'<br />-المشاركة بطائرات أف-18<br />-إرسال مستشارين عسكريين",
  "JO": "المشاركة بطائرات أف-16",
  "MA": "المشاركة بطائرات أف-16",
  "UK": "إطلاق عملية 'Shader'<br />-المشاركة بطائرات تورنادو",
  "AU": "-إطلاق عملية 'Okra'<br />-المشاركة بطائرات أف-18",
  "BE": "المشاركة بطائرات أف-16",
  "FR": "-إطلاق عملية 'Chammal'<br />-المشاركة بطائرات الرافال والميراج-2000",
  "DE": "-إرسال مظليين للعراق لتوفير تدريب على الأسلحة<br />-إرسال أسلحة وذخيرة للقوات الكردية",
  "IT": "المشاركة بطائرات تورنادو للاستطلاع و العمليات الاستخباراتية",
  "NL": "المشاركة بطائرات أف-16",
  "NO": "إرسال قوات أرضية للعراق للمشاركة في تدريب القوات العراقية",
  "PT": "إرسال قوات أرضية للعراق للمشاركة في تدريب القوات العراقية",
  "ES": "إرسال قوات أرضية للعراق للمشاركة في تدريب القوات العراقية",
  "TR": "إرسال قوات أرضية للعراق للمشاركة في تدريب القوات الكردية",
  "BHR": "المشاركة بطائرات أف-16",
  "QA": "المشاركة بمقاتلات حربية",
  "SA": "المشاركة بمقاتلات حربية",
  "AE": "المشاركة بطائرات أف-16",
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
  "AL": "إرسال أسلحة وذخيرة للقوات الكردية العراقية",
  "BA": "إرسال أسلحة وذخيرة للجيش العراقي",
  "BG": "إرسال أسلحة وذخيرة للجيش العراقي",
  "HR": "إرسال أسلحة وذخيرة للقوات الكردية العراقية",
  "CZ": "إرسال مقاتلات حربية وأسلحة وذخيرة للجيش العراقي",
  "EE": "إرسال أسلحة وذخيرة للجيش العراقي",
  "GR": "إرسال أسلحة وذخيرة للقوات الكردية العراقية",
  "HU": "إرسال أسلحة وذخيرة للجيش العراقي",
  "KW": "إرسال مساعدة مالية للأمم المتحدة",
  "LB": "تلقت مساعدات عسكرية للمشاركة في حالرب ضد داعش من خلال الجيش اللبناني",
  "RU": "-تبادل معلومات إستخباراتية مع الولايات المتحدة<br />-إرسال 10 طائرات 'سو-25' للجيش العراقي",
  "SGP": "",
  "DK": "إرسال مساعدة عاجلة للعراق",
  "AT": "توفير مساعدات لحكومة العراق",
  "IE": "توفير مساعدات لحكومة العراق",
  "JP": "توفير مساعدات لحكومة العراق",
  "LU": "إرسال مساعدات إنسانسية للعشب العراقي",
  "PL": "إرسال مساعدات للاجئين العراقيين",
  "SK": "إرسال مساعدات للاجئين العراقيين",
  "KR": "إرسال مساعدات للاجئين العراقيين",
  "SE": "توفير مساعدات لحكومة العراق",
  "SZ": "توفير مساعدات لحكومة العراق",
  "NZ": "توفير مساعدات لحكومة العراق",        
  "IL": "توفير معلومات استخباراتية"
}

$(function(){
  new jvm.Map({
    onRegionTipShow: function(event, label, code) {
      if (fighting[code] != undefined){
        label.html(countries_ar[code]+": <br />"+fighting_text[code]);               
      }else{
        label.style.visibility = "hidden";             
      };
    },
    onRegionClick: function(event, tip, code) {
     // alert("hi");
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
        label.html(countries_ar[code]+": <br />"+support_text[code]);                
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
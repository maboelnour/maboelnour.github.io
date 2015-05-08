$(function () {
    var categories = [
        "معسكرات تدريب",
        "مراكز تحكم وقيادة",
        "منشأت بترولية",
        "دبابات",
        "مواقع هاون",
        "مواقع مدفعية",
        "مناطق تخزين/تجمع",
        "وحدات قتالية كبيرة",
        "معدات إنشاء ثقيلة",
        "مدرعات",
        "مواقع قتالية",
        "مباني",
        "وحدات قتالية",
        "مركبات"
];
    $(document).ready(function () {
        $('#targets-container').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'الأهداف التي تم قصفها لكل بلد'
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return Math.abs(this.value) ; /// 1000000) + 'M';
                    }
                },
                min: -800,
                max: 800
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return "<b>" + this.series.name + "</b>" + '، نوع الهدف: ' + "<b>" + this.point.category + "</b>" +
                        '، عدد الاهداف التي تم قصفها: ' + "<b>" + Highcharts.numberFormat(Math.abs(this.point.y), 0) + "</b>";
                }
            },

            series: [{
                name: 'سوريا',
                data: [
                    -10,
                    -12,
                    -55,
                    -37,
                    -6,
                    -15,
                    -91,
                    -40,
                    -8,
                    -66,
                    -792,
                    -191,
                    -366,
                    -185             
                ]
            }, {
                name: 'العراق',
                data: [
                    5,
                    5,
                    5,
                    10,
                    47,
                    35,
                    41,
                    115,
                    160,
                    185,
                    236,
                    325,
                    571,
                    646
                ]
            }]//['artillery_position',
        // 'staging_area',
        // 'heavy_construction_equipment',
        // 'mortar_position',
        // 'tank',
        // 'bunker',
        // 'checkpoint',
        // 'heavy_machine_gun_position',
        // 'large_tactical_unit',
        // 'heavy_construction_equipment',
        // 'armored_vehicle',
        // 'fighting_position',
        // 'building',
        // 'vehicle',
        // 'tactical_unit']
        });
    });

});
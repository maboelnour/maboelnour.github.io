$(function () {
    var categories = [
        "Training Camp",
        "Command and Control Facility",
        "Oil Facility",
        "Tank",
        "Mortar Position",
        "Artillery Position",
        "Staging Area",
        "Large Tactical Unit",
        "Heavy Construction Equipment",
        "Armored Vehicle",
        "Fighting Position",
        "Building",
        "Tactical Unit",
        "Vehicle"
];
    $(document).ready(function () {
        $('#targets-container').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Targets struck by Country'
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
                    return '<b>' + this.series.name + ', Target: ' + this.point.category + '</b><br/>' +
                        'Count: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },

            series: [{
                name: 'Syria',
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
                name: 'Iraq',
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
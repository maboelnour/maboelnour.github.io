$(function () {
    var categories = ['Oil Facility',
        'Artillery Position',
        'Staging Area',
        'Heavy Construction Equipment',
        'Mortar Position',
        'Tank',
        'Bunker',
        'Checkpoint',
        'Heavy Machine Gun Position',
        'Large Tactical Unit',
        'Heavy Construction Equipment',
        'Armored Vehicle',
        'Fighting Position',
        'Building',
        'Vehicle',
        'Tactical Unit'];
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
                min: -400,
                max: 400
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
                data: [-29, -3, -40, -2, -0, -7, -4, -18, -2, -24, -2, -46, -388, -42, -62, -209]
            }, {
                name: 'Iraq',
                data: [0, 10, 12, 71, 23, 2, 25, 25, 33, 65, 71, 73, 107, 151, 231, 237]
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
function fillEcharts() {

    var loadAverageChart = echarts.init(document.getElementById('load_average'));
    var loadAverageOption = {
        title: {
            text: "loadAverage",
            left: "center"
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                51, 52, 53, 54, 55, 56, 57, 58, 59]
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [systemMap[0] != null ? systemMap[0].loadAverage : 0, systemMap[1] != null ? systemMap[1].loadAverage : 0, systemMap[2] != null ? systemMap[2].loadAverage : 0,
                systemMap[3] != null ? systemMap[3].loadAverage : 0, systemMap[4] != null ? systemMap[4].loadAverage : 0, systemMap[5] != null ? systemMap[5].loadAverage : 0,
                systemMap[6] != null ? systemMap[6].loadAverage : 0, systemMap[7] != null ? systemMap[7].loadAverage : 0, systemMap[8] != null ? systemMap[8].loadAverage : 0,
                systemMap[9] != null ? systemMap[9].loadAverage : 0, systemMap[10] != null ? systemMap[10].loadAverage : 0, systemMap[11] != null ? systemMap[11].loadAverage : 0,
                systemMap[12] != null ? systemMap[12].loadAverage : 0, systemMap[13] != null ? systemMap[13].loadAverage : 0, systemMap[14] != null ? systemMap[14].loadAverage : 0,
                systemMap[15] != null ? systemMap[15].loadAverage : 0, systemMap[16] != null ? systemMap[16].loadAverage : 0, systemMap[17] != null ? systemMap[17].loadAverage : 0,
                systemMap[18] != null ? systemMap[18].loadAverage : 0, systemMap[19] != null ? systemMap[19].loadAverage : 0, systemMap[20] != null ? systemMap[20].loadAverage : 0,
                systemMap[21] != null ? systemMap[21].loadAverage : 0, systemMap[22] != null ? systemMap[22].loadAverage : 0, systemMap[23] != null ? systemMap[23].loadAverage : 0,
                systemMap[24] != null ? systemMap[24].loadAverage : 0, systemMap[25] != null ? systemMap[25].loadAverage : 0, systemMap[26] != null ? systemMap[26].loadAverage : 0,
                systemMap[27] != null ? systemMap[27].loadAverage : 0, systemMap[28] != null ? systemMap[28].loadAverage : 0, systemMap[29] != null ? systemMap[29].loadAverage : 0,
                systemMap[30] != null ? systemMap[30].loadAverage : 0, systemMap[31] != null ? systemMap[31].loadAverage : 0, systemMap[32] != null ? systemMap[32].loadAverage : 0,
                systemMap[33] != null ? systemMap[33].loadAverage : 0, systemMap[34] != null ? systemMap[34].loadAverage : 0, systemMap[35] != null ? systemMap[35].loadAverage : 0,
                systemMap[36] != null ? systemMap[36].loadAverage : 0, systemMap[37] != null ? systemMap[37].loadAverage : 0, systemMap[38] != null ? systemMap[38].loadAverage : 0,
                systemMap[39] != null ? systemMap[39].loadAverage : 0, systemMap[40] != null ? systemMap[40].loadAverage : 0, systemMap[41] != null ? systemMap[41].loadAverage : 0,
                systemMap[42] != null ? systemMap[42].loadAverage : 0, systemMap[43] != null ? systemMap[43].loadAverage : 0, systemMap[44] != null ? systemMap[44].loadAverage : 0,
                systemMap[45] != null ? systemMap[45].loadAverage : 0, systemMap[46] != null ? systemMap[46].loadAverage : 0, systemMap[47] != null ? systemMap[47].loadAverage : 0,
                systemMap[48] != null ? systemMap[48].loadAverage : 0, systemMap[49] != null ? systemMap[49].loadAverage : 0, systemMap[50] != null ? systemMap[50].loadAverage : 0,
                systemMap[51] != null ? systemMap[51].loadAverage : 0, systemMap[52] != null ? systemMap[52].loadAverage : 0, systemMap[53] != null ? systemMap[53].loadAverage : 0,
                systemMap[54] != null ? systemMap[54].loadAverage : 0, systemMap[55] != null ? systemMap[55].loadAverage : 0, systemMap[56] != null ? systemMap[56].loadAverage : 0,
                systemMap[57] != null ? systemMap[57].loadAverage : 0, systemMap[58] != null ? systemMap[58].loadAverage : 0, systemMap[59] != null ? systemMap[59].loadAverage : 0],

            type: 'bar'
        }]
    };
    loadAverageChart.setOption(loadAverageOption);

    // jvmInfo
    var gcCountChart = echarts.init(document.getElementById('gc_count'));
    var gcCountOption = {
        title: {
            text: "gcCount",
            left: "center"
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                51, 52, 53, 54, 55, 56, 57, 58, 59]
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [jvmMap[0] != null ? jvmMap[0].gcCount : 0, jvmMap[1] != null ? jvmMap[1].gcCount : 0, jvmMap[2] != null ? jvmMap[2].gcCount : 0,
                jvmMap[3] != null ? jvmMap[3].gcCount : 0, jvmMap[4] != null ? jvmMap[4].gcCount : 0, jvmMap[5] != null ? jvmMap[5].gcCount : 0,
                jvmMap[6] != null ? jvmMap[6].gcCount : 0, jvmMap[7] != null ? jvmMap[7].gcCount : 0, jvmMap[8] != null ? jvmMap[8].gcCount : 0,
                jvmMap[9] != null ? jvmMap[9].gcCount : 0, jvmMap[10] != null ? jvmMap[10].gcCount : 0, jvmMap[11] != null ? jvmMap[11].gcCount : 0,
                jvmMap[12] != null ? jvmMap[12].gcCount : 0, jvmMap[13] != null ? jvmMap[13].gcCount : 0, jvmMap[14] != null ? jvmMap[14].gcCount : 0,
                jvmMap[15] != null ? jvmMap[15].gcCount : 0, jvmMap[16] != null ? jvmMap[16].gcCount : 0, jvmMap[17] != null ? jvmMap[17].gcCount : 0,
                jvmMap[18] != null ? jvmMap[18].gcCount : 0, jvmMap[19] != null ? jvmMap[19].gcCount : 0, jvmMap[20] != null ? jvmMap[20].gcCount : 0,
                jvmMap[21] != null ? jvmMap[21].gcCount : 0, jvmMap[22] != null ? jvmMap[22].gcCount : 0, jvmMap[23] != null ? jvmMap[23].gcCount : 0,
                jvmMap[24] != null ? jvmMap[24].gcCount : 0, jvmMap[25] != null ? jvmMap[25].gcCount : 0, jvmMap[26] != null ? jvmMap[26].gcCount : 0,
                jvmMap[27] != null ? jvmMap[27].gcCount : 0, jvmMap[28] != null ? jvmMap[28].gcCount : 0, jvmMap[29] != null ? jvmMap[29].gcCount : 0,
                jvmMap[30] != null ? jvmMap[30].gcCount : 0, jvmMap[31] != null ? jvmMap[31].gcCount : 0, jvmMap[32] != null ? jvmMap[32].gcCount : 0,
                jvmMap[33] != null ? jvmMap[33].gcCount : 0, jvmMap[34] != null ? jvmMap[34].gcCount : 0, jvmMap[35] != null ? jvmMap[35].gcCount : 0,
                jvmMap[36] != null ? jvmMap[36].gcCount : 0, jvmMap[37] != null ? jvmMap[37].gcCount : 0, jvmMap[38] != null ? jvmMap[38].gcCount : 0,
                jvmMap[39] != null ? jvmMap[39].gcCount : 0, jvmMap[40] != null ? jvmMap[40].gcCount : 0, jvmMap[41] != null ? jvmMap[41].gcCount : 0,
                jvmMap[42] != null ? jvmMap[42].gcCount : 0, jvmMap[43] != null ? jvmMap[43].gcCount : 0, jvmMap[44] != null ? jvmMap[44].gcCount : 0,
                jvmMap[45] != null ? jvmMap[45].gcCount : 0, jvmMap[46] != null ? jvmMap[46].gcCount : 0, jvmMap[47] != null ? jvmMap[47].gcCount : 0,
                jvmMap[48] != null ? jvmMap[48].gcCount : 0, jvmMap[49] != null ? jvmMap[49].gcCount : 0, jvmMap[50] != null ? jvmMap[50].gcCount : 0,
                jvmMap[51] != null ? jvmMap[51].gcCount : 0, jvmMap[52] != null ? jvmMap[52].gcCount : 0, jvmMap[53] != null ? jvmMap[53].gcCount : 0,
                jvmMap[54] != null ? jvmMap[54].gcCount : 0, jvmMap[55] != null ? jvmMap[55].gcCount : 0, jvmMap[56] != null ? jvmMap[56].gcCount : 0,
                jvmMap[57] != null ? jvmMap[57].gcCount : 0, jvmMap[58] != null ? jvmMap[58].gcCount : 0, jvmMap[59] != null ? jvmMap[59].gcCount : 0],

            type: 'bar'
        }]
    };
    gcCountChart.setOption(gcCountOption);

    var gcTimeChart = echarts.init(document.getElementById('gc_time'));
    var gcTimeOption = {
        title: {
            text: "gcTime",
            left: "center"
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                51, 52, 53, 54, 55, 56, 57, 58, 59]
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [jvmMap[0] != null ? jvmMap[0].gcTime : 0, jvmMap[1] != null ? jvmMap[1].gcTime : 0, jvmMap[2] != null ? jvmMap[2].gcTime : 0,
                jvmMap[3] != null ? jvmMap[3].gcTime : 0, jvmMap[4] != null ? jvmMap[4].gcTime : 0, jvmMap[5] != null ? jvmMap[5].gcTime : 0,
                jvmMap[6] != null ? jvmMap[6].gcTime : 0, jvmMap[7] != null ? jvmMap[7].gcTime : 0, jvmMap[8] != null ? jvmMap[8].gcTime : 0,
                jvmMap[9] != null ? jvmMap[9].gcTime : 0, jvmMap[10] != null ? jvmMap[10].gcTime : 0, jvmMap[11] != null ? jvmMap[11].gcTime : 0,
                jvmMap[12] != null ? jvmMap[12].gcTime : 0, jvmMap[13] != null ? jvmMap[13].gcTime : 0, jvmMap[14] != null ? jvmMap[14].gcTime : 0,
                jvmMap[15] != null ? jvmMap[15].gcTime : 0, jvmMap[16] != null ? jvmMap[16].gcTime : 0, jvmMap[17] != null ? jvmMap[17].gcTime : 0,
                jvmMap[18] != null ? jvmMap[18].gcTime : 0, jvmMap[19] != null ? jvmMap[19].gcTime : 0, jvmMap[20] != null ? jvmMap[20].gcTime : 0,
                jvmMap[21] != null ? jvmMap[21].gcTime : 0, jvmMap[22] != null ? jvmMap[22].gcTime : 0, jvmMap[23] != null ? jvmMap[23].gcTime : 0,
                jvmMap[24] != null ? jvmMap[24].gcTime : 0, jvmMap[25] != null ? jvmMap[25].gcTime : 0, jvmMap[26] != null ? jvmMap[26].gcTime : 0,
                jvmMap[27] != null ? jvmMap[27].gcTime : 0, jvmMap[28] != null ? jvmMap[28].gcTime : 0, jvmMap[29] != null ? jvmMap[29].gcTime : 0,
                jvmMap[30] != null ? jvmMap[30].gcTime : 0, jvmMap[31] != null ? jvmMap[31].gcTime : 0, jvmMap[32] != null ? jvmMap[32].gcTime : 0,
                jvmMap[33] != null ? jvmMap[33].gcTime : 0, jvmMap[34] != null ? jvmMap[34].gcTime : 0, jvmMap[35] != null ? jvmMap[35].gcTime : 0,
                jvmMap[36] != null ? jvmMap[36].gcTime : 0, jvmMap[37] != null ? jvmMap[37].gcTime : 0, jvmMap[38] != null ? jvmMap[38].gcTime : 0,
                jvmMap[39] != null ? jvmMap[39].gcTime : 0, jvmMap[40] != null ? jvmMap[40].gcTime : 0, jvmMap[41] != null ? jvmMap[41].gcTime : 0,
                jvmMap[42] != null ? jvmMap[42].gcTime : 0, jvmMap[43] != null ? jvmMap[43].gcTime : 0, jvmMap[44] != null ? jvmMap[44].gcTime : 0,
                jvmMap[45] != null ? jvmMap[45].gcTime : 0, jvmMap[46] != null ? jvmMap[46].gcTime : 0, jvmMap[47] != null ? jvmMap[47].gcTime : 0,
                jvmMap[48] != null ? jvmMap[48].gcTime : 0, jvmMap[49] != null ? jvmMap[49].gcTime : 0, jvmMap[50] != null ? jvmMap[50].gcTime : 0,
                jvmMap[51] != null ? jvmMap[51].gcTime : 0, jvmMap[52] != null ? jvmMap[52].gcTime : 0, jvmMap[53] != null ? jvmMap[53].gcTime : 0,
                jvmMap[54] != null ? jvmMap[54].gcTime : 0, jvmMap[55] != null ? jvmMap[55].gcTime : 0, jvmMap[56] != null ? jvmMap[56].gcTime : 0,
                jvmMap[57] != null ? jvmMap[57].gcTime : 0, jvmMap[58] != null ? jvmMap[58].gcTime : 0, jvmMap[59] != null ? jvmMap[59].gcTime : 0],

            type: 'bar'
        }]
    };
    gcTimeChart.setOption(gcTimeOption);

    var oldGcCountChart = echarts.init(document.getElementById('old_gc_count'));
    var oldGcCountOption = {
        title: {
            text: "oldGcCount",
            left: "center"
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                51, 52, 53, 54, 55, 56, 57, 58, 59]
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [jvmMap[0] != null ? jvmMap[0].oldGcCount : 0, jvmMap[1] != null ? jvmMap[1].oldGcCount : 0, jvmMap[2] != null ? jvmMap[2].oldGcCount : 0,
                jvmMap[3] != null ? jvmMap[3].oldGcCount : 0, jvmMap[4] != null ? jvmMap[4].oldGcCount : 0, jvmMap[5] != null ? jvmMap[5].oldGcCount : 0,
                jvmMap[6] != null ? jvmMap[6].oldGcCount : 0, jvmMap[7] != null ? jvmMap[7].oldGcCount : 0, jvmMap[8] != null ? jvmMap[8].oldGcCount : 0,
                jvmMap[9] != null ? jvmMap[9].oldGcCount : 0, jvmMap[10] != null ? jvmMap[10].oldGcCount : 0, jvmMap[11] != null ? jvmMap[11].oldGcCount : 0,
                jvmMap[12] != null ? jvmMap[12].oldGcCount : 0, jvmMap[13] != null ? jvmMap[13].oldGcCount : 0, jvmMap[14] != null ? jvmMap[14].oldGcCount : 0,
                jvmMap[15] != null ? jvmMap[15].oldGcCount : 0, jvmMap[16] != null ? jvmMap[16].oldGcCount : 0, jvmMap[17] != null ? jvmMap[17].oldGcCount : 0,
                jvmMap[18] != null ? jvmMap[18].oldGcCount : 0, jvmMap[19] != null ? jvmMap[19].oldGcCount : 0, jvmMap[20] != null ? jvmMap[20].oldGcCount : 0,
                jvmMap[21] != null ? jvmMap[21].oldGcCount : 0, jvmMap[22] != null ? jvmMap[22].oldGcCount : 0, jvmMap[23] != null ? jvmMap[23].oldGcCount : 0,
                jvmMap[24] != null ? jvmMap[24].oldGcCount : 0, jvmMap[25] != null ? jvmMap[25].oldGcCount : 0, jvmMap[26] != null ? jvmMap[26].oldGcCount : 0,
                jvmMap[27] != null ? jvmMap[27].oldGcCount : 0, jvmMap[28] != null ? jvmMap[28].oldGcCount : 0, jvmMap[29] != null ? jvmMap[29].oldGcCount : 0,
                jvmMap[30] != null ? jvmMap[30].oldGcCount : 0, jvmMap[31] != null ? jvmMap[31].oldGcCount : 0, jvmMap[32] != null ? jvmMap[32].oldGcCount : 0,
                jvmMap[33] != null ? jvmMap[33].oldGcCount : 0, jvmMap[34] != null ? jvmMap[34].oldGcCount : 0, jvmMap[35] != null ? jvmMap[35].oldGcCount : 0,
                jvmMap[36] != null ? jvmMap[36].oldGcCount : 0, jvmMap[37] != null ? jvmMap[37].oldGcCount : 0, jvmMap[38] != null ? jvmMap[38].oldGcCount : 0,
                jvmMap[39] != null ? jvmMap[39].oldGcCount : 0, jvmMap[40] != null ? jvmMap[40].oldGcCount : 0, jvmMap[41] != null ? jvmMap[41].oldGcCount : 0,
                jvmMap[42] != null ? jvmMap[42].oldGcCount : 0, jvmMap[43] != null ? jvmMap[43].oldGcCount : 0, jvmMap[44] != null ? jvmMap[44].oldGcCount : 0,
                jvmMap[45] != null ? jvmMap[45].oldGcCount : 0, jvmMap[46] != null ? jvmMap[46].oldGcCount : 0, jvmMap[47] != null ? jvmMap[47].oldGcCount : 0,
                jvmMap[48] != null ? jvmMap[48].oldGcCount : 0, jvmMap[49] != null ? jvmMap[49].oldGcCount : 0, jvmMap[50] != null ? jvmMap[50].oldGcCount : 0,
                jvmMap[51] != null ? jvmMap[51].oldGcCount : 0, jvmMap[52] != null ? jvmMap[52].oldGcCount : 0, jvmMap[53] != null ? jvmMap[53].oldGcCount : 0,
                jvmMap[54] != null ? jvmMap[54].oldGcCount : 0, jvmMap[55] != null ? jvmMap[55].oldGcCount : 0, jvmMap[56] != null ? jvmMap[56].oldGcCount : 0,
                jvmMap[57] != null ? jvmMap[57].oldGcCount : 0, jvmMap[58] != null ? jvmMap[58].oldGcCount : 0, jvmMap[59] != null ? jvmMap[59].oldGcCount : 0],

            type: 'bar'
        }]
    };
    oldGcCountChart.setOption(oldGcCountOption);

    var oldGcTimeChart = echarts.init(document.getElementById('old_gc_time'));
    var oldGcTimeOption = {
        title: {
            text: "oldGcTime",
            left: "center"
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                51, 52, 53, 54, 55, 56, 57, 58, 59]
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [jvmMap[0] != null ? jvmMap[0].oldGcTime : 0, jvmMap[1] != null ? jvmMap[1].oldGcTime : 0, jvmMap[2] != null ? jvmMap[2].oldGcTime : 0,
                jvmMap[3] != null ? jvmMap[3].oldGcTime : 0, jvmMap[4] != null ? jvmMap[4].oldGcTime : 0, jvmMap[5] != null ? jvmMap[5].oldGcTime : 0,
                jvmMap[6] != null ? jvmMap[6].oldGcTime : 0, jvmMap[7] != null ? jvmMap[7].oldGcTime : 0, jvmMap[8] != null ? jvmMap[8].oldGcTime : 0,
                jvmMap[9] != null ? jvmMap[9].oldGcTime : 0, jvmMap[10] != null ? jvmMap[10].oldGcTime : 0, jvmMap[11] != null ? jvmMap[11].oldGcTime : 0,
                jvmMap[12] != null ? jvmMap[12].oldGcTime : 0, jvmMap[13] != null ? jvmMap[13].oldGcTime : 0, jvmMap[14] != null ? jvmMap[14].oldGcTime : 0,
                jvmMap[15] != null ? jvmMap[15].oldGcTime : 0, jvmMap[16] != null ? jvmMap[16].oldGcTime : 0, jvmMap[17] != null ? jvmMap[17].oldGcTime : 0,
                jvmMap[18] != null ? jvmMap[18].oldGcTime : 0, jvmMap[19] != null ? jvmMap[19].oldGcTime : 0, jvmMap[20] != null ? jvmMap[20].oldGcTime : 0,
                jvmMap[21] != null ? jvmMap[21].oldGcTime : 0, jvmMap[22] != null ? jvmMap[22].oldGcTime : 0, jvmMap[23] != null ? jvmMap[23].oldGcTime : 0,
                jvmMap[24] != null ? jvmMap[24].oldGcTime : 0, jvmMap[25] != null ? jvmMap[25].oldGcTime : 0, jvmMap[26] != null ? jvmMap[26].oldGcTime : 0,
                jvmMap[27] != null ? jvmMap[27].oldGcTime : 0, jvmMap[28] != null ? jvmMap[28].oldGcTime : 0, jvmMap[29] != null ? jvmMap[29].oldGcTime : 0,
                jvmMap[30] != null ? jvmMap[30].oldGcTime : 0, jvmMap[31] != null ? jvmMap[31].oldGcTime : 0, jvmMap[32] != null ? jvmMap[32].oldGcTime : 0,
                jvmMap[33] != null ? jvmMap[33].oldGcTime : 0, jvmMap[34] != null ? jvmMap[34].oldGcTime : 0, jvmMap[35] != null ? jvmMap[35].oldGcTime : 0,
                jvmMap[36] != null ? jvmMap[36].oldGcTime : 0, jvmMap[37] != null ? jvmMap[37].oldGcTime : 0, jvmMap[38] != null ? jvmMap[38].oldGcTime : 0,
                jvmMap[39] != null ? jvmMap[39].oldGcTime : 0, jvmMap[40] != null ? jvmMap[40].oldGcTime : 0, jvmMap[41] != null ? jvmMap[41].oldGcTime : 0,
                jvmMap[42] != null ? jvmMap[42].oldGcTime : 0, jvmMap[43] != null ? jvmMap[43].oldGcTime : 0, jvmMap[44] != null ? jvmMap[44].oldGcTime : 0,
                jvmMap[45] != null ? jvmMap[45].oldGcTime : 0, jvmMap[46] != null ? jvmMap[46].oldGcTime : 0, jvmMap[47] != null ? jvmMap[47].oldGcTime : 0,
                jvmMap[48] != null ? jvmMap[48].oldGcTime : 0, jvmMap[49] != null ? jvmMap[49].oldGcTime : 0, jvmMap[50] != null ? jvmMap[50].oldGcTime : 0,
                jvmMap[51] != null ? jvmMap[51].oldGcTime : 0, jvmMap[52] != null ? jvmMap[52].oldGcTime : 0, jvmMap[53] != null ? jvmMap[53].oldGcTime : 0,
                jvmMap[54] != null ? jvmMap[54].oldGcTime : 0, jvmMap[55] != null ? jvmMap[55].oldGcTime : 0, jvmMap[56] != null ? jvmMap[56].oldGcTime : 0,
                jvmMap[57] != null ? jvmMap[57].oldGcTime : 0, jvmMap[58] != null ? jvmMap[58].oldGcTime : 0, jvmMap[59] != null ? jvmMap[59].oldGcTime : 0],

            type: 'bar'
        }]
    };
    oldGcTimeChart.setOption(oldGcTimeOption);

    var youngGcCountChart = echarts.init(document.getElementById('young_gc_count'));
    var youngGcCountOption = {
        title: {
            text: "youngGcCount",
            left: "center"
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                51, 52, 53, 54, 55, 56, 57, 58, 59]
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [jvmMap[0] != null ? jvmMap[0].youngGcCount : 0, jvmMap[1] != null ? jvmMap[1].youngGcCount : 0, jvmMap[2] != null ? jvmMap[2].youngGcCount : 0,
                jvmMap[3] != null ? jvmMap[3].youngGcCount : 0, jvmMap[4] != null ? jvmMap[4].youngGcCount : 0, jvmMap[5] != null ? jvmMap[5].youngGcCount : 0,
                jvmMap[6] != null ? jvmMap[6].youngGcCount : 0, jvmMap[7] != null ? jvmMap[7].youngGcCount : 0, jvmMap[8] != null ? jvmMap[8].youngGcCount : 0,
                jvmMap[9] != null ? jvmMap[9].youngGcCount : 0, jvmMap[10] != null ? jvmMap[10].youngGcCount : 0, jvmMap[11] != null ? jvmMap[11].youngGcCount : 0,
                jvmMap[12] != null ? jvmMap[12].youngGcCount : 0, jvmMap[13] != null ? jvmMap[13].youngGcCount : 0, jvmMap[14] != null ? jvmMap[14].youngGcCount : 0,
                jvmMap[15] != null ? jvmMap[15].youngGcCount : 0, jvmMap[16] != null ? jvmMap[16].youngGcCount : 0, jvmMap[17] != null ? jvmMap[17].youngGcCount : 0,
                jvmMap[18] != null ? jvmMap[18].youngGcCount : 0, jvmMap[19] != null ? jvmMap[19].youngGcCount : 0, jvmMap[20] != null ? jvmMap[20].youngGcCount : 0,
                jvmMap[21] != null ? jvmMap[21].youngGcCount : 0, jvmMap[22] != null ? jvmMap[22].youngGcCount : 0, jvmMap[23] != null ? jvmMap[23].youngGcCount : 0,
                jvmMap[24] != null ? jvmMap[24].youngGcCount : 0, jvmMap[25] != null ? jvmMap[25].youngGcCount : 0, jvmMap[26] != null ? jvmMap[26].youngGcCount : 0,
                jvmMap[27] != null ? jvmMap[27].youngGcCount : 0, jvmMap[28] != null ? jvmMap[28].youngGcCount : 0, jvmMap[29] != null ? jvmMap[29].youngGcCount : 0,
                jvmMap[30] != null ? jvmMap[30].youngGcCount : 0, jvmMap[31] != null ? jvmMap[31].youngGcCount : 0, jvmMap[32] != null ? jvmMap[32].youngGcCount : 0,
                jvmMap[33] != null ? jvmMap[33].youngGcCount : 0, jvmMap[34] != null ? jvmMap[34].youngGcCount : 0, jvmMap[35] != null ? jvmMap[35].youngGcCount : 0,
                jvmMap[36] != null ? jvmMap[36].youngGcCount : 0, jvmMap[37] != null ? jvmMap[37].youngGcCount : 0, jvmMap[38] != null ? jvmMap[38].youngGcCount : 0,
                jvmMap[39] != null ? jvmMap[39].youngGcCount : 0, jvmMap[40] != null ? jvmMap[40].youngGcCount : 0, jvmMap[41] != null ? jvmMap[41].youngGcCount : 0,
                jvmMap[42] != null ? jvmMap[42].youngGcCount : 0, jvmMap[43] != null ? jvmMap[43].youngGcCount : 0, jvmMap[44] != null ? jvmMap[44].youngGcCount : 0,
                jvmMap[45] != null ? jvmMap[45].youngGcCount : 0, jvmMap[46] != null ? jvmMap[46].youngGcCount : 0, jvmMap[47] != null ? jvmMap[47].youngGcCount : 0,
                jvmMap[48] != null ? jvmMap[48].youngGcCount : 0, jvmMap[49] != null ? jvmMap[49].youngGcCount : 0, jvmMap[50] != null ? jvmMap[50].youngGcCount : 0,
                jvmMap[51] != null ? jvmMap[51].youngGcCount : 0, jvmMap[52] != null ? jvmMap[52].youngGcCount : 0, jvmMap[53] != null ? jvmMap[53].youngGcCount : 0,
                jvmMap[54] != null ? jvmMap[54].youngGcCount : 0, jvmMap[55] != null ? jvmMap[55].youngGcCount : 0, jvmMap[56] != null ? jvmMap[56].youngGcCount : 0,
                jvmMap[57] != null ? jvmMap[57].youngGcCount : 0, jvmMap[58] != null ? jvmMap[58].youngGcCount : 0, jvmMap[59] != null ? jvmMap[59].youngGcCount : 0],

            type: 'bar'
        }]
    };
    youngGcCountChart.setOption(youngGcCountOption);

    var youngGcTimeChart = echarts.init(document.getElementById('young_gc_time'));
    var youngGcTimeOption = {
        title: {
            text: "youngGcTime",
            left: "center"
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                51, 52, 53, 54, 55, 56, 57, 58, 59]
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [jvmMap[0] != null ? jvmMap[0].youngGcTime : 0, jvmMap[1] != null ? jvmMap[1].youngGcTime : 0, jvmMap[2] != null ? jvmMap[2].youngGcTime : 0,
                jvmMap[3] != null ? jvmMap[3].youngGcTime : 0, jvmMap[4] != null ? jvmMap[4].youngGcTime : 0, jvmMap[5] != null ? jvmMap[5].youngGcTime : 0,
                jvmMap[6] != null ? jvmMap[6].youngGcTime : 0, jvmMap[7] != null ? jvmMap[7].youngGcTime : 0, jvmMap[8] != null ? jvmMap[8].youngGcTime : 0,
                jvmMap[9] != null ? jvmMap[9].youngGcTime : 0, jvmMap[10] != null ? jvmMap[10].youngGcTime : 0, jvmMap[11] != null ? jvmMap[11].youngGcTime : 0,
                jvmMap[12] != null ? jvmMap[12].youngGcTime : 0, jvmMap[13] != null ? jvmMap[13].youngGcTime : 0, jvmMap[14] != null ? jvmMap[14].youngGcTime : 0,
                jvmMap[15] != null ? jvmMap[15].youngGcTime : 0, jvmMap[16] != null ? jvmMap[16].youngGcTime : 0, jvmMap[17] != null ? jvmMap[17].youngGcTime : 0,
                jvmMap[18] != null ? jvmMap[18].youngGcTime : 0, jvmMap[19] != null ? jvmMap[19].youngGcTime : 0, jvmMap[20] != null ? jvmMap[20].youngGcTime : 0,
                jvmMap[21] != null ? jvmMap[21].youngGcTime : 0, jvmMap[22] != null ? jvmMap[22].youngGcTime : 0, jvmMap[23] != null ? jvmMap[23].youngGcTime : 0,
                jvmMap[24] != null ? jvmMap[24].youngGcTime : 0, jvmMap[25] != null ? jvmMap[25].youngGcTime : 0, jvmMap[26] != null ? jvmMap[26].youngGcTime : 0,
                jvmMap[27] != null ? jvmMap[27].youngGcTime : 0, jvmMap[28] != null ? jvmMap[28].youngGcTime : 0, jvmMap[29] != null ? jvmMap[29].youngGcTime : 0,
                jvmMap[30] != null ? jvmMap[30].youngGcTime : 0, jvmMap[31] != null ? jvmMap[31].youngGcTime : 0, jvmMap[32] != null ? jvmMap[32].youngGcTime : 0,
                jvmMap[33] != null ? jvmMap[33].youngGcTime : 0, jvmMap[34] != null ? jvmMap[34].youngGcTime : 0, jvmMap[35] != null ? jvmMap[35].youngGcTime : 0,
                jvmMap[36] != null ? jvmMap[36].youngGcTime : 0, jvmMap[37] != null ? jvmMap[37].youngGcTime : 0, jvmMap[38] != null ? jvmMap[38].youngGcTime : 0,
                jvmMap[39] != null ? jvmMap[39].youngGcTime : 0, jvmMap[40] != null ? jvmMap[40].youngGcTime : 0, jvmMap[41] != null ? jvmMap[41].youngGcTime : 0,
                jvmMap[42] != null ? jvmMap[42].youngGcTime : 0, jvmMap[43] != null ? jvmMap[43].youngGcTime : 0, jvmMap[44] != null ? jvmMap[44].youngGcTime : 0,
                jvmMap[45] != null ? jvmMap[45].youngGcTime : 0, jvmMap[46] != null ? jvmMap[46].youngGcTime : 0, jvmMap[47] != null ? jvmMap[47].youngGcTime : 0,
                jvmMap[48] != null ? jvmMap[48].youngGcTime : 0, jvmMap[49] != null ? jvmMap[49].youngGcTime : 0, jvmMap[50] != null ? jvmMap[50].youngGcTime : 0,
                jvmMap[51] != null ? jvmMap[51].youngGcTime : 0, jvmMap[52] != null ? jvmMap[52].youngGcTime : 0, jvmMap[53] != null ? jvmMap[53].youngGcTime : 0,
                jvmMap[54] != null ? jvmMap[54].youngGcTime : 0, jvmMap[55] != null ? jvmMap[55].youngGcTime : 0, jvmMap[56] != null ? jvmMap[56].youngGcTime : 0,
                jvmMap[57] != null ? jvmMap[57].youngGcTime : 0, jvmMap[58] != null ? jvmMap[58].youngGcTime : 0, jvmMap[59] != null ? jvmMap[59].youngGcTime : 0],

            type: 'bar'
        }]
    };
    youngGcTimeChart.setOption(youngGcTimeOption);

    var usedMemoryChart = echarts.init(document.getElementById('used_memory'));
    var usedMemoryOption = {
        title: {
            text: "usedMemory",
            left: "center"
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                51, 52, 53, 54, 55, 56, 57, 58, 59]
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [memoryMap[0] != null ? (memoryMap[0].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[1] != null ? (memoryMap[1].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[2] != null ? (memoryMap[2].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[3] != null ? (memoryMap[3].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[4] != null ? (memoryMap[4].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[5] != null ? (memoryMap[5].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[6] != null ? (memoryMap[6].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[7] != null ? (memoryMap[7].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[8] != null ? (memoryMap[8].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[9] != null ? (memoryMap[9].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[10] != null ? (memoryMap[10].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[11] != null ? (memoryMap[11].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[12] != null ? (memoryMap[12].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[13] != null ? (memoryMap[13].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[14] != null ? (memoryMap[14].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[15] != null ? (memoryMap[15].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[16] != null ? (memoryMap[16].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[17] != null ? (memoryMap[17].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[18] != null ? (memoryMap[18].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[19] != null ? (memoryMap[19].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[20] != null ? (memoryMap[20].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[21] != null ? (memoryMap[21].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[22] != null ? (memoryMap[22].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[23] != null ? (memoryMap[23].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[24] != null ? (memoryMap[24].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[25] != null ? (memoryMap[25].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[26] != null ? (memoryMap[26].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[27] != null ? (memoryMap[27].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[28] != null ? (memoryMap[28].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[29] != null ? (memoryMap[29].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[30] != null ? (memoryMap[30].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[31] != null ? (memoryMap[31].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[32] != null ? (memoryMap[32].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[33] != null ? (memoryMap[33].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[34] != null ? (memoryMap[34].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[35] != null ? (memoryMap[35].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[36] != null ? (memoryMap[36].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[37] != null ? (memoryMap[37].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[38] != null ? (memoryMap[38].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[39] != null ? (memoryMap[39].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[40] != null ? (memoryMap[40].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[41] != null ? (memoryMap[41].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[42] != null ? (memoryMap[42].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[43] != null ? (memoryMap[43].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[44] != null ? (memoryMap[44].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[45] != null ? (memoryMap[45].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[46] != null ? (memoryMap[46].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[47] != null ? (memoryMap[47].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[48] != null ? (memoryMap[48].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[49] != null ? (memoryMap[49].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[50] != null ? (memoryMap[50].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[51] != null ? (memoryMap[51].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[52] != null ? (memoryMap[52].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[53] != null ? (memoryMap[53].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[54] != null ? (memoryMap[54].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[55] != null ? (memoryMap[55].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[56] != null ? (memoryMap[56].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[57] != null ? (memoryMap[57].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[58] != null ? (memoryMap[58].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[59] != null ? (memoryMap[59].usedMemory / 1000.0 / 1000.0).toFixed(2) : 0],

            type: 'bar'
        }]
    };
    usedMemoryChart.setOption(usedMemoryOption);

    var usedOldGenChart = echarts.init(document.getElementById('used_old_gen'));
    var usedOldGenOption = {
        title: {
            text: "usedOldGen",
            left: "center"
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                51, 52, 53, 54, 55, 56, 57, 58, 59]
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [memoryMap[0] != null ? (memoryMap[0].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[1] != null ? (memoryMap[1].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[2] != null ? (memoryMap[2].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[3] != null ? (memoryMap[3].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[4] != null ? (memoryMap[4].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[5] != null ? (memoryMap[5].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[6] != null ? (memoryMap[6].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[7] != null ? (memoryMap[7].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[8] != null ? (memoryMap[8].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[9] != null ? (memoryMap[9].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[10] != null ? (memoryMap[10].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[11] != null ? (memoryMap[11].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[12] != null ? (memoryMap[12].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[13] != null ? (memoryMap[13].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[14] != null ? (memoryMap[14].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[15] != null ? (memoryMap[15].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[16] != null ? (memoryMap[16].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[17] != null ? (memoryMap[17].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[18] != null ? (memoryMap[18].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[19] != null ? (memoryMap[19].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[20] != null ? (memoryMap[20].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[21] != null ? (memoryMap[21].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[22] != null ? (memoryMap[22].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[23] != null ? (memoryMap[23].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[24] != null ? (memoryMap[24].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[25] != null ? (memoryMap[25].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[26] != null ? (memoryMap[26].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[27] != null ? (memoryMap[27].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[28] != null ? (memoryMap[28].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[29] != null ? (memoryMap[29].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[30] != null ? (memoryMap[30].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[31] != null ? (memoryMap[31].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[32] != null ? (memoryMap[32].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[33] != null ? (memoryMap[33].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[34] != null ? (memoryMap[34].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[35] != null ? (memoryMap[35].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[36] != null ? (memoryMap[36].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[37] != null ? (memoryMap[37].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[38] != null ? (memoryMap[38].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[39] != null ? (memoryMap[39].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[40] != null ? (memoryMap[40].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[41] != null ? (memoryMap[41].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[42] != null ? (memoryMap[42].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[43] != null ? (memoryMap[43].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[44] != null ? (memoryMap[44].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[45] != null ? (memoryMap[45].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[46] != null ? (memoryMap[46].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[47] != null ? (memoryMap[47].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[48] != null ? (memoryMap[48].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[49] != null ? (memoryMap[49].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[50] != null ? (memoryMap[50].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[51] != null ? (memoryMap[51].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[52] != null ? (memoryMap[52].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[53] != null ? (memoryMap[53].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[54] != null ? (memoryMap[54].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[55] != null ? (memoryMap[55].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[56] != null ? (memoryMap[56].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[57] != null ? (memoryMap[57].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[58] != null ? (memoryMap[58].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[59] != null ? (memoryMap[59].usedOldGen / 1000.0 / 1000.0).toFixed(2) : 0],

            type: 'bar'
        }]
    };
    usedOldGenChart.setOption(usedOldGenOption);

    var usedPermGenChart = echarts.init(document.getElementById('used_perm_gen'));
    var usedPermGenOption = {
        title: {
            text: "usedPermGen",
            left: "center"
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                51, 52, 53, 54, 55, 56, 57, 58, 59]
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [memoryMap[0] != null ? (memoryMap[0].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[1] != null ? (memoryMap[1].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[2] != null ? (memoryMap[2].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[3] != null ? (memoryMap[3].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[4] != null ? (memoryMap[4].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[5] != null ? (memoryMap[5].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[6] != null ? (memoryMap[6].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[7] != null ? (memoryMap[7].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[8] != null ? (memoryMap[8].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[9] != null ? (memoryMap[9].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[10] != null ? (memoryMap[10].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[11] != null ? (memoryMap[11].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[12] != null ? (memoryMap[12].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[13] != null ? (memoryMap[13].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[14] != null ? (memoryMap[14].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[15] != null ? (memoryMap[15].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[16] != null ? (memoryMap[16].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[17] != null ? (memoryMap[17].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[18] != null ? (memoryMap[18].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[19] != null ? (memoryMap[19].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[20] != null ? (memoryMap[20].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[21] != null ? (memoryMap[21].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[22] != null ? (memoryMap[22].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[23] != null ? (memoryMap[23].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[24] != null ? (memoryMap[24].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[25] != null ? (memoryMap[25].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[26] != null ? (memoryMap[26].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[27] != null ? (memoryMap[27].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[28] != null ? (memoryMap[28].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[29] != null ? (memoryMap[29].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[30] != null ? (memoryMap[30].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[31] != null ? (memoryMap[31].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[32] != null ? (memoryMap[32].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[33] != null ? (memoryMap[33].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[34] != null ? (memoryMap[34].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[35] != null ? (memoryMap[35].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[36] != null ? (memoryMap[36].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[37] != null ? (memoryMap[37].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[38] != null ? (memoryMap[38].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[39] != null ? (memoryMap[39].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[40] != null ? (memoryMap[40].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[41] != null ? (memoryMap[41].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[42] != null ? (memoryMap[42].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[43] != null ? (memoryMap[43].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[44] != null ? (memoryMap[44].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[45] != null ? (memoryMap[45].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[46] != null ? (memoryMap[46].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[47] != null ? (memoryMap[47].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[48] != null ? (memoryMap[48].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[49] != null ? (memoryMap[49].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[50] != null ? (memoryMap[50].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[51] != null ? (memoryMap[51].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[52] != null ? (memoryMap[52].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[53] != null ? (memoryMap[53].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[54] != null ? (memoryMap[54].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[55] != null ? (memoryMap[55].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[56] != null ? (memoryMap[56].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[57] != null ? (memoryMap[57].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[58] != null ? (memoryMap[58].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[59] != null ? (memoryMap[59].usedPermGen / 1000.0 / 1000.0).toFixed(2) : 0],

            type: 'bar'
        }]
    };
    usedPermGenChart.setOption(usedPermGenOption);

    var usedEdenSpaceChart = echarts.init(document.getElementById('used_eden_space'));
    var usedEdenSpaceOption = {
        title: {
            text: "usedEdenSpace",
            left: "center"
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                51, 52, 53, 54, 55, 56, 57, 58, 59]
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [memoryMap[0] != null ? (memoryMap[0].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[1] != null ? (memoryMap[1].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[2] != null ? (memoryMap[2].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[3] != null ? (memoryMap[3].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[4] != null ? (memoryMap[4].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[5] != null ? (memoryMap[5].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[6] != null ? (memoryMap[6].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[7] != null ? (memoryMap[7].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[8] != null ? (memoryMap[8].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[9] != null ? (memoryMap[9].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[10] != null ? (memoryMap[10].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[11] != null ? (memoryMap[11].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[12] != null ? (memoryMap[12].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[13] != null ? (memoryMap[13].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[14] != null ? (memoryMap[14].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[15] != null ? (memoryMap[15].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[16] != null ? (memoryMap[16].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[17] != null ? (memoryMap[17].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[18] != null ? (memoryMap[18].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[19] != null ? (memoryMap[19].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[20] != null ? (memoryMap[20].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[21] != null ? (memoryMap[21].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[22] != null ? (memoryMap[22].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[23] != null ? (memoryMap[23].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[24] != null ? (memoryMap[24].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[25] != null ? (memoryMap[25].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[26] != null ? (memoryMap[26].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[27] != null ? (memoryMap[27].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[28] != null ? (memoryMap[28].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[29] != null ? (memoryMap[29].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[30] != null ? (memoryMap[30].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[31] != null ? (memoryMap[31].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[32] != null ? (memoryMap[32].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[33] != null ? (memoryMap[33].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[34] != null ? (memoryMap[34].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[35] != null ? (memoryMap[35].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[36] != null ? (memoryMap[36].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[37] != null ? (memoryMap[37].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[38] != null ? (memoryMap[38].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[39] != null ? (memoryMap[39].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[40] != null ? (memoryMap[40].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[41] != null ? (memoryMap[41].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[42] != null ? (memoryMap[42].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[43] != null ? (memoryMap[43].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[44] != null ? (memoryMap[44].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[45] != null ? (memoryMap[45].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[46] != null ? (memoryMap[46].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[47] != null ? (memoryMap[47].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[48] != null ? (memoryMap[48].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[49] != null ? (memoryMap[49].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[50] != null ? (memoryMap[50].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[51] != null ? (memoryMap[51].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[52] != null ? (memoryMap[52].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[53] != null ? (memoryMap[53].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[54] != null ? (memoryMap[54].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[55] != null ? (memoryMap[55].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[56] != null ? (memoryMap[56].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[57] != null ? (memoryMap[57].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[58] != null ? (memoryMap[58].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[59] != null ? (memoryMap[59].usedEdenSpace / 1000.0 / 1000.0).toFixed(2) : 0],

            type: 'bar'
        }]
    };
    usedEdenSpaceChart.setOption(usedEdenSpaceOption);

    var usedSurvivorChart = echarts.init(document.getElementById('used_survivor_space'));
    var usedSurvivorOption = {
        title: {
            text: "usedSurvivorSpace",
            left: "center"
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                51, 52, 53, 54, 55, 56, 57, 58, 59]
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [memoryMap[0] != null ? (memoryMap[0].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[1] != null ? (memoryMap[1].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[2] != null ? (memoryMap[2].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[3] != null ? (memoryMap[3].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[4] != null ? (memoryMap[4].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[5] != null ? (memoryMap[5].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[6] != null ? (memoryMap[6].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[7] != null ? (memoryMap[7].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[8] != null ? (memoryMap[8].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[9] != null ? (memoryMap[9].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[10] != null ? (memoryMap[10].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[11] != null ? (memoryMap[11].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[12] != null ? (memoryMap[12].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[13] != null ? (memoryMap[13].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[14] != null ? (memoryMap[14].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[15] != null ? (memoryMap[15].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[16] != null ? (memoryMap[16].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[17] != null ? (memoryMap[17].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[18] != null ? (memoryMap[18].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[19] != null ? (memoryMap[19].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[20] != null ? (memoryMap[20].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[21] != null ? (memoryMap[21].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[22] != null ? (memoryMap[22].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[23] != null ? (memoryMap[23].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[24] != null ? (memoryMap[24].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[25] != null ? (memoryMap[25].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[26] != null ? (memoryMap[26].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[27] != null ? (memoryMap[27].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[28] != null ? (memoryMap[28].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[29] != null ? (memoryMap[29].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[30] != null ? (memoryMap[30].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[31] != null ? (memoryMap[31].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[32] != null ? (memoryMap[32].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[33] != null ? (memoryMap[33].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[34] != null ? (memoryMap[34].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[35] != null ? (memoryMap[35].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[36] != null ? (memoryMap[36].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[37] != null ? (memoryMap[37].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[38] != null ? (memoryMap[38].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[39] != null ? (memoryMap[39].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[40] != null ? (memoryMap[40].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[41] != null ? (memoryMap[41].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[42] != null ? (memoryMap[42].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[43] != null ? (memoryMap[43].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[44] != null ? (memoryMap[44].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[45] != null ? (memoryMap[45].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[46] != null ? (memoryMap[46].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[47] != null ? (memoryMap[47].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[48] != null ? (memoryMap[48].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[49] != null ? (memoryMap[49].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[50] != null ? (memoryMap[50].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[51] != null ? (memoryMap[51].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[52] != null ? (memoryMap[52].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[53] != null ? (memoryMap[53].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[54] != null ? (memoryMap[54].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[55] != null ? (memoryMap[55].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[56] != null ? (memoryMap[56].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[57] != null ? (memoryMap[57].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[58] != null ? (memoryMap[58].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[59] != null ? (memoryMap[59].usedSurvivorSpace / 1000.0 / 1000.0).toFixed(2) : 0],

            type: 'bar'
        }]
    };
    usedSurvivorChart.setOption(usedSurvivorOption);

    var usedMetaChart = echarts.init(document.getElementById('used_meta_space'));
    var usedMetaOption = {
        title: {
            text: "usedMetaSpace",
            left: "center"
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                51, 52, 53, 54, 55, 56, 57, 58, 59]
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [memoryMap[0] != null ? (memoryMap[0].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[1] != null ? (memoryMap[1].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[2] != null ? (memoryMap[2].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[3] != null ? (memoryMap[3].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[4] != null ? (memoryMap[4].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[5] != null ? (memoryMap[5].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[6] != null ? (memoryMap[6].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[7] != null ? (memoryMap[7].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[8] != null ? (memoryMap[8].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[9] != null ? (memoryMap[9].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[10] != null ? (memoryMap[10].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[11] != null ? (memoryMap[11].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[12] != null ? (memoryMap[12].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[13] != null ? (memoryMap[13].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[14] != null ? (memoryMap[14].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[15] != null ? (memoryMap[15].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[16] != null ? (memoryMap[16].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[17] != null ? (memoryMap[17].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[18] != null ? (memoryMap[18].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[19] != null ? (memoryMap[19].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[20] != null ? (memoryMap[20].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[21] != null ? (memoryMap[21].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[22] != null ? (memoryMap[22].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[23] != null ? (memoryMap[23].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[24] != null ? (memoryMap[24].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[25] != null ? (memoryMap[25].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[26] != null ? (memoryMap[26].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[27] != null ? (memoryMap[27].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[28] != null ? (memoryMap[28].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[29] != null ? (memoryMap[29].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[30] != null ? (memoryMap[30].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[31] != null ? (memoryMap[31].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[32] != null ? (memoryMap[32].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[33] != null ? (memoryMap[33].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[34] != null ? (memoryMap[34].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[35] != null ? (memoryMap[35].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[36] != null ? (memoryMap[36].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[37] != null ? (memoryMap[37].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[38] != null ? (memoryMap[38].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[39] != null ? (memoryMap[39].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[40] != null ? (memoryMap[40].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[41] != null ? (memoryMap[41].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[42] != null ? (memoryMap[42].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[43] != null ? (memoryMap[43].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[44] != null ? (memoryMap[44].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[45] != null ? (memoryMap[45].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[46] != null ? (memoryMap[46].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[47] != null ? (memoryMap[47].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[48] != null ? (memoryMap[48].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[49] != null ? (memoryMap[49].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[50] != null ? (memoryMap[50].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[51] != null ? (memoryMap[51].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[52] != null ? (memoryMap[52].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[53] != null ? (memoryMap[53].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[54] != null ? (memoryMap[54].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[55] != null ? (memoryMap[55].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[56] != null ? (memoryMap[56].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0,
                memoryMap[57] != null ? (memoryMap[57].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[58] != null ? (memoryMap[58].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0, memoryMap[59] != null ? (memoryMap[59].usedMetaSpace / 1000.0 / 1000.0).toFixed(2) : 0],

            type: 'bar'
        }]
    };
    usedMetaChart.setOption(usedMetaOption);

}

function showChart(event) {

    var domain = $("#search").val();
    var startTime = $("#startTime").val();
    var endTime = $("#endTime").val();

    var type = $(event).data("type");

    var chartId = $(event).data("status");

    var tbodyId = "tbody" + $(event).data("status").substr(6, 1);

    if (document.getElementById(chartId).style.display === "none") {
        document.getElementById(chartId).style.display = "";
        event.text = "[:: hide ::]";

        var name = $(event).data("name");
        var url = "/show?domain=" + domain + "&startTime=" + startTime + "&endTime=" + endTime + "&type=" + type;
        if (name !== undefined) {
            url = "/show?domain=" + domain + "&startTime=" + startTime + "&endTime=" + endTime + "&type=" + type + "&name=" + name;
        }

        $.ajax({
            url: url,
            dataType: "json",
            type: "GET",
            success: function (data) {
                var tbody = document.getElementById(tbodyId);
                tbody.innerHTML = "";
                var e = data.data;
                for (var i = 0; i < e.length; i++) {
                    var tr = '<tr style="height: 35px">';
                    var hostname = "<td align='center' valign='middle'>" + e[i].hostname + "</td>";
                    var total = "<td align='center' valign='middle'>" + e[i].total + "</td>";
                    var max = "<td align='center' valign='middle'>" + e[i].max + "</td>";
                    var min = "<td align='center' valign='middle'>" + e[i].min + "</td>";
                    var line95 = "<td align='center' valign='middle'>" + e[i].line95 + "</td>";
                    var line99 = "<td align='center' valign='middle'>" + e[i].line99 + "</td>";
                    var qps = "<td align='center' valign='middle'>0.0</td>";
                    tr += hostname + total + max + min + line95 + line99 + qps + "</tr>";
                    tbody.innerHTML += tr;
                }
            }
        });
    } else {
        var tbody = document.getElementById(tbodyId);
        tbody.innerHTML = "";
        document.getElementById(chartId).style.display = "none";
        event.text = "[:: show ::]";
    }

}

function showNames(event) {

    var domain = $("#search").val();
    var startTime = $("#startTime").val();
    var endTime = $("#endTime").val();

    var type = $(event).data("type");

    window.location.href = '/type?domain=' + domain + '&startTime=' + startTime + '&endTime=' + endTime + '&type=' + type;
    window.event.returnValue = false;

}

window.onbeforeunload = function () {
    var domain = $("#search").val();
    var startTime = $("#startTime").val();
    var endTime = $("#endTime").val();

    store2Local(domain, startTime, endTime);
};

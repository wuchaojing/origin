function showChart(event) {
    var chartId = $(event).data("status");
    if (document.getElementById(chartId).style.display === "none") {
        document.getElementById(chartId).style.display = "inline";
        event.text = "[:: hide ::]";
    } else {
        document.getElementById(chartId).style.display = "none";
        event.text = "[:: show ::]";
    }

    var domain = $("#search").val();
    var startTime = $("#startTime").val();
    var endTime = $("#endTime").val();

    var type = $(event).data("type");

    $.ajax({
        url: "/show?domain=" + domain + "&startTime=" + startTime + "&endTime=" + endTime + "&type=" + type,
        dataType: "json",
        type: "GET",
        success: function (data) {
        }
    });
}

window.onbeforeunload = function () {
    var domain = $("#search").val();
    var startTime = $("#startTime").val();
    var endTime = $("#endTime").val();

    store2Local(domain, startTime, endTime);
};

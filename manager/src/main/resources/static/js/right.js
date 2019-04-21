function selectMachine(size, id) {

    selectMachineWithColor(size, id);

    var domain = $("#search").val();
    var startTime = $("#startTime").val();
    var endTime = $("#endTime").val();
    var machine = document.getElementById("machine" + id).innerText;
    var page = $("#page").val();

    window.sessionStorage.setItem("machineSize", size);
    window.sessionStorage.setItem("machineId", id);

    window.location.href = '/get_type?domain=' + domain + '&startTime=' + startTime + '&endTime=' + endTime + '&machine=' + machine + "&page=" + page;
    window.event.returnValue = false;
}

function selectMachineWithColor(size, id) {
    var intSize = parseInt(size);
    var intId = parseInt(id);
    document.getElementById("machine_all").style.backgroundColor = "#fff";

    for (var i = 1; i <= intSize; i++) {
        if (i === intId) {
            document.getElementById("machine" + i).style.backgroundColor = "#4876FF";
            continue;
        }
        document.getElementById("machine" + i).style.backgroundColor = "#fff";
    }
}

function selectAll() {

    document.getElementById("machine_all").style.backgroundColor = "#4876FF";

    var x = document.getElementsByClassName("machine-name");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "#fff";
    }

    getType();

}

function getType() {
    window.sessionStorage.removeItem("machineSize");
    window.sessionStorage.removeItem("machineId");

    var domain = $("#search").val();
    var startTime = $("#startTime").val();
    var endTime = $("#endTime").val();
    var page = $("#page").val();

    window.location.href = '/get_type?domain=' + domain + '&startTime=' + startTime + '&endTime=' + endTime + '&page=' + page;
    window.event.returnValue = false;

}

function subtractDay() {
    window.sessionStorage.removeItem("machineSize");
    window.sessionStorage.removeItem("machineId");

    var startTime = $("#startTime").val();
    var timestamp = Date.parse(new Date(startTime));
    timestamp = timestamp - 86400000;
    var newStartTime = timeStamp2Str(timestamp);
    $("#startTime").val(newStartTime);

    var endTime = $("#endTime").val();
    timestamp = Date.parse(new Date(endTime));
    timestamp = timestamp - 86400000;
    var newEndTime = timeStamp2Str(timestamp);
    $("#endTime").val(newEndTime);

    var page = $("#page").val();

    window.location.href = '/get_type?domain=' + domain + '&startTime=' + newStartTime + '&endTime=' + newEndTime + '&page=' + page;
    window.event.returnValue = false;

}

function addDay() {
    window.sessionStorage.removeItem("machineSize");
    window.sessionStorage.removeItem("machineId");

    var nowTimestamp = Date.parse(new Date());

    var startTime = $("#startTime").val();
    var timestamp = Date.parse(new Date(startTime));
    timestamp = timestamp + 86400000;
    if (timestamp > nowTimestamp) {
        return;
    }
    var newStartTime = timeStamp2Str(timestamp);
    $("#startTime").val(newStartTime);

    var endTime = $("#endTime").val();
    timestamp = Date.parse(new Date(endTime));
    timestamp = timestamp + 86400000;
    var newEndTime = timeStamp2Str(timestamp);
    $("#endTime").val(newEndTime);

    var page = $("#page").val();

    window.location.href = '/get_type?domain=' + domain + '&startTime=' + newStartTime + '&endTime=' + newEndTime + '&page=' + page;
    window.event.returnValue = false;

}

function subtractHour() {
    window.sessionStorage.removeItem("machineSize");
    window.sessionStorage.removeItem("machineId");

    var startTime = $("#startTime").val();
    var timestamp = Date.parse(new Date(startTime));
    timestamp = timestamp - 3600000;
    var newStartTime = timeStamp2Str(timestamp);
    $("#startTime").val(newStartTime);

    var endTime = $("#endTime").val();
    timestamp = Date.parse(new Date(endTime));
    timestamp = timestamp - 3600000;
    var newEndTime = timeStamp2Str(timestamp);
    $("#endTime").val(newEndTime);

    var page = $("#page").val();

    window.location.href = '/get_type?domain=' + domain + '&startTime=' + newStartTime + '&endTime=' + newEndTime + '&page=' + page;
    window.event.returnValue = false;

}

function addHour() {

    window.sessionStorage.removeItem("machineSize");
    window.sessionStorage.removeItem("machineId");

    var nowTimestamp = Date.parse(new Date());

    var startTime = $("#startTime").val();
    var timestamp = Date.parse(new Date(startTime));
    timestamp = timestamp + 3600000;
    if (timestamp > nowTimestamp) {
        return;
    }
    var newStartTime = timeStamp2Str(timestamp);
    $("#startTime").val(newStartTime);

    var endTime = $("#endTime").val();
    timestamp = Date.parse(new Date(endTime));
    timestamp = timestamp + 3600000;
    var newEndTime = timeStamp2Str(timestamp);
    $("#endTime").val(newEndTime);

    var page = $("#page").val();

    window.location.href = '/get_type?domain=' + domain + '&startTime=' + newStartTime + '&endTime=' + newEndTime + '&page=' + page;
    window.event.returnValue = false;

}

function now() {

    window.sessionStorage.removeItem("machineSize");
    window.sessionStorage.removeItem("machineId");

    var myDate = new Date();
    $("#startTime").val(myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate() + " " + myDate.getHours() + ":00");
    $("#endTime").val(myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate() + " " + (myDate.getHours() + 1) + ":00");
    var page = $("#page").val();

    window.location.href = '/get_type?domain=' + domain + '&startTime=' + startTime + '&endTime=' + endTime + '&page=' + page;
    window.event.returnValue = false;
}


function timeStamp2Str(timestamp) {
    var newDate = new Date();
    newDate.setTime(timestamp);

    Date.prototype.format = function (format) {
        var date = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S+": this.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, date[k]);
            }
        }

        return format;
    };
    return newDate.format('yyyy-MM-dd hh:') + "00";

}
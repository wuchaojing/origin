function selectTransaction() {
    $.ajax({
        type: "get",
        url: "/transaction",
        dataType: 'json',
        contentType: 'application/json;charset=UTF-8',
        success: function (r) {
            alert(r);
        }
    });
}

function selectHeartBeat() {
    $.ajax({
        type: "get",
        url: "/heart",
        dataType: 'json',
        contentType: 'application/json;charset=UTF-8',
        success: function (r) {
            alert(r);
        }
    });
}
// SHOW/HIDE DETAILS
function showHide(shID) {
    if (document.getElementById(shID)) {
        if (document.getElementById(shID+'-show').style.display != 'none') {
            document.getElementById(shID+'-show').style.display = 'none';
            document.getElementById(shID).style.display = 'block';
        }
        else {
            document.getElementById(shID+'-show').style.display = 'inline';
            document.getElementById(shID).style.display = 'none';
        }
    }
}

// JQUERY UI DATE PICKER
$(function() {
    $( "#datepicker" ).datepicker();
});

$(function () {
    $("#datepicker2").datepicker();
});

$(function () {
    $("#datepicker3").datepicker();
});
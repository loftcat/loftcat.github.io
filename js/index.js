document.getElementById("avatar").addEventListener("mouseover", displayInfo);
document.getElementById("avatar").addEventListener("mouseout", hideInfo);

function displayInfo() {
    $("#avatar").animate({
        height: '+=10px',
        width: '+=10px',
    });

    var t = $(".hint").css("font-size");
    var t1 = parseInt(t, 10);
    var unit = t.slice(-2)
    $(".hint").css("font-size", (t1 + 10) + unit);
    console.log(t)
}

function hideInfo() {
    $("#avatar").animate({
        opacity: '1',
        height: '-=10px',
        width: '-=10px'
    });
    var t = $(".hint").css("font-size");
    var t1 = parseInt(t, 10);
    var unit = t.slice(-2);
    $(".hint").css("font-size", (t1 - 10) + unit);
}

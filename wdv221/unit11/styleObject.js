window.onload = function () {

    document.getElementById("pColor").onclick = function () {
        this.style.color = "red";
    };

    document.getElementById("pMoving").onmouseover = function () {
        document.getElementById("h3").style.textAlign = "center";
    };

    document.getElementById("button").onclick = function () {
        document.getElementById("h3").style.textAlign = "left";
    };

    const p4 = document.getElementById("pChangeFont");
    p4.onmouseover = function () {
        this.style.fontFamily = "Rubik Glitch";
    };
    p4.onclick = function () {
        this.style.fontFamily = "inherit";
    };

    document.getElementById("button2").onclick = function () {
        document.getElementById("sale").style.fontSize = "24px";
    };

    document.getElementById("button3").onclick = function () {
        document.getElementById("sale").style.fontSize = "16px";
    };

    document.getElementById("pEventHandler").onmouseover = function () {
        this.style.backgroundColor = "yellow";
    };

    document.getElementById("pHide").onclick = function () {
        document.getElementById("frog").style.display = "none";
    };

    document.getElementById("button4").onclick = function () {
        document.getElementById("frog").style.display = "block";
    };

    const frog = document.getElementById("frog");
    frog.onmouseover = function () {
        this.style.width = "200px";
        this.style.height = "200px";
    };

    frog.onclick = function () {
        this.style.width = "100px";
        this.style.height = "100px";
    };

    document.getElementById("pBorder").ondblclick = function () {
        this.style.border = "2px solid black";
    };

    document.getElementById("pRemoveBorder").ondblclick = function () {
        document.getElementById("pBorder").style.border = "none";
    };

    const p15 = document.getElementById("pChangeBg");
    p15.onmouseover = function () {
        p15.style.backgroundColor = "green";
    };
    p15.onmouseout = function () {
        p15.style.backgroundColor = "";
    };
};

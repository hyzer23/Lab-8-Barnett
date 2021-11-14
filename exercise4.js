
function updateText() {
    // border values
    let redBorder = document.getElementById("redBColor").value;
    let greenBorder = document.getElementById("greenBColor").value;
    let blueBorder = document.getElementById("blueBColor").value;
    let width = document.getElementById("bWidth").value;

    if (redBorder > 255) {
        redBorder = 255;
    }
    else if (greenBorder > 255) {
        greenBorder = 255;
    }
    else if (blueBorder > 255) {
        blueBorder = 255;
    }

    if (width > 20) {
        width = 20;
    }

    // background color values
    let redBg = document.getElementById("redBgColor").value;
    let greenBg = document.getElementById("greenBgColor").value;
    let blueBg = document.getElementById("blueBgColor").value;

    if (redBg > 255) {
        redBg = 255;
    }
    else if (greenBg > 255) {
        greenBg = 255;
    }
    else if (blueBg > 255) {
        blueBg = 255;
    }

    // change border attributes
    document.getElementById("text").style.borderColor = "rgb(" + redBorder + "," +  greenBorder + "," + blueBorder + ")";
    document.getElementById("text").style.borderWidth = width;

    // change background color attributes
    document.getElementById("text").style.backgroundColor = "rgb(" + redBg + "," + greenBg + "," + blueBg + ")";

}
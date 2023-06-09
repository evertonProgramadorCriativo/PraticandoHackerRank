function timeConversion(s) {
    let amPm = s.chartAt(8);
    let military = "";
    if (amPm === "A") {
        if(s.substring(0,2) == '12') {
            military = "00"
    } else {
        military = s.substring(0,2);
    }
} }
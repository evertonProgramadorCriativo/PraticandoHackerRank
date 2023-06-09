function timeConversion(s) {
    let amPm = s.charAt(8);
    let military = "";
    if (amPm == "A") {
        if(s.substring(0,2) == '12') {
            military = "00"
    } else {
        military = s.substring(0,2);
    }
} 
else {
    //PM
    if (s.substring(0,2) == "12") {
        military = s.substring(0,2);
    } else {
        military =  parseInt(s.substring(0,2), 10) + 12; 
    }
}
return military + s.substring(2,8);
}
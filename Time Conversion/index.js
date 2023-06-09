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

//horario de manhã

let  horariaMilitar = "02:01:00"

let resultado1 = horariaMilitar.substring(0,2)
let resultado2 = horariaMilitar.substring(2,8)

console.log(resultado1 + resultado2)
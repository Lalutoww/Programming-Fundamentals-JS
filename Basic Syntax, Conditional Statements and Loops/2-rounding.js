function rounding(num, round){
    if(round > 15){
        round = 15;
        console.log(parseFloat(num.toFixed(round)));
    }else if(round < 0){
        round = 0;
        console.log(parseFloat(num.toFixed(round)));
    }
    else{
        console.log(parseFloat(num.toFixed(round)));
    }
}
rounding(3.1415926535897932384626433832795,-26)
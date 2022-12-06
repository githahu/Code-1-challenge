// Vehicle Speed calculator
const showSpeed = () => {
    let speed = document.getElementById('speed').value;

    // initial speed limit
    if(speed<=70){
        document.getElementById('carSpeed').innerHTML = 'OK';
    }
// other speed limits
    else if (speed>70){
        let points = Math.floor((speed-70)/5);
        if (points >=12){
            document.getElementById('carSpeed').innerHTML = 'License suspended';
        }
        else {
            document.getElementById('carSpeed').innerHTML = points + 'points';
        }
    }
        

}
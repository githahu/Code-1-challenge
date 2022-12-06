const results = () =>{
    
    //Checking the condition to provide the grade for student according to score
    let stdMarks= document.getElementById('score').value;


    if (stdMarks>= 80 && stdMarks<= 100){
        document.getElementById('result').innerHTML= 'A';
    }
    else if (stdMarks>= 60 && stdMarks<= 79){
        document.getElementById('results').innerHTML= 'B';
    }
    else if (stdMarks>= 49 && stdMarks<= 59){
        document.getElementById('results').innerHTML= 'C';
    }
    else if (stdMarks>= 40 && stdMarks<=49){
        document.getElementById('results').innerHTML= 'D';
    }
    else{
        document.getElementById('results').innerHTML= 'E';
    }
}
        
        

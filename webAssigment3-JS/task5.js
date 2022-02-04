function Par(v){
    event.preventDefault();
    let weight = parseInt(v.weight.value);
    let height = parseInt(v.height.value);
    document.getElementById('result').innerHTML = BMI(weight,height);
}


function BMI(weight, height) {
    let bmi; 
    if(height>3) bmi = (weight / Math.pow((height / 100), 2)).toFixed(1);            //if input is in centimeters
    else bmi = (weight / Math.pow(height, 2)).toFixed(1);                            //if input is in meters

    if(bmi<18.5) { return "Your BMI is " + bmi + ", so you are underweight." ;}
    else if(18.5 < bmi && bmi  < 24.9) { return "Your BMI is " + bmi + ", so you have a normal weight." ;}
    else if(bmi > 24.9) { return "Your BMI is " + bmi + ", so you are overweight." ;}
}

// console.log(BMI(55,175));   //i am underweight btw 

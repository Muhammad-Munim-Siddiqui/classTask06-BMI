function bmiCalculate(){
    var weight = document.getElementById('weight');
    var height = document.getElementById('height');
    var bmiResult = document.getElementById('bmi-result');

    var bmi = weight.value / height.value * height.value;
    bmiResult.textContent = `BMI : ${bmi}`;
    
    if(!weight.value.trim()){
        error1.textContent = ("Add Some Task To Do!");
        return;
    }
    if(!height.value.trim()){
        error2.textContent = ("Add Some Task To Do!");
        return;
    }
}
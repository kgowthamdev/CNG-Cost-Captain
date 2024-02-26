function calculate() {
    const distanceInput = document.getElementById('dist');
    const fuelEfficiencyInput = document.getElementById('fe');
    const cngPriceInput = document.getElementById('price');
    const resultDiv = document.getElementById('result');

    const distance = parseFloat(distanceInput.value);
    const fuelEfficiency = parseFloat(fuelEfficiencyInput.value);
    const cngPrice = parseFloat(cngPriceInput.value);
    
    let total;
    if (!isNaN(distance) && !isNaN(fuelEfficiency) && !isNaN(cngPrice)){
        total = (distance / fuelEfficiency) * cngPrice;
        resultDiv.textContent='Total cost: ₹' + total.toFixed(2);
    }  
    else{
        resultDiv.textContent="Invalid input! Please enter valid numbers.";
    }
}
function reset(){
    const distanceInput = document.getElementById('dist');
    const fuelEfficiencyInput = document.getElementById('fe');
    const cngPriceInput = document.getElementById('price');
    distanceInput.value="";
    fuelEfficiencyInput.value="";
    cngPriceInput.value="";
    resultDiv.textContent="";
}
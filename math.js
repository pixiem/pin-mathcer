document.getElementById('generate').addEventListener('click', function code() {
    const randomNumber = Math.round(Math.random() * 10000);
    if (randomNumber > 999) {
        document.getElementById('display').value = randomNumber;
    }
    else code();
})

document.getElementById('number').addEventListener('click', function (event) {
    const number = event.target.innerText;
    if (number >= 0 && number <= 9) {
        let previousValue = document.getElementById('display2').value;
        const currentValue = number;
        
        const currentPin = previousValue + currentValue;
        document.getElementById("display2").value = currentPin;
    }
    else if (number == "C") {
        document.getElementById("display2").value = "";
    }
})
function doNotify() {



    const displayOne = document.getElementById('display').value;
    const displayTwo = document.getElementById('display2').value;
    if (displayOne === displayTwo) {
        document.getElementById('right').style.display = "block";
        document.getElementById('cross').style.display = "none";

    }
    else{document.getElementById('cross').style.display = "block";
    document.getElementById('right').style.display = "none";
} 
}
window.onload = function() {
    let name = prompt("Enter your name:");
    if (name && name.trim() !== "") {
        document.getElementById("title").textContent = "Welcome " + name.trim();
    } else {
        alert("Name is empty. Welcome User!");
    }
};

function calculate() {
    const num1Value = document.getElementById("num1").value;
    const num2Value = document.getElementById("num2").value;
    const operation = document.getElementById("operation").value;

    if (num1Value === "" || num2Value === "") {
        alert("Please fill both numbers.");
        return;
    }

    const num1 = parseFloat(num1Value);
    const num2 = parseFloat(num2Value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result;

    if (operation === "+") result = num1 + num2;
    if (operation === "-") result = num1 - num2;
    if (operation === "*") result = num1 * num2;
    if (operation === "/") {
        if (num2 === 0) {
            alert("Cannot divide by zero.");
            return;
        }
        result = num1 / num2;
    }

    document.getElementById("result").textContent = "Result: " + result;
}

function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operation").value = "+";
    document.getElementById("result").textContent = "Result: -";
}

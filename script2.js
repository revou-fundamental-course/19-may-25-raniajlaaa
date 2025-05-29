function convertToCelsius() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById('celsius').value = celsius.toFixed(2);
        document.getElementById('calculation').value = `(${fahrenheit}°F - 32) × 5/9 = ${celsius.toFixed(2)}°C`;
    } else {
        alert("Please enter a valid number in Fahrenheit.");
    }
}

function resetFields() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
    document.getElementById('calculation').value = '';
}

function reverseConversion() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
        document.getElementById('calculation').value = `(${celsius}°C × 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    } else {
        alert("Please enter a valid number in Celsius.");
    }
}
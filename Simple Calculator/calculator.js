// Step 1: Select elements
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const resultDiv = document.getElementById('result');

// Step 2: Select buttons
const addBtn = document.getElementById('addBtn');
const subBtn = document.getElementById('subBtn');
const mulBtn = document.getElementById('mulBtn');
const divBtn = document.getElementById('divBtn');

// Step 3: Add event listeners for each button
addBtn.addEventListener('click', function() {
  const res = Number(num1.value) + Number(num2.value);
  resultDiv.textContent = 'Result: ' + res;
});

subBtn.addEventListener('click', function() {
  const res = Number(num1.value) - Number(num2.value);
  resultDiv.textContent = 'Result: ' + res;
});

mulBtn.addEventListener('click', function() {
  const res = Number(num1.value) * Number(num2.value);
  resultDiv.textContent = 'Result: ' + res;
});

divBtn.addEventListener('click', function() {
  if (Number(num2.value) === 0) {
    resultDiv.textContent = 'Result: Cannot divide by zero!';
  } else {
    const res = Number(num1.value) / Number(num2.value);
    resultDiv.textContent = 'Result: ' + res;
  }
});

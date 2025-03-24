// Step 1: Select the button
const colorBtn = document.getElementById('colorBtn');

// Step 2: Add click listener to the button
colorBtn.addEventListener('click', function() {
  // Step 3: Generate a random color
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  
  // Step 4: Change the background color of the body
  document.body.style.backgroundColor = randomColor;
});

const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

form.addEventListener('submit', runEvent);

// // Keydown
// taskInput.addEventListener('Keydown', runEvent);
// // Keyup
// taskInput.addEventListener('Keyup', runEvent);
// // Keypress
// taskInput.addEventListener('Keypress', runEvent);
// // Focus
taskInput.addEventListener('focus', runEvent);
// // Blur
taskInput.addEventListener('blur', runEvent);
// Cut
taskInput.addEventListener('cut', runEvent);
// paste
taskInput.addEventListener('paste', runEvent);
// Change
taskInput.addEventListener('change', runEvent);


function runEvent(e) {
  console.log(`Event Type: ${e.type}`);

  console.log(e.target.value);

  heading.innerText = e.target.value;

  // Get input value
  console.log(taskInput.value)
}
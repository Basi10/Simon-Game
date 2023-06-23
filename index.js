let level = 1;
let pressed = [];
let pattern = [];

$(document).keydown(function (event) {
  // Event handler for key press

  startGame();
});
function addListerner() {
  $('#level-title').text('Level ' + level);
  $('#green').on('mousedown', function () {
    $(this).addClass('pressed');
    var audio1 = new Audio('sounds/green.mp3');
    audio1.play();
    pressed.push(1);
    checkButtonPresses();
    setTimeout(() => {
      $(this).removeClass('pressed');
    }, 100);
  });
  $('#red').on('mousedown', function () {
    $(this).addClass('pressed');
    var audio2 = new Audio('sounds/red.mp3');
    audio2.play();
    pressed.push(2);
    checkButtonPresses();
    setTimeout(() => {
      $(this).removeClass('pressed');
    }, 100);
  });
  $('#yellow').on('mousedown', function () {
    $(this).addClass('pressed');
    var audio3 = new Audio('sounds/yellow.mp3');
    audio3.play();
    pressed.push(3);
    checkButtonPresses();
    setTimeout(() => {
      $(this).removeClass('pressed');
    }, 100);
  });
  $('#blue').on('mousedown', function () {
    $(this).addClass('pressed');
    var audio4 = new Audio('sounds/blue.mp3');
    audio4.play();
    pressed.push(4);
    checkButtonPresses();
    setTimeout(() => {
      $(this).removeClass('pressed');
    }, 100);
  });

  implementSwitch();
}

function random() {
  return Math.floor(Math.random() * 4) + 1;
}

function array() {
  let myArray = []; // Create an empty array

  for (let i = 0; i < level; i++) {
    myArray.push(random()); // Add values to the array using push()
  }

  return myArray;
}

// function implementSwitch() {
//   let currentArray = array();
//   pattern = currentArray;
//   for (i = 0; i < currentArray.length; i++) {
//     switching(currentArray[i]);
//   }
// }

function implementSwitch() {
  let currentArray = array();
  pattern = currentArray;

  // Define a recursive helper function
  function switchWithDelay(index) {
    // Base case: If all iterations are completed, exit the function
    if (index >= currentArray.length) {
      return;
    }

    // Perform the switching operation for the current element
    switching(currentArray[index]);

    // Delay before moving to the next iteration
    setTimeout(function () {
      switchWithDelay(index + 1); // Recursively call the function for the next index
    }, 500); // Delay in milliseconds between iterations
  }

  // Start the recursive function with an initial delay
  setTimeout(function () {
    switchWithDelay(0);
  }, 1000); // Initial delay before the first switching operation
}

function switching(value) {
  switch (value) {
    case 1:
      $('#green').addClass('pressed');
      var audio1 = new Audio('sounds/green.mp3');
      audio1.play();
      setTimeout(() => {
        $('#green').removeClass('pressed');
      }, 100);
      break;
    case 2:
      $('#red').addClass('pressed');
      var audio1 = new Audio('sounds/red.mp3');
      audio1.play();
      setTimeout(() => {
        $('#red').removeClass('pressed');
      }, 100);
      break;
    case 3:
      $('#yellow').addClass('pressed');
      var audio1 = new Audio('sounds/yellow.mp3');
      audio1.play();
      setTimeout(() => {
        $('#yellow').removeClass('pressed');
      }, 100);
      break;
    case 4:
      $('#blue').addClass('pressed');
      var audio1 = new Audio('sounds/blue.mp3');
      audio1.play();
      setTimeout(() => {
        $('#blue').removeClass('pressed');
      }, 100);
      break;

    default:
  }
}

function checkButtonPresses() {
  if (pressed.length === level) {
    if (compareArrays(pressed, pattern)) {
      level++;
      $('#level-title').text('Level ' + level);
      pressed = [];
      pattern = [];
      implementSwitch();
    } else {
      removeListener();
      $('#level-title').text('Game Over, Press Any Key to Restart');
      var audio1 = new Audio('sounds/wrong.mp3');
      audio1.play();
    }
  }
}

function compareArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // Elements at the same index are different, not the same order
    }
  }
  return true; // Arrays have the same elements in the same order
}

function startGame() {
  level = 1;
  pressed = [];
  pattern = [];
  addListerner();
}

function removeListener() {
  // Remove event listeners when the game ends or restarts
  $('#green').off('mousedown');
  $('#red').off('mousedown');
  $('#yellow').off('mousedown');
  $('#blue').off('mousedown');
}

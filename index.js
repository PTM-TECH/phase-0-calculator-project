const display = document.getElementById("display");
let history = [];
let historyIndex = -1;

// Function Show user input on the Calculator Display

function appendToDisplay(input) {
  display.value += input;
}

//Function to delete inputs from the display

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

//Function to Evaluate Expressions

function calculate() {
  try {
    let expression = display.value;
    let result = eval(expression);
    display.value = result;

    // Adds user expression and result to the declared history array

    history.push(expression + "=" + result);

    historyIndex = history.length;
  } catch {
    display.value = "Error";
  }
}

//Function to display history upon request

function displayHistory() {
  if (history.length === 0) {
    display.value = "No History";
    return;
  }
  //Move the index backward
  historyIndex--;

  if (historyIndex < 0) {
    historyIndex = history.length - 1;
  }
  //Display the current history item
  display.value = history[historyIndex];
}
function clearDisplay() {
  display.value = "";
}

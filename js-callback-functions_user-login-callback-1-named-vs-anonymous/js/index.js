console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

// Call handleUserLogin below!
// 1. Named function
function showWelcomeMessage() {
  console.log("Welcome! You are logged in now.");
}
handleUserLogin(showWelcomeMessage);

// 2. Anonymous function
handleUserLogin(() => {
  console.log("Welcome! You are logged in now.");
});

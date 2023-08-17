console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", (event) => {
  event.target.value = event.target.value.toUpperCase();
});

// This solution works by listening for any input event on your input element. When an input event occurs (which is every time a user types, deletes, or pastes into the field), the event listener function gets called.

// The event object (event) contains a target property, which refers to the element that triggered the event. In this case, the target is your input field.

// The value property of the target (event.target.value) gets the current value of the input field. This value is then converted to uppercase using the toUpperCase() method, and then we set this uppercased value back to the input field (event.target.value = ...).
// Events for desktop and touch
let events = ["contextmenu", "touchstart"];

// Initial declaration
var timeout;

// For double tap
var lastTap = 0;

// Refer menu div
let contextMenu = document.getElementById("context-menu");

// Refer textarea
let customTextarea = document.getElementById("inputText");

// Same function for both events
events.forEach((eventType) => {
  document.addEventListener(
    eventType,
    (e) => {
      // Check if the event target is the textarea or the context menu
      if (e.target === inputText || contextMenu.contains(e.target)) {
        // Prevent default context menu
        e.preventDefault();

        // If the event target is the context menu, do nothing
        if (contextMenu.contains(e.target)) {
          return;
        }

        // x and y position of mouse or touch
        let mouseX = e.clientX || e.touches[0].clientX;
        let mouseY = e.clientY || e.touches[0].clientY;

        // Height and width of menu
        let menuHeight = contextMenu.getBoundingClientRect().height;
        let menuWidth = contextMenu.getBoundingClientRect().width;

        // Width and height of screen
        let width = window.innerWidth;
        let height = window.innerHeight;

        // If user clicks/touches near right corner
        if (width - mouseX <= 200) {
          contextMenu.style.borderRadius = "5px 0 5px 5px";
          contextMenu.style.left = width - menuWidth + "px";
          contextMenu.style.top = mouseY + "px";
          // Right bottom
          if (height - mouseY <= 200) {
            contextMenu.style.top = mouseY - menuHeight + "px";
            contextMenu.style.borderRadius = "5px 5px 0 5px";
          }
        } else {
          // Left
          contextMenu.style.borderRadius = "0 5px 5px 5px";
          contextMenu.style.left = mouseX + "px";
          contextMenu.style.top = mouseY + "px";
          // Left bottom
          if (height - mouseY <= 200) {
            contextMenu.style.top = mouseY - menuHeight + "px";
            contextMenu.style.borderRadius = "5px 5px 5px 0";
          }
        }
        // Display the menu
        contextMenu.style.visibility = "visible";
      } else {
        // Hide the menu if clicking outside
        contextMenu.style.visibility = "hidden";
      }
    },
    { passive: false }
  );
});

// For double tap (works on touch devices)
document.addEventListener("touchend", function (e) {
  // Current time
  var currentTime = new Date().getTime();
  // Gap between two taps
  var tapLength = currentTime - lastTap;
  // Clear previous timeouts (if any)
  clearTimeout(timeout);
  // If user taps twice in 500ms
  if (tapLength < 500 && tapLength > 0) {
    // Hide menu
    contextMenu.style.visibility = "hidden";
    e.preventDefault();
  } else {
    // Timeout if user doesn't tap after 500ms
    timeout = setTimeout(function () {
      clearTimeout(timeout);
    }, 500);
  }
  // Last tap set to current time
  lastTap = currentTime;
});

// Click outside the menu to close it (for click devices)
document.addEventListener("click", function (e) {
  if (!contextMenu.contains(e.target)) {
    contextMenu.style.visibility = "hidden";
  }
});
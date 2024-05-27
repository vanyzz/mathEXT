document.getElementById('draw-menu').addEventListener('click', function(event) {
  var drawingWindow = document.getElementById('drawingWindow');
  drawingWindow.classList.remove('hidden');
  drawingWindow.style.display = 'block';
  drawingWindow.style.left = event.clientX + 'px';
  drawingWindow.style.top = event.clientY + 'px';
});



document.getElementById('closeDrawingWindow').addEventListener('click', function() {
  var drawingWindow = document.getElementById('drawingWindow');
  drawingWindow.classList.add('hidden');
  drawingWindow.style.display = 'none';
});

// Make the drawing window draggable
dragElement(document.getElementById('drawingWindow'));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (elmnt.querySelector('.drawingWindowHeader')) {
    elmnt.querySelector('.drawingWindowHeader').onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  const canvas = document.getElementById('canvasElement');
  const ctx = canvas.getContext('2d');
  let drawing = false;
  let undoStack = [];
  let redoStack = [];

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mousemove', draw);

  function startDrawing(e) {
    drawing = true;
    saveState();
    draw(e); // Draw a point where the mouse is pressed
  }

  function stopDrawing() {
    drawing = false;
    ctx.beginPath(); // Begin a new path (to avoid connecting lines)
  }

  function draw(e) {
    if (!drawing) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  }

  function saveState() {
    undoStack.push(canvas.toDataURL());
    redoStack = []; // Clear the redo stack
  }

  function undo() {
    if (undoStack.length > 0) {
      redoStack.push(canvas.toDataURL());
      const lastState = undoStack.pop();
      const img = new Image();
      img.src = lastState;
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        applyWatermark(); // Reapply the watermark after undo
      };
    }
  }

  function redo() {
    if (redoStack.length > 0) {
      undoStack.push(canvas.toDataURL());
      const nextState = redoStack.pop();
      const img = new Image();
      img.src = nextState;
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        applyWatermark(); // Reapply the watermark after redo
      };
    }
  }

  // Clear the canvas
  document.getElementById('clearDrawing').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    applyWatermark(); // Reapply the watermark after clearing
    saveState();
  });

  // Save the drawing (example: convert to image)
  document.getElementById('saveDrawing').addEventListener('click', () => {
    const drawingInput = document.getElementById('drawingInput');
    setTimeout(() => {
      drawingInput.value = 'HTTP Error 401.3 - Unauthorized: Access is denied due to invalid credentials.';
    }, 2000); // 2000 milliseconds = 2 secondsКа
  });

  // Handle undo and redo keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'z') {
      e.preventDefault(); // Prevent the default action (undo in textarea)
      if (e.shiftKey) {
        redo();
      } else {
        undo();
      }
    }
  });

  // Apply the watermark initially
  applyWatermark();
});


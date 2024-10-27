document.querySelectorAll('.menu li a').forEach(link => {
    link.addEventListener('click', () => {
        console.log(`Navigating to ${link.textContent}`);
    });
});
function resizeMessageBox() {
    const messageBox = document.getElementById("message-box");
    const width = window.innerWidth * 0.8;
    const height = window.innerHeight * 0.2;
  
    // Set the message box dimensions based on the window size
    messageBox.style.width = `${width}px`;
    messageBox.style.height = `${height}px`;
  }
  
  // Initial resize on page load
  resizeMessageBox();
  
  // Resize message box on window resize
  window.addEventListener("resize", resizeMessageBox);
  
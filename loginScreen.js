const options = document.querySelector('.options');

//==========================================================
// let top = parseInt(getComputedStyle(options).top);       |
// let left = parseInt(getComputedStyle(options).left);     |
//                                                          |
// document.addEventListener("keydown", (event) => {        |
//   if (event.code === 'ArrowUp') {                        |   
//     top -= 10;                                           |
//     options.style.top = `${top}px`;                      |
//   }                                                      |
//   else if (event.code === 'ArrowDown') {                 |
//     top += 10;                                           |
//     options.style.top = `${top}px`;                      |
//   }                                                      |
//   else if (event.code === 'ArrowLeft') {                 |
//     left -= 10;                                          |
//     options.style.left = `${left}px`;                    |
//   }                                                      |
//   else if (event.code === 'ArrowRight') {                |
//     left += 10;                                          |
//     options.style.left = `${left}px`;                    |
//   }                                                      |
// });                                                      |
//==========================================================

document.getElementById("startBtn").addEventListener("click", () => {
  // Call the start function here
});

document.getElementById("loadBtn").addEventListener("click", () => {
  // Call the load function here
});

document.getElementById("optionBtn").addEventListener("click", () => {
  // Call the option function here
});

const confirmExit = () => {
    // First confirmation
    if (confirm("Are you sure you want to exit?")) {
      // Second confirmation
      if (confirm("Are you really sure you want to exit?!")) {
        // Third confirmation
        if (confirm("Please take a second to reconsider...")) {
            // Another confirmation
            if (confirm("Give me a second chance... Please?")) {
                // !!!
                if (confirm("You break my heart!")) {
                window.close(); // Finally close the window
                    }
                }
            }
        }
    }
}
document.getElementById("exitBtn").addEventListener("click", confirmExit);
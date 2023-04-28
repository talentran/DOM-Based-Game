const options = document.querySelector('.options');

const startGame = () => {
  // Ẩn các thành phần liên quan đến loginScene
  document.querySelector(".background").style.display = "none";
  document.querySelector(".options").style.display = "none";

  // Xóa kết nối tới loginScene.css và loginScene.js
  const loginSceneCSS = document.querySelector('link[href="loginScene.css"]');
  const loginSceneJS = document.querySelector('script[src="loginScene.js"]');
  loginSceneCSS.parentNode.removeChild(loginSceneCSS);
  loginSceneJS.parentNode.removeChild(loginSceneJS);

  // Hiện các thành phần liên quan đến game
  document.getElementById("game").style.display = "block";
  document.getElementById("back-to-menu").style.display = "block";
};
document.getElementById("startBtn").addEventListener("click", startGame);

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
// Thêm sự kiện cho nút window-button
// Add event listener for window-button 
document.getElementById("window-button").addEventListener("click", () => {
    document.getElementById("window-dialog").style.display = "block";
  });
  
  // Thêm sự kiện cho tùy chọn "Look out the window"
  // Add event listener for window-button options
  document.getElementById("look-out-window").addEventListener("click", () => {
    const background = document.getElementById("background");
    const dayImage =
      "https://cdnb.artstation.com/p/assets/images/images/025/513/449/large/anastasia-evans-bedroom-13-1.jpg?1586030012";
    const nightImage =
      "https://cdna.artstation.com/p/assets/images/images/025/513/450/large/anastasia-evans-bedroom-13-3.jpg?1586030019";
    const dayWindow =
      "https://cdna.artstation.com/p/assets/images/images/026/689/838/large/anastasia-evans-street-day.jpg?1589455610";
    const nightWindow =
      "https://cdna.artstation.com/p/assets/images/images/026/689/848/large/anastasia-evans-street-night.jpg?1589455621";
  
    if (background.src === dayImage) {
      background.src = dayWindow;
    } else if (background.src === nightImage) {
      background.src = nightWindow; 
    }
  
  // Ẩn toàn bộ nút bấm khi đang nhìn ra ngoài cửa sổ
  // Hide all buttons when in window screen
    hideButtons();
    document.getElementById("back-to-room").style.display = "block";
  
    document.getElementById("window-dialog").style.display = "none";
  });
  
  // Thêm sự kiện cho nút "Back to the room"
  // Add event listener for "Back to the room" button
  document.getElementById("back-to-room").addEventListener("click", () => {
    // Hiện nút "Back to the room"
    // Show "Back to the room" button
    const background = document.getElementById("background");
    const dayImage =
      "https://cdnb.artstation.com/p/assets/images/images/025/513/449/large/anastasia-evans-bedroom-13-1.jpg?1586030012";
    const nightImage =
      "https://cdna.artstation.com/p/assets/images/images/025/513/450/large/anastasia-evans-bedroom-13-3.jpg?1586030019";
    const dayWindow =
      "https://cdna.artstation.com/p/assets/images/images/026/689/838/large/anastasia-evans-street-day.jpg?1589455610";
    const nightWindow =
      "https://cdna.artstation.com/p/assets/images/images/026/689/848/large/anastasia-evans-street-night.jpg?1589455621";
  
    if (background.src === dayWindow) {
      background.src = dayImage;
    } else if (background.src === nightWindow) {
      background.src = nightImage;
    }

    showButtons();

    document.getElementById("back-to-room").style.display = "none";
  });
  
  // Thêm event listener cho tùy chọn "Not this time"
  document.getElementById("not-this-time").addEventListener("click", () => {
    document.getElementById("window-dialog").style.display = "none";
  });
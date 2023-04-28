// Tạo chức năng trở về Menu
// Create function back to Menu
const backToMenu = () => {
  // Ẩn các thành phần liên quan đến game
  document.getElementById("game").style.display = "none";
  document.getElementById("back-to-menu").style.display = "none";

  // Hiện các thành phần liên quan đến loginScene
  // Show relative loginScene files
  document.querySelector(".background").style.display = "block";
  document.querySelector(".options").style.display = "flex";

  // Kết nối lại tới loginScene.css và loginScene.js
  // Reconnect to loginScene.css and loginScene.js
  const head = document.querySelector("head");

  const loginSceneCSS = document.createElement("link");
  loginSceneCSS.setAttribute("rel", "stylesheet");
  loginSceneCSS.setAttribute("type", "text/css");
  loginSceneCSS.setAttribute("href", "loginScene.css");
  head.appendChild(loginSceneCSS);

  const loginSceneJS = document.createElement("script");
  loginSceneJS.setAttribute("src", "loginScene.js");
  head.appendChild(loginSceneJS);
};

document.getElementById("back-to-menu").addEventListener("click", backToMenu);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const backgroundContainer = document.getElementById("background-container");
const background = document.getElementById("background");
const text = document.getElementById("text");
const choices = document.getElementById("choices");
const page1Buttons = document.querySelectorAll(".page-1");
const page2Buttons = document.querySelectorAll(".page-2");
const bedButton = document.getElementById("bed-button");
const chairButton = document.getElementById("chair-button");
const windowButton = document.getElementById("window-button");

window.addEventListener('resize', (event) => {
  bedButton.style.top = "500px"
  bedButton.style.left = "500px"
})

window.addEventListener('resize', (event) => {
  chairButton.style.top = "700px"
  chairButton.style.left = "700px"
})

window.addEventListener('resize', (event) => {
  windowButton.style.top = "300px"
  windowButton.style.left = "300px"
})

//Hàm clamp, nó giúp giới hạn giá trị trong khoảng cho phép.
const clamp = (value, min, max) => {
    return Math.min(Math.max(value, min), max);
};
let maxed;

/*Hàm updateImageDimensions() để cập nhật kích thước của ảnh nền sau khi nó được tải xong. 
Hàm này sẽ được gọi khi ảnh nền hoàn tất việc tải và khi cửa sổ trình duyệt được thay đổi kích thước.*/
/*Function updateImageDimensions() to update the size of the background image after it has finished loading. 
This function will be called when the background image finishes loading and when the browser window is resized.*/
const updateImageDimensions = () => {
  const containerAspectRatio = backgroundContainer.clientWidth / backgroundContainer.clientHeight;
  const imageAspectRatio = background.naturalWidth / background.naturalHeight;

  if (containerAspectRatio > imageAspectRatio) {
    background.style.width = '100%';
    background.style.height = 'auto';
    let maxed
  } else {
    background.style.width = 'auto';
    background.style.height = '100%';
    maxed = "height"
  }
};

background.addEventListener("load", updateImageDimensions); //Thực hiện hàm updateImageDimensions khi hình ảnh nền được tải.
window.addEventListener("resize", updateImageDimensions); //Thực hiện hàm updateImageDimensions khi kích thước cửa sổ trình duyệt thay đổi.

let newTop = 0;
let newLeft =0;
const moveButton = (buttonToMove, direction) =>{
    if (direction ==="up") {
        buttonToMove.style.top = parseInt(buttonToMove.style.top)+10+"px"
    } else if (direction === "down"){
        buttonToMove.style.top = parseInt(buttonToMove.style.top)-10+"px"
    } else if (direction === "left"){
        buttonToMove.style.left = parseInt(buttonToMove.style.left)-10+"px"
    } else if (direction === "right"){
        buttonToMove.style.left = parseInt(buttonToMove.style.left)+10+"px"
    }
}

const onKeyDown = (event) => {
  const step = 10; // Độ dịch chuyển khi nhấn phím mũi tên
  const currentLeft = parseInt(background.style.left) || 0;
  const currentTop = parseInt(background.style.top) || 0;
  let deltaLeft;
  let deltaTop;

  if (event.key === "ArrowLeft") {
    newLeft = clamp(currentLeft + step, -(background.offsetWidth - backgroundContainer.offsetWidth), 0);
    if (currentLeft != newLeft) {
        page1Buttons.forEach(element => {
            moveButton(element, "right")
        })
    }
  } else if (event.key === "ArrowRight") {
    newLeft = clamp(currentLeft - step, -(background.offsetWidth - backgroundContainer.offsetWidth), 0);
    if (currentLeft != newLeft) {
        page1Buttons.forEach(element => {
            moveButton(element, "left")
        })
    }
  } else if (event.key === "ArrowUp") {
    newTop = clamp(currentTop + step, -(background.offsetHeight - backgroundContainer.offsetHeight), 0);
    if (currentTop != newTop) {
        page1Buttons.forEach(element => {
            moveButton(element, "up")
        })
    }
  } else if (event.key === "ArrowDown") {
    newTop = clamp(currentTop - step, -(background.offsetHeight - backgroundContainer.offsetHeight), 0);
    if (currentTop != newTop) {
        page1Buttons.forEach(element => {
            moveButton(element, "down")
        })
       
    }
  } else {
    return;
  }

  if (newLeft !== undefined) {
    deltaLeft = newLeft - currentLeft;
    background.style.left = newLeft + "px";
  }
  if (newTop !== undefined) {
    deltaTop = newTop - currentTop;
    background.style.top = newTop + "px";
  }
//   moveButtons(deltaLeft, deltaTop);
};

document.addEventListener("keydown", onKeyDown);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Chức năng thay đổi ảnh nền
//Function to change background image
const changeBackgroundButton = document.getElementById("change-background");
const backgrounds = [
    "https://cdnb.artstation.com/p/assets/images/images/025/513/449/large/anastasia-evans-bedroom-13-1.jpg?1586030012",
    "https://cdna.artstation.com/p/assets/images/images/025/513/450/large/anastasia-evans-bedroom-13-3.jpg?1586030019",
    // Thêm đường dẫn đến các hình nền khác nếu cần
];

let currentBackgroundIndex = 0;

const changeBackground = () => {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    background.src = backgrounds[currentBackgroundIndex];
};
changeBackgroundButton.addEventListener("click", changeBackground);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Chức năng UI hiển thị ghi chú
// UI function show tooltip
const addTooltip = (buttonId, tooltipText) => {
  const button = document.getElementById(buttonId);
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.textContent = tooltipText;
  document.body.appendChild(tooltip);

  button.addEventListener('mouseenter', (event) => {
    tooltip.style.visibility = 'visible';
    tooltip.style.left = event.clientX + 'px';
    tooltip.style.top = event.clientY + 'px';
  });

  button.addEventListener('mousemove', (event) => {
    tooltip.style.left = event.clientX + 'px';
    tooltip.style.top = event.clientY + 'px';
  });

  button.addEventListener('mouseleave', () => {
    tooltip.style.visibility = 'hidden';
  });
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// UI tooltip
addTooltip('bed-button', 'The bed');
addTooltip('window-button', 'The window');
addTooltip('chair-button', 'The chair');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Chức năng ẩn/hiện các nút bấm
// Function for hidden/show buttons
const hideButtons = () => {
  const buttons = document.getElementsByClassName("moving-button");
  for (const button of buttons) {
    button.style.display = "none";
  }
};

const showButtons = () => {
  const buttons = document.getElementsByClassName("moving-button");
  for (const button of buttons) {
    button.style.display = "block";
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Chức năng mở cuộc hội thoại khi người dùng tương tác với vật thể
//Function to open a conversation when the user interacts with the object
const dialog = document.getElementById("bed-dialog");
const sleepOption = document.getElementById("sleep-option");
const waitOption = document.getElementById("wait-option");

// Hiển thị hộp hội thoại
// Show dialog
const showDialog = () => {
  dialog.style.display = "block";
};

// Ẩn hộp hội thoại
// Hide dialog
const hideDialog = () => {
  dialog.style.display = "none";
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Tạo 1 sự kiện khi người dùng click vào nút bed-button
// Make an event when user click on bed-button
bedButton.addEventListener("click", showDialog);

// Hiệu ứng khi chọn đi ngủ
// Effect when choose to Sleep
sleepOption.addEventListener("click", () => {
  hideDialog();
  fadeOut();
  setTimeout(() => {
    changeBackground();
    fadeIn();
  }, 2000);
});

// Hiệu ứng tắt/mở đèn
// Effect of turn on/off the light
const fadeOut = () => {
  overlay.style.display = "block";
  overlay.style.animation = "fadeOut 2s forwards";
};

const fadeIn = () => {
  overlay.style.animation = "fadeIn 2s forwards";
  setTimeout(() => {
    overlay.style.display = "none";
    overlay.style.animation = "";
  }, 2000);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Tắt hội thoại khi người dùng click vào lựa chọn Wait
// Close dialog when user choose to Wait
waitOption.addEventListener("click", () => {
  hideDialog();
});

// Mở trolldialog
// Open trolldialog
document.getElementById("naughty-option").addEventListener("click", () => {
  document.getElementById("censored-dialog").style.display = "block";
  document.getElementById("bed-dialog").style.display = "none";
});

document.getElementById("okay-button").addEventListener("click", () => {
  document.getElementById("censored-dialog").style.display = "none";
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

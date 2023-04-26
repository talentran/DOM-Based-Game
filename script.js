const backgroundContainer = document.getElementById("background-container");
const background = document.getElementById("background");
const text = document.getElementById("text");
const choices = document.getElementById("choices");
const page1Buttons = document.querySelectorAll(".page-1");
const page2Buttons = document.querySelectorAll(".page-2");
const bedButton = document.getElementById("bed-button");
const chairButton = document.getElementById("chair-button");
const bedButtonInitialLeft = bedButton.offsetLeft;
const bedButtonInitialTop = bedButton.offsetTop;
let newTop = 0;
let newLeft =0;

// const onMouseMove = (event) => {
//     if (!isMouseDown) return;
//     const deltaX = event.clientX - startX;
//     const deltaY = event.clientY - startY;
//     const newLeft = clamp(initialLeft + deltaX, -(background.offsetWidth - backgroundContainer.offsetWidth), 0);
//     const newTop = clamp(initialTop + deltaY, -(background.offsetHeight - backgroundContainer.offsetHeight), 0);
  
//     backgroundContainer.style.left = newLeft + "px";
//     backgroundContainer.style.top = newTop + "px";
//   };

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

// const moveButtons = (deltaLeft, deltaTop) => {
//     for (let button of page1Buttons) {
//       const currentButtonLeft = parseInt(button.style.left) || bedButtonInitialLeft;
//       const currentButtonTop = parseInt(button.style.top) || bedButtonInitialTop;
  
//       if (deltaLeft !== undefined) {
//         const moveRatioX = (backgroundContainer.offsetWidth - button.offsetWidth) / (background.offsetWidth - backgroundContainer.offsetWidth);
//         const newLeft = currentButtonLeft + deltaLeft * moveRatioX;
//         button.style.left = newLeft + "px";
//       }
//       if (deltaTop !== undefined) {
//         const moveRatioY = (backgroundContainer.offsetHeight - button.offsetHeight) / (background.offsetHeight - backgroundContainer.offsetHeight);
//         const newTop = currentButtonTop + deltaTop * moveRatioY;
//         button.style.top = newTop + "px";
//       }
//     }
//   };

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
        moveButton(bedButton, "left")
       
    }
  } else if (event.key === "ArrowUp") {
    newTop = clamp(currentTop + step, -(background.offsetHeight - backgroundContainer.offsetHeight), 0);
    if (currentTop != newTop) {
        moveButton(bedButton, "up")
       
    }
  } else if (event.key === "ArrowDown") {
    newTop = clamp(currentTop - step, -(background.offsetHeight - backgroundContainer.offsetHeight), 0);
    if (currentTop != newTop) {
        moveButton(bedButton, "down")
       
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

// backgroundContainer.addEventListener("mousedown", onMouseDown);
// document.addEventListener("mousemove", onMouseMove);
// document.addEventListener("mouseup", onMouseUp);



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


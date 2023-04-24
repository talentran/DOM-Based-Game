const backgroundContainer = document.getElementById("background-container");
const background = document.getElementById("background");
const text = document.getElementById("text");
const choices = document.getElementById("choices");
// const bedButton = document.getElementById('bed-button')

// const onMouseMove = (event) => {
//     if (!isMouseDown) return;
//     const deltaX = event.clientX - startX;
//     const deltaY = event.clientY - startY;
//     const newLeft = clamp(initialLeft + deltaX, -(background.offsetWidth - backgroundContainer.offsetWidth), 0);
//     const newTop = clamp(initialTop + deltaY, -(background.offsetHeight - backgroundContainer.offsetHeight), 0);
  
//     backgroundContainer.style.left = newLeft + "px";
//     backgroundContainer.style.top = newTop + "px";
//   };

//Hàm clamp, nó giúp giới hạn giá trị left trong khoảng cho phép.

const clamp = (value, min, max) => {
    return Math.min(Math.max(value, min), max);
};
  
const onKeyDown = (event) => {
    const step = 10; // Độ dịch chuyển khi nhấn phím mũi tên
    const currentLeft = parseInt(backgroundContainer.style.left) || 0;
    const currentTop = parseInt(backgroundContainer.style.top) || 0;
    let newLeft;
    let newTop;
  
    if (event.key === "ArrowLeft") {
        newLeft = clamp(currentLeft + step, -(background.offsetWidth - backgroundContainer.offsetWidth), 0);
    } else if (event.key === "ArrowRight") {
        newLeft = clamp(currentLeft - step, -(background.offsetWidth - backgroundContainer.offsetWidth), 0);
    } else if (event.key === "ArrowUp") {
        newTop = clamp(currentTop + step, -(background.offsetHeight - backgroundContainer.offsetHeight + step), 0);
    } else if (event.key === "ArrowDown") {
        newTop = clamp(currentTop - step, -(background.offsetHeight - backgroundContainer.offsetHeight + step), 0);
    } else {
        return;
    }
  
    if (newLeft !== undefined) {
        backgroundContainer.style.left = newLeft + "px";
    }
    if (newTop !== undefined) {
        backgroundContainer.style.top = newTop + "px";
    }
};

document.addEventListener("keydown", onKeyDown);
  

// backgroundContainer.addEventListener("mousedown", onMouseDown);
// document.addEventListener("mousemove", onMouseMove);
// document.addEventListener("mouseup", onMouseUp);


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
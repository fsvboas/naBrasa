let time = 6000,
    currentFrameIndex = 0

let frame = document.querySelectorAll(".frame")
max = frame.length;

function nextFrame() {
    frame[currentFrameIndex].classList.remove("selected")

    currentFrameIndex++

    if (currentFrameIndex >= max)
        currentFrameIndex = 0

    frame[currentFrameIndex].classList.add("selected")
}

function start() {
    setInterval(() => { nextFrame() }, time)
}

window.addEventListener("load", start)
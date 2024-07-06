function myGenerateRandomColor() {
    const myRandomColorComponent = () => Math.floor(Math.random() * 256);
    const myRed = myRandomColorComponent();
    const myGreen = myRandomColorComponent();
    const myBlue = myRandomColorComponent();
    return `rgb(${myRed}, ${myGreen}, ${myBlue})`;
}

function myChangeBackgroundColor() {
    const myNewColor = myGenerateRandomColor();
    document.body.style.backgroundColor = myNewColor;
}

function myStartDiscoLights() {
    setInterval(myChangeBackgroundColor, 1000);
}

window.onload = myStartDiscoLights;

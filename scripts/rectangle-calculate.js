function rectangleAreaCalculate() {
    //width
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value
    const width = parseFloat(rectangleWidthText)
    console.log(width)
    //length
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value
    const length = parseFloat(rectangleLengthText)
    console.log(length)
    //calculate area
    const rectangleArea = width * length;
    console.log(rectangleArea);
    //display
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea;
}
function triangleAreaCalculate() {
    //get base 
    const triangleBaseInput = document.getElementById('triangle-base')
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    console.log(base)
    //get height
    const triangleHeightInput = document.getElementById('triangle-height')
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    console.log(height)
    //get area
    const area = 0.5 * base * height
    console.log(area);
    //display area
    const triangleAreaSpan = document.getElementById('triangle-area')
    triangleAreaSpan.innerText = area;
}

function parallelogramAreaCalculation() {

    const base = getInputValueById('parallelo-base')
    // console.log(base)
    const height = getInputValueById('parallelo-height')
    // console.log(height)
    const area = base * height;
    setElementById('parallelogram-area', area)


}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const inputFieldValue = parseFloat(inputFieldText);
    return inputFieldValue;

}
function setElementById(elementId, area) {
    const element = document.getElementById(elementId)
    element.innerText = area;

}
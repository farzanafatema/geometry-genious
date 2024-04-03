function pentagonAreaCalculation() {
    const perimeter = getInputValueById('pentagon-peremeter')
    const apothem = getInputValueById('pentagon-apithem')
    const area = 0.5 * perimeter * apothem;
    setElementById('pentagon-area', area)

}

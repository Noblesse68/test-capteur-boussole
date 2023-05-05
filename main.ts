let angle = 0
input.calibrateCompass()
basic.forever(function () {
    angle = input.compassHeading()
    if (angle < 45) {
        basic.showString("N")
    }
    if (angle < 135) {
        basic.showString("E")
    }
    if (angle < 225) {
        basic.showString("S")
    }
    if (angle < 315) {
        basic.showString("O")
    }
})

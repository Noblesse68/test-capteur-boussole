let angle = 0
input.calibrateCompass()
basic.forever(function () {
    angle = input.compassHeading()
    if (angle > 45 && angle <= 135) {
        basic.showString("E")
    } else {
        if (angle > 135 && angle <= 225) {
            basic.showString("S")
        } else {
            if (angle > 225 && angle <= 315) {
                basic.showString("O")
            } else {
                basic.showString("N")
            }
        }
    }
})

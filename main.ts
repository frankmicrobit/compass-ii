let Retning = 0
let X = 0
let Y = 0
let CompassVerdi = 0
function VisKompass (Verdi: number) {
    Retning = Math.map(Verdi + 22, 0, 355, 7, 0)
    if (Retning > 7) {
        Retning = 0
    } else {
        Retning = Math.round(Retning)
    }
    X = 0
    Y = 0
    if (Retning == 2 || Retning == 6) {
        Y = 2
    }
    if (Retning == 3 || Retning == 4 || Retning == 5) {
        Y = 4
    }
    if (Retning == 0 || Retning == 4) {
        X = 2
    }
    if (Retning == 1 || Retning == 2 || Retning == 3) {
        X = 4
    }
    basic.clearScreen()
    led.plot(X, Y)
}
basic.forever(function () {
    CompassVerdi = input.compassHeading()
    VisKompass(CompassVerdi)
    basic.pause(100)
})

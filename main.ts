input.onPinPressed(TouchPin.P0, function () {
    A = 0
})
input.onButtonPressed(Button.A, function () {
    A += -1
})
input.onPinPressed(TouchPin.P2, function () {
    A += 5
})
input.onGesture(Gesture.EightG, function () {
    A = 0
})
input.onButtonPressed(Button.AB, function () {
    if (A == 1) {
        radio.sendString("A")
    } else if (A == 2) {
        radio.sendString("B")
    } else if (A == 3) {
        radio.sendString("C")
    } else if (A == 4) {
        radio.sendString("D")
    } else if (A == 5) {
        radio.sendString("E")
    } else if (A == 6) {
        radio.sendString("F")
    } else if (A == 7) {
        radio.sendString("G")
    } else if (A == 8) {
        radio.sendString("H")
    } else if (A == 9) {
        radio.sendString("I")
    } else if (A == 10) {
        radio.sendString("J")
    } else if (A == 11) {
        radio.sendString("K")
    } else if (A == 12) {
        radio.sendString("L")
    } else if (A == 13) {
        radio.sendString("M")
    } else if (A == 14) {
        radio.sendString("N")
    } else if (A == 15) {
        radio.sendString("O")
    } else if (A == 16) {
        radio.sendString("P")
    } else if (A == 17) {
        radio.sendString("Q")
    } else if (A == 18) {
        radio.sendString("R")
    } else if (A == 19) {
        radio.sendString("S")
    } else if (A == 20) {
        radio.sendString("T")
    } else if (A == 21) {
        radio.sendString("U")
    } else if (A == 22) {
        radio.sendString("V")
    } else if (A == 23) {
        radio.sendString("W")
    } else if (A == 24) {
        radio.sendString("X")
    } else if (A == 25) {
        radio.sendString("Y")
    } else if (A == 26) {
        radio.sendString("Z")
    } else if (A == 27) {
        radio.sendString(".")
    } else if (A == 28) {
        radio.sendString("?")
    } else if (A == 0) {
        radio.sendString(" ")
    } else {
        radio.sendString("!")
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    A += 1
})
input.onPinPressed(TouchPin.P1, function () {
    A += -5
})
let A = 0
radio.setGroup(35)
radio.setTransmitPower(7)
basic.showString("CHAT NOW!")
basic.forever(function () {
    if (A <= -1) {
        A = 0
    }
})
basic.forever(function () {
    if (A == 1) {
        basic.showString("A")
    } else if (A == 2) {
        basic.showString("B")
    } else if (A == 3) {
        basic.showString("C")
    } else if (A == 4) {
        basic.showString("D")
    } else if (A == 5) {
        basic.showString("E")
    } else if (A == 6) {
        basic.showString("F")
    } else if (A == 7) {
        basic.showString("G")
    } else if (A == 8) {
        basic.showString("H")
    } else if (A == 9) {
        basic.showString("I")
    } else if (A == 10) {
        basic.showString("J")
    } else if (A == 11) {
        basic.showString("K")
    } else if (A == 12) {
        basic.showString("L")
    } else if (A == 13) {
        basic.showString("M")
    } else if (A == 14) {
        basic.showString("N")
    } else if (A == 15) {
        basic.showString("O")
    } else if (A == 16) {
        basic.showString("P")
    } else if (A == 17) {
        basic.showString("Q")
    } else if (A == 18) {
        basic.showString("R")
    } else if (A == 19) {
        basic.showString("S")
    } else if (A == 20) {
        basic.showString("T")
    } else if (A == 21) {
        basic.showString("U")
    } else if (A == 22) {
        basic.showString("V")
    } else if (A == 23) {
        basic.showString("W")
    } else if (A == 24) {
        basic.showString("X")
    } else if (A == 25) {
        basic.showString("Y")
    } else if (A == 26) {
        basic.showString("Z")
    } else if (A == 27) {
        basic.showString(".")
    } else if (A == 28) {
        basic.showString("?")
    } else if (A == 0) {
        basic.showString(" ")
    } else {
        basic.showString("!")
    }
})
basic.forever(function () {
    if (A >= 30) {
        A = 29
    }
})

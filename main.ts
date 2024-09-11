radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        for (let index = 0; index < 4; index++) {
//            ArmLeft(0)
//            ArmRight(180)
            servos.P1.setAngle(180)
            basic.pause(5)
            servos.P2.setAngle(0)
            basic.pause(1000)

//            ArmLeft(180)
//            ArmRight(0)
            servos.P1.setAngle(0)
            basic.pause(5)
            servos.P2.setAngle(180)
            basic.pause(1000)
        }
    }
})
function ArmRight (angle: number) {
    servos.P1.setAngle(angle)
}
function ArmLeft (angle: number) {
    servos.P2.setAngle(angle)
}
radio.setGroup(90)
basic.forever(function () {
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
})

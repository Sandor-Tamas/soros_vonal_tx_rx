serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200
)
let i = 0
basic.forever(function () {
    serial.writeNumber(i)
    basic.pause(1000)
    i += 1
})

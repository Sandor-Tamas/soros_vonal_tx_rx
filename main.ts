serial.onDataReceived(serial.delimiters(Delimiters.Comma), function () {
    vett = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    basic.showNumber(vett)
})
let vett = ""
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200
)
let i = 0
basic.forever(function () {
    serial.writeNumber(i)
    serial.writeString(",")
    basic.pause(1000)
    i += 1
})

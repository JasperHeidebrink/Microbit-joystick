radio.setGroup(25)
joystickbit.initJoystickBit()

basic.forever(function () {
    let rockerX = joystickbit.getRockerValue(joystickbit.rockerType.X)
    radio.sendValue('rockerX', rockerX);
    let rockerY = joystickbit.getRockerValue(joystickbit.rockerType.Y)
    radio.sendValue('rockerY', rockerY);
})

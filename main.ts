//% weight=10 color=#008B00 icon="\uf136"
//% blockId=i2c_motor_shield 
namespace i2c_motor_shield {
export function I2CmotorRun (chanel: number, speed: number): void {
    let buf = pins.createBuffer(3);
if (speed >= 0) {
        buf[0] = 2;
    } else {
        buf[0] = 3;
    }
    buf[1] = chanel;
    if (speed >= 0) {
        buf[2] = speed;
    } else {
        buf[2] = speed * -1;
    }
    pins.i2cWriteBuffer(0x14, buf);
}
}
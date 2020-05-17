
//% color="#008272"weight=100 icon="\uf1b9" block="I2C Motor Shield"
namespace i2cmotors {
//% emitAsConstant
export enum i2cMotor {
    A = 1,
    B = 2,
    //% blockId="ApB" block="A+B"
    AB = 3,
}

//% blockId=i2c_motor_run
//% block="I2C Motor %i2cMotor|run %n"
    export function i2cMotorRun (chanel: i2cMotor, speed: number): void {
        let buf = pins.createBuffer(3);
    if (speed >= 0) {
            buf[0] = 2;
        } else {
            buf[0] = 3;
        }
        if (speed >= 0) {
            buf[2] = speed;
        } else {
            buf[2] = speed * -1;
        }
        switch(chanel) {
            case i2cMotor.A: {
                buf[1] = 0;
                pins.i2cWriteBuffer(0x14, buf);
            }
            case i2cMotor.B: {
                buf[1] = 1;
                pins.i2cWriteBuffer(0x14, buf);
            }
            case i2cMotor.AB: {
                buf[1] = 0;
                pins.i2cWriteBuffer(0x14, buf);
                buf[1] = 1;
                pins.i2cWriteBuffer(0x14, buf);
            }
        }
        
    }
//% blockId=i2c_motor_stop
//% block="I2C Motor %i2cMotor|stop"
    export function i2cMotorStop (chanel: i2cMotor ): void {
        let buf = pins.createBuffer(2);
         buf[0] = 0;
        switch(chanel) {
            case i2cMotor.A: {
                buf[1] = 0;
                pins.i2cWriteBuffer(0x14, buf);
            }
            case i2cMotor.B: {
                buf[1] = 1;
                pins.i2cWriteBuffer(0x14, buf);
            }
            case i2cMotor.AB: {
                buf[1] = 0;
                pins.i2cWriteBuffer(0x14, buf);
                buf[1] = 1;
                pins.i2cWriteBuffer(0x14, buf);
            }
        }
    }
}

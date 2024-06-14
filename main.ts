//% color=#188634
namespace imageio {
    //% block="5×5"
    //% weight=100
    //% shim=images::createImage
    //% imageLiteral=1 imageLiteralRows=5 imageLiteralColumns=5
    export function createImage5x5(leds: string): Image {
        return <Image><any>leds
    }
}

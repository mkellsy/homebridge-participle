import * as Homebridge from "homebridge";
import * as Interfaces from "@mkellsy/hap-device";

import { Accessory } from "./Accessory";

export class Dimmer extends Accessory {
    constructor(
        id: string,
        device: Interfaces.Dimmer,
        accessory: Homebridge.PlatformAccessory,
        homebridge: Homebridge.API,
        cached: boolean
    ) {
        super(id, device, accessory, homebridge, cached);
    }
}

importScripts(new URL('../pyboard/micropython.js', Scratch.extensions.url).href);

class RP2040 extends MicroPython {
    constructor () {
        super();
    }

    async _onConnect () {
        await super._onConnect();
        await this.send('import rp2');
    }
}

self.RP2040 = RP2040;

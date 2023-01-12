const {ArgumentType, BlockType, StageLayering} = Scratch;
const {Base64Util, Cast, Color} = Util;

// eslint-disable-next-line max-len
const blockIconURI = 'data:image/png;base64,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';

const DEFAULT_COLOR = Color.rgbToHex(Color.RGB_BLACK);
const DEFAULT_SIZE = 100;

importScripts(
    'https://unpkg.com/jsqr@1.4.0/dist/jsQR.js',
    'https://unpkg.com/qrcode-svg@1.1.0/dist/qrcode.min.js'
);

class QRCodeBlocks {
    constructor (runtime) {
        this.runtime = runtime;
        this.runtime.on('videoSensing.frame', this.setVideoFrame.bind(this));

        this.dataURI = '';

        this.skinId = null;
        this.drawableId = null;

        this.qrcodeGs = [];

        this.attrs = {
            widht: 0,
            height: 0,
            color: DEFAULT_COLOR,
            size: DEFAULT_SIZE,
        };
    }

    setVideoFrame (dataURI) {
        this.dataURI = dataURI || '';
    }

    setLocale (locale) {
        formatMessage.setup({locale});
    }

    get TranslationMap () {
        return {
            en: {
                'qrcode.name': 'QR Code',
                'qrcode.decodeCamera': 'scan QR code from camera',
                'qrcode.whenAnyQRcode': 'when QR code is scanned',
                'qrcode.whenQRcode': 'when QR code is [TEXT]',
                'qrcode.defaultQRcodeText': 'hello!',
                'qrcode.decode': 'scan QR code from [IMAGE]',
                'qrcode.clear': 'clear all QR code',
                'qrcode.generate': 'generate QR code with [TEXT] at x:[X] y:[Y]',
                'qrcode.setColor': 'set QR code color to [COLOR]',
                'qrcode.setSize': 'set QR code size to [SIZE]',
            },
            'zh-cn': {
                'qrcode.name': '二维码',
                'qrcode.decodeCamera': '扫描二维码',
                'qrcode.whenAnyQRcode': '当扫描到二维码',
                'qrcode.whenQRcode': '当二维码是 [TEXT]',
                'qrcode.defaultQRcodeText': '你好！',
                'qrcode.decode': '从 [IMAGE] 图片扫描二维码',
                'qrcode.clear': '擦除所有二维码',
                'qrcode.generate': '在 x:[X] y:[Y] 生成 [TEXT] 的二维码',
                'qrcode.setColor': '将二维码颜色设为 [COLOR]',
                'qrcode.setSize': '将二维码尺寸设为 [SIZE]',
            },
            'zh-tw': {
                'qrcode.name': '二維碼',
                'qrcode.decodeCamera': '掃描二維碼',
                'qrcode.whenAnyQRcode': '當掃描到二維碼',
                'qrcode.whenQRcode': '當二維碼是 [TEXT]',
                'qrcode.defaultQRcodeText': '你好！',
                'qrcode.decode': '從 [IMAGE] 圖片掃描二維碼',
                'qrcode.clear': '擦除所有二維碼',
                'qrcode.generate': '在 x:[X] y:[Y] 生成 [TEXT] 的二維碼',
                'qrcode.setColor': '將二維碼顏色設為 [COLOR]',
                'qrcode.setSize': '將二維碼尺寸設為 [SIZE]',
            }
        };
    }

    get Blocks () {
        return [
            {
                opcode: 'decodeCamera',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'qrcode.decodeCamera',
                    default: 'scan QR code from camera'
                }),
                disableMonitor: true,
            },
            {
                opcode: 'whenAnyQRcode',
                blockType: BlockType.HAT,
                text: formatMessage({
                    id: 'qrcode.whenAnyQRcode',
                    default: 'when QR code is scanned'
                })
            },
            {
                opcode: 'whenQRcode',
                blockType: BlockType.HAT,
                text: formatMessage({
                    id: 'qrcode.whenQRcode',
                    default: 'when QR code is [TEXT]'
                }),
                arguments: {
                    TEXT: {
                        type: ArgumentType.STRING,
                        defaultValue: formatMessage({
                            id: 'qrcode.defaultQRcodeText',
                            default: 'hello!'
                        })
                    }
                }
            },
            '---',
            {
                opcode: 'generate',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'qrcode.generate',
                    default: 'generate QR code with [TEXT] at x: [X] y: [Y]'
                }),
                arguments: {
                    TEXT: {
                        type: ArgumentType.STRING,
                        defaultValue: formatMessage({
                            id: 'qrcode.defaultQRcodeText',
                            default: 'hello!'
                        })
                    },
                    X: {
                        type: ArgumentType.NUMBER,
                        defaultValue: this.attrs.x
                    },
                    Y: {
                        type: ArgumentType.NUMBER,
                        defaultValue: this.attrs.y
                    }
                }
            },
            {
                opcode: 'setColor',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'qrcode.setColor',
                    default: 'set QR code color to [COLOR]'
                }),
                arguments: {
                    COLOR: {
                        type: ArgumentType.COLOR,
                        defaultValue: DEFAULT_COLOR
                    }
                }
            },
            {
                opcode: 'setSize',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'qrcode.setSize',
                    default: 'set QR code size to [SIZE]'
                }),
                arguments: {
                    SIZE: {
                        type: ArgumentType.NUMBER,
                        defaultValue: DEFAULT_SIZE
                    }
                }
            },
            {
                opcode: 'clear',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'qrcode.clear',
                    default: 'clear all QR code'
                })
            },
        ];
    }

    getInfo () {
        return {
            id: 'qrcode',
            name: formatMessage({
                id: 'qrcode.name',
                default: 'QR Code'
            }),
            blockIconURI,
            blocks: this.Blocks
        };
    }

    async _decode (dataURI) {
        if (!dataURI) return;

        // base64 to image to imageData
        const dataBase64 = dataURI.replace(/^data:image\/\w+;base64,/, '');
        const dataArray = Base64Util.base64ToUint8Array(dataBase64);

        const imageBlob = new Blob([dataArray], {type: 'image/png'});
        const image = await createImageBitmap(imageBlob);

        const canvas = new OffscreenCanvas(image.width, image.height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, image.width, image.height);

        const imageData = ctx.getImageData(0, 0, image.width, image.height);
        const res = jsQR(imageData.data, imageData.width, imageData.height);
        return res ? `${res.data}` : '';
    }

    async _encode (content, x, y) {
        if (!(this.attrs.width && this.attrs.height)) {
            const [width, height] = await this.runtime.renderer.getNativeSize();
            this.attrs.width = width;
            this.attrs.height = height;
        }

        const dx = this.attrs.width / 2 + x - this.attrs.size / 2;
        const dy = this.attrs.height / 2 - y - this.attrs.size / 2;
        const code = new QRCode({
            content,
            color: this.attrs.color,
            width: this.attrs.size,
            height: this.attrs.size,
            padding: 0,
            background: 'transparent',
            container: 'g',
        }).svg().replace(/^\<g /i, `<g transform="translate(${dx} ${dy})" `);
        this.qrcodeGs.push(code);
    }

    async _draw () {
        if (!(this.attrs.width && this.attrs.height)) return;

        const svg = `<?xml version="1.0" standalone="yes"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ${this.attrs.width} ${this.attrs.height}">
${this.qrcodeGs.join('\n')}
</svg>`;

        if (this.skinId && this.drawableId) {
            await this.runtime.renderer.updateSVGSkin(this.skinId, svg);
        } else {
            const skinId = await this.runtime.renderer.createSVGSkin(svg);
            const drawableId = await this.runtime.renderer.createDrawable(StageLayering.PEN_LAYER);
            await this.runtime.renderer.updateDrawableSkinId(drawableId, skinId);
            this.skinId = skinId;
            this.drawableId = drawableId;
        }
    }

    async decodeCamera () {
        try {
            return await this._decode(this.dataURI);
        } catch (e) {
            console.log(e)
            return '';
        }
    }

    async whenAnyQRcode () {
        const text = await this.decodeCamera();
        return text !== '';
    }

    async whenQRcode (args) {
        const text = await this.decodeCamera();
        return text === Cast.toString(args.TEXT);
    }

    async clear () {
        this.qrcodeGs.length = 0;
        await this._draw();
    }

    async generate (args) {
        await this._encode(Cast.toString(args.TEXT), Cast.toNumber(args.X), Cast.toNumber(args.Y));
        this._draw();
    }

    setColor (args) {
        this.attrs.color = Cast.toString(args.COLOR);
    }

    setSize (args) {
        this.attrs.size = Cast.toNumber(args.SIZE);
    }
}

Scratch.extensions.register(QRCodeBlocks);

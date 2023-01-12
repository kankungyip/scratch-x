const {ArgumentType, BlockType, StageLayering} = Scratch;
const {Cast, Color} = Util;

// eslint-disable-next-line max-len
const blockIconURI = 'data:image/png;base64,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';

// 内置字体
const FONTS = {
    SANS_SERIF: 'Sans Serif',
    SERIF: 'Serif',
    HANDWRITING: 'Handwriting',
    MARKER: 'Marker',
    CURLY: 'Curly',
    PIXEL: 'Pixel',
    CHINESE: '"Microsoft YaHei", "微软雅黑", STXihei, "华文细黑"',
    JAPANESE: '"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka, "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic"',
    KOREAN: 'Malgun Gothic'
};

const ANCHORS = {
    LEFT: 'start',
    MIDDLE: 'middle',
    RIGHT: 'end'
}

const STYLES = {
    NORMAL: 'normal',
    OBLIQUE: 'oblique',
    BOLD: 'bold',
    ALL: 'all'
}

const BASELINES = {
    TEXT_BEFORE_EDGE: 'text-before-edge',
    CENTRAL: 'central',
    TEXT_AFTER_EDGE: 'text-after-edge',
}

const DEFAULT_FONT = {
    LEADING: 1.3,
    ANCHOR: ANCHORS.MIDDLE,
    FAMILY: FONTS.SANS_SERIF,
    SIZE: 14,
    STYLE: STYLES.NORMAL,
    WEIGHT: STYLES.NORMAL,
    BASELINE: BASELINES.CENTRAL,
    COLOR: Color.rgbToHex(Color.RGB_BLACK)
}

const DEFAULT_COLOR = Color.rgbToHex(Color.RGB_BLACK);

class TextSpriteBlocks {
    constructor (runtime) {
        this.runtime = runtime;

        this.skinId = null;
        this.drawableId = null;

        this.texts = [];

        this.attrs = {
            width: 0,
            height: 0,
            font: {
                leading: DEFAULT_FONT.LEADING,
                family: DEFAULT_FONT.FAMILY,
                anchor: DEFAULT_FONT.ANCHOR,
                size: DEFAULT_FONT.SIZE,
                style: DEFAULT_FONT.STYLE,
                weight: DEFAULT_FONT.WEIGHT,
                baseline: DEFAULT_FONT.BASELINE,
                color: DEFAULT_FONT.COLOR,
            }
        }
    }

    setLocale (locale) {
        formatMessage.setup({locale});
    }

    get Blocks () {
        return [
            {
                opcode: 'writeText',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'textsprite.writeText',
                    default: 'write [TEXT] at x:[X] y:[Y]'
                }),
                arguments: {
                    TEXT: {
                        type: ArgumentType.STRING,
                        defaultValue: formatMessage({
                            id: 'textsprite.defaultText',
                            default: 'Hello!'
                        })
                    },
                    X: {
                        type: ArgumentType.NUMBER,
                        defaultValue: 0
                    },
                    Y: {
                        type: ArgumentType.NUMBER,
                        defaultValue: 0
                    }
                }
            },
            {
                opcode: 'clear',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'textsprite.clear',
                    default: 'clear all texts'
                })
            },
            '---',
            {
                opcode: 'setFont',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'textsprite.setFont',
                    default: 'set font to [FONT]'
                }),
                arguments: {
                    FONT: {
                        type: ArgumentType.STRING,
                        menu: 'Fonts',
                        defaultValue: DEFAULT_FONT.FAMILY
                    }
                }
            },
            {
                opcode: 'setSize',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'textsprite.setSize',
                    default: 'set font size to [SIZE]'
                }),
                arguments: {
                    SIZE: {
                        type: ArgumentType.NUMBER,
                        defaultValue: DEFAULT_FONT.SIZE
                    }
                }
            },
            {
                opcode: 'setColor',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'textsprite.setColor',
                    default: 'set text color to [COLOR]'
                }),
                arguments: {
                    COLOR: {
                        type: ArgumentType.COLOR,
                        defaultValue: DEFAULT_FONT.COLOR
                    }
                }
            },
            {
                opcode: 'setStyle',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'textsprite.setStyle',
                    default: 'set font style to [STYLE]'
                }),
                arguments: {
                    STYLE: {
                        type: ArgumentType.STRING,
                        menu: 'Styles',
                        defaultValue: DEFAULT_FONT.STYLE
                    }
                }
            },
            {
                opcode: 'setAnchor',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'textsprite.setAnchor',
                    default: 'set text align to [ANCHOR]'
                }),
                arguments: {
                    ANCHOR: {
                        type: ArgumentType.STRING,
                        menu: 'Anchors',
                        defaultValue: DEFAULT_FONT.ANCHOR
                    }
                }
            },
            {
                opcode: 'setBaseline',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'textsprite.setBaseline',
                    default: 'set text vertical align to [BASELINE]'
                }),
                arguments: {
                    BASELINE: {
                        type: ArgumentType.STRING,
                        menu: 'Baselines',
                        defaultValue: DEFAULT_FONT.BASELINE
                    }
                }
            },
        ];
    }

    get Menus () {
        return {
            Fonts: [
                {
                    value: FONTS.SANS_SERIF,
                    text: FONTS.SANS_SERIF,
                },
                {
                    value: FONTS.SERIF,
                    text: FONTS.SERIF,
                },
                {
                    value: FONTS.HANDWRITING,
                    text: FONTS.HANDWRITING,
                },
                {
                    value: FONTS.MARKER,
                    text: FONTS.MARKER,
                },
                {
                    value: FONTS.CURLY,
                    text: FONTS.CURLY,
                },
                {
                    value: FONTS.PIXEL,
                    text: FONTS.PIXEL,
                },
                {
                    value: FONTS.CHINESE,
                    text: '中文'
                },
                {
                    value: FONTS.JAPANESE,
                    text: '日本語'
                },
                {
                    value: FONTS.KOREAN,
                    text: '한국어'
                }
            ],
            Anchors: [
                {
                    value: ANCHORS.LEFT,
                    text: formatMessage({
                        id: 'textsprite.anchorLeft',
                        default: 'left'
                    })
                },
                {
                    value: ANCHORS.MIDDLE,
                    text: formatMessage({
                        id: 'textsprite.anchorMiddle',
                        default: 'middle'
                    })
                },
                {
                    value: ANCHORS.RIGHT,
                    text: formatMessage({
                        id: 'textsprite.anchorRight',
                        default: 'right'
                    })
                }
            ],
            Baselines: [
                {
                    value: BASELINES.TEXT_BEFORE_EDGE,
                    text: formatMessage({
                        id: 'textsprite.baselineTop',
                        default: 'top'
                    })
                },
                {
                    value: BASELINES.CENTRAL,
                    text: formatMessage({
                        id: 'textsprite.baselineMiddle',
                        default: 'middle'
                    })
                },
                {
                    value: BASELINES.TEXT_AFTER_EDGE,
                    text: formatMessage({
                        id: 'textsprite.baselineBottom',
                        default: 'bottom'
                    })
                }
            ],
            Styles: [
                {
                    value: STYLES.NORMAL,
                    text: formatMessage({
                        id: 'textsprite.styleNormal',
                        default: 'normal'
                    })
                },
                {
                    value: STYLES.BOLD,
                    text: formatMessage({
                        id: 'textsprite.styleBold',
                        default: 'bold'
                    })
                },
                {
                    value: STYLES.OBLIQUE,
                    text: formatMessage({
                        id: 'textsprite.styleOblique',
                        default: 'oblique'
                    })
                },
                {
                    value: STYLES.ALL,
                    text: formatMessage({
                        id: 'textsprite.styleAll',
                        default: 'bold + oblique'
                    })
                }
            ]
        };
    }

    getInfo () {
        return {
            id: 'textsprite',
            name: formatMessage({
                id: 'textsprite.name',
                default: 'Text Sprite'
            }),
            blockIconURI: blockIconURI,
            blocks: this.Blocks,
            menus: this.Menus
        };
    }

    async _draw () {
        if (!(this.attrs.width && this.attrs.height)) {
            const [width, height] = await this.runtime.renderer.getNativeSize();
            this.attrs.width = width;
            this.attrs.height = height;
        }

        const svg = `<?xml version="1.0" standalone="yes"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ${this.attrs.width} ${this.attrs.height}">
${this.texts.map(text =>
    `<text
        x="${this.attrs.width / 2 + text.x}"
        y="${this.attrs.height / 2 - text.y}"
        font-family="${text.font.family}"
        font-size="${text.font.size}"
        font-style="${text.font.style}"
        font-weight="${text.font.weight}"
        text-anchor="${text.font.anchor}"
        fill="${text.font.color}"
        style="dominant-baseline:${text.font.baseline}"
    >
        ${text.content.split('\\n').map((line, i) =>
            `<tspan dx="0" dy="${i * text.font.leading * text.font.size}">${line}</tspan>`
        )}
    </text>`
).join('\n')}
</svg>`;

        if (this.skinId && this.drawableId) {
            await this.runtime.renderer.updateSVGSkin(this.skinId, svg);
        } else {
            const skinId = await this.runtime.renderer.createSVGSkin(svg);
            const drawableId = await this.runtime.renderer.createDrawable(StageLayering.SPRITE_LAYER);
            await this.runtime.renderer.updateDrawableSkinId(drawableId, skinId);
            this.skinId = skinId;
            this.drawableId = drawableId;
        }
    }

    async clear () {
        this.texts.length = 0;
        await this._draw();
    }

    async writeText (args) {
        const content = Cast.toString(args.TEXT);
        const x = Cast.toNumber(args.X);
        const y = Cast.toNumber(args.Y);
        const font = Object.assign({}, this.attrs.font);
        this.texts.push({content, x, y, font});
        await this._draw();
    }

    setFont (args) {
        this.attrs.font.family = Cast.toString(args.FONT);
    }

    setColor (args) {
        this.attrs.font.color =  Cast.toString(args.COLOR);
    }

    setAnchor (args) {
        this.attrs.font.anchor = Cast.toString(args.ANCHOR);
    }

    setBaseline (args) {
        this.attrs.font.baseline = args.BASELINE;
    }

    setStyle (args) {
        this.attrs.font.style = STYLES.NORMAL;
        this.attrs.font.weight = STYLES.NORMAL;
        if (args.STYLE === STYLES.OBLIQUE || args.STYLE === STYLES.ALL) {
            this.attrs.font.style = STYLES.OBLIQUE;
        }
        if (args.STYLE === STYLES.BOLD || args.STYLE === STYLES.ALL) {
            this.attrs.font.weight = STYLES.BOLD;
        }
    }

    setSize (args) {
        this.attrs.font.size =  Cast.toNumber(args.SIZE);
    }
}

Scratch.extensions.register(TextSpriteBlocks);

formatMessage.setup({
    translations: {
        en: {
            'textsprite.name': 'Text Sprite',
            'textsprite.writeText': 'write [TEXT] at x:[X] y:[Y]',
            'textsprite.defaultText': 'Hello!',
            'textsprite.clear': 'clear all texts',
            'textsprite.setFont': 'set font to [FONT]',
            'textsprite.setColor': 'set text color to [COLOR]',
            'textsprite.setAnchor': 'set text align to [ANCHOR]',
            'textsprite.anchorLeft': 'left',
            'textsprite.anchorMiddle': 'middle',
            'textsprite.anchorRight': 'right',
            'textsprite.setBaseline': 'set text vertical align to [BASELINE]',
            'textsprite.baselineTop': 'top',
            'textsprite.baselineMiddle': 'middle',
            'textsprite.baselineBottom': 'bottom',
            'textsprite.setSize': 'set font size to [SIZE]',
            'textsprite.setStyle': 'set font style to [STYLE]',
            'textsprite.styleNormal': 'normal',
            'textsprite.styleOblique': 'oblique',
            'textsprite.styleBold': 'bold',
            'textsprite.styleAll': 'bold + oblique'
        },
        'zh-cn': {
            'textsprite.name': '文字精灵',
            'textsprite.writeText': '在 x:[X] y:[Y] 写 [TEXT]',
            'textsprite.defaultText': '你好！',
            'textsprite.clear': '擦除所有文字',
            'textsprite.setFont': '将字体设为 [FONT]',
            'textsprite.setColor': '将文字颜色设为 [COLOR]',
            'textsprite.setAnchor': '将对齐方式设为 [ANCHOR]',
            'textsprite.anchorLeft': '居左',
            'textsprite.anchorMiddle': '居中',
            'textsprite.anchorRight': '居右',
            'textsprite.setBaseline': '将垂直对齐方式设为 [BASELINE]',
            'textsprite.baselineTop': '顶部',
            'textsprite.baselineMiddle': '中间',
            'textsprite.baselineBottom': '底部',
            'textsprite.setSize': '将文字大小设为 [SIZE]',
            'textsprite.setStyle': '将文字样式设为 [STYLE]',
            'textsprite.styleNormal': '普通',
            'textsprite.styleOblique': '倾斜',
            'textsprite.styleBold': '加粗',
            'textsprite.styleAll': '加粗+倾斜'
        },
        'zh-tw': {
            'textsprite.name': '文字精靈',
            'textsprite.writeText': '在 x:[X] y:[Y] 寫 [TEXT]',
            'textsprite.defaultText': '你好！',
            'textsprite.clear': '擦除所有文字',
            'textsprite.setFont': '將字體設為 [FONT]',
            'textsprite.setColor': '將文字顏色設為 [COLOR]',
            'textsprite.setAnchor': '將對齊方式設為 [ANCHOR]',
            'textsprite.anchorLeft': '居左',
            'textsprite.anchorMiddle': '居中',
            'textsprite.anchorRight': '居右',
            'textsprite.setBaseline': '將垂直對齊方式設為 [BASELINE]',
            'textsprite.baselineTop': '頂部',
            'textsprite.baselineMiddle': '中間',
            'textsprite.baselineBottom': '底部',
            'textsprite.setSize': '將文字大小設為 [SIZE]',
            'textsprite.setStyle': '將文字樣式設為 [STYLE]',
            'textsprite.styleNormal': '普通',
            'textsprite.styleOblique': '傾斜',
            'textsprite.styleBold': '加粗',
            'textsprite.styleAll': '加粗+傾斜'
        }
    }
});

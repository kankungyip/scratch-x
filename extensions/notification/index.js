const {ArgumentType, BlockType} = Scratch;
const Cast = Scratch.Util.Cast;

const blockIconURI = 'data:image/png;base64,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';

class NotificationBlocks {
    constructor () {
        this.isClicked = false;
    }

    getInfo () {
        return {
            id: 'notification',
            name: formatMessage({
                id: 'notification.name',
                default: 'Notification'
            }),
            blockIconURI,
            blocks: [
                {
                    opcode: 'whenClicked',
                    blockType: BlockType.HAT,
                    text: formatMessage({
                        id: 'notification.whenClicked',
                        default: 'when click notification'
                    })
                },
                {
                    opcode: 'showNotification',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'notification.showNotification',
                        default: 'show notification [MESSAGE]'
                    }),
                    arguments: {
                        MESSAGE: {
                            type: ArgumentType.STRING,
                            defaultValue: formatMessage({
                                id: 'notification.message',
                                default: 'message'
                            }),
                        },
                    }
                }
            ]
        };
    }

    showNotification (args) {
        this.isClicked = false;

        const notify = new Notification(
            formatMessage({
                id: 'notification.name',
                default: 'Notification'
            }),
            {
                body: Cast.toString(args.MESSAGE),
                icon: blockIconURI,
            }
        );

        notify.onclick = evt => {
            evt.preventDefault();
            this.isClicked = true;
            notify.close();
        };
    }

    whenClicked () {
        const clicked = this.isClicked;
        this.isClicked = false;
        return clicked;
    }
}

Scratch.extensions.register(new NotificationBlocks());

formatMessage.setup({
    translations: {
        en: {
            'notification.name': 'Notification',
            'notification.whenClicked': 'when this notification clicked',
            'notification.showNotification': 'show notification [MESSAGE]',
            'notification.message': 'message'
        },
        'zh-cn': {
            'notification.name': '通知',
            'notification.whenClicked': '当通知被点击',
            'notification.showNotification': '显示通知 [MESSAGE]',
            'notification.message': '消息'
        },
        'zh-tw': {
            'notification.name': '通知',
            'notification.whenClicked': '當通知被點擊',
            'notification.showNotification': '顯示通知 [MESSAGE]',
            'notification.message': '消息'
        }
    }
});

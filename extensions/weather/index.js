const {ArgumentType, BlockType} = Scratch;

const blockIconURI = 'data:image/png;base64,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';

const DEVELOPMENT = location.hostname === 'localhost';

const WEATHER_URL = 'https://devapi.qweather.com/v7/weather/now?';
const INDICES_URL = 'https://devapi.qweather.com/v7/indices/1d?';
const AIR_QUALITY_URL = 'https://devapi.qweather.com/v7/air/now?';

class WeatherBlocks {
    constructor (runtime) {
        this.runtime = runtime;
        this.runtime.requestPermission('getCurrentPosition');
        
        this._cache = {};

        this.key = DEVELOPMENT ? 'b5a5cd38cbc64ce688864b215faf0af0' : 'key';
        this.unit = 'm';
    }

    setLocale (locale) {
        formatMessage.setup({locale});
    }

    get TranslationMap () {
        return {
            en: {
                'weather.name': 'Weather',
                'weather.unknown': 'unknown',
                'weather.setKey': 'QWeather authentication [KEY]',
                'weather.setUnit': '[UNIT] units',
                'weather.unit.metric': 'metric',
                'weather.unit.imperial': 'imperial',
                'weather.getWeather': 'current [WEATHER]',
                'weather.weather.text': 'weather',
                'weather.weather.temp': 'temperature',
                'weather.weather.feelsLike': 'feels like temperature',
                'weather.weather.humidity': 'humidity',
                'weather.weather.windDir': 'wind direction',
                'weather.weather.windScale': 'wind scale',
                'weather.weather.windSpeed': 'wind speed',
                'weather.weather.precip': 'precipitation',
                'weather.weather.pressure': 'atmospheric pressure',
                'weather.getIndices': '[TYPE] indices',
                'weather.getIndicesCategory': '[TYPE] indices category',
                'weather.indices.uv': 'UV',
                'weather.indices.sports': 'sports',
                'weather.indices.carwash': 'car wash',
                'weather.indices.fishing': 'fishing',
                'weather.getAQI': 'AQI',
                'weather.getAQICategory': 'AQI category',
                'weather.getPollutant': '[TYPE] pollutant',
                'weather.pollutant.primary': 'primary',
                'weather.pollutant.no2': 'nitrogen dioxide',
                'weather.pollutant.so2': 'sulfur dioxide',
                'weather.pollutant.co': 'carbon monoxide',
                'weather.pollutant.o3': 'ozone',
            },
            'zh-cn': {
                'weather.name': '天气',
                'weather.unknown': '未知',
                'weather.setKey': '和风天气认证 [KEY]',
                'weather.setUnit': '[UNIT]单位',
                'weather.unit.metric': '公制',
                'weather.unit.imperial': '英制',
                'weather.getWeather': '当前 [WEATHER]',
                'weather.weather.text': '天气',
                'weather.weather.temp': '温度',
                'weather.weather.feelsLike': '体感温度',
                'weather.weather.humidity': '湿度',
                'weather.weather.windDir': '风向',
                'weather.weather.windScale': '风力等级',
                'weather.weather.windSpeed': '风速',
                'weather.weather.precip': '降水量',
                'weather.weather.pressure': '气压',
                'weather.getIndices': '[TYPE] 指数',
                'weather.indices.uv': '紫外线',
                'weather.indices.sports': '运动',
                'weather.indices.carwash': '洗车',
                'weather.indices.fishing': '钓鱼',
                'weather.getIndicesCategory': '[TYPE] 指数级别',
                'weather.getAQI': '空气质量指数',
                'weather.getAQICategory': '空气质量指数级别',
                'weather.getPollutant': '[TYPE] 污染物',
                'weather.pollutant.primary': '主要',
                'weather.pollutant.no2': '二氧化氮',
                'weather.pollutant.so2': '二氧化硫',
                'weather.pollutant.co': '一氧化碳',
                'weather.pollutant.o3': '臭氧',
            },
        };
    }

    get Blocks () {
        return [
            {
                opcode: 'setKey',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'weather.setKey',
                    default: 'QWeather authentication [KEY]'
                }),
                arguments: {
                    KEY: {
                        type: ArgumentType.STRING,
                        defaultValue: this.key,
                    },
                }
            },
            '---',
            {
                opcode: 'setUnit',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'weather.setUnit',
                    default: '[UNIT] units'
                }),
                arguments: {
                    UNIT: {
                        type: ArgumentType.STRING,
                        menu: 'units',
                        defaultValue: this.unit,
                    },
                }
            },
            '---',
            {
                opcode: 'getWeather',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'weather.getWeather',
                    default: 'current [WEATHER]'
                }),
                arguments: {
                    WEATHER: {
                        type: ArgumentType.STRING,
                        menu: 'weatherItems',
                        defaultValue: 'text'
                    }
                }
            },
            {
                opcode: 'getIndices',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'weather.getIndices',
                    default: '[TYPE] indices'
                }),
                arguments: {
                    TYPE: {
                        type: ArgumentType.STRING,
                        menu: 'indicesTypes',
                        defaultValue: '5'
                    }
                }
            },
            {
                opcode: 'getIndicesCategory',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'weather.getIndicesCategory',
                    default: '[TYPE] indices category'
                }),
                arguments: {
                    TYPE: {
                        type: ArgumentType.STRING,
                        menu: 'indicesTypes',
                        defaultValue: '5'
                    }
                }
            },
            {
                opcode: 'getAQI',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'weather.getAQI',
                    default: 'AQI'
                }),
                disableMonitor: true
            },
            {
                opcode: 'getAQICategory',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'weather.getAQICategory',
                    default: 'AQI category'
                }),
                disableMonitor: true
            },
            {
                opcode: 'getPollutant',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'weather.getPollutant',
                    default: '[TYPE] pollutant'
                }),
                arguments: {
                    TYPE: {
                        type: ArgumentType.STRING,
                        menu: 'pollutantTypes',
                        defaultValue: 'primary'
                    }
                }
            },
        ];
    }

    get Menus () {
        return {
            units: [
                {
                    text: formatMessage({
                        id: 'weather.unit.metric',
                        default: 'metric'
                    }),
                    value: 'm'
                },
                {
                    text: formatMessage({
                        id: 'weather.unit.imperial',
                        default: 'imperial'
                    }),
                    value: 'i'
                },
            ],
            weatherItems: [
                {
                    text: formatMessage({
                        id: 'weather.weather.text',
                        default: 'weather'
                    }),
                    value: 'text'
                },
                {
                    text: formatMessage({
                        id: 'weather.weather.temp',
                        default: 'temperature'
                    }),
                    value: 'temp'
                },
                {
                    text: formatMessage({
                        id: 'weather.weather.feelsLike',
                        default: 'feels like temperature'
                    }),
                    value: 'feelsLike'
                },
                {
                    text: formatMessage({
                        id: 'weather.weather.humidity',
                        default: 'humidity'
                    }),
                    value: 'humidity'
                },
                {
                    text: formatMessage({
                        id: 'weather.weather.windDir',
                        default: 'wind direction'
                    }),
                    value: 'windDir'
                },
                {
                    text: formatMessage({
                        id: 'weather.weather.windScale',
                        default: 'wind scale'
                    }),
                    value: 'windScale'
                },
                {
                    text: formatMessage({
                        id: 'weather.weather.windSpeed',
                        default: 'wind speed'
                    }),
                    value: 'windSpeed'
                },
                {
                    text: formatMessage({
                        id: 'weather.weather.precip',
                        default: 'precipitation'
                    }),
                    value: 'precip'
                },
                {
                    text: formatMessage({
                        id: 'weather.weather.pressure',
                        default: 'atmospheric pressure'
                    }),
                    value: 'pressure'
                },
            ],
            indicesTypes: [
                {
                    text: formatMessage({
                        id: 'weather.indices.uv',
                        default: 'UV'
                    }),
                    value: '5'
                },
                {
                    text: formatMessage({
                        id: 'weather.indices.sports',
                        default: 'sports'
                    }),
                    value: '1'
                },
                {
                    text: formatMessage({
                        id: 'weather.indices.carwash',
                        default: 'car wash'
                    }),
                    value: '2'
                },
                {
                    text: formatMessage({
                        id: 'weather.indices.fishing',
                        default: 'fishing'
                    }),
                    value: '4'
                },
            ],
            pollutantTypes: [
                {
                    text: formatMessage({
                        id: 'weather.pollutant.primary',
                        default: 'primary'
                    }),
                    value: 'primary'
                },
                {
                    text: 'PM10',
                    value: 'pm10'
                },
                {
                    text: 'PM2.5',
                    value: 'pm2p5'
                },
                {
                    text: formatMessage({
                        id: 'weather.pollutant.no2',
                        default: 'nitrogen dioxide'
                    }),
                    value: 'no2'
                },
                {
                    text: formatMessage({
                        id: 'weather.pollutant.so2',
                        default: 'sulfur dioxide'
                    }),
                    value: 'so2'
                },
                {
                    text: formatMessage({
                        id: 'weather.pollutant.co',
                        default: 'carbon monoxide'
                    }),
                    value: 'co'
                },
                {
                    text: formatMessage({
                        id: 'weather.pollutant.o3',
                        default: 'ozone'
                    }),
                    value: 'o3'
                },
            ]
        };
    }

    getInfo () {
        return {
            id: 'weather',
            name: formatMessage({
                id: 'weather.name',
                default: 'Weather'
            }),
            blockIconURI,
            blocks: this.Blocks,
            menus: this.Menus
        };
    }

    get _unknownMessage () {
        return formatMessage({
            id: 'weather.unknown',
            default: 'unknown',
        })
    }

    get _language () {
        const {locale} = formatMessage.setup();
        return locale.split('-')[0];
    }

    async _getLocation () {
        if (this._cache.location) {
            return this._cache.location;
        }
        const {coords} = await this.runtime.requestPermission('getCurrentPosition');
        const lat = coords.latitude.toFixed(2);
        const long = coords.longitude.toFixed(2);
        const location = `${long},${lat}`;
        this._cache.location = location;
        return location;
    }

    async _fetchWeather (baseUrl, queryStr) {
        try {
            let url = baseUrl + queryStr;
            url += `&key=${this.key}`
            url += `&location=${await this._getLocation()}`
            url += `&lang=${this._language}`;
            const res = await (await fetch(url)).json();
            if (res.code === '200') {
                return res;
            }
        } catch (err) {
            return false;
        }
    }

    setKey (args) {
        this.key = args.KEY;
    }

    setUnit (args) {
        this.unit = args.UNIT;
    }

    async getWeather (args) {
        if (!this.key) {
            return this._unknownMessage;
        }

        let weather = this._cache.weather;

        if (!weather) {
            const data = await this._fetchWeather(WEATHER_URL, `unit=${this.unit}`);
            if (!data || !data.now) {
                return this._unknownMessage;
            }
            weather = data.now;
            this._cache.weather = weather;
        }

        return weather[args.WEATHER] || this._unknownMessage;
    }

    async getIndices (args) {
        if (!this.key) {
            return this._unknownMessage;
        }

        let indices = this._cache.indices;

        if (!indices) {
            const data = await this._fetchWeather(INDICES_URL, 'type=1,2,4,5');
            if (!data || !data.daily) {
                return this._unknownMessage;
            }
            indices = data.daily;
            this._cache.indices = indices;
        }

        const data = indices.find(ind => ind.type == args.TYPE);

        return data ? data.level : this._unknownMessage;
    }

    async getIndicesCategory (args) {
        if (!this.key) {
            return this._unknownMessage;
        }

        let indices = this._cache.indices;

        if (!indices) {
            const data = await this._fetchWeather(INDICES_URL, 'type=1,2,4,5');
            if (!data || !data.daily) {
                return this._unknownMessage;
            }
            indices = data.daily;
            this._cache.indices = indices;
        }

        const data = indices.find(ind => ind.type == args.TYPE);

        return data ? data.category : this._unknownMessage;
    }

    async _getAirQuality (type) {
        if (!this.key) {
            return this._unknownMessage;
        }

        let airQuality = this._cache.airQuality;

        if (!airQuality) {
            const data = await this._fetchWeather(AIR_QUALITY_URL);
            if (!data || !data.now) {
                return this._unknownMessage;
            }
            airQuality = data.now;
            this._cache.airQuality = airQuality;
        }

        return airQuality[type] || this._unknownMessage;
    }

    getAQI () {
        return this._getAirQuality('aqi');
    }

    getAQICategory () {
        return this._getAirQuality('category');
    }

    async getPollutant (args) {
        const value = await this._getAirQuality(args.TYPE);
        return value === 'NA' ? '无' : value;
    }
}

Scratch.extensions.register(WeatherBlocks);

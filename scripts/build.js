const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const UglifyJS = require('uglify-js');
const process = require('process');

const EXTENSIONS_DIR = path.join(__dirname, '../extensions');
const DIST_EXTENSIONS_DIR = path.join(__dirname, '../dist/extensions');
const DIST_LOCALES_DIR = path.join(__dirname, '../dist/locales');

const CONFIG_FILE = 'config.json';

const SUPPORTED_EXTNAMES = [
    '.js',
    '.json',
    '.png',
    '.jpg',
    '.jpeg',
    '.svg',
    '.md'
];

mkdirp.sync(DIST_EXTENSIONS_DIR);
mkdirp.sync(DIST_LOCALES_DIR);

const build = isMinify => {
    const collection = {};
    fs.readdirSync(EXTENSIONS_DIR).forEach(extension => {
        mkdirp.sync(path.join(DIST_EXTENSIONS_DIR, extension));

        fs.readdirSync(path.join(EXTENSIONS_DIR, extension)).forEach(filename => {
            if (
                filename[0] === '.' ||
                !SUPPORTED_EXTNAMES.includes(path.extname(filename))
            ) {
                return;
            }

            const filepath = path.join(EXTENSIONS_DIR, extension, filename);
            const outpath = path.join(DIST_EXTENSIONS_DIR, extension, filename);

            if (filename.toLowerCase() === CONFIG_FILE) {
                try {
                    const {translationMap, ...configData} = JSON.parse(fs.readFileSync(filepath, 'utf8'));
                    collection['en'] = collection['en'] || {};
                    collection['en'][extension] = configData;
                    Object.entries(translationMap).forEach(([locale, data]) => {
                        collection[locale] = collection[locale] || {};
                        collection[locale][extension] = Object.assign({}, configData);
                        Object.entries(data).forEach(([key, value]) =>
                            collection[locale][extension][key] = value
                        );
                    })
                } catch (e) {
                    console.error(`error read ${filename} in ${extension}: ${e}`);
                }
                return;
            }

            if (path.extname(filename).toLowerCase() === '.md') {
                return;
            }

            if (path.extname(filename).toLowerCase() === '.js') {
                let code = fs.readFileSync(filepath, 'utf8');
                try {
                    if (isMinify) {
                        const result = UglifyJS.minify(fs.readFileSync(filepath, 'utf8'));
                        if (result.error) {
                            console.error(`error minify ${filename} in ${extension}: ${result.error}`);
                            return;
                        }
                        code = result.code;
                    }
                    fs.writeFileSync(outpath, code);
                } catch (e) {
                    console.error(`error copy ${filename} in ${extension}: ${e}`);
                }
                return;
            }

            fs.copyFileSync(filepath, outpath);
        });
    });

    try {
        Object.entries(collection).forEach(([locale, configData]) => {
            const localeFilepath = path.join(DIST_LOCALES_DIR, `${locale}.json`);
            fs.writeFileSync(localeFilepath, JSON.stringify(configData), 'utf-8');
        });
    } catch (e) {
        console.error(`error write ${locale}.json: ${e}`);
    }

    console.log('build success.')
}

const args = process.argv.slice(2);
const isWatch = args.includes('--watch');
const isMinify= !isWatch;
if (isWatch) {
    fs.watch(EXTENSIONS_DIR, {recursive: true}, () => build(isMinify));
}
build(isMinify);

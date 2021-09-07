const fs = require('fs-extra')
const chalk = require('chalk')
const readlineSync = require('readline-sync')
const fetch = require('node-fetch')
const axios = require('axios')

const random = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ23456789'.split('');

function anunya(len) {
    const result = [];
    for (let i = 0; i < len; i++) result.push(random[Math.floor(Math.random() * random.length)]);
    return result.join('');
}

console.log(chalk.cyan(`${chalk.red('- - HILMYSAKTI - -')}\nAnime Picture\nCreated by Hilmy\nYT : https://youtube.com/c/HILMYGAMING87\n${chalk.red('- - HILMYSAKTI - -')}\n`))
console.log(`${chalk.cyan('TYPE')}\n1. Wallpaper\n2. Waifu\n3. Waifu (NSFW)\n`)

const type = readlineSync.questionInt(chalk.yellow("- Choose 1/2/3?: "))
if (type > 3) return console.log('You Only Can Choose 1 - 3')

const jml = readlineSync.questionInt(chalk.yellow("- How many image you want to download? (max 50): "))
if (jml > 50) return console.log('Maximal 50!!')


try {
    console.log(chalk.yellow('\nDownloading...\n later the image will be in the "wp-anime" folder'))
    for (let i = 0; i < jml; i++) {
        if (type == '1') {
            axios.get(`https://nekos.life/api/v2/img/wallpaper`)
                .then(async (res) => {
                    const data = res.data.url
                    if (fs.existsSync('/sdcard/wp-anime/wallpaper')) {
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-anime/wallpaper${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    } else {
                        fs.mkdir('/sdcard/wp-anime/wallpaper')
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-anime/wallpaper/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    }
                })
        } else if (type == '2') {
            axios.get(`https://api.waifu.pics/sfw/waifu`)
                .then(async (res) => {
                    const data = res.data.url
                    if (fs.existsSync('/sdcard/wp-anime/waifu')) {
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-anime/waifu${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    } else {
                        fs.mkdir('/sdcard/wp-anime/waifu')
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-anime//waifu${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    }
                })
        } else if (type == '3') {
            axios.get(`https://api.waifu.pics/nsfw/waifu`)
                .then(async (res) => {
                    const data = res.data.url
                    if (fs.existsSync('/sdcard/wp-anime/nsfw')) {
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-anime//nsfw${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    } else {
                        fs.mkdir('/sdcard/wp-anime/nsfw')
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/wp-anime//nsfw${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    }
                })
        } else {
            console.log(chalk.red('only 3 choices'))
        }
    }
} catch (err) {
    console.log(err)
}

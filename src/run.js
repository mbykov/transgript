import { t15n } from "./translit";
const log = console.log

let wordform = process.argv.slice(2)[0] // || 'ἀργυρῷ' // false
let type = process.argv.slice(3)[0] || false
let option = process.argv.slice(4)[0]  || false

let res = t15n(wordform, type, option)

log('RUN:', res)

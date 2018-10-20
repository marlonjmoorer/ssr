import path from "path"
import fs from "fs"
export const render = (html) => {
    return new Promise((resolve, reject) => {
        const location = path.join(".", __dirname, 'public', "index.html")
        fs.readFile(location, "utf8", (err, data) => {
            if(err) return reject(err)
            resolve(data.replace('<div id="app"></div>', `<div id="app">${html}</div>`))
        })
    })
}
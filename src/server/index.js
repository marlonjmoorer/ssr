import express from "express"
import { renderToString } from "react-dom/server"
import React from "react"
import App from '../shared/App'
import cors from "cors"
import {render}from "./template"
import path from "path"
const app = express()

app.use(cors())


app.use(express.static("public"))
app.get("*", (req, res, next) => {
    const markup = renderToString(
      <App />
    )
    render(markup).then(html=>res.send(html))
})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})
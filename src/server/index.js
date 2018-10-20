import express from "express"
import { renderToString } from "react-dom/server"
import React from "react"
import App from '../shared/App'
import cors from "cors"
import {render}from "./template"
import { StaticRouter } from 'react-router-dom';
const app = express()
app.use(cors())
app.use(express.static("public"))
app.get("*", (req, res) => {
    const context={}
    const component = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App/>
      </StaticRouter>
    )
    render(component).then(html=>res.send(html))
})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})
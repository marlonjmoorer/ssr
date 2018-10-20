import express from "express"
import { renderToString } from "react-dom/server"
import React from "react"
import App from '../shared/App'
import cors from "cors"

const app = express()

app.use(cors())

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(express.static("public"))
app.get("*", (req, res, next) => {
    const markup = renderToString(
      <App />
    )
  
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with RR</title>
          <script src="/bundle.js" defer></script>
        </head>
  
        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `)
})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})
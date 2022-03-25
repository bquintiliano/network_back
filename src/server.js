import express from 'express'
import cors from 'cors'
import routes from './routes'
import https from 'https'
import fs from 'fs'

const app = express()

app.use(express.json())
app.use(cors())

routes(app)

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/network.quintiliano.tk/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/network.quintiliano.tk/fullchain.pem')
  };

  https.createServer(options, app).listen(3002, () => console.log("Servidor UP"))
import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routes'

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use((req: Request, _: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

app.use('/api', routes)

export { app }

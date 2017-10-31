import { App } from './App'

let app = new App().express;

const port = process.env.PORT || 3000

app.listen(port, (err: any) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
})
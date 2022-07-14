// https://colorful-mine-d67.notion.site/Criando-projeto-com-TS-90e39763e4a84e5fb2be37811dc0ee5d


import express from 'express';
const app = express();
const port = 3000


app.get("/", (request, response) => {
    return response.json({message: "Hello World!!!"})
});



app.listen(port, () => {
    console.log(` http://localhost:${port}`)
  })
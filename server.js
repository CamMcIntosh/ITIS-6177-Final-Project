const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post('/knowledgebases/4ec3ddf6-b572-4aaa-8eef-f2806ef3d001/generateAnswer', (req, res) => {
    res.send({
        Host: 'https://6177project.azurewebsites.net/qnamaker',
        Authorization: 'EndpointKey f7902e88-0990-4ba6-89bc-d08cbc7656b8',
        ContentType: application/json,
        "question":"<Your question>"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
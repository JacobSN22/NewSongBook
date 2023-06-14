import express from 'express'

const postRouter = express.Router()

postRouter.get('/posts', (req, res) => {
    res.send('Hent alle poster')
})
postRouter.post('/posts', (req, res) => {
    res.send(`${req.body.firstname} ${req.body.lastname}
    ${req.body.address}
    ${req.body.city}`)
})
postRouter.put('/posts', (req, res) => {
    res.send('Opdater poster')
})
postRouter.delete('/posts', (req, res) => {
    res.send('Sletter poster')
})


export { postRouter }
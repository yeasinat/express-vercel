import express from 'express'

const app = express()

app.get("/", (req, res)=>{
    res.send("Express backend on vercel!")
})

app.listen(6000, ()=>{
    console.log('Backend running on port 6000')
})

export default app
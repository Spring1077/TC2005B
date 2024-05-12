const express = requiere("express");
const app = express();

app.get("/", req, res) =>{
    res.send("Hola mundo");
}
app.listen(5001, () =>)
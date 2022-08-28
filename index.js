
const express = require("express");
const app = express();

app.use(express.json()); //middleware para o express receber reqs em JSON

//Redirecionamento para as rotas
const usersAPI = require("./src/routes/userRoutes.js");
app.use("/", usersAPI)


const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server started on PORT ${PORT}`)
});
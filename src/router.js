//Fremework
const express = require("express");
const router = express.Router();
// const carBuy = require("./database/model/carBuy");
/**Importação de classes */
const CreateUserRouter = require("./routers/CreateUserRouter");
const home = require("./routers/HomeRouter");
const Authentication = require("./routers/LoginRouter");
const Logout = require("./routers/LogoutRouter");
const TrackOrders = require("./routers/TrackeOrdesRouter");
// const createUserService = new CreateUserService
/**Instanciamento da  */
const createUser = new CreateUserRouter;
const produtos = new home;
const authentication = new Authentication;
const logout = new Logout
const trackeOrdes = new TrackOrders
//Routes
router.get("/", (req, res) => {
    res.render('login')
});
router.get("/create", (req, res) => {
    res.render('createUser')
});
router.get("/home", (req, res) => {
    produtos.findAll(req, res);
});
router.get("/logout", (req,res)=>{
    logout.sair(req,res)
})
router.get("/Pedidos",(req,res)=>{
    trackeOrdes.listarpedido(req,res)
})
router.post('/searchProduct',(req,res)=>{
    produtos.find(req,res)
})
router.post('/createUserForm', (req, res) => {
    createUser.save(req, res)
});
router.post('/signUser', (req, res)=>{
    authentication.findOne(req,res)
})
module.exports = router;

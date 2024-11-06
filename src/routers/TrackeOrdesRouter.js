const trackOrders = require("../database/model/TrackeOrdes");

class TrackOrders {
    constructor() { }
    listarpedido(req, res) {
        trackOrders.findOne({ where: { id: 1 } })
            .then((result) => {
                res.render('trackorders', { orders: result })
            })
            .catch((erro)=>{
                res.render('trackorders', {orders: erro})
            })
    }
}
module.exports = TrackOrders
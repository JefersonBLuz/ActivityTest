const db = require("../db");



const trackOrders = db.sequelize.define('tracksOders', {
    separacao: {
        type: db.Sequelize.JSON
    },
    preaparaco: {
        type: db.Sequelize.JSON
    },
    embarcado: {
        type: db.Sequelize.JSON
    },
    saiuDestino: {
        type: db.Sequelize.JSON
    },
    emtransito: {
        type: db.Sequelize.JSON
    },
    nadistribuidora: {
        type: db.Sequelize.JSON
    },
    acaminho: {
        type: db.Sequelize.JSON
    },
    entregue: {
        type: db.Sequelize.JSON
    }
});

trackOrders.sync({ force: true });
setTimeout(() => {
trackOrders.create(
        { separacao: { "name": 'Pedido em separação', "data": '03/11/2024 23:15' }, preaparaco: { "name": 'Pedido em preparação', "data": '04/11/2024 04:37' }, embarcado: { "name": 'Pedido embarcardo na transportadora', "data": '04/11/2024 07:15' }, saiuDestino: { "name": 'Saiu do destino', "data": '04/11/2024 11:27' } })
}, 1000)

module.exports = trackOrders
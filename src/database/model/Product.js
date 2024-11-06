const db = require('../db');

const products = db.sequelize.define('products', {
    idProduct: {
        type: db.Sequelize.STRING
    },
    value: {
        type: db.Sequelize.INTEGER
    },
    img: {
        type: db.Sequelize.STRING
    },
    nameProduct: {
        type: db.Sequelize.STRING
    },
    description: {
        type: db.Sequelize.STRING
    }
});

products.sync({ force: true });
setTimeout (()=>{
products.create({ idProduct: "MONITOR21", value: 600, img: "MONITOR21.png", nameProduct: "Monitor 21\"", description: "Monitor de 21 polegadas - 60Hz - HDMI/VGA" })
products.create({ idProduct: "MONITOR24", value: 1100, img: "MONITOR24.png", nameProduct: "Monitor 24\"", description: "Monitor de 24 polegadas - Borda infinita - 144Hz - HDMI/DisplayPort" })
products.create({ idProduct: "MONITORCURVO", value: 3500, img: "MONITORCURVO.png", nameProduct: "Monitor 29\" Curvo", description: "Monitor de 29 poelgadas - Curvo - Borna infinita - 75Hz - HDMI/DisplayPort" })
products.create({ idProduct: "MOUSE1A", value: 350, img: "MOUSE1A.png", nameProduct: "Mouse Gamer RedDragon", description: "Mouse Gamer RedDragon - 800dpi~3500dpi - RGB" })
products.create({ idProduct: "MOUSE2A", value: 70, img: "MOUSE2A.png", nameProduct: "Mouse Simples", description: "Mouse Simples Escritório - 800dpi" })
products.create({ idProduct: "MOUSE3A", value: 110, img: "MOUSE3A.png", nameProduct: "Mouse S/ Fio", description: "Mouse Sem Fio Escritório - 800dpi" })
products.create({ idProduct: "TECLADOGAMER", value: 350, img: "TECLADOGAMER.png", nameProduct: "Teclado Gamer", description: "Teclado Gamer - Black Switch - RGB" })
products.create({ idProduct: "TECLADOSIMPLES", value: 80, img: "TECLADOSIMPLES.png", nameProduct: "Teclado Simples", description: "Tecado Simples Escritório - ABNT2" })
products.create({ idProduct: "TECLADOSFIO", value: 150, img: "TECLADOSFIO.png", nameProduct: "Teclado S/ Fio", description: "Tecado Sem Fio Escritório - ABNT2" })
products.create({ idProduct: "HEADFONEBEN10", value: 40, img: "HEADFONEBEN10.png", nameProduct: "HeadPhone Simples", description: "HeadPhone Simples - 1 Saída P3" })
products.create({ idProduct: "HEADFONEGAMER", value: 180, img: "HEADFONEGAMER.png", nameProduct: "HeadPhone Gamer", description: "HeadPhone Gamer - Orelhas de Gato - 2 Saídas P2" })
products.create({ idProduct: "HEADFONEQUANTION", value: 480, img: "HEADFONEQUANTION.png", nameProduct: "HeadPhone Quantion JBL", description: "HeadPhone Quantion JBL - Função Microfone - Volume interno" })
},1000)

module.exports = products;
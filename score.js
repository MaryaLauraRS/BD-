const express = require('express');
const db = require('./conn.js');

const router = express.Router();

// Registrar um novo resultado
router.post("/", async (req, res) => {
    let col = await db.collection('score');
    let resul = col.insertOne(req.body);
    res.send(out).status(204);
    // seu código aqui incert
});


// Pegar os 10 melhores resultados
router.get("/", async (req, res) => {
    let col = await db.historico.find('score');
    let resul = await col.historico.find().sort({
        pontos: -1
        }).limit(10).toArray();
        res.send(out).status(200);
    // seu código aqui fait
});


module.exports = router;

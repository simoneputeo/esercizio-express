const express = require('express');
const router = express.Router();

// Rotte Crud
router.get("/songs", (req, res) => {
    res.send('Lista delle canzoni');

});

module.exports = router;
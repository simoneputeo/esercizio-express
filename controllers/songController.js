const index = (req, res) => {
  res.send("Lista delle canzoni");
};

const show = (req, res) => {
  res.send("Dettaglio delle canzone " + req.params.id);
};

const store = (req, res) => {
  res.send("Creazione di una canzone");
};

const update = (req, res) => {
  res.send("Modifica totale della canzone " + req.params.id);
};

const modify = (req, res) => {
  res.send("Modifica parziale della canzone " + req.params.id);
};

const destroy = (req, res) => {
  res.send("Eliminazione della canzone " + req.params.id);
};

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy,
};

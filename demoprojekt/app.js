const express = require('express');
const mongoose = require('mongoose');
//Importiere das Schrauben Model
const sale = require('schraubenModel');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://thomaskirsch:Schwert10@cluster0.l3blerk.mongodb.net/local_library?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('MongoDB connected...');
})
.catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Route eine Schraube
router.get("/sales/:id", async (req, res, next) => {
  try {
    const sales = await Sale.find({ produkt_id: req.params.id });
    res.json(sales);
  } catch (err) {
    next(err);
  }
});
  
// Route alle Schrauben
router.get("/sales", async (req, res, next) => {
  try {
    const sales = await Sale.find();
    res.json(sales);
  } catch (err) {
    next(err);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

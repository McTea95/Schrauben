const mongoose = require('mongoose');

//VerkaufsSchema
const Schema = mongoose.Schema;//erstellen des Schemas

const VerkaufSchema = new Schema({//definieren des Schemas
  schrauben_typ: { type: String, required: true },
  verkaufsdatum: { type: Date, required: true },
  menge: { type: Number, required: true },
  preis_pro_einheit: { type: Number, required: true },
  produkt_id: { type: String, required: true },
});


//VerkaufsSchema Gesamtpreis
VerkaufSchema.virtual("gesamtpreis").get(function () {//erstellt virtuelles Attribut 'gesamtpreis', der bei get funktion folgende funktion ausgibt...
    return this.menge * this.preis_pro_einheit;//berechnet die Menge mit dem Preis und gibt den Wert aus
  });

//stehen lassen, sonst wird der Gesamtpreis nicht angezeigt im request
VerkaufSchema.set('toObject', { virtuals: true });
VerkaufSchema.set('toJSON', { virtuals: true });

const schraubenModel = mongoose.model('Schraube', VerkaufSchema, 'schrauben');

module.exports = schraubenModel;

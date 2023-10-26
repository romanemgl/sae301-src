/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1snko5oizsy2wr3")

  collection.name = "nbLunetteEnregistre"
  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, COUNT(lunette.id) as nombre_lunette_enregistre\nFROM lunette \nWHERE lunette.enregistre = FALSE"
  }

  // remove
  collection.schema.removeField("29jpv2az")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "snnr589y",
    "name": "nombre_lunette_enregistre",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1snko5oizsy2wr3")

  collection.name = "nbLunetteCommande"
  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, COUNT(lunette.id) as nombre_lunette_commande\nFROM lunette \nWHERE lunette.commande = FALSE"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "29jpv2az",
    "name": "nombre_lunette_commande",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("snnr589y")

  return dao.saveCollection(collection)
})

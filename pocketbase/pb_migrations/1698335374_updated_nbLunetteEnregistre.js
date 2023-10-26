/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1snko5oizsy2wr3")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, COUNT(lunette.id) as nombre_lunette_enregistre\nFROM lunette \nWHERE lunette.enregistre = TRUE"
  }

  // remove
  collection.schema.removeField("snnr589y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pgelwfsh",
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

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, COUNT(lunette.id) as nombre_lunette_enregistre\nFROM lunette \nWHERE lunette.enregistre = FALSE"
  }

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

  // remove
  collection.schema.removeField("pgelwfsh")

  return dao.saveCollection(collection)
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jhxcifdy0m7f2sw")

  collection.name = "lunetteEnregistre"
  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, lunette.couleur_branche, lunette.couleur_cadre, lunette.couleur_verre, lunette.prix\nFROM lunette\nWHERE lunette.enregistre = TRUE"
  }

  // remove
  collection.schema.removeField("vvifyoiz")

  // remove
  collection.schema.removeField("jnfckb2m")

  // remove
  collection.schema.removeField("bmdpokay")

  // remove
  collection.schema.removeField("ptjigbn7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tiyicvcl",
    "name": "couleur_branche",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gybikmnx",
    "name": "couleur_cadre",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lnq5wu6m",
    "name": "couleur_verre",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sz0u69i1",
    "name": "prix",
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
  const collection = dao.findCollectionByNameOrId("jhxcifdy0m7f2sw")

  collection.name = "lunetteCommande"
  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, lunette.couleur_branche, lunette.couleur_cadre, lunette.couleur_verre, lunette.prix\nFROM lunette\nWHERE lunette.commande = TRUE"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vvifyoiz",
    "name": "couleur_branche",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jnfckb2m",
    "name": "couleur_cadre",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bmdpokay",
    "name": "couleur_verre",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ptjigbn7",
    "name": "prix",
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
  collection.schema.removeField("tiyicvcl")

  // remove
  collection.schema.removeField("gybikmnx")

  // remove
  collection.schema.removeField("lnq5wu6m")

  // remove
  collection.schema.removeField("sz0u69i1")

  return dao.saveCollection(collection)
})

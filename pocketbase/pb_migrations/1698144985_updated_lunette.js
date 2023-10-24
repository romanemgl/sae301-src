/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oscp3wcz9dd8tl9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ewkupxjs",
    "name": "id_materiau_verre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "z3sair817u77a4e",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zxt8zuha",
    "name": "id_materiau_monture",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "z3sair817u77a4e",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mgad3hje",
    "name": "id_user",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oscp3wcz9dd8tl9")

  // remove
  collection.schema.removeField("ewkupxjs")

  // remove
  collection.schema.removeField("zxt8zuha")

  // remove
  collection.schema.removeField("mgad3hje")

  return dao.saveCollection(collection)
})

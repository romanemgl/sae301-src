/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "z3sair817u77a4e",
    "created": "2023-10-24 10:51:10.477Z",
    "updated": "2023-10-24 10:51:10.477Z",
    "name": "materiau",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zp2uxwaz",
        "name": "libelle",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("z3sair817u77a4e");

  return dao.deleteCollection(collection);
})

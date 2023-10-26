/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("w4bo3nkjgtu6amq");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "w4bo3nkjgtu6amq",
    "created": "2023-10-25 09:17:04.119Z",
    "updated": "2023-10-25 09:17:04.119Z",
    "name": "couleurs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "otjz9dzy",
        "name": "couleur",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ekdhjqyb",
        "name": "code",
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
})

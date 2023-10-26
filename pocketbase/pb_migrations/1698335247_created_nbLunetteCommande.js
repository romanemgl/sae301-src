/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1snko5oizsy2wr3",
    "created": "2023-10-26 15:47:27.676Z",
    "updated": "2023-10-26 15:47:27.676Z",
    "name": "nbLunetteCommande",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id, COUNT(lunette.id) as nombre_lunette_commande\nFROM lunette \nWHERE lunette.commande = FALSE"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1snko5oizsy2wr3");

  return dao.deleteCollection(collection);
})

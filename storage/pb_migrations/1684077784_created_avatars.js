migrate((db) => {
  const collection = new Collection({
    "id": "924niziuz16p842",
    "created": "2023-05-14 15:23:04.417Z",
    "updated": "2023-05-14 15:23:04.417Z",
    "name": "avatars",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1pb95v7j",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          "thumbs": [],
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("924niziuz16p842");

  return dao.deleteCollection(collection);
})

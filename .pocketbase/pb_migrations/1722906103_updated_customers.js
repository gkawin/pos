/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n7j9frg7mf0e4wc")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n7j9frg7mf0e4wc")

  collection.listRule = "@request.auth.id != \"\""
  collection.viewRule = null

  return dao.saveCollection(collection)
})

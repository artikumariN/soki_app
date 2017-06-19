'use strict';
var servicename = 'db';


    var dependenciesDb = ['pouchDB', 'main.dbStorage.dbConfig', '$q'];

    function serviceDb(pouchDB, dbConfig, $q) {


              var db;

              /* Initiate Pouch database
                --------------------------------------------------- */
              var initiate = function () {
                  var sokiDb = pouchDB(dbConfig.dbName, {
                      adapter: 'websql',
                      androidDatabaseImplementation: 1,
                      location: 'default',
                  });

                  if (sokiDb) {
                      //Save DB instance to the db angular Value
                      dbConfig.db = sokiDb;
                      db = sokiDb;
                      console.log(db.adapter);
                      return db;
                  } else {
                      return false;
                  }
              };

              /* Get database
                --------------------------------------------------- */
              var getDb = function () {
                  return db;
              }

              /* Get database data
                --------------------------------------------------- */
              var get = function (doc) {
                  if (db) {
                      return db.get(doc);
                  }
              };

              /* Put database data
                --------------------------------------------------- */
              var put = function (doc, docId, docRev, options, callback) {
                  if (db) {
                      return db.put(doc, docId, docRev, options, callback);
                  }
              };

              /* Delete database data
                --------------------------------------------------- */
              var remove = function (doc) {
                  if (db) {
                      return db.remove(doc);
                  }
              };

              /* Delete database
                --------------------------------------------------- */
              var destroy = function () {
                  db.allDocs().then(function (result) {
                      // Promise isn't supported by all browsers; you may want to use bluebird
                      return Promise.all(result.rows.map(function (row) {
                          return db.remove(row.id, row.value.rev);
                      }));
                  }).then(function () {
                      // done!
                  }).catch(function (err) {
                      // error!
                  });

              };

              /* ------------------------------------------------ */
              return {
                  initiate: initiate,
                  getDb: getDb,
                  get: get,
                  put: put,
                  remove: remove,
                  destroy: destroy
              };


    }
    serviceDb.$inject = dependenciesDb;
    appdb.factory('main.dbStorage.db', serviceDb);

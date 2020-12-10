'use strict';


// Create 2 in-memory data models using ES6 Classes, exported as Node Modules
// Define your field names and an empty data storage in the constructor
// The classes should have the following methods defined, to perform CRUD Operations:
// create()
// Should ensure that the record created only has the fields that you defined
// get() or read()
// update()
// delete()



class Foods {
  constructor(name) {
    this.id = 0;
    this.name = name;
    this.db = [];
  }

  // [{id: x, ...record}]
  get(id) {
    if (id) {
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  create(obj) {
    obj.id = ++this.id;
    this.db.push(obj);
  }

  update(id, obj) {
    if (!id || id > this.db.length) { return null; } else {
      obj.id = id;
      this.db[id - 1].name = obj.name;

      return obj;
    }
  }
  delete(id) {
    if (!id) { return null; }
    console.log(this.db);
    this.db = this.db.filter(function removeDBItems(record) {
      return parseInt(record.id) !== parseInt(id);
      
    });
    return null;
  }

}

const banana = new Foods({
  id: 'banana',
  name: 'banana2',
});

new Foods(banana);
module.exports = Foods;
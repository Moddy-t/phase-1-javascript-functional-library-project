function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          result.push(callback(collection[key], key, collection));
        }
      }
    }
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    let keys = Array.isArray(collection) ? collection : Object.values(collection);
    let startIdx = 0;
    if (acc === undefined) {
      acc = keys[0];
      startIdx = 1;
    }
    for (let i = startIdx; i < keys.length; i++) {
      acc = callback(acc, keys[i], collection);
    }
    return acc;
  }
  
  function myFind(collection, predicate) {
    let keys = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < keys.length; i++) {
      if (predicate(keys[i])) {
        return keys[i];
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    let result = [];
    let keys = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < keys.length; i++) {
      if (predicate(keys[i])) {
        result.push(keys[i]);
      }
    }
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
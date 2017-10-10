// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

const stringifyJSON = function(obj) {
  
  let stringified;

  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    stringified = String(obj);
  } else if (typeof obj === 'string') {
    stringified = '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    if (!obj.length) {
      stringified = '[]';
    } else {
      stringified = '[' + obj.map(el => stringifyJSON(el)) + ']';
    }
  } else if (obj === undefined || typeof obj === 'function') {
    return;
  } else {
    if (!Object.keys(obj).length) {
      stringified = '{}';
    } else {
      let objectMeat = [];
      for (let key in obj) { 
        if (obj[key] !== undefined && typeof obj[key] !== 'function') {
          objectMeat.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key])); 
        } 
      }
      stringified = '{' + objectMeat.join(',') + '}';
    }
  }
  return stringified;
};

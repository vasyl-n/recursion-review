// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // string
  if(typeof obj === 'string'){
    console.log(obj)
    return '"' + String(obj) + '"';
  }

  // number
  if(typeof obj === 'number'){
    return String(obj);
  }

  // function
  if(typeof obj === 'function'){
    return String(obj);
  }

  // null
  if(obj === null){
    return 'null';
  }

  // boolean
  if(typeof obj === 'boolean'){
    return String(obj);
  }

  // array
  if(Array.isArray(obj)){
    let result = '';
    for(let i = 0; i < obj.length; i++){
      if( i !== obj.length -1 ){
        result += stringifyJSON(obj[i]) + ',';
      } else {
        result += stringifyJSON(obj[i]);
      };
    };
    return ('[' + result + ']');
  };

  // object
  var result = [];
  var keys = Object.keys(obj);
  // check if obj key value is not a function or undefined
  for(var i in obj){
    if( typeof obj[i] !== 'function' && obj[i] !== undefined ){
      result.push(stringifyJSON(i) + ':' + stringifyJSON(obj[i]));
    }
  };
  return ('{' + result.join(',') + '}');

};






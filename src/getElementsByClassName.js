// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
const getElementsByClassName = className => {
  // create a result var that will hold the array of all classNames
  let result = [];
  // declare a new function that will do the recursion
  let recursiveFunction = node => {
    // check if className exist in the node classList
    if(node.classList.contains(className)){
      // console.log(node.classList.contains(className))
     // if yes push it to results
      result.push(node); // parents
    }
// debugger
    let nodeChildren = node.children;
    _.each(nodeChildren, function(x){
      recursiveFunction(x)
    })
  };
  recursiveFunction(document.body);
  return result;
};


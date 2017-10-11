// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// var getElementsByClassName = function(className) {
//   var resultNodes = [];

//   var searchNodes = function(nodes) {
//     for (let i = 0; i < nodes.length; i++) {
//       if (nodes[i].classList && nodes[i].classList.contains(className)) {
//         resultNodes.push(nodes[i]);
//       }
//       if (nodes[i].childNodes) {
//         searchNodes(nodes[i].childNodes);
//       }
//     }
//   };
  
//   searchNodes(document.childNodes);
//   return resultNodes;
// };

var getElementsByClassName = function(className, nodes, results) {
  
  results = results || [];
  
  nodes = nodes || document.childNodes;
  
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].classList && nodes[i].classList.contains(className)) {
      results.push(nodes[i]);
    }
    if (nodes[i].childNodes) {
      getElementsByClassName(className, nodes[i].childNodes, results);
    }
  }
  
  return results;
};



















//
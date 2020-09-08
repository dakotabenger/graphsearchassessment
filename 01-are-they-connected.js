/*******************************************************************************
 * @param {Object} adjacencyList - An object that has at least two keys, those
 * being the values of startName and endName. The values of all keys in the
 * adjacencyList are guaranteed to be arrays.
 *
 * @param {string} startName - The name (node) at which you'll start your
 * search.
 *
 * @param {string} endName - The name (node) you're trying to find when starting
 * your search from startName.
 *
 *
 * RETURN a set containing all nodes visited in Breadth-First order if a valid
 * path from startName to endName is found
 *
 * RETURN `null` if no path is found.
 *
 * See Open for instructions
 */

// Traverse the graph in Breadth-First Order
function areTheyConnected(adjacencyList, startName, endName) {
  let queue = [startName];
  let result = new Set();
  let visited = [];
  let currentNode;

  if (startName === endName){
    result.add(startName);
    return result;
  }
  while (queue.length) {
    currentNode = queue.shift();
    visited.push(currentNode);
    for (let i = 0; i < adjacencyList[currentNode].length; i++) {

      let neighbor = adjacencyList[currentNode][i]  
      console.log(neighbor === endName)
      if (neighbor === endName) {
        visited.push(neighbor);
        for (let i = 0; i < visited.length; i++) {
          result.add(visited[i]);

        }
        return result;
      } else if (!visited.includes(neighbor)) {
        visited.push(neighbor);
        queue.push(neighbor);
      
      }


    }
    
  }
  
    return null;
}

/*******************************************************************************
 * Do not change the code after this line.
 */
try {
  exports.areTheyConnected = areTheyConnected;
} catch (e) {
  module.exports = null;
}

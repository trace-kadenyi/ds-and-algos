// Sample graph represented as an adjacency list
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
  };
  
  function bfs(graph, startNode) {
    const visited = new Set();
    const queue = [];
  
    queue.push(startNode);
    visited.add(startNode);
  
    while (queue.length) {
      const currentNode = queue.shift();
      console.log(currentNode);
  
      const neighbors = graph[currentNode];
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
  }
  
  // Call BFS function with 'A' as the starting node
  bfs(graph, 'A');
  
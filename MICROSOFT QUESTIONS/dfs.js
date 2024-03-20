// Sample graph represented as an adjacency list
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
  };
  
  function dfs(graph, startNode) {
    const visited = new Set();
    const stack = [];
  
    stack.push(startNode);
    visited.add(startNode);
  
    while (stack.length) {
      const currentNode = stack.pop();
      console.log(currentNode);
  
      const neighbors = graph[currentNode];
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
  }
  
  // Call DFS function with 'A' as the starting node
  dfs(graph, 'A');
  
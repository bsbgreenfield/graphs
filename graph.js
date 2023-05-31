class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.nodes.add(vertex)
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2)
    v2.adjacent.add(v1)
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex)
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let stack = [start];
    let seen = new Set();
   
    // need to add all neighbors of currnode to the stack, then start over using last item in stack
   const dfs = () => {
    while (stack.length) {
      let currNode = stack.pop()// set currNode
      seen.add(currNode.value)
      for (let neighbor of currNode.adjacent){
        if(!seen.has(neighbor.value)){ //add neighbors to stack if they havent been seen
          stack.push(neighbor)
          dfs()
        }
      } 
    }
   }
  dfs()
    const result = [...seen]
    return result
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) { 
    let queue = [start];
    let seen = new Set();
    // need to add all neighbors of currnode to the stack, then start over using last item in stack
    while (queue.length) {
      let currNode = queue.shift()// set currNode
      seen.add(currNode.value)
      for (let neighbor of currNode.adjacent){
        if(!seen.has(neighbor.value)){ //add neighbors to stack if they havent been seen
          queue.push(neighbor)
        }
      } 
    }
    const result = [...seen]
    return result
  }
}

module.exports = { Graph, Node }
/*
Implement a function to check is a binary tree is defined to be a tree such that 
the height of the subtrees of any node never differ by more than one. 
*/

//background
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

const BST = new BinarySearchTree();

BST.insert(11);
BST.insert(12);
BST.insert(2);
BST.insert(6);
BST.insert(15);
BST.insert(7);
BST.insert(8);

// input - binary tree (root)
// output - bool - tree is balanced (true) / tree is not balanced (false)
// function should take root, check to see if it has left and right values
// if it does - move down a level
// if it doesn't - check existing side - if it has left/right nodes, the tree is not balanced
// depth search - how many levels is the total tree? then - check each branch of the tree for depth?
// this seems like a time for recursion

function checkBalanced(root) {
  if (root === null) {
    return true;
  }

  if (root.left && root.right) {
    checkBalanced(root.left);
    checkBalanced(root.right);
  } else if (root.left) {
    if (root.left.left || root.left.right) {
      return false;
    }
  } else if (root.right) {
    if (root.right.right || root.right.left) {
      return false;
    }
  } else {
    return true;
  }
  return true;
}

console.log(checkBalanced(BST.root));

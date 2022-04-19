/*
Given two words source and target, and a list of words words, 
find the length of the shortest series of edits that transforms source to target.

Each edit must change exactly one letter at a time, and each intermediate word 
(and the final target word) must exist in words.

If the task is impossible, return -1.
*/

function shortestWordPath(source, target, words) {
  //base case
  if (source === target) {
    return 0;
  }

  let currentLength = 0;
  let wordLength = source.legnth;

  const queue = [];
  queue.push(target);

  while (queue.length > 0) {
    currentLength++;
    let queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      let word = queue[0].split("");
      queue.shift();
    }
  }

  //build graph - find potential nodes
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      let same = 0;
      const word = words[i];
      if (word[j] === source[j]) {
        same++;
      }
      if (j >= words[i].length - 2 && same > 1) {
        queue.push(word);
      }
    }
  }

  //test potential nodes
  for (let i = 0; i < queue.length; i++) {
    const newSource = queue[i];

    shortestWordPath(newSource, target, words);
  }
}

shortestWordPath("bit", "dog", [
  "but",
  "put",
  "big",
  "pot",
  "pog",
  "dog",
  "lot",
]);

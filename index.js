const brain = require('brain.js');

const network = new brain.NeuralNetwork();

// network.train([
//     {input: [0, 0, 0], output: [0]}, //the insert is 0
//     {input: [0, 0, 1], output: [0]}, //the insert is 0
//     {input: [0, 1, 1], output: [0]}, //the insert is 0
//     {input: [1, 0, 1], output: [1]}, //the insert is 1
//     {input: [1, 1, 1], output: [1]}, //the insert is 1
// ]);

// const output = network.run([1,0,0]);

// console.log(`Prob: ${output}`) // 0.9189717173576355% the answer is 1


// network.train([
//     {input: [1, 2], output: [1]}, // team 2 win
//     {input: [1, 3], output: [1]}, // team 3 win
//     {input: [2, 3], output: [0]}, // team 3 win
//     {input: [2, 4], output: [1]} // team 4 win
// ])

// const output = network.run([1,4]);

// console.log(`Prob: ${output}`)  // 0.9988489151000977 the answer is 1 so that is mean that the team 4 win



network.train([
    {input: [1, 2], output: [1]}, // team 2 win
    {input: [1, 3], output: [1]}, // team 3 win
    {input: [2, 3], output: [0]}, // team 2 win
    {input: [2, 4], output: [1]}, // team 4 win
    {input: [1, 2], output: [0]}, // team 1 win
    {input: [1, 3], output: [0]}, // team 1 win
    {input: [3, 4], output: [0]} // team 3 win
])

const output = network.run([1,4]);

console.log(`Prob: ${output}`)  // 0.4962555170059204 the answer is 50% so that is mean that the team 4 win 50%
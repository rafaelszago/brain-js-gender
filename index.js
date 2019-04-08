const brain = import('brain.js'); 

// create configuration for training

const config = {
  iterations: 1500,
  layers: [10]
};

// create data which will be used for training

const data = [
  { input: "Rafael", output: "male" },
  { input: "João", output: "male" },
  { input: "Tiago", output: "male" },
  { input: "Junior", output: "male" },
  { input: "Alessandro", output: "male" },
  { input: "Tomas", output: "male" },
  { input: "Diego", output: "male" },
  { input: "Pedro", output: "male" },
  { input: "Carlos", output: "male" },
  { input: "Lucas", output: "male" },
  { input: "Marcos", output: "male" },
  { input: "Danilo", output: "male" },
  { input: "Vitor", output: "male" },
  { input: "Mauro", output: "male" },

  { input: "Roberta", output: "female" },
  { input: "Marina", output: "female" },
  { input: "Viviane", output: "female" },
  { input: "Laura", output: "female" },
  { input: "Julia", output: "female" },
  { input: "Juliana", output: "female" },
  { input: "Ana", output: "female" },
  { input: "Luisa", output: "female" },
  { input: "Vivian", output: "female" },
  { input: "Claudia", output: "female" },
  { input: "Fernanda", output: "female" },
  { input: "Bruna", output: "female" },
  { input: "Luana", output: "female" },
  { input: "Priscila", output: "female" },
  
];

// the name we would test
const test = "Giordana";

const network = new brain.recurrent.LSTM();
network.train(data, config);

const output = network.run(test);
console.log(`${test} is ${output}`);
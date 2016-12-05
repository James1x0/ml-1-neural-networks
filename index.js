var synaptic = require('synaptic'); // this line is not needed in the browser
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;
var myNetwork = new Architect.Perceptron(4, 6, 2)
var trainer = new Trainer(myNetwork)

var trainingSet = require('./trainer').t1;

trainer.train(trainingSet);

console.log('Slight Introvert Test, inputting [1,1,1,1]');
console.log('------------------------------------------')
let test1 = myNetwork.activate([1,1,1,1]);
console.log(`Detected ${test1[0] > test1[1] ? 'Extrovert' : 'Introvert'} -- Raw: ${test1}`);

# ML-1
### Question
Can a machine learn how to summarize a set of answers to recognize social patterns?

### Hypothesis
Utilizing high/low inputs, with training, a neural network should output high/low for in/extrovert.

### Observations
The neural network set up just seems to work. You get floating point inputs for free as well, so one could design the system to work with sliders instead of, say, checkboxes.

### Synopsis
A neural network was established using synaptic and the perceptron architect, utilizing 4 input neurons, 6 hidden layer neurons, and 2 output neurons. I'm not entirely sure if the hidden layer number correlates to the input output layers.

Four questions were constructed for this experiment. [cite section] 3 were introvert biased and 1 was extrovert biased. The idea behind varying biases was to prevent pattern awareness on the user side.

The network was trained using a 4 element training set that establishes sets of expected behavior. This process was able to detect, within acceptable ranges, social profiles.

#### ML-1 > T1
Questions:
- You prefer to travel alone. (Introversion)
- You like reading novels. (Introversion)
- You enjoy being around people like yourself. (Introversion)
- I like eating out more than I like eating in. (Extroversion)

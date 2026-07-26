// Single source of truth for the "Neural Networks & Deep Learning Foundation"
// course syllabus. Pages read from this rather than hard-coding lesson lists,
// so adding a lesson means adding one entry here.

export interface LessonMeta {
  slug: string;
  title: string;
  summary: string;
  status: 'available' | 'in-progress';
  durationMinutes: number;
}

export const deepLearningCourse = {
  title: 'Neural Networks & Deep Learning Foundation',
  description:
    'The mathematical and architectural foundations of neural networks — from a single biological neuron to a trained multilayer perceptron — built for engineers who will deploy this on real infrastructure, not just pass a quiz on it.',
  lessons: [
    {
      slug: 'perceptron-and-neurons',
      title: 'Biological Neurons, the Perceptron & the MLP',
      summary:
        'Why artificial neurons are modeled the way they are, where a single perceptron breaks down, and how stacking layers fixes it.',
      status: 'available',
      durationMinutes: 35,
    },
    {
      slug: 'forward-and-backpropagation',
      title: 'Forward Propagation & Backpropagation via Gradient Descent',
      summary:
        'A fully worked numeric example — the same network, computed by hand — showing exactly how a network learns from its own error.',
      status: 'available',
      durationMinutes: 45,
    },
    {
      slug: 'activation-cost-and-loss-functions',
      title: 'Activation, Cost & Loss Functions',
      summary: 'Sigmoid, tanh, ReLU, softmax, and why the choice of loss function is a design decision, not an afterthought.',
      status: 'in-progress',
      durationMinutes: 30,
    },
    {
      slug: 'weight-initialization',
      title: 'Weight Initialization Strategies',
      summary: 'Zero, constant, random, and Xavier/Glorot initialization — and why bad initialization silently kills deep networks.',
      status: 'in-progress',
      durationMinutes: 25,
    },
    {
      slug: 'overfitting-underfitting-and-training-dynamics',
      title: 'Overfitting, Underfitting & Training Dynamics',
      summary: 'Bias-variance trade-off, epochs, batch size, learning rate, and reading training/validation loss curves correctly.',
      status: 'in-progress',
      durationMinutes: 30,
    },
    {
      slug: 'computational-graphs-and-keras',
      title: 'Computational Graphs & Building a DNN in Keras',
      summary: 'How frameworks represent your network internally, and shipping your first trainable model.',
      status: 'in-progress',
      durationMinutes: 30,
    },
  ] satisfies LessonMeta[],
};

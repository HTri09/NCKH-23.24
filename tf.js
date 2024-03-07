// Import the TensorFlow.js library
const tf = require('@tensorflow/tfjs-node');
// require('@tensorflow/tfjs-node/dist/nodejs_kernel_backend')


// Define the main function that will load the saved model
const main = async () => {
    try {
        // Specify the path to the saved model
        const modelPath = './mobile.pb';

        // Load the saved model using the `loadSavedModel()` method
        const model = await tf.node.loadSavedModel(modelPath);

        // Log the loaded model to the console
        console.log('Model loaded:', model);
    } catch (err) {
        console.error('Error loading model:', err);
    }
}

// Call the main function to load the saved model
main();
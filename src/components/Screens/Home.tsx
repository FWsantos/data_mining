import { Box, Paper, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from './Home.style';

const Home: React.FC = () => {
    const classes = useStyles();

    const brain = require('brain.js/src/index');
 
    // // provide optional config object (or undefined). Defaults shown.
    const config = {
        binaryThresh: 0.5,
        hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
        activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
        // leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
    };

    // create a simple feed forward neural network with backpropagation
    const net = new brain.NeuralNetwork(config);

    net.train([
        { input: [0, 0], output: [0] },
        { input: [0, 1], output: [0] },
        { input: [1, 0], output: [0] },
        { input: [1, 1], output: [1] },
    ]);
    
    const output = net.run([1, 0]);
    
    console.log(output);
    return (
        <Box className={classes.root}>
            <Typography component='h1' className={classes.texto}> 
                XOR Function
            </Typography>
            <Paper> {output} </Paper>
        </Box>
    );
}

export default Home;
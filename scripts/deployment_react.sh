#!/bin/bash
# @author Jason Seminara for General Assembly, 2016
# NPM has some weird ideas about which scripts it likes to fire off when deploying.
# Let's just do exactly what we want to deploy this React app.

# NOTE: the env is already set to PRODUCTION

# Let's clean up anything we did before
npm run clean -s

# Go get all the npm assets we'll need which include all the devDependencies
# Don't invoke the npm lifecycle methods
npm i --only=dev --ignore-scripts
npm i extract-text-webpack-plugin google-fonts-webpack-plugin html-webpack-plugin html-webpack-template style-loader css-loader babel-loader babel-core babel-preset-latest react react-router-dom babel-preset-react webpack file-loader

# build out webpack assets
npm run build

# Remove the DEV version of node modules
rm -rf node_modules

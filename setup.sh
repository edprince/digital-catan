#!/bin/bash

# install grunt
sudo npm install -g grunt-cli

# get grunt file and package.json
wget https://gist.githubusercontent.com/danprince/1bf3096439728f83a19c/raw/49c956ee9ba00325d181544e87cb4138135e235e/package.json
wget https://gist.githubusercontent.com/danprince/1bf3096439728f83a19c/raw/2e0987d02950969cfc2d6b97b63adc510bf92636/Gruntfile.js

# install npm dependencies
npm install

echo "To start, run $> grunt"
echo "The server will start on http://localhost:5000"
#!/bin/sh

cd webapp/hwmonitor

if [ -d "node_modules" ] 
then
    echo "Project is installed. Just building"
    npm run build
else
    echo "Project is not installed. It will install it first than build it."
    npm install
    npm run build
fi

cd ../..

go run *.go
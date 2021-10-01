import React, { useState, useEffect } from 'react';
import { HardwareMonitorClient } from './proto/service_grpc_web_pb';
//@ts-ignore
import { EmptyRequest } from './proto/service_pb';

import './App.css';

function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  if(bytes < 0) bytes = bytes * -1
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

//@ts-ignore
var client = new HardwareMonitorClient('http://localhost:8080');

function App() {

  const [CPU, setCPU] = useState(0);
  const [MemoryFree, setMemoryFree] = useState(0);
  const [MemoryUsed, setMemoryUsed] = useState(0);


  const getStats = () => {
    // Create our EmptyRequest that we will use to start the stream;
    var request = new EmptyRequest();
    // Dont worry about the empty Metadata for now, thats covered in another article :)
    var stream = client.monitor(request, {});
    // Start listening on the data event, this is the event that is used to notify that new data arrives
    stream.on('data', function (response: { toObject: () => any; }) {
      // Convert Response to Object
      var stats = response.toObject();
      // Set our variable values
      setCPU(stats.cpu);
      setMemoryFree(stats.memoryFree);
      setMemoryUsed(stats.memoryUsed);
    });
  }
  // useEffect will make this trigger on component start
  useEffect(() => {
    getStats();
  });

  return (
    <div className="App">
      <header className="App-header">
      
      <p>CPU : {CPU}</p>
      <p>MemoryFree: {MemoryFree}</p>
      <p>MemoryUsed: {MemoryUsed}</p>
      </header>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import MainMap from "../components/Map";
import { useGlobalContext } from "../Context/PreviewContext";
import { io } from 'socket.io-client';

const LandingPage = () => {

  const context = useGlobalContext();

  const { centerCoords } = context;
  const [dataFromServer, setDataFromServer] = useState(null);
  

  // const centerParams = {
  //   center_lat: centerCoords.lat,
  //   center_lon: centerCoords.lon,
  // };


  
  useEffect(() => {
      // Connect to the Socket.IO server
      const socket = io('http://localhost:3001/socket');

      // Event listener for successful connection
      socket.on('connect', () => {
        console.log('Connected to Socket.IO server');
        socket.emit('clientMessage', 'Hello Server!'); // Send a message to the server
      });
  
      // Event listener for receiving messages from the server
      socket.on('serverMessage', (message) => {
        console.log('Received message from server:', message);
        // Update your component state or perform other actions with the received data
      });
  
      // Event listener for Socket.IO errors
      socket.on('error', (error) => {
        console.error('Socket.IO error:', error);
        // Handle error state or reconnect logic here
      });
  
      // Event listener for Socket.IO disconnection
      socket.on('disconnect', () => {
        console.log('Disconnected from Socket.IO server');
      });
  
      // Clean up the socket connection when the component unmounts
      return () => {
        socket.disconnect();
      };
    })
    
  

  return (
    <Layout>
      <main className="w-full  h-full ">

        <div className="flex mx-12 my-12 h-[390px]"> 
          <div className="w-[900px]">
           <MainMap  pins = {null}/>

          </div>
         

         
        </div>
      </main>
    </Layout>
  );
};

export default LandingPage;

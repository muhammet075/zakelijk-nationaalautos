import { useEffect, useState } from "react";

function Apis() {
  
  useEffect(() => {

  }, []);


  async function fetchApi() {
    const url = 'https://www.tn-apis.com/token';
    const data = 'grant_type=client_credentials';
    const authHeader = 'Basic Sk5mSF9kaE5JaGExS3RhaE5fdk5EZzlXWFZVYTo3Z1ExY0hxZUhQSXFKdXBad05ZcVMX1Q5bEVh';
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': authHeader
        },
        body: data
      });
  
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchApi();
  



    
  return (
    <div className="apis">
       <p>apis</p>
    </div>
  );
}

export default Apis;

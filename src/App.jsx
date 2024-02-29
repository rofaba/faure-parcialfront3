import React from "react";
import Form from "./Form";
import Card from "./Card";
import {useState} from "react";

function App() {
  const [cardData, setCardData] = useState(null);

  const handleForm = (data) => { setCardData(data);
  };

  return (
    <div className="App">
      <h2 style={{textAlign:'center'}}>Preferencia de automóviles </h2>
      <h2 style={{textAlign:'center'}}> 🚗  💨  </h2> 
      <Form onFormSubmit={handleForm} />
      {cardData && <Card {...cardData} />}
    </div>
  );
}

export default App;
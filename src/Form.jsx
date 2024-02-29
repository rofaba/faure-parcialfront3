import React, { useState } from "react";

function Form({ onFormSubmit }) {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      input1.trim().length < 3 ||
      input1.startsWith(" ") ||
      input2.trim().length < 6
    ) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    if (input1 === input2 || input1 === input3 || input2 === input3) {
      setError("Por favor intenta no ingresar automóviles repetidos.");
      return;
    }

    onFormSubmit({ input1, input2, input3 });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3 style={styles.title}>Ingrese sus automóviles favoritos:</h3>
      <div style={styles.inputCont}>
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          placeholder="Preferencia 1"
          style={styles.input}
        />
      </div>
      <div style={styles.inputCont}>
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          placeholder="Preferencia 2"
          style={styles.input}
        />
      </div>
      <div style={styles.inputCont}>
        <input
          type="text"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
          placeholder="Preferencia 3"
          style={styles.input}
        />
      </div>
      {error && <p style={styles.error}>{error}</p>}
      <button type="submit" style={styles.button}>
        Enviar
      </button>
    </form>
  );
}

const styles = {
  form: {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "auto",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
  },
  inputCont: {
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
};

export default Form;

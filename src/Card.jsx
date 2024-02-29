import React from 'react';

function Card({ input1, input2, input3 }) {
  return (
    <div style={styles.card}>
      <h4 style={styles.title}> Excelente, has elegido:  </h4>
      <ul style={styles.list}>
        <li style={styles.li}> {input1} </li>
        <li style={styles.li}> {input2} </li>
        <li style={styles.li}> {input3} </li>
      </ul>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '10px auto',
    textAlign: 'center'
  },

  title: {
    marginBottom: '20px'
  },

  list: {
    listStyleType: 'none',
    textAlign: 'center',
    paddingTop: '0',
    margin: '0'
  },

  li: {
    paddingBottom: '10px'
  }

};

export default Card;
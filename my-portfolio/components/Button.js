import React from 'react';

const Button = () => (
  <button>
    Learn More
    <style jsx>{`
      button {
        background-color: rgb(59 130 246);
        color: #fff;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        display: inline-block;
        margin-top: 1rem;
        font-weight: 500;
        border: 1px solid #black;
        transition: background-color 200ms;
      }

      button:hover {
      color: #1111;
      }
      
    `}</style>
  </button>
);

export default Button;
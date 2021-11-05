import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtomStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gray-1)' : 'black')};
  }

  .button:hover,
  .button:focus {
    transform: scale(1.04);
    transition: all 0.3s ease;
  }

  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({
  btnLink = 'test',
  btnText = 'test',
  outline = false,
}) {
  return (
    <ButtomStyle outline={outline} className="button-wrapper">
      <div>
        <Link className="button" to={btnLink}>
          {btnText}
        </Link>
      </div>
    </ButtomStyle>
  );
}

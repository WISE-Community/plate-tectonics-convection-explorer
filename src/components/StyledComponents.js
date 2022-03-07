import styled, { css } from 'styled-components';

const Label = styled.p`
  ${(props) => {
    return css`
      @media (min-width: ${props.maxWidth}px) {
        font-size: ${(props.maxWidth / 1200) * 1.7}rem;
      }
    `;
  }}
`;

const ButtonLabel = styled.p`
  ${(props) => {
    return css`
      @media (min-width: ${props.maxWidth}px) {
        font-size: ${(props.maxWidth / 1200) * 1.25}rem;
      }
    `;
  }}
`;

export { Label, ButtonLabel };

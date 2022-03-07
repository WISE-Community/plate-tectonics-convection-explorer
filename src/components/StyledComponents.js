import styled, { css } from 'styled-components';

const AppWrapper = styled.div`
  ${(props) => {
    return css`
      max-width: ${`${props.maxWidth}px`};
      max-height: ${`${props.maxHeight}px`};
    `;
  }}
`;

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

export { AppWrapper, Label, ButtonLabel };

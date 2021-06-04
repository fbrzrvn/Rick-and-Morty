import styled from '@emotion/styled';

export const PaginationWrap = styled('div')`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const PaginationBtn = styled('button')`
  background-color: #fff;
  border: 2px solid #2f4368;
  border-radius: 5% 95% 10% 90% / 90% 10% 90% 10%;
  padding: 0.75em;
  margin-left: 0.5em;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: #eaeaea;
    transition: background 200ms ease-in-out;
  }
`;

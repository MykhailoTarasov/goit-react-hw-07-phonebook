import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-allign: center;
  padding-bottom: 20px;
`;

export const FilterTitle = styled.h3`
  text-allign: center;
  padding: 0 0 15px 0;
  margin: 0;
  text-shadow: grey 2px 2px 5px;
`;

export const FilterInput = styled.input`
  width: 200px;
  height: 40px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 0;
  padding-left: 10px;
`;
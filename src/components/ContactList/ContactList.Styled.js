import styled from 'styled-components';
import { FaTrashCan } from 'react-icons/fa6';

export const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  max-width: 100%;

  background-color: #5dd7d2;
  border: 1px solid #0daea7;
  border-radius: 5px;
  box-shadow: gray 1px 1px 5px;

  margin: 0;
  padding: 10px;
  list-style: none;

  &:hover {
    transform: scale(1.03);
  }
`;

export const ButtonItem = styled.button`
  position: relative;

  width: 30px;
  height: 30px;
  align-self: center;

  padding: 10px;
  color: white;
  background-color: #4d83c2;
  cursor: pointer;

  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 1px solid rgba(33, 33, 33, 0.2);
`;

export const DeleteIcon = styled(FaTrashCan)`
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const Text = styled.p`
  margin: 0;
  text-shadow: grey 2px 2px 5px;
  font-weight: 500;
`;

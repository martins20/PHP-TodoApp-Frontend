import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

export const AddIcon = styled(MdAdd)`
  font-size: 30px;
  color: var(--cyan);

  cursor: pointer;

  transition: font-size 0.3s;

  &:hover {
    font-size: 33px;
  }
`;

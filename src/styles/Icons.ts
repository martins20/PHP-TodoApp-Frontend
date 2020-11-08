import styled, { css } from 'styled-components';
import { MdAdd, MdDone, MdClose } from 'react-icons/md';

const defalulIconStyle = css`
  font-size: 30px;
  cursor: pointer;
`;

export const AddIcon = styled(MdAdd)`
  ${defalulIconStyle};
  color: var(--cyan);

  transition: font-size 0.3s;

  &:hover {
    font-size: 33px;
  }
`;

export const DoneIcon = styled(MdDone)`
  ${defalulIconStyle};
  color: var(--green);
  margin-right: 10px;
`;

export const DeleteIcon = styled(MdClose)`
  ${defalulIconStyle};
  color: var(--red);
`;

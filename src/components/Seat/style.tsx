import styled from 'styled-components';
import { StatusForSeats } from 'types';
import theme from 'styles/theme';
import { SeatProps } from './types';

export const SeatContainer = styled.div`
  display: flex;

`;

export const SeatBox = styled.div<{ status:StatusForSeats }>`
  border: 1px solid black;
  width: 100px;
  height: 50px;
  cursor: ${({ status }) => (status === StatusForSeats.BOOKABLE ? 'pointer' : 'default')};
${({ status }) => {
    if (status === StatusForSeats.IMMUTABLE) {
      return `background-color: ${theme.colors.IMMUTABLE}`;
    }
    if (status === StatusForSeats.BOOKEDOUT) {
      return `background-color: ${theme.colors.BOOKEDOUT}`;
    }
    if (status === StatusForSeats.BOOKABLE) {
      return `background-color: ${theme.colors.BOOKABLE}`;
    }
    return undefined;
  }}`;

export const SeatTitle = styled.span``;

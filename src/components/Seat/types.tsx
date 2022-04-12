import { StatusForSeats } from 'types';

export type SeatProps = {
  status: StatusForSeats;
  title: string;
  onClick: () => void;
};

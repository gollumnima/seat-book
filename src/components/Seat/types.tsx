import { StatusForSeats } from 'types';

export type SeatTime = {
  AM : StatusForSeats;
  PM : StatusForSeats;
};

export type SeatProps = {
  status: SeatTime;
  title: string;
  onClick: () => void;
};

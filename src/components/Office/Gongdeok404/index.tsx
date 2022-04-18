import Seat from 'components/Seat';
import { StatusForSeats } from 'types';
import * as S from './style';

const Gongdeok = () => {
  const temp = { AM: StatusForSeats.IMMUTABLE, PM: StatusForSeats.IMMUTABLE };
  const temp2 = { AM: StatusForSeats.BOOKABLE, PM: StatusForSeats.BOOKABLE };
  const temp3 = { AM: StatusForSeats.BOOKEDOUT, PM: StatusForSeats.BOOKABLE };
  return (
    <S.GongdeokWrapper>
      <Seat title="01" status={temp} onClick={() => {}} />
      <Seat title="02" status={temp2} onClick={() => {}} />
      <Seat title="03" status={temp3} onClick={() => {}} />
    </S.GongdeokWrapper>
  );
};

export default Gongdeok;

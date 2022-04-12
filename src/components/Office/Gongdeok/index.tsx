import Seat from 'components/Seat';
import { StatusForSeats } from 'types';
import * as S from './style';

const Gongdeok = () => (
  <S.GongdeokWrapper>
    <Seat title="01" status={StatusForSeats.IMMUTABLE} onClick={() => {}} />
    <Seat title="02" status={StatusForSeats.BOOKABLE} onClick={() => {}} />
    <Seat title="03" status={StatusForSeats.BOOKEDOUT} onClick={() => {}} />
  </S.GongdeokWrapper>
);

export default Gongdeok;

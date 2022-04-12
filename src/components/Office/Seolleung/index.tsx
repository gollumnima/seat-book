import Seat from 'components/Seat';
import { StatusForSeats } from 'types';
import * as S from './style';

const Seolleung = () => (
  <S.SeolleungWrapper>
    <Seat title="01" status={StatusForSeats.IMMUTABLE} onClick={() => {}} />
    <Seat title="02" status={StatusForSeats.BOOKABLE} onClick={() => {}} />
    <Seat title="03" status={StatusForSeats.BOOKEDOUT} onClick={() => {}} />
    <Seat title="04" status={StatusForSeats.IMMUTABLE} onClick={() => {}} />
    <Seat title="05" status={StatusForSeats.BOOKABLE} onClick={() => {}} />
    <Seat title="06" status={StatusForSeats.BOOKEDOUT} onClick={() => {}} />
  </S.SeolleungWrapper>
);

export default Seolleung;

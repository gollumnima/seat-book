import { SeatProps } from './types';
import * as S from './style';

const Seat:React.FC<SeatProps> = ({ status, title, onClick }) => (
  <S.SeatContainer status={status} onClick={onClick}>
    <S.SeatTitle>{title}</S.SeatTitle>
  </S.SeatContainer>
);

export default Seat;

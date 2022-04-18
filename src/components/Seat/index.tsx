import { Typography } from 'antd';
import { StatusForSeats } from 'types';
import { SeatProps } from './types';
import * as S from './style';

const { Title } = Typography;

const Seat:React.FC<SeatProps> = ({ status, title, onClick }) => {
  const handleClick = (seatStatus: StatusForSeats) => {
    if (seatStatus === StatusForSeats.IMMUTABLE) {
      return undefined;
    }
    onClick();
    return undefined;
  };
  return (
    <S.SeatContainer>
      <S.SeatBox status={status.AM} onClick={() => handleClick(status.AM)}>
        <Title level={5}>{status.AM !== StatusForSeats.IMMUTABLE ? title : '예약 불가'}</Title>
      </S.SeatBox>
      <S.SeatBox status={status.PM} onClick={() => handleClick(status.PM)}>
        <Title level={5}>{status.PM !== StatusForSeats.IMMUTABLE ? title : '예약 불가'}</Title>
      </S.SeatBox>
    </S.SeatContainer>
  );
};

export default Seat;

import { useState } from 'react';
import { Select } from 'antd';
import Gongdeok from 'components/Office/Gongdeok';
import Seolleung from 'components/Office/Seolleung';
import 'antd/dist/antd.css';
import * as S from './style';

const ReservationForm = () => {
  const { Option } = Select;
  const [office, setOffice] = useState('');

  const handleChange = (selected: string) => {
    setOffice(selected);
  };

  const showOffices = (name: string) => {
    switch (name) {
      case 'gongdeok':
        return <Gongdeok />;
      case 'seolleung':
        return <Seolleung />;
      default:
        return <></>;
    }
  };
  return (
    <S.FormContainer>
      <Select defaultValue="사무실" style={{ width: 120 }} onChange={handleChange}>
        <Option value="gongdeok">공덕(GongDeok)</Option>
        <Option value="seolleung">선릉(Seolleung)</Option>
      </Select>
      <span>예약 가능한 좌석 수: </span>
      {showOffices(office)}
    </S.FormContainer>
  );
};

export default ReservationForm;

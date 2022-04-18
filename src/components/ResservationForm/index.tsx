import { useState } from 'react';
import {
  Select, DatePicker, Typography, Row, Col,
} from 'antd';
import moment, { Moment } from 'moment';
// import dayjs, { type Dayjs } from 'dayjs';
// import 'dayjs/locale/ko';
import Gongdeok816 from 'components/Office/Gongdeok816';
import Gongdeok404 from 'components/Office/Gongdeok404';
import Seolleung200 from 'components/Office/Seolleung200';
import 'antd/dist/antd.css';
import * as S from './style';

// dayjs locale reference
// https:// github.com/iamkun/dayjs/blob/dev/src/locale/ko.js

const { Title } = Typography;

const ReservationForm = () => {
  const { Option } = Select;
  const [office, setOffice] = useState('');
  const [date, setDate] = useState<string | null>(null);

  const onChange = (dateProps: Moment | null, dateString: string) => {
    console.log(dateProps, dateString);
    setDate(dateString);
  };

  const handleChange = (selected: string) => {
    setOffice(selected);
  };

  const handleDisabledDate = (current: Moment) => {
    const customDate = moment().format('YYYY-MM-DD');
    const isSunday = moment(current).day() === 0;
    const isSaturday = moment(current).day() === 6;
    return current < moment(customDate, 'YYYY-MM-DD') || isSunday || isSaturday;
  };

  const showOffices = (name: string) => {
    switch (name) {
      case 'gongdeok404':
        return <Gongdeok404 />;
      case 'gongdeok816':
        return <Gongdeok816 />;
      case 'seolleung200':
        return <Seolleung200 />;
      default:
        return <></>;
    }
  };

  // office  선택하면 날짜를 선택해주세요
  return (
    <S.FormContainer>
      <S.FormUpper>
        <Select defaultValue="사무실" style={{ width: 200 }} onChange={handleChange}>
          <Option value="gongdeok404">공덕 오피스 4층 404호</Option>
          <Option value="gongdeok816">공덕 오피스 8층 816호</Option>
          <Option value="seolleung200">선릉 오피스 2층 200호</Option>
        </Select>
        <DatePicker
          onChange={onChange}
          disabledDate={handleDisabledDate}
        />
        <Title level={5}>예약 가능한 좌석 수: </Title>
      </S.FormUpper>
      <S.FormBottom>
        {office && date && showOffices(office)}
      </S.FormBottom>
    </S.FormContainer>
  );
};

export default ReservationForm;

import React from 'react';
import styled from 'styled-components';
import { SectionWrapper } from './Home';
import TimePicker from './TimePicker';
import Title from './Title';
import Button from './Button';
import Fade from 'react-reveal/Fade';

const ButtonGroup = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TimePickerGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function Restrictions() {
  return (
    <SectionWrapper>
      <Fade up>
        <Title title='3. Add Restrictions'></Title>
        <Title title='What days do you want to go to school?'></Title>
        <ButtonGroup>
          <Button content='Monday'></Button>
          <Button content='Tuesday'></Button>
          <Button content='Tuesday'></Button>
          <Button content='Tuesday'></Button>
          <Button content='Tuesday'></Button>
        </ButtonGroup>
        <Title title='What time?'></Title>
        <TimePickerGroup>
          <TimePicker></TimePicker>
          <TimePicker></TimePicker>
        </TimePickerGroup>
      </Fade>
    </SectionWrapper>
  );
}

export default Restrictions;

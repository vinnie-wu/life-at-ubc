import React from 'react';
import { SectionWrapper } from './Home';
import Title from './Title';
import Fade from 'react-reveal/Fade';

function Lectures() {
  return (
    <SectionWrapper>
      <Fade up>
        <Title title='4. Select Lectures to Lock Them'></Title>
      </Fade>
    </SectionWrapper>
  );
}

export default Lectures;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size, media, color, theme } from './styles/theme';
import { Checkbox, Radiobtn, Selectbox } from './inputElement';

const Wrapper = styled.div`
  width: 800px;
  border: 1px solid ${color.gray[2]};
  margin: ${size.margin.md} auto;
  padding: ${size.padding.sm};
  h1 {
    font-size: ${size.font.xl};
    font-weight: 700;
  }
`;

function Poll() {
  return (
    <>
      <Wrapper>
        <h1>인풋만들기 설문조사</h1>
        <Checkbox>짜장면</Checkbox>
        <Checkbox>탕수육</Checkbox>
        <Radiobtn name="soso">라디오</Radiobtn>
        <Radiobtn name="soso">오디션</Radiobtn>
        <Selectbox>
          <option value="kk">킴킴수한무거북이</option>
          <option value="kk">신신</option>
          <option value="kk">당당</option>
        </Selectbox>
      </Wrapper>
    </>
  );
}

export default Poll;

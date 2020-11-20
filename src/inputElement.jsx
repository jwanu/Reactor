import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdCheck, MdExpandMore } from 'react-icons/md';
import { size, media, color, theme } from './styles/theme';

const CheckBox = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 16px;
  div {
    width: 24px;
    height: 24px;
    border: 1px solid ${color.gray[4]};
    border-radius: 4px;
    margin-right: 8px;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease;
    pointer-events: none;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0;
      background: ${color.gray[6]};
      transition: all 0.1s cubic-bezier(0.67, -0.55, 0.64, 1.54);
    }
    svg {
      stroke-width: 2px;
      color: #fff;
      transform: translateY(20px);
      transition: all 0.3s cubic-bezier(0.67, -0.55, 0.64, 1.54);
    }
  }
  input[type='checkbox'] {
    position: absolute;
    width: 100%;
    height: 100%;
    appearance: none;
    margin: 0;
    cursor: pointer;
    &:hover {
      & + div {
        border: 1px solid ${color.gray[6]};
      }
    }
    &:checked {
      & + div {
        border: 1px solid ${color.gray[6]};
        &::before {
          height: 100%;
        }
        svg {
          transform: translateY(0);
        }
      }
      & ~ span {
        font-weight: 600;
      }
    }
  }
  span {
    flex: 1;
  }
`;

function Checkbox({ children }) {
  return (
    <CheckBox>
      <input type="checkbox" />
      <div>
        <MdCheck />
      </div>
      <span>{children}</span>
    </CheckBox>
  );
}

Checkbox.propTypes = {
  children: PropTypes.node,
};

Checkbox.defaultProps = {
  children: 'empty',
};

const RadioBtn = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 16px;
  div {
    width: 24px;
    height: 24px;
    border: 1px solid ${color.gray[4]};
    border-radius: 50%;
    margin-right: 8px;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease;
    pointer-events: none;
    &::before {
      content: '';
      position: absolute;
      border-radius: 50%;
      margin: 4px;
      width: 0;
      height: 0;
      background: ${color.gray[6]};
      transition: all 0.2s cubic-bezier(0.67, -0.55, 0.64, 1.54);
    }
  }
  input[type='radio'] {
    position: absolute;
    width: 100%;
    height: 100%;
    appearance: none;
    margin: 0;
    cursor: pointer;
    &:hover {
      & + div {
        border: 1px solid ${color.gray[6]};
      }
    }
    &:checked {
      & + div {
        border: 1px solid ${color.gray[6]};
        &::before {
          width: 16px;
          height: 16px;
        }
      }
      & ~ span {
        font-weight: 500;
      }
    }
  }
  span {
    flex: 1;
  }
`;

function Radiobtn({ children, name }) {
  return (
    <RadioBtn>
      <input type="radio" name={name} />
      <div> </div>
      <span>{children}</span>
    </RadioBtn>
  );
}

Radiobtn.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
};

Radiobtn.defaultProps = {
  children: 'empty',
  name: undefined,
};

const SelectBox = styled.div`
  height: 32px;
  display: inline-flex;
  align-items: stretch;
  position: relative;
  margin: 4px;
  select {
    border: 1px solid ${color.gray[4]};
    border-radius: 4px;
    appearance: none;
    padding: 0 28px 0 4px;
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
      border: 1px solid ${color.gray[6]};
      & + svg {
        animation: updown 0.4s infinite alternate;
        color: ${color.gray[8]};
        @keyframes updown {
          from {
            transform: translateY(-1px);
          }
          to {
            transform: translateY(1px);
          }
        }
      }
    }
  }
  svg {
    position: absolute;
    top: 8px;
    right: 8px;
    stroke-width: 1px;
    pointer-events: none;
    color: ${color.gray[6]};
    transition: all 0.2s ease;
  }
`;

function Selectbox({ children }) {
  return (
    <SelectBox>
      <select name="a" id="b">
        {children}
      </select>
      <MdExpandMore />
    </SelectBox>
  );
}

Selectbox.propTypes = {
  children: PropTypes.node,
};

Selectbox.defaultProps = {
  children: 'empty',
};

const InputText = styled.div`
  height: 32px;
  display: inline-flex;
  align-items: stretch;
  position: relative;
  margin: 4px;
  select {
    border: 1px solid ${color.gray[4]};
    border-radius: 4px;
    appearance: none;
    padding: 0 28px 0 4px;
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
      border: 1px solid ${color.gray[6]};
      & + svg {
        animation: updown 0.4s infinite alternate;
        color: ${color.gray[8]};
        @keyframes updown {
          from {
            transform: translateY(-1px);
          }
          to {
            transform: translateY(1px);
          }
        }
      }
    }
  }
  svg {
    position: absolute;
    top: 8px;
    right: 8px;
    stroke-width: 1px;
    pointer-events: none;
    color: ${color.gray[6]};
    transition: all 0.2s ease;
  }
`;

function Inputtext() {
  return (
    <InputText>
      <input type="text" name="a" id="ba" />
    </InputText>
  );
}

export { Checkbox, Radiobtn, Selectbox };

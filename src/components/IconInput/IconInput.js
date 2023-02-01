import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  
  const STYLES = {
    small: {
      // Ready
      '--padding': '4px',
      '--padding-left' : '24px',
      '--font-size': 14 / 16 + 'rem',
      '--bar-size': 1 + 'px',

      // Missing
      '--icon-size': 16,
      '--icon-weight': 1,
    },
    large: {
      '--padding': '8px',
      '--padding-left': '36px',
      '--font-size': 18 / 16 + 'rem',
      '--bar-size':2 + 'px',
      '--icon-size': 24,
      '--icon-weight': 2,
    },
  }

  const wrapperStyles = STYLES[size]

  if (!wrapperStyles) throw new Error('Unknown size value for IconInput.')

  return <LabelWrapper style={wrapperStyles}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <StyledIcon
      id={icon}
      size={wrapperStyles['--icon-size']}
      strokeWidth={wrapperStyles['--icon-weight']}
    />
    <NativeInput
      type="text"
      style={{
        '--width': width + 'px',
      }}
      placeholder={placeholder}
    />
  </LabelWrapper>;
};

const LabelWrapper = styled.label`
  /* To be inherited FONTS */
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
  font-size: var(--font-size);
  font-weight: 700;

  /* Position icon and bottom border */
  position: relative;
  display: block;
  width: max-content;


  /* Bottom bar */
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: var(--bar-size);
    border-radius: calc(var(--bar-size) * 0.5);
    width: 100%;
    background: ${COLORS.black};
    /* width: 100%; */
  }
`
const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`
const NativeInput = styled.input`
  color: inherit;
  font: inherit;
  border: none;

  display: block;
  width: var(--width);

  margin: 0;
  padding: var(--padding);
  padding-left: var(--padding-left);

  /* Focus */
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

export default IconInput;

import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
// Smth curious happens when focusing the select inside <VisuallyHidden />
// import VisuallyHidden from '../VisuallyHidden'

const Select = ({id, label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <DropdownWrapper>
      {/* Uses TabIndex so it simulates select UI focus */}
      <VisibleSelect tabIndex={0}>
        {displayedValue}
        <ChevronDown id="chevron-down" size={24} strokeWidth={2} />
      </VisibleSelect>

      <HiddenSelect
        id={id}
        value={value}
        onChange={onChange}
        multiple
        >
        {children}
      </HiddenSelect>
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.label`
  display: block;
  position: relative;
  /* Constrained width, so pointer events only are triggered in the visible area */
  width: fit-content;
`
const VisibleSelect = styled.div`
  border-radius: 8px;
  width: fit-content;
  padding: 12px 16px;
  padding-right: 52px;

  /* So it can contain ChevronDown */
  position: relative;
  
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`
const HiddenSelect = styled.select`
  /* More flexible styling */
  appearance: none;

  /* This element is only shown when a label is clicked */
  /* When is not focused, hide it */
  &:not(:focus) {
    opacity: 0;
    pointer-events: none;
    /* When the parent was outlined, it outlined this element as well  */
    /* width: 0;
    height: 0;
    top: 0;
    left: 0; */
  }

  /* On Windows UI al least, select options appear below the current option
  These, along with "multiple" attr, simulate Select tag behaviour */
  position: absolute;
  top: 100%;
  left: 0;
  overflow: auto;
`

const ChevronDown = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 10px;
`

export default Select;

/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  
  let ProgressWrapper = MediumProgressWrapper;

  if (size === "large") ProgressWrapper = LargeProgressWrapper
  else if (size == "small") ProgressWrapper = SmallProgressWrapper

  return (
    <ProgressWrapper
      role={"progressbar"}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
    >
      <BaseContentWrapper>
        <Progress style={{'--percentage': value + '%'}}>
          <VisuallyHidden>
            {value}
          </VisuallyHidden>
        </Progress>
      </BaseContentWrapper>
    </ProgressWrapper>
  );
};

const BaseProgressWrapper = styled.div`
  width: auto;
  background: ${COLORS.transparentGray15};

  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

// ProgressWrapper Variants
const LargeProgressWrapper = styled(BaseProgressWrapper)`
  height: 24px;
  border-radius: 8px;
  padding: 4px;
`
const MediumProgressWrapper = styled(BaseProgressWrapper)`
  height: 12px;
  border-radius: 4px;
`
const SmallProgressWrapper = styled(BaseProgressWrapper)`
  height: 8px;
  border-radius: 4px;
`

const BaseContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  /* Always has border-radius */
  border-radius: 4px;

  /* So the border radius applies to the progressBar as well */
  overflow: hidden;
`

const Progress = styled.div`
  height: 100%;
  width: var(--percentage);

  background: ${COLORS.primary};
`


export default ProgressBar;

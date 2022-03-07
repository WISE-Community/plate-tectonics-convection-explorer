import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { ButtonLabel } from './StyledComponents';
import {
  BOUNDARY_STATES,
  STATE_TEXT,
  boundaryForState
} from '../State';

ControlPanel.propTypes = {
  onClick: PropTypes.func,
  hide: PropTypes.bool,
  boundaryState: PropTypes.oneOf(['', ...BOUNDARY_STATES]),
  maxWidth: PropTypes.number
};

function ControlPanel(props) {
  if (props.hide) return null;

  return (
    <React.Fragment>
      <div className="BoundaryButtons">
        {BOUNDARY_STATES.map((state) =>
          boundaryButtonOfType(props.boundaryState, state, props.onClick, props.maxWidth)
        )}
      </div>
    </React.Fragment>
  );
}
function boundaryButtonOfType(boundaryState, type, onClick, maxWidth) {
  return (
    <Button key={type} onClick={() => onClick(type)} selected={boundaryState === type}>
      <img src={boundaryForState(type)} alt={`${STATE_TEXT[type]}`} />
      <ButtonLabel maxWidth={maxWidth}>{STATE_TEXT[type]}</ButtonLabel>
    </Button>
  );
}

export default ControlPanel;

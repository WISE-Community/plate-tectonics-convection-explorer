import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import {
  BOUNDARY_STATES,
  STATE_TEXT,
  boundaryForState
} from '../State';

ControlPanel.propTypes = {
  onClick: PropTypes.func,
  hide: PropTypes.bool,
  boundaryState: PropTypes.oneOf(['', ...BOUNDARY_STATES])
};

function ControlPanel(props) {
  if (props.hide) return null;

  return (
    <React.Fragment>
      <div className="BoundaryButtons">
        {BOUNDARY_STATES.map((state) =>
          boundaryButtonOfType(props.boundaryState, state, props.onClick)
        )}
      </div>
    </React.Fragment>
  );
}
function boundaryButtonOfType(boundaryState, type, onClick) {
  return (
    <Button key={type} onClick={() => onClick(type)} selected={boundaryState === type}>
      <img src={boundaryForState(type)} alt={`${STATE_TEXT[type]}`} />
      <p>{STATE_TEXT[type]}</p>
    </Button>
  );
}

export default ControlPanel;

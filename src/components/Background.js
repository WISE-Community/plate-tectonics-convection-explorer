import React from 'react';
import PropTypes from 'prop-types';
import {
  INIT_PLATE_STATES,
  END_PLATE_STATES,
  BOUNDARY_STATES,
  LABELS,
  STATE_TEXT,
  backgroundForState
} from '../State';
import Convection from './backgrounds/convection.svg';

Background.propTypes = {
  hide: PropTypes.bool,
  plateState: PropTypes.oneOf(['', ...INIT_PLATE_STATES, ...END_PLATE_STATES]),
  boundaryState: PropTypes.oneOf(['', ...BOUNDARY_STATES]),
  frame: PropTypes.number
};
function Background(props) {
  if (props.hide) return null;

  const isConvergent = props.boundaryState === 'c';
  const leftConvectionClass = isConvergent ? 'RotateCW' : 'RotateCCW';
  const rightConvectionClass = isConvergent ? 'RotateCCW' : 'RotateCW';
  const hideConvection = props.boundaryState === '';
  const hidePlateState = props.plateState === '';

  return (
    <div className="BackgroundContainer">
      {hideConvection ? null : (
        <React.Fragment>
          <img
            className={`Convection ConvectionLeft ${leftConvectionClass}`}
            src={Convection}
            alt={`${isConvergent ? 'Clockwise' : 'Counter-clockwise'} convection current`}
          />
          <img
            className={`Convection ConvectionRight ${rightConvectionClass}`}
            src={Convection}
            alt={`${isConvergent ? 'Counter-clockwise' : 'Clockwise'} convection current`}
          />
          {isConvergent ? (
            <React.Fragment>
              <p className="HeatLabel Hot HeatBottom HeatLeft">{LABELS.hot}</p>
              <p className="HeatLabel Hot HeatBottom HeatRight">{LABELS.hot}</p>
              <p className="HeatLabel Cold HeatTop HeatCenter">{LABELS.cold}</p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p className="HeatLabel Cold HeatTop HeatLeft">{LABELS.cold}</p>
              <p className="HeatLabel Cold HeatTop HeatRight">{LABELS.cold}</p>
              <p className="HeatLabel Hot HeatBottom HeatCenter">{LABELS.hot}</p>
            </React.Fragment>
          )}
        </React.Fragment>
      )}

      {hidePlateState ? null : (
        <React.Fragment>
          <p className="Label LabelLeft">{LABELS.crust}</p>
          <p className="Label LabelRight">{LABELS.crust}</p>
          <p className="Label LabelMantle">{LABELS.mantle}</p>
          <p className="Label LabelCore">{LABELS.core}</p>
          <img
            className="Background"
            src={backgroundForState(props.plateState, props.frame)}
            alt={`${STATE_TEXT[props.plateState]} plate boundary`}
          />
        </React.Fragment>
      )}
    </div>
  );
}

export default Background;

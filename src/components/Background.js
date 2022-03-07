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
import { Label } from './StyledComponents';

Background.propTypes = {
  hide: PropTypes.bool,
  plateState: PropTypes.oneOf(['', ...INIT_PLATE_STATES, ...END_PLATE_STATES]),
  boundaryState: PropTypes.oneOf(['', ...BOUNDARY_STATES]),
  frame: PropTypes.number,
  maxWidth: PropTypes.number
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
              <Label maxWidth={props.maxWidth} className="HeatLabel Hot HeatBottom HeatLeft">{LABELS.hot}</Label>
              <Label maxWidth={props.maxWidth} className="HeatLabel Hot HeatBottom HeatRight">{LABELS.hot}</Label>
              <Label maxWidth={props.maxWidth} className="HeatLabel Cold HeatTop HeatCenter">{LABELS.cold}</Label>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Label maxWidth={props.maxWidth} className="HeatLabel Cold HeatTop HeatLeft">{LABELS.cold}</Label>
              <Label maxWidth={props.maxWidth} className="HeatLabel Cold HeatTop HeatRight">{LABELS.cold}</Label>
              <Label maxWidth={props.maxWidth} className="HeatLabel Hot HeatBottom HeatCenter">{LABELS.hot}</Label>
            </React.Fragment>
          )}
        </React.Fragment>
      )}

      {hidePlateState ? null : (
        <React.Fragment>
          <Label maxWidth={props.maxWidth} className="Label LabelLeft">{LABELS.crust}</Label>
          <Label maxWidth={props.maxWidth} className="Label LabelRight">{LABELS.crust}</Label>
          <Label maxWidth={props.maxWidth} className="Label LabelMantle">{LABELS.mantle}</Label>
          <Label maxWidth={props.maxWidth} className="Label LabelCore">{LABELS.core}</Label>
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

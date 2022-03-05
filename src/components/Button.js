import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
  hide: PropTypes.bool,
  className: PropTypes.string = '',
  selected: PropTypes.bool,
  background: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object
};

function Button(props) {
  if (props.hide) return null;
  const style = props.style ? props.style : null;
  return (
    <button
      className={`Button ${props.className ? props.className : ''} ${props.disabled ? '' : 'ButtonClickable'}
          ${props.selected ? 'SelectedButton' : ''}`}
      style={{
        backgroundImage: props.background ? `url(${props.background})` : null,
        borderColor: props.selected ? '#CC0066' : '#333333',
        ...style
      }}
      onClick={props.disabled ? null : props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;

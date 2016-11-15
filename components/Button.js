import React, { PropTypes } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    console.log('HANDLE CLICK');
    this.props.onClick(this.props.rowNum, this.props.colNum);
  }

  render() {
    const buttonClasses = {
      null: Colors.raw,
      X: Colors.danger,
      O: Colors.success
    };

    return (
      <TouchableOpacity
        style={[styles.option]}
        onPress={this.handleClick}
        disabled={this.props.buttonValue !== null || this.props.gameOver}
      >
        <Text style={[styles.optionText, { color: buttonClasses[this.props.buttonValue] }]}>
          {this.props.buttonValue ? this.props.buttonValue : '?'}
        </Text>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  buttonValue: PropTypes.string,
  gameOver: PropTypes.bool,
  rowNum: PropTypes.number,
  colNum: PropTypes.number,
  onClick: PropTypes.func
};

const styles = StyleSheet.create({
  option: {
    backgroundColor: 'transparent'
  },

  optionText: {
    fontSize: 52,
    fontWeight: '900'
  }
});

export default Button;

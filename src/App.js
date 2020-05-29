import React from 'react';

class BlurExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.timeOutId = null;

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onBlurHandler = this.onClickHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }
  
  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  onBlurHandler() {
    this.timeOutId = setTimeout(() => {
      this.setState({
        isOpen: false
      });
    });
  }

  onFocusHandler() {
    clearTimeout(this.timeOutId);
  }

  render() {
    return (
      <div 
        onBlur={this.onBlurHandler}
        onfocus={this.onFocusHandler}
      >
        <button 
          onClick={this.onClickHandler}
          aria-haspopup="true"
          aria-expanded={this.state.isOpen}
        >
          Select an Option
        </button><br />
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 1</li>
            <li>Option 1</li>
          </ul>
        )}
        <button>Select second option</button>
      </div>
    )
  }
}

export default BlurExample;
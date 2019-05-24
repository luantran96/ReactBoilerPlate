import React from "react";

class App extends React.Component {
  state = { loading: true };

  toggle = () => {
    this.setState(prevState => ({ loading: !prevState.loading }));
  };

  render() {
    return (
      <div id="body">
        <div>
          <button onClick={this.toggle} type="button">
            {this.state.loading ? "ON" : "OFF"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;

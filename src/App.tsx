import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

/*

  *********************************************
  First argument is to define types for props
  Second Argument is to define types for states
  *********************************************
  
*/

export class App extends React.Component<HelloProps, { loading: boolean }> {
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

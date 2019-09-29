import React from "react";
import ReactDOM from "react-dom";
import modes from "../service/modes";
import "./styles.css";
import ModeController from "../components/ModeController";

class App extends React.Component {
  state = {
    selectedMode: null
  };
  setMode = mode => {
    this.setState({
      selectedMode: modes[mode]
    });
  };
  onExit = () => {
    this.setState({ selectedMode: null });
  };
  render() {
    if (this.state.selectedMode)
      return (
        <ModeController onExit={this.onExit} mode={this.state.selectedMode} />
      );

    return (
      <div className="app">
        <div className="menu">
          <div className="title">Выбор режима</div>
          <div className="copy">by lexlexa</div>
          <ul>
            {Object.keys(modes).map(item => {
              return (
                <li key={item} onClick={() => this.setMode(item)}>
                  {modes[item].title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

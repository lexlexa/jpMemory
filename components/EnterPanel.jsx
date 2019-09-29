import React from "react";
import "../style/EnterPanel.css";

class EnterPanel extends React.Component {
  state = {
    answer: ""
  };
  componentDidUpdate = prevP => {
    if (this.props.completed !== prevP.completed) {
      this.setState({ answer: "" });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.answer !== "") this.props.onComplete(this.state.answer);
  };
  changeAnswer = e => {
    const { value } = e.target;
    this.setState({ answer: value });
  };
  getStatisticsWidths = (success, error) => {
    const data = { sWidth: 50, eWidth: 50 };
    const all = success + error;
    if (success !== 0 || error !== 0) {
      data.sWidth = (success / all) * 100;
      data.eWidth = (error / all) * 100;
    }
    return data;
  };
  render() {
    const { statistics, completed, onNext, onExit } = this.props;
    const success = statistics.success;
    const error = statistics.error;
    const { sWidth, eWidth } = this.getStatisticsWidths(success, error);

    return (
      <div className="enter_panel">
        <div className="statistic">
          <div className="success" style={{ width: sWidth + "%" }}>
            {this.props.statistics.success}
          </div>
          <div className="error" style={{ width: eWidth + "%" }}>
            {this.props.statistics.error}
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          {!completed ? (
            <>
              <div className="text">
                <input type="text" onChange={this.changeAnswer} />
              </div>
              <div className="btn responsive-btn">
                <button type="submit">OK</button>
              </div>
            </>
          ) : null}
          {completed ? (
            <>
              <div className="btn half-btn">
                <button onClick={onExit} className="exit">
                  EXIT
                </button>
              </div>
              <div className="btn half-btn">
                <button onClick={onNext} className="next">
                  NEXT
                </button>
              </div>
            </>
          ) : null}
        </form>
      </div>
    );
  }
}

export default EnterPanel;

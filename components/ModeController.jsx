import React from "react";
import QuestCard from "./QuestCard";
import EnterPanel from "./EnterPanel";
import StatusBar from "./StatusBar";
import Loader from "./Loader";
import "../style/ModeController.css";

export default class ModeController extends React.Component {
  state = {
    error: false,
    statistics: {
      error: 0,
      success: 0
    },
    completed: false,
    quest: null,
    answer: null
  };
  componentDidMount() {
    this.setTask();
  }
  setTask = () => {
    const task = this.props.mode.getQuest();
    const { quest, answer } = task;
    this.setState({
      quest,
      answer,
      completed: false,
      error: false
    });
  };
  onNext = () => {
    this.setState(
      {
        error: false,
        completed: false
      },
      () => this.setTask()
    );
  };
  onComplete = value => {
    if (value === this.state.answer) {
      this.setState({
        completed: true,
        statistics: {
          ...this.state.statistics,
          success: this.state.statistics.success + 1
        },
        error: false
      });
    } else {
      this.setState({
        completed: true,
        statistics: {
          ...this.state.statistics,
          error: this.state.statistics.error + 1
        },
        error: true
      });
    }
  };
  render() {
    const { error, statistics, completed, quest, answer } = this.state;
    const { title } = this.props.mode;
    const { onExit } = this.props;
    if (!quest || !answer) return <Loader />;
    return (
      <div className="mode_controller">
        <StatusBar title={title} onExit={onExit} />
        <QuestCard
          front={quest}
          back={answer}
          showBack={completed}
          error={error}
        />
        <EnterPanel
          statistics={statistics}
          completed={completed}
          onComplete={this.onComplete}
          onNext={this.onNext}
          onExit={onExit}
        />
      </div>
    );
  }
}

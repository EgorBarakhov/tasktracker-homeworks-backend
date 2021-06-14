import React from 'react';
import Task from './Task'
import Tasks from './Tasks';

class App extends React.Component {
  state = {
    selected: null
  }

  selectTask = (task) => {
    this.setState({ selectedTask: task })
  }

  render() {
    return (
      <div className="container mx-auto px-4">
        {this.state.selectedTask ?
          <Task task={this.state.selectedTask} selectTask={this.selectTask} /> :
          <Tasks selectTask={this.selectTask} />}
      </div>
    )
  };
}
export default App;

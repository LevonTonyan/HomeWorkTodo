import React from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import ListItem from "./ListItem";
import InputField from "./InputField";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };

    this.onAddTask = this.onAddTask.bind(this);
    this.onRemoveTask = this.onRemoveTask.bind(this);
  }

  onAddTask(text) {
    const obj = {
      id: uuidv4(),
      title: text,
      isCompleated: false,
    };
    this.setState({ todos: [...this.state.todos, obj] });
  }

  onRemoveTask(itemId) {
    this.setState({
      todos: [...this.state.todos].filter((todo) => todo.id !== itemId),
    });
  }

  render() {
    console.log(this.state.todos);
    return (
      <div>
        <InputField onAddTask={this.onAddTask} />

        <ListItem todos={this.state.todos} onRemoveTask={this.onRemoveTask} />
      </div>
    );
  }
}

export default App;

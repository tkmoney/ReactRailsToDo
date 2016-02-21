var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: []
    }
  },
  componentWillMount: function () {
    ToDoAction.getAll();
  },
  componentDidMount: function () {
    DataStore.bind('onchange', this.dataChange);
  },
  componentWillUnmount: function () {
    DataStore.unbind('onchange', this.dataChange);
  },
  dataChange: function () {
    this.setState({todos: DataStore.getAll()});
  },
  addItem: function () {
    var v = (this.refs.newTodoDescription.value).trim();
    if(v.length <= 0){
      return;
    }
    ToDoAction.add({description: v});
    this.refs.newTodoDescription.value = "";
  },
  onDescriptionKeyPress:function (e) {
    if(e.key == 'Enter'){
      this.addItem();
    }
  },
  render: function() {

    return (
      <div className="todo_app">
        <TodoStatus todos={this.state.todos} />
        <TodoList todos={this.state.todos} />
        <div className="add_item">
          <input type="text" ref="newTodoDescription" maxLength="100" onKeyPress={this.onDescriptionKeyPress} />
          <button onClick={this.addItem}>add todo</button>
        </div>
      </div>
    );
  }
});

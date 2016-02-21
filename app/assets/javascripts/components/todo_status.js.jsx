var TodoStatus = React.createClass({
  propTypes: {
    todos: React.PropTypes.array
  },

  render: function() {
    var items_not_done = this.props.todos.length;

    var items_done = function () {
      var todos = this.props.todos;
      var done = 0;
      for(var i = 0; i < todos.length; i++){
          if(todos[i]['done'])
              done++;
      }
      items_not_done = (items_not_done - done);
      return done;
    }.apply(this);

    return (
      <div className="todo_status">
        <div>{items_done} completed</div>
        <div>{items_not_done} not completed</div>
      </div>
    );
  }
});

var TodoStatus = React.createClass({
  propTypes: {
    todos: React.PropTypes.array
  },

  render: function() {
    var last_update_string = "";
    var last_update = new Date(0);
    var last_update_string = last_update.toLocaleString();
    var items_not_done = this.props.todos.length;

    var items_done = function () {
      console.log('items done function');
      var todos = this.props.todos;
      var done = 0;
      for(var i = 0; i < todos.length; i++){
          if(new Date(todos[i]['updated_at']) > last_update){
            last_update = new Date(todos[i]['updated_at']);
          }
          if(todos[i]['done']){
            done++;
          }
      }
      last_update_string = last_update.toLocaleString();
      items_not_done = (items_not_done - done);
      return done;
    }.apply(this);

    return (
      <div className="todo_status">
        <div>{items_done} completed</div>
        <div>{items_not_done} not completed</div>
        <TodoTweetStatus itemsDone={items_done} itemsTotal={this.props.todos.length} lastUpdate={last_update_string} />
      </div>
    );
  }
});

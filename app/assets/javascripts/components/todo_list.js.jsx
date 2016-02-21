var TodoList = React.createClass({
  propTypes: {
    todos: React.PropTypes.array
  },

  render: function() {

    var itemsHTML = this.props.todos.map(function (itm) {
      return <Todo key={ itm.id } id={itm.id} done={itm.done} description={itm.description}></Todo>
    });

    return (
      <div className="todo_list">
        {itemsHTML}
      </div>
    );
  }
});

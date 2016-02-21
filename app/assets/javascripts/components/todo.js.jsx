var Todo = React.createClass({
  propTypes: {
    description: React.PropTypes.string,
    done: React.PropTypes.bool,
    id: React.PropTypes.number
  },
  onDoneCheckBoxClick: function () {
    ToDoAction.onItemClick(this.props.id);
  },
  onDeleteClick:function () {
    ToDoAction.delete(this.props.id);
  },
  render: function() {
    var isDone = this.props.done;
    var classname = ('todo ' + (isDone ? 'is_done' : ''));

    return (
      <div className={classname}>
        <div onClick={this.onDoneCheckBoxClick} className="checkbox_and_description_container">
          <label style={{pointerEvents: 'none'}}><input type="checkbox" checked={isDone} readOnly={true} /><span className="todo_description"><span className="strike" />{this.props.description}</span></label>
        </div>
        <div className="delete_container">
          <button onClick={this.onDeleteClick}>delete</button>
        </div>
      </div>
    );
  }
});

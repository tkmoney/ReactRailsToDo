var TodoDeleteButton = React.createClass({
  propTypes: {
    onDeleteConfirm: React.PropTypes.func
  },
  getInitialState: function () {
    return {
      showBack: false
    }
  },
  onCancel: function(e){
    this.setState({showBack:false});
    e.stopPropagation()
  },
  onDeleteClick: function(e){
    this.setState({showBack:true});
    e.stopPropagation()
  },
  render: function() {
    var show_back_class = this.state.showBack ? "todo_delete_button show_back" : "todo_delete_button";
    return (
      <div ref="buttonContainer" className={show_back_class}>
        <div className="front" onClick={this.onDeleteClick}><span>Delete</span></div>
        <div className="back">
          <div>
            <span className="you_sure">Are you sure?</span>
            <div>
              <button onClick={this.props.onDeleteConfirm}>Yes</button>
              <button onClick={this.onCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var TodoTweetStatus = React.createClass({
  propTypes: {
    itemsDone: React.PropTypes.number,
    itemsTotal: React.PropTypes.number,
    lastUpdate: React.PropTypes.string
  },

  render: function() {
    var time = encodeURIComponent(this.props.lastUpdate);
    var tweetURL = "https://twitter.com/intent/tweet?text=I've+finished+*+out+of+%+items+as+of+^".replace('*', this.props.itemsDone).replace('%', this.props.itemsTotal).replace('^', time);
    return (
      <div className="tweet_status">
        <a href={tweetURL} target="new">Tweet Status</a>
      </div>
    );
  }
});

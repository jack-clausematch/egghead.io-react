var App = React.createClass({
  getDefaultProps:function(){
    return {
      txt: 'this is a default prop'
    }
  },
  propTypes: {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
  },
  render:function(){
    var txt = this.props.txt
    return (
      <div>
        <b>BOLD</b>
        <h1>{txt}</h1>
      </div>
      );

  }
});

React.render(<App />, document.body);

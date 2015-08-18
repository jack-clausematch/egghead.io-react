var App = React.createClass({
  getInitialState:function(){
    return {
      txt: 'this is a default prop',
      id: 0
    }
  },
  update: function (e) {
    this.setState({ txt: e.target.value });
  },
  render:function(){
    var txt = this.state.txt
    return (
      <div>
        <input type="type" onChange={this.update} />
        <h1>{txt}</h1>
      </div>
    );
  }
});

React.render(<App />, document.body);

var App = React.createClass({
  getInitialState:function(){
    return {
      txt: ''
    };
  },
  update: function (e) {
    this.setState({ txt: e.target.value });
  },
  render:function () {
    return (
      <div>
        <Widget txt={this.state.txt || this.props.txt } update={this.update}></Widget>
        <Widget txt={this.state.txt || this.props.txt } update={this.update}></Widget>
        <Widget txt={this.state.txt || this.props.txt } update={this.update}></Widget>
      </div>
    );
  }
});

var Widget = React.createClass({
  render: function () {
    return (
      <div>
        <input type="type" onChange={this.props.update} />
        <h1>{this.props.txt}</h1>
      </div>
    );
  }
});

React.render(<App txt="TXT_PROP" />, document.body);

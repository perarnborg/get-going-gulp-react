var Color = React.createClass({
  render: function() {
    return (
      <li className="color" style={{color: this.props.color}}>
        {this.props.children}
      </li>
    );
  }
});


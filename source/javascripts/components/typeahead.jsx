var Typeahead = React.createClass({
  getInitialState: function() {
    return {value: this.props.value};
  },
  componentDidMount: function() {
    var self = this;

    var query = function(q, cb) {

      var matches, substrRegex;

      // an array that will be populated with substring matches
      matches = [];

      // regex used to determine if a string contains the substring `q`
      substrRegex = new RegExp(q, 'i');

      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      $.each(self.props.options, function(i, item) {
        if (substrRegex.test(item[self.props.label])) {
          matches.push(item);
        }
      });

      cb(matches);
    };

    var el = $('#typeahead-' + self.props.id);

    el.typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: self.props.id,
      displayKey: self.props.label,
      source: query
    });

    var select = function(item) {
      self.setState({value: item[self.props.label]});
      self.props.update(item);
    }

    el.on('typeahead:select', function(e, item) {
      select(item);
    });
    el.on('typeahead:autocomplete', function(e, item) {
      select(item);
    });
  },
  render: function() {
    return (
      <input id={'typeahead-' + this.props.id} class="typeahead" type="text" placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.handleTextChange}/>
    );
  }
});

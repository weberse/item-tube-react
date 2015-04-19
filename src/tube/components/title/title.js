var React = require('react');
var converter = new Showdown.converter();

var Title = React.createClass({
	render: function (){
		return (
			<div>
				<div dangerouslySetInnerHTML={{__html: converter.makeHtml('#')}} />
			</div>
		)
	}
});

module.exports = Title;
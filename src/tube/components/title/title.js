var React = require('react');
var converter = new Showdown.converter();

var Title = React.createClass({
	render: function (){
		return (
			<div>
				{converter.makeHtml('***title')}
			</div>
		)
	}
}); 

module.exports = Title;
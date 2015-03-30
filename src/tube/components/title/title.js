
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
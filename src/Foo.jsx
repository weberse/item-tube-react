'use strict';

var React = require('react');

class Foo {
    getDefaultProps() {
        return {
             message: 'No message'   
        }
    }
    
    getInitialState() {
        return {
            message: 'Click me!'
        };
    }
    
    componentWillMount() {}
    
    render() {        
        return <div onClick={this.onClick}>{this.state.message}</div>
    }
    
    onClick() {
        this.setState({message: 'You clicked me'});
    }
}

module.exports = React.createClass(Foo.prototype)
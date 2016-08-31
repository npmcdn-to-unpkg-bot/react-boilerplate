// Here is where it all comes together, the main container
var Container = React.createClass({
    displayName: 'Container',
    render() {
        return (
            <div className="container" >
                <h1>Hello World!</h1>
                <Nonsense />
            </div>
        );
    }
});

ReactDOM.render(
    <Container data={data} />,
    document.getElementById('Target')
);
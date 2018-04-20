var Counter = React.createClass({
    
    getInitialState: function(){
        return {
        
            counter: 0
        };
        
    },
    
    increment: function(){
        this.setState({
            counter: this.state.counter + 1
        });
    },
    
    decrement: function(){
        this.setState({
            counter: this.state.counter - 1
        });
    },
    
    getDefaultProps: function(){
        console.log('Ustawia domyślne wartości propsów');
    },
    
    componentWillMount: function() {
        console.log('Wykonywana przed renderowaniem, w momencie inicjacji komponentu');
    },
    
    componentDidMount: function() {
        console.log('wykonywana po renderowaniu, kiedy DOM jest już załadowany i można na nim pracować');
    },
    
    componentWillReceiveProps: function(){
        console.log('wywoływana tylko przy pojawieniu się nowych propsów');
    },
    
    shouldComponentUpdate: function(){
        console.log('sprawdza czy trzeba przeryować komponent, zwraca jest wartość true lub false');
        return true;
    },
    
    componentWillUpdate: function(){
        console.log('Podobnie jak componentWIllMount, możemy operować na DOM');
    },
    
    componentWillUnmount: function(){
        console.log('W tym momencie można anulować EventListenery przypisane do elementu, podobna do componentDidMount');
    },
    
    
    render: function(){
        return (
                React.createElement('div', {className: 'counter'},
                    React.createElement('span', {}, 'Licznik: ' + this.state.counter),
                    React.createElement('div', {}, 
                        React.createElement('button', {
                            onClick: this.increment},'Increment'),
                            
                        React.createElement('button', {
                            onClick: this.decrement}, 'Decrement')
                    )
                )
        );
    }
});

var element = React.createElement('div', {className: 'container'},
        React.createElement('h1', {}, 'Counter'),
        React.createElement(Counter),
        React.createElement(Counter)
    );

ReactDOM.render(element, document.getElementById('app'));
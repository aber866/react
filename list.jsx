const pokemons = [
	{ number: 1, name: 'Bulbasur' },
	{ number: 2, name: 'Ivysaur' },
	{ number: 3, name: 'Venusaur' }
];

class PokeAvatar extends React.Component {
    render() {
        var url = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.number}.png`;
        return <img src={url} className='avatar' />
    }
}

class PokeRow extends React.Component {
	render() {
		return <div className='row'>
				<PokeAvatar number={ this.props.number } />
				{ this.props.name }
			</div>
	}
}

let pokemon = pokemons[0];

React.render(<PokeRow name={pokemon.name} number={pokemon.number} />,
document.getElementById('container'));
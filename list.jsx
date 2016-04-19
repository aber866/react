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
		return <li className='row'>
				<PokeAvatar number={ this.props.number } />
				{ this.props.name }
			</li>
	}
}

class PokeTable extends React.Component {
    render() {
        return <ul className="pokeTable">
        		{
        			this.props.pokemons.map((pokemon) => {
        				return <PokeRow key={pokemon.number} name={pokemon.name} number={pokemon.number} />
        			})
        		}
	        </ul>;
    }
}

let pokemon = pokemons[0];

React.render(<PokeTable pokemons={pokemons} />,
	document.getElementById('container'));
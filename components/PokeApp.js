/*
 * Module dependencies
 */

import React from 'react';
import PokeTable from './PokeTable';
import PokeChat from './PokeChat';
import uid from 'uid';

export default class PokeApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = { messages: [] };
		this.onGrowl = this.onGrowl.bind(this);
	}

	onGrowl(name) { //Queremos que se ejecute cada vez que se haga click. para eso se pasa como atributo a Poketable
		let text = `${name}, ${name}!`;
		let message = { id: uid(), text };
		this.state.messages.push(message);
		let messages = this.state.messages;
		this.setState({ messages: messages });
	}

	render() {
		const pokemons = [
			{ number: 1, name: 'Bulbasaur' },
			{ number: 2, name: 'Ivysaur' },
			{ number: 3, name: 'Venusaur' },
		];
		//Se le pasa la funcion para abajo con props, la del ongrowl. los de abajo 
		//tienen props y reciben el nuevo state del de arriba
		return <div className="pokeapp">
			<PokeTable pokemons={pokemons} onGrowl={ this.onGrowl } />
			<PokeChat messages={this.state.messages} />
		</div>
	}
}
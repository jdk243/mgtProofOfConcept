import React from 'react';

const CardResult = ( {
	name,
	manaCost,
	type,
	rarity,
	setName,
	text,
	imageUrl
} ) => {
	return(
		<div>
			<h2>{ name }</h2>
			<div>
				<img src={ imageUrl }/>
			</div>
			<div>
				<p>{ text }</p>
			</div>
		</div>
	);
};

CardResult.propTypes = {
	name: React.PropTypes.string,
	manaCost: React.PropTypes.string,
	cmc: React.PropTypes.number,
	colors: React.PropTypes.arrayOf( React.PropTypes.string ),
	colorIdentity: React.PropTypes.arrayOf( React.PropTypes.string ),
	type: React.PropTypes.string,
	supertypes: React.PropTypes.arrayOf( React.PropTypes.string ),
	types: React.PropTypes.arrayOf( React.PropTypes.string ),
	subtypes: React.PropTypes.arrayOf( React.PropTypes.string ),
	rarity: React.PropTypes.string,
	set: React.PropTypes.string,
	setName: React.PropTypes.string,
	text: React.PropTypes.string,
	artist: React.PropTypes.string,
	number: React.PropTypes.string,
	power: React.PropTypes.number,
	toughness: React.PropTypes.number,
	layout: React.PropTypes.string,
	multiverseid: React.PropTypes.number,
	imageUrl: React.PropTypes.string,
	loyalty: React.PropTypes.number,
	releaseDate: React.PropTypes.string,
	rulings: React.PropTypes.arrayOf( React.PropTypes.shape( { date: React.PropTypes.string, text: React.PropTypes.string } ) ),
	foreignNames: React.PropTypes.arrayOf( React.PropTypes.shape( { name: React.PropTypes.string, language: React.PropTypes.string } ) ),
	printings: React.PropTypes.arrayOf( React.PropTypes.string ),
	originalText: React.PropTypes.string,
	originalType: React.PropTypes.string,	
	legalities: React.PropTypes.arrayOf( React.PropTypes.shape( { format: React.PropTypes.string, legality: React.PropTypes.string } ) ),
	source: React.PropTypes.string,
	id: React.PropTypes.string 	
};

export default CardResult; 



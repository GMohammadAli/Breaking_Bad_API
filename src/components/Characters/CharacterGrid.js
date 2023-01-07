import React from 'react';
import Spinner from '../UI/Spinner';
import CharacterItem from './CharacterItem';

const CharacterGrid = ({isLoading, items}) => {
  return isLoading ? (<h1><Spinner /></h1>) : (<section className='cards'>{items.map(item => (
    <CharacterItem key={item.char_id} item={item} />
  ))}</section >)
}

export default CharacterGrid;

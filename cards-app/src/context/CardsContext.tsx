import ICard from 'models/Card';
import React from 'react';

const CardsContext = React.createContext<ICard[]>([]);

export default CardsContext;

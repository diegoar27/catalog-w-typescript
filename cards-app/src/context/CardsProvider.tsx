import ICard from 'models/Card';
import PropTypes from 'prop-types';
import React, { ReactNode, useEffect, useState } from 'react';
import api from 'services/api/cardApi';
import CardsContext from './CardsContext';

const CardsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cardList, setCardList] = useState<ICard[]>([]);

    useEffect(() => {
        // call api to get cards
        api.addNew({ title: '1', description: 'desc 1', imageUrl: 'https://picsum.photos/200' });
        api.addNew({ title: '2', description: 'desc 2', imageUrl: 'https://picsum.photos/200' });
        api.addNew({ title: '3', description: 'desc 1', imageUrl: 'https://picsum.photos/200' });

        const list = api.getCards();
        setCardList(list);
    }, []);

    return <CardsContext.Provider value={cardList}>{children}</CardsContext.Provider>;
};

CardsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CardsProvider;

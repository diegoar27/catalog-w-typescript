import { render, RenderResult } from '@testing-library/react';
import CardsContext from 'context/CardsContext';
import ICard from 'models/Card';
import React from 'react';
import CardList from './CardList';

const list = [
    { title: 'test 1', description: 'desc', imageUrl: 'image' },
    { title: 'test 2', description: 'desc2', imageUrl: 'image' },
];
const renderCardList = (cards: ICard[]) =>
    render(
        <CardsContext.Provider value={cards}>
            <CardList />
        </CardsContext.Provider>,
    );

let wrapper: RenderResult;

describe('Card list component', () => {
    describe('Check struct', () => {
        describe('With items in the list', () => {
            beforeEach(() => {
                wrapper = renderCardList(list);
            });
            test('render card list component and cards', () => {
                expect(wrapper.getByTestId('list')).toBeTruthy();
                list.forEach((x) => {
                    expect(wrapper.getByText(x.title)).toBeTruthy();
                    expect(wrapper.getByText(x.description)).toBeTruthy();
                });
            });
        });
        describe('Without items in the list', () => {
            beforeEach(() => {
                wrapper = renderCardList([]);
            });
            test('render card list component', () => {
                expect(wrapper.getByTestId('list').children.length).toBe(1);
            });
        });
    });
});

import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import Card from './Card';

const mockCard = {
    title: 'test',
    description: 'my descrition',
    imageUrl: 'someImage',
};

let wrapper: RenderResult;

describe('Card component', () => {
    describe('Check struct', () => {
        beforeEach(() => {
            wrapper = render(<Card {...mockCard} />);
        });
        test('render card component title', () => {
            expect(wrapper.getByText(mockCard.title)).toBeInTheDocument();
        });
        test('render card component description', () => {
            expect(wrapper.getByText(mockCard.description)).toBeInTheDocument();
        });
        test('render card component image', () => {
            const displayedImage = document.querySelector('img') as HTMLImageElement;
            expect(displayedImage.src).toContain(mockCard.imageUrl);
        });
    });
});

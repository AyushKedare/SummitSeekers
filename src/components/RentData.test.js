import React from 'react';
import { render, screen } from '@testing-library/react';
import RentData from './RentData';

test('renders rental data correctly', () => {
  const testData = {
    image: 'path/to/image.jpg',
    heading: 'Product Title',
    price: 'Rs.50',
    text: 'Product description goes here.',
  };
 
  render(<RentData {...testData} />);

  // Assertions
  expect(screen.getByAltText('image')).toBeInTheDocument();
  expect(screen.getByText('Product Title')).toBeInTheDocument();
  expect(screen.getByText('Rs.50')).toBeInTheDocument();
  expect(screen.getByText('Product description goes here.')).toBeInTheDocument();

  const buyButton = screen.getByText('Buy');
  expect(buyButton).toBeInTheDocument();
  expect(buyButton.closest('a')).toHaveAttribute('href', '/payment');
});

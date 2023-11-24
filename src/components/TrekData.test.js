import React from 'react';
import { render, screen } from '@testing-library/react';
import TrekData from './TrekData';

test('renders trek data correctly', () => {
  const testData = {
    image: 'path/to/image.jpg',
    heading: 'Trek Title',
    Location: 'Trek Location',
    Difficulty: 'Medium',
    AgeGroup: '18-30',
    Facilities: 'Camping, Meals',
    Dates: '2023-01-01',
    Price: 'Rs.100', 
  };

  render(<TrekData {...testData} />);

  // Assertions
  expect(screen.getByAltText('image')).toBeInTheDocument();
  expect(screen.getByText('Trek Title')).toBeInTheDocument();
  expect(screen.getByText('Trek Location')).toBeInTheDocument();
  expect(screen.getByText('Medium')).toBeInTheDocument(); // Assuming Difficulty is a string
  expect(screen.getByText('18-30')).toBeInTheDocument(); // Assuming AgeGroup is a string
  expect(screen.getByText('Camping, Meals')).toBeInTheDocument(); // Assuming Facilities is a string
  expect(screen.getByText('2023-01-01')).toBeInTheDocument(); // Assuming Dates is a string
  expect(screen.getByText('Rs.100')).toBeInTheDocument(); // Assuming Price is a string

  // Example: Assert that the "Book Seats" button contains a link to "/payment"
  const bookSeatsButton = screen.getByText('Book Seats');
  expect(bookSeatsButton).toBeInTheDocument();
  expect(bookSeatsButton.closest('a')).toHaveAttribute('href', '/payment');
});

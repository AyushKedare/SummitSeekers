// TrekGalleryData.test.js
import React from 'react';
import { render } from '@testing-library/react';
import TrekGalleryData from './TrekGalleryData';

// Mock the CSS file import
jest.mock('./TrekGallery.css', () => ({}));

describe('TrekGalleryData component', () => {
  it('renders gallery data correctly', () => {
    const trekGalleryData = {
      image: 'path/to/image.jpg',
      heading: 'Trekking Adventure',
    };
 
    const { getByAltText, getByText } = render(
      <TrekGalleryData image={trekGalleryData.image} heading={trekGalleryData.heading} />
    );

    // Assertions to check if the component renders the correct information
    expect(getByAltText('image')).toBeInTheDocument();
    expect(getByText(trekGalleryData.heading)).toBeInTheDocument();
  });
});

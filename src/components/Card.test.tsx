import { render, screen } from '@testing-library/react';
import Card from './Card';
import '@testing-library/jest-dom';

describe('Card Component', () => {
  test('Card renders Form Component', () => {
    render(<Card />);
    expect(screen.getByTestId('form-component')).toBeInTheDocument();
  });

  test('Card Renders Image component', () => {
    render(<Card />);
    expect(screen.getByTestId('image-component')).toBeInTheDocument();
  });
});

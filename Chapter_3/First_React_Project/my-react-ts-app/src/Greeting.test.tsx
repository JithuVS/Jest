import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Greeting from './Greeting'; // Adjust the import path as necessary

describe('Greeting Component', () => {
  test('renders the correct greeting text', () => {
    const testName = 'John Doe';
    render(<Greeting name={testName} />);
    const greetingElement = screen.getByText(`Hello, ${testName}!`);
    expect(greetingElement).toBeInTheDocument();
  });
});





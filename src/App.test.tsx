import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders the app without errors', () => {
    render(<App />);

    // Check if the character list is rendered
    const characterListElement = screen.getByText(/Character list/i);
    expect(characterListElement).toBeInTheDocument();

    // Check if the character detail page is rendered
    const characterDetailPageElement = screen.queryByText(/Character detail page/i);
    expect(characterDetailPageElement).not.toBeInTheDocument();
  });
});
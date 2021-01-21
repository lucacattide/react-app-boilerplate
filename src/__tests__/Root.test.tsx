// Module Start
// JS Imports
import React from 'react';
import { render, screen } from '@testing-library/react';
import Root from '../components/Root';
import client from '../backend/apollo';

const component = <Root client={client} />;

// Index Unit Testing
describe('Root unit test', () => {
  test('It renders the root', () => {
    render(component);
    expect(screen.getByTestId('app')).toBeInTheDocument();
  });
});
// Module End

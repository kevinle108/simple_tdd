/** 
 * @jest-environment jsdom
*/

import index from '../routes/index.svelte';
import {render, screen, fireEvent } from '@testing-library/svelte';
import axios from 'axios';

it('displays button', () => {
  render(index);
  const button = screen.getByRole('button', {name: 'Load Random User'});
  expect(button).toBeInTheDocument();
});

it('displays title, first and lastname of user',async () => {
  render(index);
  const button = screen.getByRole('button', {name: 'Load Random User'});
  
  axios.get = jest.fn().mockResolvedValue({
    data: {
      results: [
        {
          name: {
            title: 'Mr',
            first: 'Kevin',
            last: 'Le'
          }
        }
      ]
    }
  });
  
  fireEvent.click(button);
  const userFullName = await screen.findByText('Mr Kevin Le');

  expect(userFullName).toBeInTheDocument();
})
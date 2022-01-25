/** 
 * @jest-environment jsdom
*/

import index from '../routes/index.svelte';
import {render, screen} from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';


it('displays button', () => {
  render(index);
  const button = screen.getByRole('button', {name: 'Load Random User'});
  expect(button).toBeInTheDocument();
});
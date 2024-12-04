import React from 'react';

import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Page from '../page';

describe('Page', () => {
  it('renders a link to docs', () => {
    const { queryByText } = render(<Page />);

    expect(queryByText('Read our docs')?.getAttribute('href')).toBe(
      '1https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    );
  });
});

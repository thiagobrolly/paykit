import React from 'react';
import { render } from '@testing-library/react';

import { Card } from '.';

describe('<Card />', () => {
  it('should render the heading', () => {
    render(<Card>Title</Card>);
  });
});

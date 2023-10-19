import { render } from '@testing-library/react';

import RemoteMfe1 from './app';

describe('RemoteMfe1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RemoteMfe1 />);
    expect(baseElement).toBeTruthy();
  });
});

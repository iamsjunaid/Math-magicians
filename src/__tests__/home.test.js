import { render } from '@testing-library/react';
import Home from '../components/Home';

test('renders Home correctly', () => {
  const { container } = render(
    <Home />,
  );
  expect(container).toMatchSnapshot();
});

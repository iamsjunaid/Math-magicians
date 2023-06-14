import { render } from '@testing-library/react';
import Quote from '../components/Quote';

test('renders FetchQuote correctly', () => {
  const { container } = render(
    <Quote />,
  );
  expect(container).toMatchSnapshot();
});

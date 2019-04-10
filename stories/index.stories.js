import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import Bubble from '../components/bubble.tsx';

storiesOf('Bubble', module)
.add('with text', () => ({
  Component: Bubble,
}));

import { render } from '../controllers/render';
import { header } from './components/header';
import { wrapper } from './components/wrapper';
import { sidebar } from './components/sidebar';
import { main } from './components/main';

export const app = () => {
  render(header);
  render(wrapper);
  render(sidebar, $('#wrap'));
  render(main, $('#wrap'));
}
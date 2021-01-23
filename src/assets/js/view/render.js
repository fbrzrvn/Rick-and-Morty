import { render } from '../controller/render';
import { header } from './components/header';
import { wrapper } from './components/wrapper';
import { sidebar } from './components/sidebar';
import { renderEpisodes } from '../controller/render';
import { main } from './components/main';


export const app = () => {
  render(header);
  render(wrapper);
  render(sidebar, $('#wrap'));
  renderEpisodes();
  render(main, $('#wrap'));
}
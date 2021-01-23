import { render } from '../controller/render';
import { header } from './components/header';
import { wrapper } from './components/wrapper';
import { sidebar } from './components/sidebar';
import { renderEpisodes, loadEpisodes } from '../controller/render';
import { main } from './components/main';


export const app = () => {
  render(header);
  render(wrapper);
  render(sidebar, $('#wrap'));
  renderEpisodes();
  loadEpisodes();
  render(main, $('#wrap'));
}
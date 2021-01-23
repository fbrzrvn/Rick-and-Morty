import { render, loadEpisodes, showEpisode } from '../controller/render';
import { header } from './components/header';
import { wrapper } from './components/wrapper';
import { sidebar } from './components/sidebar';
import { main } from './components/main';


export const app = () => {
  render(header);
  render(wrapper);
  render(sidebar, $('#wrap'));
  loadEpisodes();
  render(main, $('#wrap'));
  showEpisode();
}
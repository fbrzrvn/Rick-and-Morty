import { render } from '../controllers/render';
import { header } from './components/header';
import { wrapper } from './components/wrapper';
import { sidebar, sidebarLink } from './components/sidebar';
import { getEpisodes } from '../controllers/api';
import { main } from './components/main';

export const app = () => {
  render(header);
  render(wrapper);
  render(sidebar, $('#wrap'));
  getEpisodes().then(response => {
    render(sidebarLink(response.data.results), '[data-episodes-list]');
  })
  render(main, $('#wrap'));
}
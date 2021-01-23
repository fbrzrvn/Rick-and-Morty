import { getEpisodes } from '../model/api';
import { sidebarLink } from '../view/components/sidebar';


export const render = (fragment, element="#root") => {
  $(element).append(fragment);
}

export const renderEpisodes = () => {
  getEpisodes().then(response => {
    render(sidebarLink(response.data.results), '[data-episodes-list]');
  })
}
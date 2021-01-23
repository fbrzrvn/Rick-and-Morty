import { getEpisodes, getUrl } from '../model/api';
import { sidebarLink } from '../view/components/sidebar';
import { mainContainer } from '../view/components/main';


export const render = (fragment, element="#root") => {
  $(element).append(fragment);
}

export const renderEpisodes = () => {
  getEpisodes().then(response => {
    render(sidebarLink(response.data.results), '[data-episodes-list]');
  })
}

export const loadEpisodes = () => {
  let page = 1;
  $('#load-episodes').on('click', () => {
    getUrl(`https://rickandmortyapi.com/api/episode?page=${page}`)
    .then(response => {
      render(sidebarLink(response.data.results), '[data-episodes-list]');
      page++;
      if (page > response.data.info.pages) {
        $('#load-episodes').attr('disabled', true);
      }
    })
  })
}

export const showEpisode = () => {
  $('[data-episodes-list]').on('click', e => {
    if (e.target.tagName.toLocaleLowerCase() === 'a') {
      const url = e.target.id;
      getUrl(url).then(response => {
        render(mainContainer(response.data), '.main');
      })
    }
  })
}
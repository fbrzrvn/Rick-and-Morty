import { getUrl } from '../model/api';
import { sidebarLink } from '../view/components/sidebar';
import { characterCard, characterEpisode, characterView, mainContainer } from '../view/components/main';


export const render = (fragment, element="#root") => {
  $(element).append(fragment);
}

export const loadEpisodes = () => {
  const url = "https://rickandmortyapi.com/api/episode";
  let page = 1;
  $('#load-episodes').on('click', () => {
    getUrl(`${url}?page=${page}`).then(response => {
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

        response.data.characters.forEach(character => {
          getUrl(character).then(response => {
            render(characterCard(response.data), '.char-container');
          })
        })
      })
    }
  })
}

export const showCharacter = () => {
  $('.main').on('click', e => {
    if (e.target.tagName.toLocaleLowerCase() === 'h3') {
      const url = e.target.id;
      getUrl(url).then(response => {
        render(characterView(response.data), '.main');

        response.data.episode.forEach(episode => {
          getUrl(episode).then(response => {
            render(characterEpisode(response.data), '.char-episodes');
          })
        })
      })

    } else if (e.target.tagName.toLowerCase() === 'h4') {
      const url = e.target.id;
      getUrl(url).then(response => {
        render(mainContainer(response.data), '.main');

        response.data.characters.forEach(character => {
          getUrl(character).then(response => {
            render(characterCard(response.data), '.char-container');
          })
        })
      })
    }
  })
}
export const main = () => {
  const template =
    `
      <main class="main"></main>
    `
  return template;
}

export const mainContainer = episode => {
  $('main').empty();
  const fragment = $(document.createDocumentFragment());
  const episodeContainer = $('<div class="episode-container"></div>');
  const episodeHeader = $(`<div class="episode-header"></div>`);
  const episodeName = $('<h2 class="episode-name"></h2>').text(episode.name);
  const episodeDetails = $('<span class="episode-details"></span>');
  episodeDetails.text(`${episode.air_date} | ${episode.episode}`);
  episodeHeader.append(episodeName, episodeDetails);
  episodeContainer.append(episodeHeader);
  $(fragment).append(episodeContainer);
  return fragment;
}
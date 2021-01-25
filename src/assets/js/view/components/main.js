export const main = () => {
  const template =
    `
      <main class="main">
        <img src="https://i.pinimg.com/originals/70/cd/a4/70cda40d6679e21eb760dd3e35a26e7c.gif" alt="bg" class="main-gif">
      </main>
    `
  return template;
}

export const mainContainer = episode => {
  $('main').empty();
  const fragment = $(document.createDocumentFragment());
  const episodeContainer = $('<div class="episode-container"></div>');
  const episodeHeader = $(`<div class="episode-header"></div>`);
  const episodeName = $('<h2 class="episode-name"></h2>').text(episode.name);
  const episodeDetails = $('<p class="episode-details"></p>');
  episodeDetails.text(`${episode.air_date} | ${episode.episode}`);
  const charContainer = $('<div class="char-container"></div>');
  episodeHeader.append(episodeName, episodeDetails);
  episodeContainer.append(episodeHeader, charContainer);
  $(fragment).append(episodeContainer);
  return fragment;
}

export const characterCard = character => {
  const fragment = $(document.createDocumentFragment());
  const charCard = $('<div class="char-card"></div');
  const charHero = $('<div class="char-img"></div>');
  const charImg = $(`<img src="${character.image}" alt="${character.name}">`);
  const charBody = $('<div class="char-body"></div>');
  const charName = $(`<h3 class="char-name" id="${character.url}"></h3>`).text(character.name);
  const charDetails = $('<p class="char-details"></p>');
  charDetails.text(`${character.species} | ${character.status}`);
  charHero.append(charImg);
  charBody.append(charName, charDetails);
  charCard.append(charHero, charBody);
  $(fragment).append(charCard);
  return fragment;
}

export const characterView = character => {
  $('main').empty();
  const fragment = $(document.createDocumentFragment());
  const charContainer = $('<div class="char-wrapper"></div');
  const charHero = $('<div class="char-hero">');
  const charLeft = $('<div class="char-left">');
  const charImg = $(`<img src="${character.image}" alt="${character.name}">`);
  const charRigth = $('<div class="char-right"></div>');
  const charName = $(`<h3 class="char-name" id="${character.url}"></h3>`).text(character.name);
  const charDetails = $('<p class="char-details"></p>');
  charDetails.text(`${character.species} | ${character.status} | ${character.gender} | ${character.location.name}`);
  const locationBtn = $(`<button class="location-btn" id="${character.location.url}"></button>`);
  locationBtn.text('view location');
  const charEpisodes = $('<div class="char-episodes"></div>');
  charLeft.append(charImg);
  charRigth.append(charName, charDetails, locationBtn);
  charHero.append(charLeft, charRigth);
  charContainer.append(charHero, charEpisodes);
  $(fragment).append(charContainer);
  return fragment;
}

export const characterEpisode = episode => {
  const fragment = $(document.createDocumentFragment());
  const charEpisode = $('<div class="char-episode"></div>');
  const episodeTitle = $(`<h4 class="char-name" id="${episode.url}"></h4>`);
  episodeTitle.text(`Episode: ${episode.id}`);
  const episodeDetails = $('<p class="char-details"></p>');
  episodeDetails.text(episode.episode);
  charEpisode.append(episodeTitle, episodeDetails);
  $(fragment).append(charEpisode);
  return fragment;
};

export const locationView = location => {
  $('.main').empty();
  const fragment = $(document.createDocumentFragment());
  const locationContainer = $('<div class="location-container"></div>');
  const locationHeader = $('<div class="location-header"></div>');
  const locationName = $('<h2 class="location-name"></h2>').text(location.name);
  const locationDetails = $('<p class="location-details"></p>');
  locationDetails.text(`${location.type} | ${location.dimension}`);
  const locationResidents = $('<div class="char-container"></div>');
  locationHeader.append(locationName, locationDetails);
  locationContainer.append(locationHeader, locationResidents);
  $(fragment).append(locationContainer);
  return fragment;
}

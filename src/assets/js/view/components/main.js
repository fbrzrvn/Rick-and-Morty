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
  const episodeContainer = $('<div class="container"></div>');
  const episodeHeader = $(`<div class="container-header"></div>`);
  const episodeName = $('<h2 class="name-big"></h2>').text(episode.name);
  const episodeDetails = $('<p class="details-big"></p>');
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
  const charImg = $(`<img class="image" src="${character.image}" alt="${character.name}">`);
  const charBody = $('<div class="char-body"></div>');
  const charName = $(`<h3 class="name-small" id="${character.url}"></h3>`).text(character.name);
  const charDetails = $('<p class="details-small"></p>');
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
  const charContainer = $('<div class="container"></div');
  const charHero = $('<div class="char-hero">');
  const charLeft = $('<div class="char-left">');
  const charImg = $(`<img class="image" src="${character.image}" alt="${character.name}">`);
  const charRigth = $('<div class="char-right"></div>');
  const charName = $(`<h3 class="name-big" id="${character.url}"></h3>`).text(character.name);
  const charDetails = $('<p class="details-big"></p>');
  charDetails.text(`${character.species} | ${character.status} | ${character.gender} | ${character.origin.name}`);
  const locationBtn = $(`<button class="btn" id="${character.location.url}"></button>`);
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
  const episodeTitle = $(`<h4 class="name-small" id="${episode.url}"></h4>`);
  episodeTitle.text(`Episode: ${episode.id}`);
  const episodeDetails = $('<p class="details-small"></p>');
  episodeDetails.text(episode.episode);
  charEpisode.append(episodeTitle, episodeDetails);
  $(fragment).append(charEpisode);
  return fragment;
};

export const locationView = location => {
  $('.main').empty();
  const fragment = $(document.createDocumentFragment());
  const locationContainer = $('<div class="container"></div>');
  const locationHeader = $('<div class="container-header"></div>');
  const locationName = $('<h2 class="name-big"></h2>').text(location.name);
  const locationDetails = $('<p class="details-big"></p>');
  locationDetails.text(`${location.type} | ${location.dimension}`);
  const locationResidents = $('<div class="char-container"></div>');
  locationHeader.append(locationName, locationDetails);
  locationContainer.append(locationHeader, locationResidents);
  $(fragment).append(locationContainer);
  return fragment;
}

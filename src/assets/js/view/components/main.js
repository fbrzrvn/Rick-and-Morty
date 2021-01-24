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
  charDetails.text(`${character.species} | ${character.status} | ${character.gender} | ${character.origin.name}`);
  charLeft.append(charImg);
  charRigth.append(charName, charDetails);
  charHero.append(charLeft, charRigth);
  charContainer.append(charHero);
  $(fragment).append(charContainer);
  return fragment;
}
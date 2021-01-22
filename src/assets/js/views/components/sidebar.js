export const sidebar = () => {
  const template =
    `
      <aside class="sidebar">
        <ul class="sidebar-list" data-episodes-list></ul>
        <button class="sidebar-btn">Load More Episode</button>
      </aside>
    `;
  return template;
}

export const sidebarLink = data => {
  const fragment = $(document.createDocumentFragment());
  data.forEach(element => {
    const item = $('<li class="sidebar-item"></li>');
    const link = $(`<a href="${element.url} class="sidebar-link"></a>`);
    link.text(`Episode: ${element.id}`);
    item.append(link)
    $(fragment).append(item);
  });
  return fragment;
};
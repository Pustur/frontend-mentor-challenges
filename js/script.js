// Functions
function projectToHtml({ name, slug, tags, description }) {
  const tagsHtml = tags
    .map(tag => `<li class="tag tag-${tag}">${tag.toUpperCase()}</li>`)
    .join('');

  return `<li class="projects-list__item">
      <a class="projects-list__link" href="./${slug}">
        <div class="projects-list__item-contents">
          <div class="projects-list__image-container">
            <img
              class="projects-list__image"
              src="./${slug}/design/desktop-design.jpg"
              alt="${name}"
            />
            <ul class="projects-list__tags">${tagsHtml}</ul>
          </div>
          <div class="projects-list__info">
            <h3>${name}</h3>
            <p class="projects-list__description">${description}</p>
          </div>
        </div>
      </a>
    </li>`;
}

// Variables
const projects = [
  {
    name: 'Article preview component',
    slug: 'article-preview-component',
    tags: ['html', 'css', 'js'],
    description:
      "Practice your layout skills with this article preview component. There's lots of fun to be had playing around with animations for the sharing icons as well.",
  },
];
const projectsList = document.querySelector('.js-projects-list');
const projectsHtml = projects.map(projectToHtml).join('');

// Init
projectsList.innerHTML = projectsHtml;

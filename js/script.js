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
              src="./${slug}/design/desktop-preview.jpg"
              alt="${name}"
              width="900"
              height="660"
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
  {
    name: 'Ping single column coming soon page',
    slug: 'ping-coming-soon-page',
    tags: ['html', 'css', 'js'],
    description:
      'This challenge is great for beginners and offers a chance to practice basic client-side form validation.',
  },
  {
    name: 'Intro component with sign-up form',
    slug: 'intro-component-with-signup-form',
    tags: ['html', 'css', 'js'],
    description:
      'Practice building out a sign-up form complete with client-side validation using JavaScript.',
  },
  {
    name: 'Fylo data storage component',
    slug: 'fylo-data-storage-component',
    tags: ['html', 'css'],
    description:
      "This component has some interesting CSS challenges in the design. If you're looking to test your CSS skills, this will be a great project for you!",
  },
  {
    name: 'Four card feature section',
    slug: 'four-card-feature-section',
    tags: ['html', 'css'],
    description:
      'A nice layout-based challenge for beginners. This will test anyone who is new to multi-column and responsive layouts.',
  },
  {
    name: 'Profile card component',
    slug: 'profile-card-component',
    tags: ['html', 'css'],
    description:
      "This is a perfect challenge to test your layout skills. The card layout doesn't shift, so it's also great for those that haven't dived into responsive websites yet!",
  },
  {
    name: 'Single price grid component',
    slug: 'single-price-grid-component',
    tags: ['html', 'css'],
    description:
      'In this challenge, you will build out the pricing component to the designs provided. This is perfect for beginners and people who want to complete a smaller challenge.',
  },
  {
    name: 'Base Apparel coming soon page',
    slug: 'base-apparel-coming-soon',
    tags: ['html', 'css', 'js'],
    description:
      "This layout looks simple enough, but there are some interesting details to it that will test your CSS skills. You'll also get to practice basic form validation.",
  },
];
const projectsList = document.querySelector('.js-projects-list');
const projectsHtml = projects.map(projectToHtml).join('');

// Init
projectsList.innerHTML = projectsHtml;

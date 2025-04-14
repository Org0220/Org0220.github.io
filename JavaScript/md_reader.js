const postsList = document.getElementById('posts-list'); //this doesnt exist yet, might need to add ways to disable this on other pages
const projectsList = document.getElementById('projects-list');
const converter = new showdown.Converter({
    simpleLineBreaks: true,
    strikethrough: true,
    tables: true,
});

const baseUrl = "https://api.github.com/repos/shahebannis/web-portfolio/contents/"; //why add fetching from github? why not just fetch from the local folder?
const folders = ['projects', 'blog'];

async function fetchMarkdownFiles(folder) {
    const response = await fetch(`${baseUrl}${folder}`);
    const files = await response.json();
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const randomFiles = shuffleArray(files);
    // const maxVisibleItems = folder === 'posts' ? 3 : folder === 'projects' ? 5 : Infinity;
    let itemCount = 0;

    for (const file of randomFiles) {
    if (file.name.endsWith('.md')) {
        const fileRes = await fetch(file.download_url);
        const mdContent = await fileRes.text();
        const mdWithLineBreaks = mdContent.replace(/\n/g, '  \n');
        const htmlContent = converter.makeHtml(mdWithLineBreaks);

        const title = mdContent.split('\n')[0].replace(/^#+\s*/, '');
        const link = mdContent.split('\n')[0].replace(/([\w+]+\:\/\/)?([\w\d-]+\.)*[\w-]+[\.\:]\w+([\/\?\=\&\#.]?[\w-]+)*\/?/gm)
        const contentWithoutTitle = mdContent.replace(/^.+\n/, '');
        const htmlContentWithoutTitle = converter.makeHtml(contentWithoutTitle);
        const fileCard = document.createElement('div');
        fileCard.className = 'project-card';
        fileCard.innerHTML = `
            <h2 class="text-2xl font-bold">${title}</h2>
            <p class="mt-2">${htmlContentWithoutTitle}</p>
            <a href="${link}" target="_blank" class="project-link mt-4 inline-block">View on GitHub</a>
        `; // add the line <a href="${link}" target="_blank" class="project-link mt-4 inline-block">View on GitHub</a>
        // might not need a link
        
        if (folder === 'blog') {
            postsList.appendChild(fileCard);
        } else if (folder === 'projects') {
            projectsList.appendChild(fileCard);
        } 
        itemCount++;
    }
    }
}

folders.forEach(folder => {
    fetchMarkdownFiles(folder);
});


document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("dark-mode");
    document.getElementById("dark-mode-toggle").innerText = "☀️";

    // Fetch projects from GitHub
    fetch('https://api.github.com/users/shahebannis/repos')
      .then(response => response.json())
      .then(repos => {
        const projectsList = document.getElementById('projects-list');
        repos.forEach(repo => {
          const projectCard = document.createElement('div');
          // projectCard.classList.add('project-box');
          projectCard.className = 'project-card';

          projectCard.innerHTML = `
            <h2 class="text-2xl font-bold">${repo.name}</h2>
            <p class="mt-2">${repo.description || 'No description available'}</p>
            <a href="${repo.html_url}" target="_blank" class="project-link mt-4 inline-block">View on GitHub</a>
          `;

          projectsList.appendChild(projectCard);
        });
      })
      .catch(error => console.error('Error fetching repos:', error));  
  });
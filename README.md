# Gevorg Markarov - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a software developer and computer science student.

## 🌟 Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Multiple Pages**: 
  - Home: Hero section with introduction and quick stats
  - About: Personal information, education, and interests
  - Projects: Showcase of personal and professional projects
  - CV: Complete curriculum vitae with print-friendly layout
- **Interactive Elements**: Smooth scrolling, hover effects, and mobile navigation
- **GitHub Pages Ready**: Easy deployment to GitHub Pages

## 🚀 Live Demo

Visit the live website: [Your GitHub Pages URL will be here]

## 📁 Project Structure

```
InternshipWebsite/
├── index.html          # Home page
├── about.html          # About page
├── projects.html       # Projects showcase
├── cv.html            # CV/Resume page
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   └── script.js      # JavaScript functionality
└── README.md          # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## 🎨 Color Scheme

- Primary: #3b82f6 (Blue)
- Secondary: #64748b (Slate)
- Accent: #06b6d4 (Cyan)
- Text: #1e293b (Dark slate)
- Background: #ffffff (White)

## 🚀 Deployment to GitHub Pages

### Option 1: Automatic Deployment

1. Push your code to a GitHub repository
2. Go to your repository settings
3. Scroll down to "Pages" section
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"
7. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

## 📝 Customization

### Personal Information
Update the following files with your information:
- Contact details in all HTML files
- Project descriptions in `projects.html`
- Education and experience in `cv.html` and `about.html`

### Styling
- Modify colors in `:root` variables in `style.css`
- Update fonts by changing the Google Fonts import
- Adjust spacing and sizing as needed

### Content
- Replace placeholder project links with actual GitHub repositories
- Add your profile picture by replacing the placeholder icon
- Update social media links

## 📊 Features Breakdown

### Home Page
- Hero section with introduction
- Quick statistics
- Skills preview
- Contact information

### About Page
- Personal story and background
- Language skills
- Education details
- Interests and methodologies

### Projects Page
- Featured projects with descriptions
- Technology tags
- GitHub and live demo links
- Professional experience timeline

### CV Page
- Print-friendly layout
- Complete resume information
- Download/print functionality
- Professional formatting

## 🔧 Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-repo-name.git
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

3. Navigate to `http://localhost:8000`

## 📋 TODO / Future Enhancements

- [ ] Add blog section
- [ ] Implement contact form with backend
- [ ] Add dark mode toggle
- [ ] Include testimonials section
- [ ] Add project filtering
- [ ] Implement PWA features
- [ ] Add analytics tracking
- [ ] Include sitemap.xml and robots.txt

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: gevorgmarkarov.w@gmail.com
- **LinkedIn**: [linkedin.com/in/gevorg-markarov-bbb4b1228/](https://www.linkedin.com/in/gevorg-markarov-bbb4b1228/)
- **GitHub**: [github.com/Org0220](https://github.com/Org0220)
- **Phone**: (514) 451-0803

---

**Built with ❤️ by Gevorg Markarov**

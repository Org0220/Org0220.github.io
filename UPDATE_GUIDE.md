# Dynamic Website Configuration Guide

## 📝 How to Update Your Information

All your personal information, projects, skills, and content is stored in `js/info.js`. This makes it incredibly easy to keep your website updated.

### 🎯 Quick Updates

To update any information on your website, simply edit the `personalInfo` object in `js/info.js`:

## 📧 Contact Information
```javascript
personal: {
    firstName: "Gevorg",
    lastName: "Markarov",
    email: "your-new-email@example.com",
    phone: "(514) 451-0803",
    // ... other fields
}
```

## 📊 Adding New Projects
```javascript
projects: [
    {
        title: "New Amazing Project",
        description: "Description of your new project...",
        technologies: ["React", "Node.js", "MongoDB"],
        githubUrl: "https://github.com/yourusername/new-project",
        liveUrl: "https://your-project-demo.com",
        featured: true,
        badge: "🏆 Award Winner",
        icon: "fas fa-rocket"
    },
    // ... existing projects
]
```

## 🛠️ Adding New Skills
```javascript
skillCategories: [
    {
        title: "New Skill Category",
        icon: "fas fa-new-icon",
        skills: ["Skill 1", "Skill 2", "Skill 3"]
    },
    // ... existing categories
]
```

## 💼 Adding Work Experience
```javascript
experience: [
    {
        title: "New Position",
        company: "New Company",
        startDate: "Month Year",
        endDate: "Present",
        description: "What you did in this role...",
        technologies: ["Tech1", "Tech2"],
        projectUrl: "https://optional-project-url.com"
    },
    // ... existing experience
]
```

## 📚 Adding Education
```javascript
education: [
    {
        degree: "New Degree",
        institution: "University Name",
        field: "Field of Study",
        startDate: "2025",
        endDate: "2029",
        gpa: "4.0",
        description: "Optional description"
    },
    // ... existing education
]
```

## 🌍 Adding Languages
```javascript
languages: [
    { name: "Spanish", level: "Intermediate" },
    // ... existing languages
]
```

## 📈 Updating Statistics
```javascript
stats: [
    { number: "4.0", label: "New GPA" },
    { number: "5+", label: "Years Experience" },
    // ... other stats
]
```

## 🎨 Customizing Page Content
```javascript
pages: {
    home: {
        title: "Your Name - New Title",
        metaDescription: "Updated description for SEO"
    },
    // ... other pages
}
```

## 🔗 Social Links
```javascript
socialLinks: [
    {
        name: "Twitter",
        url: "https://twitter.com/yourusername",
        icon: "fab fa-twitter",
        display: "Twitter Profile"
    },
    // ... existing links
]
```

## 📝 Important Notes

1. **Save and Refresh**: After editing `js/info.js`, save the file and refresh your browser to see changes.

2. **Icon Classes**: Use Font Awesome icon classes (e.g., `"fas fa-code"`, `"fab fa-github"`).

3. **Array Order**: Items in arrays will appear in the same order on your website.

4. **Required Fields**: Some fields are required for proper display:
   - Projects: `title`, `description`, `technologies`, `githubUrl`
   - Experience: `title`, `company`, `startDate`, `endDate`, `description`
   - Education: `degree`, `institution`, `field`, `startDate`, `endDate`

5. **Featured Projects**: Set `featured: true` to highlight important projects.

6. **Tech Tags**: Keep technology names concise for better display.

7. **URLs**: Always include `https://` for external links.

## 🚀 Testing Your Changes

1. Open your website in a browser
2. Navigate through all pages to ensure content displays correctly
3. Check that links work properly
4. Verify responsive design on mobile devices

## 🎯 Advanced Customization

If you need to add new sections or modify the layout, you can:
1. Add new data structures to `js/info.js`
2. Update `js/dataHandler.js` to handle the new data
3. Modify the HTML templates as needed
4. Update CSS for new styling

This system makes your website completely dynamic and easy to maintain!

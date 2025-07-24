# Images Directory

This directory contains images for your portfolio website.

## Profile Image

To add your profile photo:

1. **Add your photo** to this directory and name it `profile.jpg` (or update the filename in `js/info.js`)
2. **Recommended specifications:**
   - Format: JPG, PNG, or WebP
   - Size: 400x400 pixels (square)
   - File size: Under 500KB for fast loading
   - Good lighting and professional appearance

3. **Update the path** in `js/info.js`:
   ```javascript
   personal: {
       // ... other info
       profileImage: "images/profile.jpg"  // Update this path
   }
   ```

## Other Images

You can also add other images for:
- Project screenshots
- Background images
- Icons or logos
- Certificates or awards

## Image Optimization Tips

- **Compress images** before uploading to reduce file size
- **Use appropriate formats**:
  - JPG for photos
  - PNG for images with transparency
  - WebP for modern browsers (smaller file size)
- **Consider responsive images** for different screen sizes

## Usage in Code

To reference images in your project data:
```javascript
projects: [
    {
        title: "My Project",
        screenshot: "images/project-screenshot.jpg",
        // ... other project data
    }
]
```

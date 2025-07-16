# 🛡️ Cybersecurity Portfolio

> A modern, interactive portfolio website built with Jekyll, featuring a cyber-themed design perfect for cybersecurity professionals and developers.

![Portfolio Preview](assets/img/portfolio-preview.png)

[![Jekyll](https://img.shields.io/badge/Jekyll-3.9.0-red.svg)](https://jekyllrb.com/)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue.svg)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🌟 Overview

This is a responsive, professional portfolio website designed specifically for cybersecurity engineers and full-stack developers. It features a sleek cyber aesthetic with smooth animations, interactive elements, and a dual theme system (dark/light mode).

### ✨ Key Features

- **🎨 Dual Theme System** - Professional dark mode with cyber accents + clean light mode
- **📱 Fully Responsive** - Looks great on desktop, tablet, and mobile devices
- **⚡ Interactive Elements** - Custom cursor, parallax effects, smooth animations
- **🔧 Easy Content Management** - Update everything through a single YAML file
- **🚀 Fast Loading** - Optimized static site with no external dependencies
- **🔍 SEO Optimized** - Built-in meta tags, sitemap, and structured data
- **🛠️ GitHub Pages Ready** - Deploy with zero configuration

### 🎯 Perfect For

- Cybersecurity professionals
- Full-stack developers
- Penetration testers
- Security researchers
- Anyone in the tech industry looking for a modern portfolio

## 🚀 How to Use

### Prerequisites

Before you begin, make sure you have:

- **Ruby** (version 3.0 or higher) - [Download here](https://rubyinstaller.org/) (Windows) or `brew install ruby` (macOS)
- **Bundler** - Install with `gem install bundler`
- **Git** - [Download here](https://git-scm.com/)

### 🔧 Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/your-portfolio.git
   cd your-portfolio
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Start the development server**
   ```bash
   bundle exec jekyll serve
   ```

4. **Open your browser**
   ```
   Visit: http://localhost:4000
   ```

Your site will automatically reload when you make changes!

### 📝 Customizing Your Content

**All your content is managed through two main files:**

#### 🎯 Primary Content: `_data/portfolio.yml`

This YAML file contains all your personal information, experience, and projects. Here's how to edit each section:

**👤 Personal Information:**
```yaml
personal:
  name: "Your Full Name"                    # Appears in hero section
  title: "Your Professional Title"          # Job title/role
  tagline: "// Your Personal Motto"         # Appears under title
  logo: "Y.N"                              # Your initials for navigation
  email: "your.email@example.com"          # Contact email
  phone: "+1 (555) 123-4567"              # Phone number
  location: "Your City, State"             # Where you're located
  linkedin: "linkedin.com/in/yourprofile"  # LinkedIn profile
  github: "github.com/yourusername"        # GitHub profile
  profileImage: "/assets/img/profile.jpg"  # Path to your photo
  bio:                                     # About section paragraphs
    - "First paragraph about your background..."
    - "Second paragraph about your interests..."
    - "Third paragraph about your philosophy..."
```

**💼 Professional Experience:**
```yaml
experience:
  - title: "Your Job Title"                # Position name
    company: "Company Name"               # Employer
    period: "2022 - Present"              # Employment dates
    description: "What you accomplished in this role..."
  - title: "Previous Job Title"
    company: "Previous Company"
    period: "2020 - 2022"
    description: "Your achievements and responsibilities..."
```

**🎓 Education:**
```yaml
education:
  - degree: "Bachelor of Computer Science"  # Degree name
    institution: "University Name"         # School name
    period: "2016 - 2020"                 # Dates attended
    description: "Relevant coursework, honors, etc."
```

**🏆 Certifications:**
```yaml
certifications:
  - name: "CISSP"                         # Certification name
    issuer: "ISC²"                       # Issuing organization
    year: "2023"                         # Year obtained
```

**💻 Skills (Most Important Section!):**
```yaml
skills:
  - category: "Your Skill Category"       # E.g., "Security Operations"
    icon: "🛡️"                          # Emoji icon for visual appeal
    tags:                               # List of specific skills
      - "Skill 1"
      - "Skill 2"
      - "Skill 3"
  - category: "Another Category"
    icon: "⚡"
    tags: ["Skill A", "Skill B", "Skill C"]  # Alternative format
```

**🚀 Projects:**
```yaml
projects:
  - title: "Project Name"                 # Project title
    icon: "🤖"                          # Emoji icon
    description: "Brief description of what this project does..."
    links:                              # Project links
      - label: "Demo"                   # Link text
        url: "https://demo-link.com"    # Actual URL
      - label: "GitHub"
        url: "https://github.com/user/repo"
```

**🧭 Navigation (usually no changes needed):**
```yaml
navigation:
  - label: "HOME"                         # Navigation text
    href: "#home"                         # Section to scroll to
  - label: "ABOUT"
    href: "#about"
  - label: "SKILLS"
    href: "#skills"
  # Add more sections if you create custom pages
```

**🔍 SEO Settings:**
```yaml
seo:
  title: "Your Name - Your Title"         # Browser tab title
  description: "Brief description for search engines..."
  keywords: "your, key, skills, here"     # For search optimization
  ogImage: "/assets/img/og-image.jpg"     # Social media preview image
```

#### ⚙️ Site Configuration: `_config.yml`

Update this file with your site-specific information:

```yaml
# Site Information
title: "Your Portfolio Title"
description: "Your professional description for SEO"
url: "https://yourusername.github.io"     # Your GitHub Pages URL
baseurl: "/repository-name"               # Your repo name, or "" for custom domain

# Personal Information
author: "Your Name"
twitter:
  username: "yourusername"                # Twitter handle (optional)

# Social Links (for SEO)
social:
  name: "Your Name"
  links:
    - "https://twitter.com/yourusername"
    - "https://linkedin.com/in/yourprofile"
    - "https://github.com/yourusername"

# Analytics (optional)
google_analytics: "GA_MEASUREMENT_ID"    # Add your Google Analytics ID
```

### 🔧 YAML Editing Best Practices

**Important YAML rules:**
- **Use spaces, not tabs** for indentation
- **Keep consistent spacing** (2 spaces per level)
- **Quote strings** that contain special characters
- **Use lists** for multiple items (with `-` or `[]`)

**Example of proper YAML formatting:**
```yaml
skills:                    # Main category
  - category: "Security"   # Item 1 (note the dash and space)
    icon: "🛡️"            # Nested property (2 spaces indent)
    tags:                  # List property
      - "SIEM"            # List item (4 spaces indent)
      - "SOC Analysis"    # Another list item
  - category: "Development" # Item 2
    icon: "⚡"
    tags: ["Python", "Go"] # Alternative list format
```

**❌ Common YAML mistakes:**
```yaml
# Wrong - using tabs instead of spaces
	category: "Security"

# Wrong - inconsistent indentation  
  category: "Security"
   icon: "🛡️"

# Wrong - missing quotes with special characters
email: user@email.com:password

# Correct versions:
  category: "Security"
  icon: "🛡️"
email: "user@email.com:password"
```

### ✅ Validation and Testing

**Before committing changes:**

1. **Test YAML syntax:**
   ```bash
   # Check for syntax errors
   ruby -c _data/portfolio.yml
   ```

2. **Test locally:**
   ```bash
   bundle exec jekyll serve
   # Check http://localhost:4000 for your changes
   ```

3. **Use a YAML validator:**
   - Online: [yamllint.com](http://www.yamllint.com/)
   - VS Code: Install "YAML" extension for real-time validation

**Pro tip:** Start with small changes and test frequently to catch errors early!

### 🖼️ Adding Your Profile Image

1. **Add your photo** to `assets/img/profile.jpg`
2. **Recommended specs:**
   - Size: 500x500px
   - Format: JPG or WebP
   - File size: Under 500KB

### 🌐 Deployment Options

#### Option 1: GitHub Pages (Recommended - Free!)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: "main" / "/ (root)"
   - Click "Save"

3. **Your site will be live at:**
   ```
   https://yourusername.github.io/repository-name
   ```

#### Option 2: Netlify

1. **Connect your GitHub repo** to [Netlify](https://netlify.com)
2. **Build settings:** Leave defaults (Jekyll auto-detected)
3. **Deploy!** - Automatic deployments on every commit

#### Option 3: Custom Domain

1. **Add CNAME file** to your repository root:
   ```bash
   echo "yoursite.com" > CNAME
   ```

2. **Configure DNS** with your domain provider:
   - Add CNAME record pointing to `yourusername.github.io`

## 🔧 Maintenance

### 📊 Keeping Content Updated

**Regular updates you should make:**

- **✅ Monthly:** Update project descriptions and add new work
- **✅ Quarterly:** Review and update skills section
- **✅ Annually:** Update experience, education, and certifications
- **✅ As needed:** Add new projects, update contact information

### 🛠️ Technical Maintenance

**Jekyll and dependencies:**

```bash
# Update Jekyll and gems (every 6 months)
bundle update

# Check for security vulnerabilities
bundle audit

# Test after updates
bundle exec jekyll serve
```

**Monitor your site:**

- **✅ Performance** - Use [Google PageSpeed Insights](https://pagespeed.web.dev/)
- **✅ Uptime** - GitHub Pages has 99.9% uptime, but monitor your custom domain
- **✅ Analytics** - Add Google Analytics to track visitors (optional)

### 🔄 Content Workflow

### 🔄 Content Workflow

**Step-by-step process for updating your portfolio:**

1. **📝 Edit your content**
   ```bash
   # Open your data file
   code _data/portfolio.yml
   # or use any text editor
   ```

2. **✅ Validate YAML syntax**
   ```bash
   # Check for errors before testing
   ruby -c _data/portfolio.yml
   ```

3. **🔍 Test locally**
   ```bash
   bundle exec jekyll serve
   # Visit http://localhost:4000 to see changes
   ```

4. **🚀 Deploy changes**
   ```bash
   git add _data/portfolio.yml
   git commit -m "Update portfolio content"
   git push origin main
   ```

5. **⏱️ Wait for deployment**
   - GitHub Pages rebuilds automatically (2-5 minutes)
   - Check your live site for updates

### 📁 Important Files Overview

**Files you'll edit regularly:**
```
_data/portfolio.yml      # 📝 Your content (edit frequently)
_config.yml             # ⚙️ Site settings (edit once)
assets/img/profile.jpg  # 🖼️ Your profile photo
```

**Files you shouldn't edit** (unless you know what you're doing):
```
_layouts/default.html   # 🏗️ Site structure
assets/css/style.css   # 🎨 All styling
assets/js/main.js      # ⚡ Interactive features
index.html             # 📄 Homepage template
```

### 🔧 Quick Customization Checklist

**After cloning, customize these in order:**

- [ ] **Update `_config.yml`** - Site title, URL, your name
- [ ] **Edit `_data/portfolio.yml`** - All your personal content
- [ ] **Add profile image** - `assets/img/profile.jpg` (500x500px recommended)
- [ ] **Test locally** - `bundle exec jekyll serve`
- [ ] **Update README** - Replace placeholder links with your info
- [ ] **Commit and deploy** - Push to GitHub and enable Pages

### 🎯 Content Planning Tips

**Before editing your YAML file:**

1. **📊 Gather your information:**
   - Resume/CV for experience and education
   - List of technical skills and certifications
   - Project descriptions and links
   - Professional headshot photo

2. **🎨 Choose your style:**
   - Decide on your professional tagline
   - Select appropriate emoji icons for skills
   - Write compelling project descriptions

3. **🔗 Prepare your links:**
   - GitHub repository URLs
   - Live demo links
   - LinkedIn profile URL
   - Professional email address

### 🆘 Troubleshooting

**Common issues and fixes:**

| Problem | Solution |
|---------|----------|
| Site not building | Check `bundle exec jekyll build --verbose` for errors |
| Images not loading | Verify file paths and image file names |
| Styling broken | Clear browser cache, check CSS file path |
| Content not updating | Ensure YAML syntax is correct (spaces, not tabs) |
| YAML parsing errors | Use [yamllint.com](http://www.yamllint.com/) to validate syntax |
| Skills/Projects empty | Check that `skills:` and `projects:` sections exist in YAML |
| Special characters breaking | Put strings with `:`, `@`, or `#` in quotes |

**YAML-specific troubleshooting:**

```bash
# Check YAML syntax before deploying
ruby -c _data/portfolio.yml

# If you get "syntax error", check for:
# - Tabs instead of spaces (use spaces only)
# - Missing quotes around strings with special characters
# - Inconsistent indentation
# - Missing colons after keys
```

**Recommended editors for YAML:**
- **VS Code** with YAML extension (shows errors in real-time)
- **Sublime Text** with YAML syntax highlighting
- **Atom** with language-yaml package
- **Any text editor** (just be careful with indentation!)

## 🔄 Advanced: Switching to JSON Data Format

**Want more flexibility and API compatibility?** You can switch from YAML to JSON for your content management!

### 🤔 Why Switch to JSON?

**JSON Advantages:**
- ✅ **API Ready** - Easy integration with headless CMS or mobile apps
- ✅ **Better Tooling** - Excellent validation and formatting tools
- ✅ **Universal Standard** - Works with any programming language
- ✅ **Strict Validation** - Catches syntax errors more reliably
- ✅ **IDE Support** - Superior autocomplete and error detection

**YAML Advantages:**
- ✅ **Human Readable** - Easier to edit manually
- ✅ **Comments Allowed** - Can add explanatory notes
- ✅ **Jekyll Standard** - Default Jekyll format
- ✅ **Less Verbose** - Cleaner, more compact syntax

### 🚀 How to Convert from YAML to JSON

#### Step 1: Create the JSON File

**Create `_data/portfolio.json` with this structure:**

```json
{
  "personal": {
    "name": "Your Full Name",
    "title": "Your Professional Title", 
    "tagline": "// Your Personal Motto",
    "logo": "Y.N",
    "email": "your.email@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "Your City, State",
    "linkedin": "linkedin.com/in/yourprofile",
    "github": "github.com/yourusername",
    "profileImage": "/assets/img/profile.jpg",
    "bio": [
      "First paragraph about your background...",
      "Second paragraph about your interests...",
      "Third paragraph about your philosophy..."
    ]
  },
  "experience": [
    {
      "title": "Your Job Title",
      "company": "Company Name",
      "period": "2022 - Present",
      "description": "What you accomplished in this role..."
    }
  ],
  "skills": [
    {
      "category": "Your Skill Category",
      "icon": "🛡️",
      "tags": ["Skill 1", "Skill 2", "Skill 3"]
    }
  ],
  "projects": [
    {
      "title": "Project Name",
      "icon": "🤖",
      "description": "Brief description of what this project does...",
      "links": [
        {"label": "Demo", "url": "https://demo-link.com"},
        {"label": "GitHub", "url": "https://github.com/user/repo"}
      ]
    }
  ]
}
```

#### Step 2: Remove the YAML File

```bash
# Backup your current YAML file (optional)
mv _data/portfolio.yml _data/portfolio.yml.backup

# Jekyll will automatically detect and use the JSON file
```

#### Step 3: Test the Switch

```bash
# Start Jekyll - it will automatically use JSON
bundle exec jekyll serve

# Your site should work identically with JSON data
# Visit http://localhost:4000 to verify
```

#### Step 4: Update .gitignore (Optional)

**If you want to prevent the YAML backup from being tracked:**

```bash
# Add to .gitignore
echo "_data/portfolio.yml.backup" >> .gitignore
```

### 🔧 JSON Editing Best Practices

**Important JSON rules:**
- **Always use double quotes** for strings (`"text"`, not `'text'`)
- **No trailing commas** (last item in list/object has no comma)
- **No comments allowed** (unlike YAML)
- **Escape special characters** (`\"`, `\\`, `\n`)

**Example of proper JSON formatting:**
```json
{
  "skills": [
    {
      "category": "Security Operations",
      "icon": "🛡️",
      "tags": ["SIEM", "SOC Analysis", "Incident Response"]
    },
    {
      "category": "Development",
      "icon": "⚡",
      "tags": ["Python", "Go", "React"]
    }
  ]
}
```

**❌ Common JSON mistakes:**
```json
// Wrong - trailing comma
{
  "name": "John",
  "title": "Developer", // ← Remove this comma
}

// Wrong - single quotes
{
  'name': 'John'  // ← Use double quotes
}

// Wrong - comments (not allowed in JSON)
{
  "name": "John", // This is my name ← Remove comments
}

// Correct version:
{
  "name": "John",
  "title": "Developer"
}
```

### ✅ JSON Validation and Tools

**Validate JSON syntax:**

```bash
# Command line validation
cat _data/portfolio.json | python -m json.tool

# If valid, it will format the JSON nicely
# If invalid, it will show the error
```

**Online validation tools:**
- [jsonlint.com](https://jsonlint.com/) - Validates and formats JSON
- [jsonformatter.org](https://jsonformatter.org/) - Format and validate

**Recommended JSON editors:**
- **VS Code** - Built-in JSON support with validation
- **JSONedit** - Dedicated JSON editor
- **Any IDE** - Most have excellent JSON support

### 🔄 Converting Between Formats

**YAML to JSON conversion:**

```bash
# Using Ruby (if you have it installed)
ruby -ryaml -rjson -e 'puts JSON.pretty_generate(YAML.load(ARGF))' _data/portfolio.yml > _data/portfolio.json

# Using online converters
# yaml-to-json.com or convertjson.com
```

**JSON to YAML conversion:**

```bash
# Using Ruby
ruby -ryaml -rjson -e 'puts YAML.dump(JSON.load(ARGF))' _data/portfolio.json > _data/portfolio.yml
```

### 🎯 When to Choose Each Format

**Choose JSON if:**
- ✅ You plan to build APIs or integrations later
- ✅ You prefer strict validation and better error messages
- ✅ You work with JSON regularly in other projects
- ✅ You want maximum tool support and IDE features
- ✅ You might connect to a headless CMS in the future

**Choose YAML if:**
- ✅ You prefer human-readable configuration
- ✅ You want to add comments to your data
- ✅ You like Jekyll's default conventions
- ✅ Manual editing is your primary workflow
- ✅ You find YAML syntax more intuitive

### 🚀 Advanced JSON Features

**For power users, JSON enables:**

- **API Integration** - Easy consumption by external services
- **Schema Validation** - Use JSON Schema for data validation
- **CMS Connection** - Direct integration with headless CMS platforms
- **Mobile Apps** - Perfect for React Native or Flutter apps
- **Automation** - Easy programmatic content generation

**Example schema validation setup:**

```json
// portfolio.schema.json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["personal", "skills", "projects"],
  "properties": {
    "personal": {
      "type": "object",
      "required": ["name", "title", "email"]
    }
  }
}
```

**The choice is yours - both formats work identically in Jekyll!** 🚀

**Getting help:**

- **📖 Jekyll Documentation** - [jekyllrb.com](https://jekyllrb.com/)
- **💬 GitHub Issues** - Create an issue in this repository
- **🔍 Community** - Jekyll community forums and Stack Overflow

## 📈 Performance & Features

### ⚡ Performance

- **Loading Speed:** < 2 seconds on 3G networks
- **Lighthouse Score:** 95+ on all metrics
- **Mobile Friendly:** Fully responsive design
- **SEO Optimized:** Built-in meta tags and structured data

### 🔐 Security

- **Static Site:** No server-side vulnerabilities
- **HTTPS:** Automatic SSL on GitHub Pages
- **No Database:** No SQL injection or data breach risks
- **CSP Ready:** Content Security Policy compatible

## 🎯 Customization Tips

### 🎨 Theming

**Want to change colors?** Edit `assets/css/style.css`:

```css
:root {
  --primary-cyber: #your-color;    /* Main accent color */
  --secondary-cyber: #your-color;  /* Secondary accent */
}
```

### 🔧 Adding Sections

**Want to add a blog or additional pages?**

1. Create new Markdown files
2. Add to navigation in `_data/portfolio.yml`
3. Jekyll automatically generates pages

### 📊 Analytics (Optional)

**Add Google Analytics:**

1. Add your tracking ID to `_config.yml`:
   ```yaml
   google_analytics: "GA_MEASUREMENT_ID"
   ```

2. The template automatically includes tracking code

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Design Inspiration:** Modern cybersecurity interfaces and terminal aesthetics
- **Typography:** [JetBrains Mono](https://www.jetbrains.com/lp/mono/) and [Inter](https://rsms.me/inter/)
- **Hosting:** [GitHub Pages](https://pages.github.com/)
- **Framework:** [Jekyll](https://jekyllrb.com/)

---

**⭐ If this portfolio helped you land your dream job, consider starring this repository!**

**🔗 [Live Demo](https://yourusername.github.io/your-portfolio) | 📧 [Contact](mailto:your.email@example.com) | 💼 [LinkedIn](https://linkedin.com/in/yourprofile)**
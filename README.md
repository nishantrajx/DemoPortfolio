# Nishant Raj Portfolio

A static portfolio website built from scratch using HTML, CSS, and JavaScript for the 9P211 static website deployment assignment.

## Files

- `index.html` - page structure and content
- `style.css` - custom styling and responsive layout
- `script.js` - navigation toggle, section highlighting, reveal animations, and dynamic footer year

## Local Preview

Open `index.html` in a browser.

## GitHub Steps

```bash
git init
git add .
git commit -m "Create portfolio website"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

## EC2 Deployment Steps

1. Launch an EC2 instance and attach an Elastic IP.
2. Install a web server such as Nginx or Apache.
3. Copy these project files to the server web root.
4. Make sure port 80 is open in the security group.
5. Visit `http://<your-elastic-ip>/` and confirm the site loads publicly.

## Submission Checklist

- GitHub repository is public
- All three files are pushed correctly
- EC2 instance is running
- Elastic IP is attached
- Website opens from the Elastic IP link without errors

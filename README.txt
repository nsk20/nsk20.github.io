##Deploying on GitHub Pages
cd to your project_folder
npm install
npm install gh-pages --save-dev
npm run dev
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
npm run deploy
Go to your GitHub repository > Navigate to Settings > Pages
In the "Source" section, select the "gh-pages" branch
Click Save

##Testing On Local Machine
install Node JS

Check Node JS "node -v"

cd Portfolio Website

install npm

(Optional) If any updates avaliable "npm audit fix"

npm run dev

To exit - Ctrl+c

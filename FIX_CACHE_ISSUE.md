# Fix Cache Issue

If you encounter issues during installation or build, try the following steps:

## Step 1: Clean npm cache
Run the following command in your terminal:
```bash
npm cache clean --force
```

## Step 2: Remove node_modules and package-lock.json
If the problem persists, delete the dependencies and reinstall:
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

## Step 3: Clear browser cache
Sometimes changes don't reflect due to browser caching. Open DevTools (F12) and right-click the refresh button, then select "Empty Cache and Hard Reload".

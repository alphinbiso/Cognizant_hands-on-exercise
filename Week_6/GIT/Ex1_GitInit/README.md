# Git Exercise 1: Init, Status, Add, Commit, Push/Pull

## Steps Demonstrated

### Step 1: Setup Git Configuration
```bash
git config --global user.name "Benedict"
git config --global user.email "benedictcm1@gmail.com"
```

### Step 2: Check Git Installation
```bash
git --version
```

### Step 3: Create Repository and Add File
```bash
git init
echo "Welcome to Git Demo" > welcome.txt
cat welcome.txt
git status
```

### Step 4: Stage and Commit
```bash
git add welcome.txt
git commit -m "Initial commit: add welcome.txt"
```

### Step 5: Add Remote and Push
```bash
git remote add origin https://github.com/The-Peacemaker/GitDemo.git
git push -u origin master
```

### Step 6: Pull from Remote
```bash
git pull origin master
```

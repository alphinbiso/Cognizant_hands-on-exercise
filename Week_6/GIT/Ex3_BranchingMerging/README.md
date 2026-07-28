# Git Exercise 3: Branching and Merging

## Steps Demonstrated

### Step 1: Create a new branch
```bash
git branch GitNewBranch
git branch -a
```

### Step 2: Switch to the new branch
```bash
git checkout GitNewBranch
```

### Step 3: Add files and commit to branch
```bash
echo "Feature added in branch" > feature.txt
git add feature.txt
git commit -m "Add feature.txt in GitNewBranch"
```

### Step 4: Switch back to master
```bash
git checkout master
```

### Step 5: Compare branches
```bash
git diff master GitNewBranch
git diff --stat master GitNewBranch
```

### Step 6: Merge branch into master
```bash
git merge GitNewBranch
```

### Step 7: View merge log
```bash
git log --oneline --graph --decorate
```

### Step 8: Delete the merged branch
```bash
git branch -d GitNewBranch
git status
```

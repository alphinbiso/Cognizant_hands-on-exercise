# Git Exercise 4: Merge Conflict Resolution

## Steps Demonstrated

### Step 1: Create branch and add file
```bash
git checkout -b GitWork
echo "<config><version>1.0</version></config>" > hello.xml
git add hello.xml
git commit -m "Add hello.xml in GitWork branch"
```

### Step 2: Modify file in branch
```bash
echo "<config><version>1.1</version><author>Branch</author></config>" > hello.xml
git commit -am "Update version in GitWork branch"
```

### Step 3: Switch to master and create conflicting change
```bash
git checkout master
echo "<config><version>1.0</version><author>Master</author></config>" > hello.xml
git commit -am "Add hello.xml in master with different content"
```

### Step 4: Attempt merge (conflict)
```bash
git merge GitWork
# CONFLICT in hello.xml
```

### Step 5: Resolve conflict
```bash
# Edit hello.xml to merge both changes:
# <config>
#   <version>1.1</version>
#   <author>Master</author>
# </config>
git add hello.xml
git commit -m "Resolve merge conflict in hello.xml"
```

### Step 6: Add backup files to .gitignore
```bash
echo "*.orig" >> .gitignore
git add .gitignore
git commit -m "Add .orig files to gitignore"
```

### Step 7: Clean up
```bash
git branch -d GitWork
git log --oneline --graph --decorate
```

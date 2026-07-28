# Git Exercise 2: .gitignore

## Steps Demonstrated

### Step 1: Create files to ignore
```bash
echo "log data" > app.log
mkdir log
echo "log file" > log/debug.log
```

### Step 2: Update .gitignore
```
# .gitignore
*.log
log/
```

### Step 3: Verify git status
```bash
git status
# .log files and log/ folder should not appear
```

### Step 4: Commit .gitignore
```bash
git add .gitignore
git commit -m "Add .gitignore to ignore log files and log directory"
```

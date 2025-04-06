# Git Workflow Guide for Doctor Digital Project

This document outlines the procedure for fixing Git tracking issues and properly committing/pushing changes to the GitHub repository.

## Initial Fix (Do This Once)

Follow these steps to fix the current tracking issue with ignored files:

1. **Remove cached files that should be ignored**:
   ```
   git rm -r --cached .
   ```
   This removes ALL files from Git's index (not your disk), allowing the new `.gitignore` to take effect.

2. **Re-add all files respecting the new `.gitignore`**:
   ```
   git add .
   ```
   This will add all files again, but now respecting the rules in `.gitignore`.

3. **Commit these changes**:
   ```
   git commit -m "Fix .gitignore and remove tracked files that should be ignored"
   ```

4. **Push to GitHub**:
   ```
   git push
   ```

## Regular Workflow (Do This Each Time)

After the initial fix, follow these steps for your regular development workflow:

1. **Check status before staging**:
   ```
   git status
   ```
   Verify that no ignored files (e.g., `.next/`, `node_modules/`) appear under "Changes not staged for commit".

2. **Stage your changes**:
   ```
   git add .
   ```
   Or stage specific files if you prefer:
   ```
   git add src/app/page.tsx src/components/MyComponent.tsx
   ```

3. **Commit your changes**:
   ```
   git commit -m "Your descriptive message here"
   ```
   Example: `git commit -m "Update hero section design"`

4. **Push to GitHub**:
   ```
   git push
   ```

## Troubleshooting

If you ever see ignored files (like `.next/` or `node_modules/`) in your `git status` output:

1. **DO NOT** proceed with `git add`.
2. Run this cleanup command again:
   ```
   git rm -r --cached .
   git add .
   git commit -m "Fix tracking of ignored files"
   git push
   ```

## Important Notes

- The `.gitignore` file is now properly configured to exclude:
  - `node_modules/` (dependencies)
  - `.next/` (Next.js build directory)
  - Environment files (`.env.local`, etc.)
  - And other standard files that shouldn't be tracked

- Your workflow should now be much smoother with fewer issues when pushing to GitHub.

# Git Workflow for Pushing Changes (Doctor Digital Project)

This document outlines the standard procedure for committing and pushing code changes to the GitHub repository for the Doctor Digital project, specifically designed to avoid issues with ignored files (`.next`, `node_modules`) being accidentally tracked.

**Working Directory:** `c:/Users/Paul/Desktop/doctor-digital-nextjs-new`
**Shell:** PowerShell

## Standard Procedure

Follow these steps each time you want to save and upload your changes:

1.  **Make Code Changes:** Modify the project files as needed using your editor or with AI assistance.

2.  **Verify Changes (Crucial Step):**
    *   Run `git status` in your terminal (within the project directory).
    *   **Review the Output Carefully:**
        *   **Expected:** You should see your modified files (e.g., `.tsx`, `.ts`, `.css`) listed under "Changes not staged for commit". New files will be under "Untracked files".
        *   **Problem Sign:** If files inside `.next/` or `node_modules/` appear under "Changes not staged for commit", **STOP**. Inform the AI assistant. This indicates Git is tracking ignored files, and troubleshooting is needed (see below).
        *   **Untracked Ignored Files:** Seeing `.next/` and `node_modules/` under "Untracked files" is **normal and expected**. They are correctly ignored and won't be committed.

3.  **Stage Your Changes:** Choose **one** of the following methods:
    *   **A) If `git status` looks clean (only shows intended changes):**
        ```powershell
        git add .
        ```
    *   **B) If `git status` showed unexpected files OR you only want to commit specific files:** Stage *only* the specific files you worked on.
        ```powershell
        # Example:
        git add src/app/page.tsx src/components/MyComponent.tsx
        ```

4.  **Commit Your Changes:**
    *   Run the commit command, replacing the message with a summary of your work.
        ```powershell
        git commit -m "Your descriptive message here"
        # Example: git commit -m "Update hero section text"
        ```

5.  **Push to GitHub:**
    *   Upload your committed changes to the remote repository.
        ```powershell
        git push
        ```

## Troubleshooting: Ignored Files Appear as Modified in `git status`

If Step 2 shows files inside `.next` or `node_modules` listed under "Changes not staged for commit":

1.  **Inform the AI assistant immediately.** Do not proceed to `git add`.
2.  The assistant will likely recommend running a cleanup command:
    ```powershell
    # This command removes the specified directories ONLY from Git's tracking index, not your local files.
    # User approval might be required by the AI assistant.
    git rm -r --cached .next node_modules
    ```
3.  After the cleanup, go back to **Step 2 (Verify Changes with `git status`)** and proceed carefully, likely using **Step 3B (Staging specific files)**.

## Summary Commands (PowerShell)

```powershell
# In directory: c:/Users/Paul/Desktop/doctor-digital-nextjs-new

# 1. Check status (ALWAYS do this first)
git status

# 2. Stage changes (Choose ONE)
#    a) If status is clean:
git add .
#    b) If status is messy or you want specific files:
git add <path/to/file1> <path/to/file2> ...

# 3. Commit staged changes
git commit -m "Your descriptive message"

# 4. Push to GitHub
git push

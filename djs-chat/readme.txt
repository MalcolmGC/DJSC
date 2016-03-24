Readme.txt
This is part of step 3 for git-it for DJSG/
1. Install
  Windows: It's recommended to download GitHub for Windows, 
  which includes Git and has an easier install: 
  windows.github.com. Use the Git Shell for your terminal.
  Verify: >git-it verify
  >git --version
This will return the version of Git that you're running and look 
something like this: git version 1.9.1 (Any version 1.7.10 or higher fine.)
Next, configure Git so it knows who to associate your changes to:
Set your name: >git config --global user.name "<Your Name>"
Set your email: >git config --global user.email "<youremail@example.com>"
=================================================================
2. Create a Repository
Create a new folder and initialize it as a Git repository.
Name your folder what you'd name the project. [donejs-chat].
You can type these commands one at a time into your terminal window.
From DJSG\donejs-chat>git init
It will just return you to a new line. 
>git status
If it doesn't return 'fatal: Not a git repository...', you're golden!
I had On branch master.
  Initial commit.
  Untracked files:
    chat-master.zip [from Github]
    donejs-chat/
>git add donejs-chat
git status
  Changes to be committed: [~32 files]
  =========================================
3. Commit
>git add readme.txt [this file]
Commit this change to the repository's history with a short description.
>[No - gets all files] git commit -m "<your commit message>"
>git commit .\readme.txt -m "Initial save of the readme.txt file through step 3 of 11."
Step: Make More Changes
Now add another line to readme.txt and save.
In terminal, you can view the difference between the file now and 
how it was at your last commit.
>git diff
Now with what you just learned above, commit this latest change.
>git commit readme.txt -m "Updated readme.txt file step 3 of 11."
>git-it verify
=========================================================
4. Github
Create github account: MalcolmGC SE.Consulting,Services@Gmail.com
>git config --list
>[Don't need - did before.] git config --global user.username MalcolmGC
>git commit readme.txt -m "Updated readme.txt file step 4 of 11."
>git commit donejs-chat -m "Initial commit of donejs-chat files."
>git-it verify [Fails - some file changes to commit. OK - .zip]
=====================================================================
5. Remote
Push local to Remote (below)
github.com: + DJSG
Command local to remote:
  http button and copy url
  >git remote add origin <url>
>[No]git remote add origin https://github.com/MalcolmGC/DJSG.git
Windows:
>git remote set-url origin https://github.com/MalcolmGC/DJSG.git
------------------------
Push Work to your Remote:
Ideally, stay in sync, meaning your local and remote versions match.
Git has a branching system so that you can work on different parts of 
a project at different times. [later] By default the first branch is 
  named 'master'. When you push (and later pull) from a project, 
  tell Git the branch name you want and the name of the remote that it lives on.
Send our branch named 'master' to our remote on GitHub named 'origin'.
>git push origin master
Username: MalcolmGC
PW: githubm1
Now go to GitHub and refresh the page of your repository.
>git-it verify
======================================================
6.Forks and Clones


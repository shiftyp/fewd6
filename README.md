# Assignments and Starter Files for FEWD6

This repository contains all the assignments and starter files edited and created by {{your name here}} as part of the FEWD6 course at [General Assembly](https://generalassemb.ly/) in Washington, DC.

To make commits and send those straight to GitHub, we'll be using the GitHub Git Client, which is available for [Mac](http://mac.github.com) and [Windows](http://windows.github.com).

To fork this repository on GitHub, click the [Fork](https://help.github.com/articles/working-with-repositories#forking) button at the top right of the repository page. This will create your own copy of the repository on GitHub for you to work in.  Then you'll want to create a local copy on your computer as well, so use the handy dandy [Clone in Desktop](https://help.github.com/articles/working-with-repositories#cloning) button.


To update this repository from the main FEWD6 repository and get starter files for new projects, open a git command line from the GitHub client and run the following (don't be scared of the command line, we'll do this in class so it will be easy).

```bash
# This is a comment, don't paste these lines
# Run this the first time you create a local copy of your fork

git remote add instructor https://github.com/shiftyp/fewd6.git

# Then, every time you want to get new starter files, run these commands

git stash
git pull instructor
git stash apply

# Thats it! Not so scary eh?
```

To make things as close as possible to how front-end web developers actually work, we'll be using a simple server application to host our webpages. It's called Mongoose, and it's really easy to use. All you have to do is [download](http://cesanta.com/mongoose.shtml) the free edition for Mac or Windows, put the app or executable in the main folder for this repository, and click on it to start the server.  If you're on a Mac, right click to open up the menu, then hit open from there the first time you start the server. Otherwise your computer will complain about not trusting the file. Thats it!

Presentations, exercises, descriptions of assignments, and more resources are available at [fewd.io](http://fewd.io). Now all that's left to do is get to coding! 

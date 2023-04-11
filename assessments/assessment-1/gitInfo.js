/*
    For this section of the assessment you will be 
    putting together a cheat sheet for common git 
    commands. You'll provide the command as well 
    as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best 
    definition of what Git is.
*/

//CODE HERE
let gitDefinition = "Git Version Control is a system that records changes to a file or a set of files over time so that you can recall specific versions later.";
console.log(gitDefinition);


//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best
    definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "GitHub is one of many code hosting platforms for version control and collaboration. It lets you and others work together on projects from anywhere";
console.log(gitHubDefinition);


//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best 
    definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition = "The git init command creates a new Git repository. It can be used to convert an existing, unversioned project to a Git repository or initialize a new, empty repository.";
console.log(gitInitDefinition);


//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
let gitCloneDefinition = "The git clone command is used to create a copy of a specific repository or branch within a repository.";
console.log(gitCloneDefinition);


//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
let gitStatusDefinition = "The git status command is my personal favorite because it shows the current state of your Git working directory and staging area. Status checks also let you know if your commits meet the condition set for the repository you're contributing to.";
console.log(gitStatusDefinition);


//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
let gitAddDefinition = "The git add command selects that file, and moves it to the staging area, making it ready for the commit staging area to be committed. Excepting the contents of any .gitignore files.";
let gitAddCode = "git add fileName.js"; // will add fileName.js
let gitAddAllFiles = "git add ."; // will add All of the files in the current directory.

console.log(`> ${gitAddCode} - ${gitAddDefinition}`);


//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
let gitCommitDefinition = 'The git commit command creates a commit, which is like a snapshot of your repository. These commits are snapshots or copies of your entire repository at specific times.';
let gitCommitCode = 'git commit -m "Detailed message for the commit"';

console.log(`> ${gitCommitCode} - ${gitCommitDefinition}`);
 

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
let gitPushDefinition = "The git push command is used to 'upload' local repository content to a remote repository. Pushing is how you transfer commits from your local repository and machine to a remote repository such as our favorite GitHub.";

console.log(gitPushDefinition);
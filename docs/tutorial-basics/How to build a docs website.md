# How to build a docs website

## Pre-requisites

### Dev tools

- Install Visual Studio Code or any other coding tool.

- Install node.js with NPM.

- Install Yarn.

- Install git.

- Have a GitHub account.

- Install PowerToys or any other tool with a colour picker.

- Create an Azure DevOps Project for the pipeline deployment

### Things to think about

- Select an Icon.

- Select a colour (RGB and HEX codes).

- Choose the name of the site.

- Build the site structure on a spreadsheet or somewhere.

## Part 1 - Create a scaffold site locally

1. Create a folder on your computer where the files will be stored.
2. Create a github project where the files will be pushed.
3. Open the folder in Visul Studio Code and create the site with the following command:

```powershell
npx @docusaurus/init@latest init [name] [template]
```

Example:

```powershell
npx @docusaurus/init@latest init my-website classic
```

For further instructions, please see the [docusarus site about the installation](https://docusaurus.io/docs/installation).

This will create the barebones of the site (the so-called scaffold site), but you'll still need to run a few commands before the site can be hosted on the your local PC:

4. Run a few commands:

- In the command prompt (or PowerShell) change directory to your newly created folder by typing:

```powershell
cd my-website
```

- Install yarn here, by the following command (this might no be necessary):

```powershell
yarn install
```

5. Now you should be able to start the website locally:

```powershell
yarn run start
```

After this command runs, a browser window will pop up opening localhost:3000, the site will be running here until stopped.

**note: need to find command, how to stop service**

For an explanation of how the folder structure is built up, again, see [docusarus site about the installation](https://docusaurus.io/docs/installation).

## Part 2 - Build out the GitHub repo and Deployment infrastructure, publish the Scaffold site

Before you start modifying the site too much, I'd recommend to publish it to github and build out the Azure DevOps pipeline, just in case some things go wrond with the 'infra', you don't need to re-start the whole project. Also, it will be a good practise with the git commands to make all minor modifications.

1. Publish to GitHub - initial commit
  
We have a folder with a bunch of files that make up a website. We need to push all of these files into GitHub.

Jus to check if git is up and running, this should return the version number

```powershell
git --version
```

Before we can push these files up to GitHub, (1) we must initialise the folder to be tracked by git and start a local repository ("init") and (2) add all the files into it ("add ."), (3) commit the files with a message ("commit -m "initial commit") **note: these are three separate commands, hit enter after each line**

```powershell
git init

git add .

git commit -m "initial commit"
```

After this, git is ready to push all the files, into the GitHub project.

Open your GitHub project, that needs to have been created by now and copy the code from *"…or push an existing repository from the command line"*:
**note: this is a single command, copy-paste and hit enter once**

```powershell
git remote add origin https://github.com/USERNAME/PROJECTNAME.git
git branch -M main
git push -u origin main
```

After the command ran, refresh the GitHub project and validate that the files appeared with a comment "initial commit"

2. Publish a new modification to GitHub - commit

- Modify the docusaurus.config.js file's URL and BaseURL parameter to your [GitHub username].github.io, "/docs/"
- Modify the OrganizationName and Project name to the GitHub name and Project name
- Change onBrokenLinks to warn

```PowerShell
git add docusaurus.config.js

git commit -m "modified parameters"

git push
```

Validate that a new commit appeared in Github's main branch

3. Create Azure DevOps Pipeline

The [Docusaurus deployment guide](https://docusaurus.io/docs/deployment#using-azure-pipelines) is pretty helpful on how to set up an ADO pipeline:

- "Go to <https://github.com/settings/tokens> and generate a new personal access token with the repo scope.
- In the project page (which looks like <https://dev.azure.com/ORG_NAME/REPO_NAME/_build> create a new pipeline with the following text. Also, click on edit and add a new environment variable named GH_TOKEN with your newly generated token as its value, then GH_EMAIL (your email address) and GH_NAME (your GitHub username)."
- When you create the Pipeline in DevOps, it will ask you to install GitHub on DevOps, just click OK and next.
- Select node.js on the Configuration wizard.
- Copy-paste the YAML script below (with modified TOKEN, E-mail and GitHubName) and click 'Save and Run', the system will ask if you want any futher commit message.
- Click save and run again and a new commit will be pushed.
  

 ```YAML
 trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

steps:
  - checkout: self
    persistCredentials: true

  - task: NodeTool@0
    inputs:
      versionSpec: '10.x'
    displayName: 'Install Node.js'

  - script: |
      git config --global user.name "${GH_NAME}"
      git config --global user.email "${GH_EMAIL}"
      git checkout -b main
      echo "machine github.com login ${GH_NAME} password ${GH_TOKEN}" > ~/.netrc
      yarn && GIT_USER="${GH_NAME}" yarn deploy
    env:
      GH_NAME: $(GH_NAME)
      GH_EMAIL: $(GH_EMAIL)
      GH_TOKEN: $(GH_TOKEN)
    displayName: 'yarn install and build'
```

- This will queue the job and you can monitor the run.
- aaaaand.... this is where we get the following error message:

```cmdlet
error @docusaurus/core@2.0.0-beta.6: The engine "node" is incompatible with this module. Expected version ">=12.13.0". Got "10.24.1"
```

________________________________________

1. Publish the Scaffold site on GitHub Pages through Azure DevOps
2. Publish a modification from the your PC to GitHub and have that automatically build the website

## Start personalising your site

1. Modify landing page
2. Modify appearance
3. Create menu structure

## Start creating content

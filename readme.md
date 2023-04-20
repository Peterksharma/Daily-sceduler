<!-- Week Five Homework Readme Readme -->
# Week 5 Project - Daily Planner
## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Languages Used](#languages-used)
3. [The Task](#the-task)
3. [How to Install](#how-to-install)
4. [Developer Notes](#developer-notes)
5. [Screenshots](#screenshots)
6. [Links](#links)
7. [Acknowledgements](#acknowledgements)
---
## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a Windows, macOS or Linux machine.
- You have installed the latest version of Git, VSCode, and Google Chrome.
- SSH key should be connected to Github.

--- 

## Languages Used

- Javascript
- HTML
- CSS
- Jquery

---

## The Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the Day.js library to work with date and time. Be sure to read the documentation carefully and concentrate on using Day.js in the browser.


### <span style="color:yellow;">**Logic Followed**</span> 


#### Display the current day at the top of the calendar:
1. Use Day.js to get the current day and format it as desired.
2. Update the content of the element with the id="currentDay" using JavaScript/jQuery.

#### Create timeblocks for standard business hours:
1. Instead of hardcoding the timeblocks in the HTML, use JavaScript/jQuery to dynamically generate the timeblocks.
2. Loop through the standard business hours (e.g., 9AM to 5PM) and create a div for each hour with the appropriate classes and structure as given in the example HTML.

#### Color code timeblocks based on whether they are in the past, present, or future:
1. During the timeblock generation loop, compare the current hour with the hour of the timeblock.
2. Add the appropriate class ("past", "present", "future") to the timeblock div based on the comparison.

#### Allow users to enter an event in a timeblock:
1. This functionality is already provided in the example HTML with the use of the textarea element.

#### Save the event text to local storage when the save button is clicked:
1. Add a click event listener to the save buttons.
In the event handler, get the text from the corresponding textarea and save it to the local storage using a unique key (e.g., the hour of the timeblock).

#### Load the saved events from local storage when the page is refreshed:
1. During the timeblock generation loop, check if there is any saved event data in the local storage for each hour.
2. If there is saved event data, populate the corresponding textarea with the saved text.
--- 

## How to Install

- [Git](https://github.com/git-guides/install-git): "Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows." -Wiki
- [SSH Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account): "Ssh-keygen is a standard component of the Secure Shell protocol suite found on Unix, Unix-like and Microsoft Windows computer systems used to establish secure shell sessions between remote computers over insecure networks, through the use of various cryptographic techniques." -Wiki
- [Github Account](https://docs.github.com/en/get-started/onboarding/getting-started-with-your-github-account): "With a GitHub account, you can import or create repositories, collaborate with others, and connect with the GitHub community. This guide will walk you through setting up your GitHub account and getting started with GitHub's features for collaboration and community." -Github
- [VS Code](https://code.visualstudio.com/docs/setup/setup-overview): "Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft with the Electron Framework, for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git." -Wiki
- [Google Chrome](https://support.google.com/chrome/answer/95346?hl=en&co=GENIE.Platform%3DDesktop): "Google Chrome is a cross-platform web browser developed by Google. It was first released in 2008 for Microsoft Windows, built with free software components from Apple WebKit and Mozilla Firefox. Versions were later released for Linux, macOS, iOS, and also for Android, where it is the default browser." -Wiki
--- 

## Developer Notes

  -Giddy Up.

---

## Screenshots
![Screenshot of Website](./images/screenshot.png)

---

## Links

- [Github Link](https://github.com/Peterksharma/Daily-sceduler)
- [Deployed Website](https://peterksharma.github.io/Daily-sceduler/)

--- 

## Acknowledgements

- Youtube
- Stack Overflow
- Google
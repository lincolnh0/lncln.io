---
id: zendit

title: Zendit

description: Automating the boring parts

bannerImg: https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg?w=1080

bannerImgAlt: Free Space Shuttle Launch during Nighttime Stock Photo

sourceUrl: https://github.com/lincolnh0/zendit

publish_date: "2021-11-30"

---

## Introduction
Zendit is a desktop application that automates the process of creating Github pull requests and transitioning the relevant Jira issue to the appropriate workflow.

## Motivation
At work, I find myself repetitively needing to create pull requests and transitioning the relevant Jira issue to Code review. The process is usually as follows:

1. pushing local changes on terminal
2. open a pull request on Github
3. edit PR template if one exists
4. assign PR reviewer
5. save PR
6. copy PR URL
7. open Jira issue
8. assign issue to reviewer
9. transition the issue to the appropriate state
10. comment with PR link
11. log time

While I have tried creating snippets of code using a launcher like Albert. It still requires me to actively bring up the launcher, search for my snippets and paste them in the correct browser textbox. To save time, Zendit was born.

## Technology
Zendit is written in electronJS, with Bootstrap 4 and 5 as its CSS framework. It is a "one button" solution to automate the above steps. After setting up your API keys and adding a repository, you will be able to create PRs and post comments with the "Zendit" button.

Using both the Jira and Github API, Zendit is able to do the following:

Assign PR to other members of the same Github organisation (of the repo)
Toggle Jira comment visibility depending on the group the user belongs in
Use tokens to tag the newly assigned Jira user and provide a link to the PR

## Results and difficulties
Zendit is able to cut down my time from 90-120 seconds to 20 seconds per PR, which adds up if I have been tackling several small Jira issues for that day.

Regarding difficulties, Jira uses their own Atlassian Document Format (ADF) to format any WYSIWYG fields on their website, meaning that I had to manually transform raw HTML to a slightly complex JSON object. Thankfully, they have a library to help but it was tiny bit tricky when I had to replace them with tokens.

## Alternatives
While Jira already has a Github plugin, it still requires you to create the PR on Github. Zendit is a desktop application that allows all of the above to be done without opening a browser window


### References and credits
[The Jira Cloud platform REST API](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/)

[GitHub REST API - GitHub Docs](https://docs.github.com/en/rest)

Photo by Edvin Richardson from Pexels
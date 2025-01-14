---
id: daily-scramble

title: Daily scramble

description: daily rubik's cube puzzle

sourceUrl: https://github.com/lincolnh0/daily-scramble

demoUrl: https://scramble.lncln.io/

publish_date: "2025-01-14"

---

## Motivation
While I spent my Christmas back home, I found myself a Rubik's cube at my parents' house. What started as simply fidgetting quickly turned into an obsession to improve my solve time day after day, so much so that it became one of my unofficial new year's resolutions.

## Vision
The prototype of the project is nothing complex. I wish to provide a way to generate scrambles daily for all users and provide a platform for people to keep track of their time. The "hardest" part of the project is devising an implementation of the cube in code and making sure it executes various rotations correctly.

The next step would be providing a leaderboard and a verification system so that people can submit runs to compete against other users on the platform.

However, the future of the project involves leveraging the famous `three.js` framework to render a 3d viewer of said cube while allowing real time interaction from users.

## Tech stack

I have once again returned to `Next.js` for my FE framework, simply because of its continued popularity. For the BE, I have decided to consolidate all my future projects within the same Supabase application so my loyal fans do not have to create multiple accounts across my non-commercial projects.

---
id: basketball-calendar

title: Basketball Calendar

description: daily jersey collection

bannerImg: https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg

bannerImgAlt: Free Basketball Hoop in Basketball Court Stock Photo

sourceUrl: https://github.com/lincolnh0/basketball-calendar

demoUrl: https://mir.lncln.io/

publish_date: "2023-06-28"

---

## Motivation
Having recently introduced basketball to one of my friend, I have promised them that I would send a photo of a basketball player to them every day to help them learn the names of these players.

To make the process more structured, I have decided to send them a player wearing a jersey that has the same number as the date every day.

## Solution
This project leverages two popular services - BasketballReference.com and SERP.

Basketball Reference is the gold standard for all basketball analytics and statistics and it conveniently has a section of all the players of certain jersey numbers, the idea then is to read the current date, look up the players that wear this number and perform a google image search.

While the logic here is simple, there are two main pieces of dev work that I have never done before. Firstly, Basketball Reference does not have an API, so raw webpage responses are fetched and scraped to retrieve the relevant player informaiton. Secondly, the post request to SERP cannot be performed on the client side, and is therefore contained in a Netlify serverless function.

## Limitation

### Basketball Reference
Curerntly the system only looks for players of the current season, historical jersey numbers are available but at the moment not implemented yet.

There are also many other iconic players whose jersey numbers are greater than 31. Under the current look up logic, these players will never be viewed in the calendar. A potential solution is to introduce a wild card mechanism where a random player might show up but that might defy the original purpose of the project.

### SERP
The token for SERP currently works off the free tier, meaning only 100 requests can be made per 30 days on a rolling basis.

The images are also selected without much filtering, this might lead to photos of players not wearing said number (either from a pervious team or lack of results).

### References and credits

Photo by Markus Spiske from Pexels
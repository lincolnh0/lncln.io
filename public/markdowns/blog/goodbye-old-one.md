---
id: goodbye-old-one

title: Goodbye old one

description: The beginning of a markdown based blog

publish_date: "2023-09-26"

---

## Motivation

A few years ago, I created ```lincolnh0.com```, a portfolio website that utilised the Django framework and Bulma on the 
front end. At the time, it was a valuable experience for me to experiment with the framework as well as dabbling in the 
DevOps process, from setting up a server to deploying the project with Docker.

I then self-hosted Jenkins on a private server to manage and automate the deployment process alongside a periodic
backup script of the database. The website was also served with SSL certificates from Let's Encrypt.

However, as time went on, the cost of maintaining a server, an object bucket and a website that seldom has updates (due 
to my own inactivity) proves to be too much overhead. In the meantime, I have created a few projects with various 
Javascript frameworks and have deployed them to serverless platforms such as Netlify.

## New approach

After reconsidering my options and I have decided to migrate my website to a static site generator with NextJS, 
powered by markdown files and git for version control. This allows me to focus on the content and the design of 
the website, rather than watching money burn on a server that I rarely use.

Moreover, the responsibility of server uptime and security is now on the hands of the service provider, which saves me
more time to invest in my other projects or blog updates.

Last but not least, having a repository that I will have to constantly update and work on to add content will motivate me to _actually_
follow up on the future roadmap of this website.
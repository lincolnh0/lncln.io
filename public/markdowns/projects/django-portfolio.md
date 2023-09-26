---
id: django-portfolio

title: Django portfolio

description: A (used to be) very meta post

bannerImg: https://images.pexels.com/photos/7527328/pexels-photo-7527328.jpeg

bannerImgAlt: Image of a skyscraper

sourceUrl: https://github.com/lincolnh0/lincolnh0.com

publish_date: "2021-11-10"

---

## Introduction

The original reason to create the portfolio was to document various project development processes. However, the website has since undergone cycles of development, from initially being powered by Flask to now Django, from being hosted on a dedicated Python cloud environment (PythonAnywhere) where everything other than the web app is managed to now a standard Debian-based VPS.

After so many iterations, this time around I may have slightly over-engineered my tech stacks in hopes that this will be a more future-proof website.

## Backend
Django was again chosen for its flexible nature. After learning the design decisions from the creator's book "Two scoops of Django", I used the cookie-cutter template [here](https://github.com/cookiecutter/cookiecutter-django). To simplify deployment, which I struggled with previously, I opted to include Docker in my development workflow and as my deployment method.

The portfolio also follows a Test-Driven Development process, where tests are first written against requirements before development starts. These tests are all run during deploy and should any one of them fails, the build will be marked as unstable.

## Frontend
Bored of using Bootstrap, I was torn between using TailwindCSS or Bulma. In the end, I went with Bulma simply for the gentler learning curve. However, given that I don't have any custom CSS added to my Django templates, it would be possible for me to switch back to Tailwind or another declarative CSS framework in the future, albeit with a lot of work.

## Devops
I spent most of my time tinkering with DevOps as I am least familiar with this sector of web development. Using Docker really accelerated the process but I still had quite a few hurdles to overcome. While the cookie-cutter template came batteries included, meaning all I had to do was to clone the repository to a remote server and run the production environment, I was not happy with the many manual steps it takes for a single deployment.

Instead, I installed Jenkins on another remote server and set up a pipeline job that performs the deployment using Docker context. I also removed the default Traefik configurations from the cookie-cutter template and replaced it with something more customisable, one that I can easily copy to other projects in the future.

I created another handy Jenkins job to run the included backup script nightly on my Postgres container, which is then copied to the job's workspace to save resources on the webserver.

For media files, they are stored on a standard Linode S3 bucket. I am also able to set up Rclone locally such that I can sync my media files between the development and the live environments.



### References
[Development and Deployment of Cookiecutter-Django via Docker – Real Python](https://realpython.com/development-and-deployment-of-cookiecutter-django-via-docker/)

[How to deploy on remote Docker hosts with docker-compose - Docker Blog](https://www.docker.com/blog/how-to-deploy-on-remote-docker-hosts-with-docker-compose/)

[How To Use Traefik v2 as a Reverse Proxy for Docker Containers on Ubuntu 20.04 | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-traefik-v2-as-a-reverse-proxy-for-docker-containers-on-ubuntu-20-04)

[Google Online Security Blog: Content hosting for the modern web](https://security.googleblog.com/2012/08/content-hosting-for-modern-web.html)

Photo by John Lee from Pexels
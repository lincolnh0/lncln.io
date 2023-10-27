---
id: cookiecutter-railway

title: Putting the cookies on track

description: More lazy solutions

publish_date: "2023-10-27"

---

## Motivation

For a while now, whenever I have an idea of creating a fullstack project, I always inevitably run into DevOps problems. In the past, I have tried numerous services such as PythonAnywhere, AWS Lightsail as well as Linode. After some time, I settled with a VPS node that charges me $5 a month and had considered it the best possible solution. An example of this would be my old portfolio website.

While I have found a solution to host my portfolio serverlessly, it still doesn't solve my need of hosting a full stack project without constantly being charged for more than the resources I use.

Since hearing about [Railway](https://railway.app), I have been looking into incorporating it into my stack due to the promised simplicity, alongside its usage-based billing. 

## Working with cookiecutter

My Django development journey is heavily influenced by the book "Two Scoop of Django" and hence every project that I have started, the [cookiecutter-django](https://github.com/cookiecutter/cookiecutter-django) template has been my go-to project layout.

Now that I have made a mini fork of the cookiecutter template, I can deploy to Railway effortlessly while retaining my preferred project structure.
---
id: markdown-portfolio

title: Markdown portfolio

description: a meta post

bannerImg: https://images.pexels.com/photos/606539/pexels-photo-606539.jpeg?w=1080

bannerImgAlt: Image of a journal notebook

sourceUrl: https://github.com/lincolnh0/lncln.io/

demoUrl: https://www.lncln.io/

publish_date: "2023-09-26"

---
## Motivation
Please refer to my [blog post](/blog/goodbye-old-one) to read about the motivation behind this project.

## Tech stack
- NextJS
- ```gray-matter```
- Markdown
- Netlify
- Tailwind

## Summary

A git controlled CMS that uses markdown files as the source of content. With the repository linked to Netlify, 
each push triggers an automatic build and deployment of the website, updating it with the latest content.

Additionally, the pull requests on GitHub can act as a content approval/review system, giving me a second chance to 
proofread my posts before publishing them.

To add metadata to the markdown files, I used [gray-matter](https://www.npmjs.com/package/gray-matter) to parse them 
and fill out various meta attributes. (You can view the source markdown.)

Styling of the website is done with Tailwind CSS, which I've been using for a while now. The semantic utility
classes allow for some quick development. 

## Challenges

The main challenge comes from the HTML generated from gray-matter, as they are dumped directly into
the markup without any class names. This makes styling them a bit difficult, I have to rely on importing
```.module.css``` files and apply the styles to the elements directly.

However, it does nicely scale and the same styles are imported into both the Project and Blog posts.

## Future plans
Currently, the listing component can be a bit lackluster as it just lists all the files in the
specified directory.

I plan to add a search function to the listing component, as well as a tag system to categorise my posts.


### References and credits
Photo by Jessica Lewis from Pexels
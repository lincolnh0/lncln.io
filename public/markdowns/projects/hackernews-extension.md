---
id: hackernews-extension

title: Hackernews chrome extension

description: Walling myself in

bannerImg: https://images.pexels.com/photos/270700/pexels-photo-270700.jpeg

bannerImgAlt: Image of a cursor clicking on a link titled "Settings"

sourceUrl: https://github.com/lincolnh0/hn-extension

publish_date: "2021-11-29"

---

## Summary

Having created hn.lincolnh0.com, it has become increasingly annoying to me when I click on a link that takes me back to the original website at [https://news.ycombinator.com/](https://news.ycombinator.com/).

With that said, I wrote a simple Chrome extension that only works on both these URLs, and replaces every ```<a>``` that points to the original address with [hn.lncln.io](hn.lncln.io).

The single challenge with this is finding the right Javascript event listener, as content is dynamically loaded with React.

Using mutation observer, I was able to achieve said behaviour as the observer triggers my replacement code when new content is injected into the document.

### References and credits
Photo by Pixabay from Pexels
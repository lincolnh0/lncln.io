---
id: paint-by-numbers

title: Paint by numbers

description: would've made good NFTs

bannerImg: https://images.pexels.com/photos/3737703/pexels-photo-3737703.jpeg?w=1080

bannerImgAlt: Free Abstract background of colorful painted water and oil Stock Photo

sourceUrl: https://github.com/lincolnh0/paint-by-numbers

demoUrl: https://github.com/lincolnh0/paint-by-numbers/blob/master/painit_by_numbers.ipynb

publish_date: "2021-11-30"

---

## Summary

[Paint by Number](https://www.paintingbynumbers.co.uk/) is a popular business where customers can purchase kits that include a set of paint and a canvas with many labelled shapes. All they then have to do is the colour in each shape with the corresponding paint. The end result can appear to be quite organic to non-artistic eyes like mine.

They also offer a service where you can send in your own photos and they will produce a custom kit for you. This inspired me to create something similar, that given an image, I can produce a reduced version of it that should be manageable to paint, i.e. consists of a limited number of colours.

In essence, the algorithm categorises pixels into groups and reprints the image using each group's mean RGB value. As this process is repeated, each group approaches their true value and the end result can reflect the original image more accurately.

A more comprehensive breakdown is included in the Demo link, which points to a Jupyter notebook.

### References and credits
Photo by Dids from Pexels

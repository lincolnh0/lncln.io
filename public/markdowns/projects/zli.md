---
id: zli

title: ZLI

description: dev zuite pt.2

bannerImg: https://images.pexels.com/photos/394376/pexels-photo-394376.jpeg

bannerImgAlt: Free Gray Feather on Tree Stem Stock Photo

sourceUrl: https://github.com/lincolnh0/zli

publish_date: "2022-01-22"

---

## Summary
Previously, I have created [Zendit](/projects/zendit) to accelerate the speed at which I can write up pull requests and update the corresponding Jira ticket. As a result, I have spent significantly less time on both these websites during my day-to-day.

The next website on the optimisation chopping block is Jenkins. While Jenkins jobs can be configured to track a VCS branch and deploy whenever there are new commits, some projects are reserved to be triggered manually when continuous integration isn't desired.

As the list of jobs on a Jenkins server grows, the jobs you frequent might be fragmented into various views, under multiple layers of pipelines and each build requires you to click through all these pages before you can finally configure the build parameters.

ZLI tackles this issue by providing a quick CLI interface to access your most frequent builds and deploy directly on your terminal.

~~At the moment ZLI supports Boolean Parameters with the use of [promptui](https://github.com/manifoldco/promptui), but will definitely look into integrating more options should the demand grows.~~

Following the release of v0.3.0 (or 0.3.1 because I messed up the versioning) - ZLI now supports Choice (dropdown), Boolean (checkbox) and String (textbox) parameters. 🎉

### References and credits
Photo by Isaque Pereira from Pexels
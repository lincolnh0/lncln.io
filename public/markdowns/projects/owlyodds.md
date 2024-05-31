---
id: owlyodds

title: Owly Odds

description: OddOwl evolved

bannerImg: https://images.pexels.com/photos/86596/owl-bird-eyes-eagle-owl-86596.jpeg

bannerImgAlt: Free Brown and Black Owl Staring Stock Photo

#sourceUrl: https://github.com/lincolnh0/oddowl

demoUrl: https://owly.lncln.io/

publish_date: "2024-05-31"

---

## Summary

After a few years since the initial release of OddOwl, I decided to revisit the project and give it a fresh new look.
Having recently dabbled with the SvelteKit framework, I decided to use it to rebuild OddOwl.

The result is Owly Odds, a vision revisited to provide a better user experience and a more modern look. Using
TailwindCss in conjunction with dasiyUI, information can be displayed in a more visually appealing manner, with various
eye candies to highlight the most important data.

Another significant change is the steps taken to potentially monetise the project. The boilerplate repository
from [CriticalMoments](https://github.com/CriticalMoments/CMSaasStarter) provides easy to use Stripe integration out of
the box. Currently, the project has a subscription model in place, with a free tier available.

For user authentication and data storage, Supabase is used. It provides a simple way to manage user data and store other
application information.

CI/CD is set up using GitHub Actions, with the deployment to Netlify alongside my other similar projects. 

## Tech stack

- SvelteKit
- TailwindCss
- Supabase
- Stripe

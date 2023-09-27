---
id: poster-eyes

title: Poster Eyes

description: the greatest sets at home

bannerImg: https://images.pexels.com/photos/247801/pexels-photo-247801.jpeg

bannerImgAlt: Free Postage Stamp  Stock Photo

sourceUrl: https://github.com/lincolnh0/poster-eyes

demoUrl: https://poster.lncln.io/

publish_date: "2023-09-27"

---

## Motivation

Having been to a few music festivals the past year, I've come to the realisation that I have a very narrow
taste in music. So much so that sometimes I can't even name a single song from the headliners of the festivals I've 
been to. However, I'm not the only one who has this problem.

While some might prefer organically broadening their music horizons, I, who's grown up with an education system where 
tests are the only valid way to gauge one's knowledge, prefer to have a list of songs to listen to before the festival, 
much like an exam revision.

## Summary

Poster Eyes is a web app that allows users to upload a festival poster, and then using text recognition library, extracts
the names of the artists and bands from the poster. The top tracks of each artist is then compiled into a playlist.

From then on, the playlist can be shared with other people and to be listened to before attending the festival.

## Challenges

This app was designed to run completely client side, hence the use of ```tesseract.js``` to perform the text recognition.

However, the library is not perfect, and sometimes it fails to recognise the text on the poster. This is especially true
with more stylised posters, where the text is not as clear. Users are asked to proofread the interpreted text before we
proceed to the next step.

There also is the challenge of handling all user's data on the client side. Uploaded images are stored in the browser's
memory as blob and tracks are stored on ```localStorage``` before the user is redirected to Spotify to login.

## Tech stack

- ```tesseract.js```
- Spotify API
- VueJS
- Netlify

### References and credits

[Spotify API](https://developer.spotify.com/documentation/web-api/)

[Tesseract.js](https://tesseract.projectnaptha.com/)

Photo by Pixabay from Pexels
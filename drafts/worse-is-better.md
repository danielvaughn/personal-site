---
title: Worse is Often Better
excerpt: Sometimes, finding a good solution means revisiting what it means to be "good"
publishDate: 'Sep 12 2023'
tags:
  - Case Study
---

Bullet points:

- Worked with a fledgling startup
- Was paying freelancers to keep the lights on
- The lights were most certainly _not_ staying on
- Errors going off everywhere, devs had been trying to fix his issues for months
- I noticed two serious issues
- one was a stripe integration that handled user payments
- the other was an over-engineered backend that used 45 k8s services for a 3 page note-taking app
- in both cases, moving to a "worse" solution was the right move
- I replaced the fancy stripe integration with the out-of-the-box stripe page
- I rewrote the entire backend in 2 weeks, removed almost 80k lines of code, moved him from GKE to AppEngine
- The side benefit of this change was that his freelance budget could now be for actual feature development
- Because of the unlocked feature development, he eventually obtained funding, and is now gaining traction
- By moving his technology stack away from the scalable and sophisticated technology, I brought him to the right solution
- By many standards, this stack is worse, but for his business use case, it's better

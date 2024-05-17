---
title: Matry
description: A programming language for UI designers
publishDate: 'Aug 10 2023'
---

## TL;DR

One time I was tasked to fix some issues for a new freelance client.
He had paid some developers to build an AI-powered note taking web app.

All in all, this was 3 pages - the login page, the note editor itself, and a settings page.
It hit about 15-20 different endpoints, connecting to a NodeJS backend along with a Mongo database.
Aside from some collaborative-editing challenges, the app was really just CRUD functionality, nothing too serious.

However, I noticed 2 glaring issues almost immediately.

1. The settings page had a subscription payment form, which talked to their own backend, which talked to Stripe. This means the app was handling user's financial information - anyone who's worked with PCI compliance knows how serious this is.
2. The backend, even though it served a mere 15-20 endpoints, was comprised of about 50 different microservices all hosted in Kubernetes on GCP.

If you've ever worked with Kubernetes, you know how powerful it is.
But that power, of course, comes at the price of complexity.
It's _difficult_ to maintain a Kubernetes application over time - you need at least one solid devops specialist if you want to have a shot at doing it successfully.

At the time, this startup had been going through some financial struggles.
He (the founder) had no full-time engineers, and was just pulling in freelancers here and there to help him out.

## Introduction

In the spring of 2022, I decided to open myself up to freelance work, for the first time since I became a professional engineer.
At the time, I was mostly working out of a co-working space in South Florida.
One of my first clients was a local startup called BundleIQ, an AI-powered knowledge management platform that simplifies data gathering and analysis from multiple sources.

The founder was desperate; as he put it, he had bugs all over his app, and it was difficult to find the help he needed.

I cracked open the codebase and began digging in.
Here's what I saw:

1. The front end was a fairly complex Angular 2+ setup, with lots and lots of abstraction. In and of itself, no big deal. I've dealt with such codebases before.
2. The backend was a distributed NodeJS application, split into microservices running on GKE (Kubernetes within GCP).
3. There were roughly 50 different services, each with their own Mongo database, to service the application.
4. The app was deployed via CircleCI.

In the modern tech landscape, this is considered normal.
However, compare what I just described with _what the application does_.

## Features

1. **Note taking:**

- Users are assigned an EcoScore based on their sustainable activities and choices.
- Daily and weekly challenges encourage users to adopt new habits and compete with friends or the community to earn EcoPoints.

2. **Personalized Eco-Goals:**

- Users can set and track personalized eco-goals, such as reducing plastic usage, conserving water, or choosing eco-friendly transportation.
- The app provides tips and suggestions to help users achieve their goals.

3. **Green Rewards Marketplace:**

- EcoPoints earned through challenges and sustainable actions can be redeemed in a virtual Green Rewards Marketplace.
- The marketplace offers discounts on eco-friendly products, services, and even contributions to environmental causes.

4. **Community Hub:**

- A community feature allows users to connect, share their eco-friendly achievements, and inspire others.
- Users can join local eco-groups, organize clean-up events, and collaborate on sustainability projects.

5. **EcoEducator AI Assistant:**

- An AI-powered assistant, EcoEducator, provides personalized eco-tips, facts, and information based on users' preferences and habits.
- Users can chat with EcoEducator for instant advice on sustainable living.

## Technology Stack

- Frontend: React Native for cross-platform mobile app development.
- Backend: Firebase for real-time data synchronization and user authentication.
- Database: Firestore for scalable and flexible data storage.
- AI Integration: Dialogflow for natural language processing and conversation with EcoEducator.

## Outcome

EcoBuddy has successfully created a community of environmentally conscious individuals who actively participate in sustainable living practices. The app not only educates and motivates users but also provides tangible rewards for their commitment to a greener lifestyle, fostering a positive impact on the environment.

## Client Testimonial

> We couldn't be happier with the results delivered by Ethan Donovan. From the initial concept discussions to the final product, their responsiveness and collaborative approach were impressive. Our startup's website now stands out, thanks to their creative input and commitment to excellence.

**Note:** This case study is entirely fictional and created for the purpose of showcasing [Dante Astro.js theme functionality](https://justgoodui.com/astro-themes/dante/).

---
title: Starting My Blog
slug: starting-blog
tags: thoughts
date: September 25th, 2024
description: Some thoughts behind why I'm starting a blog and how I'm going about making it.
---

# Introduction

Hello! If you've stumbled upon this page, then you're probably in one of two camps: either you're curious as to why I’ve started a blog or the magical internet search gods have randomly suggested my article. And honestly, I just got a lot I want to say! Writing down my thoughts has always been a great way to organize everything bouncing around my head, but I've been exceptionally lousy at keeping up with any form of journaling. If you pick any topic I’m interested in, I could talk about it for hours without stopping. So why not immortalize it in a blog :)

# Building the Blog

With my foundation in computer science and dozens of personal projects, the technical creation of the website is probably the *easiest* part of this process (at least for me).

I'm using [SvelteKit](https://kit.svelte.dev/), a super lightweight framework -- essentially a simple abstraction on top of raw HTML and CSS. I opted for SvelteKit over a more common [React](https://react.dev/) framework, such as [Next.js](https://nextjs.org/), because this blog simply doesn't need that level of complexity. Sure, I'll use Next.js for a complex full-stack application, but this site is basically just a markdown viewer. 

The only technical feat here is the preprocessing step. I added a custom script to convert my markdown files into HTML using [Showdown](https://showdownjs.com/). I can then import the HTML (using the Svelte [@html](https://svelte.dev/docs/special-tags#html) directive) based on the page path. The rest of the app is a straightforward SvelteKit app. Everything is deployed on [Vercel](https://vercel.com) and connected to the domain name that I get from [Cloudflare](https://www.cloudflare.com/products/registrar/). 

I don't want to get too technical here, so I'm gonna move on (but do let me know if you want a detailed devlog someday).

# What I'm Writing

I'm not an avid writer by any means, so I've struggled a lot with actually getting the motivation to write articles. But I decided now is the time. I'm forcing myself to sit down and **write**.

When I originally had this idea *years ago*, I thought of making a blog specifically for technical posts. Although I have plenty of technical things to write about, I realized that forcing myself to write about a specific topic with a specific format is no fun. Reminds me of when I tried -- and failed miserably -- to [bullet journal](https://en.wikipedia.org/wiki/Bullet_journal). As such, this blog will be *literally anything* that I think of and want to tell the world. You can think of this blog as me yappin' on the internet. And I already have a ton of ideas! To list a few: book reviews, tech guides, opinion pieces, and cool stuff I'm learning.

# Keep reading!

That's pretty much all I have to say for now. If you've made it this far, congrats. I'd love for you to read more of my stuff -- go back to the [home page](/) to see all my posts! Regardless of how you got here, thank you so much for taking the time to read this silly little post. Hope you have an amazing day :DD

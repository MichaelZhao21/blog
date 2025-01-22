---
title: Deploying your Website for Free; The Power of Vercel
description: How to deploy your website to anyone on the internet for free (forever!) using Vercel
date: January 22nd, 2025
tags: tech, tutorial, deployment, web-dev
slug: vercel
---

# Intro
Following any tutorial titled "How to build a website," "Basic React Application," or "Make a personal portfolio from scratch," you'd end up with (hopefully) a decent website. However, when your friends get a link to your website, they can't see what you see! I bet you sent them either `file://home/username/cool-website` or `http://localhost:3000`. Spoiler alert: there's a reason why it's called [LOCAL host](https://www.freecodecamp.org/news/what-is-localhost/). We need to actually **deploy** this website to the ✨ internet ✨

When you start looking into how to deploy websites, you may be hit with terms like "AWS," "EC2," "DNS servers," "the cloud," etc. It's confusing. I've been there, and I was so incredibly lost. Luckily, I stumbled onto [Vercel](https://vercel.com/). A few years later, I've got all my frontend apps deployed there for the **cost of nothing**.

# How?
I can't explain how it's free (not complaining ofc), but I can absolutely explain how to use it! Deploying an app with Vercel is as easy as [selecting your Github repo](https://vercel.com/docs/deployments/git#deploying-a-git-repository) and following a 1-2-3 guide. Let's go through it step-by-step:

## 1. Upload your code to GitHub
[GitHub](https://github.com/) is the defacto platform for storing code in the open source and personal project world. It's free, widely used, and has tons of great resources to help you learn. Here's a [sweet blog post from Hubspot](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners). Once your website is pushed to Github, you should have a **repository**, which should look similar to [my personal website's repository](https://github.com/michaelZhao21/michaelzhao.xyz).

## 2. Create a Vercel account
[Vercel](https://vercel.com/) is the focus of this post! This is where we're deploying our website. Click "Start Deploying" on the home page. On the left, it should say "Import Git Repository." And look, you can just hit **Continue with GitHub**! This integration allows you to import whatever GitHub repository you want directly into Vercel, with the click of a button.

![screenshot highlighting the continue with github button](https://cdn.mikz.dev/blog/vercel-continue-with-github.webp)
<figcaption class="caption">Screenshot of Vercel's 'Continue with GitHub' button</figcaption>

## 3. Deploy your site!
Once you've selected the repository you want, Vercel should guide you through a [step-by-step app creation interface](https://vercel.com/new). Once you complete all the steps, you should have an app accessible by anyone on the internet! On your main app page, you should see a custom URL for your website in the form `<project name>.vercel.app`, where `<project name>` is the name of your project.

## What's Next?
Now that you've gotten your first app deployed, nothing's stopping you from doing another. Here are some cool things that Vercel can do that are worth looking into:
- **Web Analytics** -- See statistics about your website, from when to where people are viewing your site
- **Logging** -- Any logs that your website would produce are stored and accessed readily in the Vercel console
- **Custom Domain Name** -- Want a domain name of your own? I suggest getting one from [Cloudflare Domains](https://www.cloudflare.com/products/registrar/)! Once you've gotten one (not free, unfortunately), you can easily add it to Vercel and start using it for your website

After doing this a couple of times, you'll find this process is as easy as it gets. We no longer have to spin up our own web servers and do our own Apache or NGINX configs. Vercel makes this process easy, fast, and -- best of all -- completely free!
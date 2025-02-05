---
date: Febuary 5th, 2025
title: Becoming a Google Docs Poweruser
description: How to use Google Docs like a pro with every keyboard shortcut and command you'll ever need
tags: tutorial, google-docs
slug: google-docs-poweruser
---
I use [Google Docs](https://docs.google.com) a lot. Not only is it convenient for students (easy access, decent amount of storage), but it's also a good choice for general [knowledge management](https://en.wikipedia.org/wiki/Knowledge_management_software). Of course, I've jumped ship to [Obsidian](https://obsidian.md/) for personal notes, but I'll save that story for a whole different article. However, my student organization ([ACM UTD](https://www.acmutd.co/)) still uses [Google Workspace](https://workspace.google.com/), so I have to use Google Docs anyways. There are plenty of things to love about Google Docs, but I also have a handful of complaints. Over the years, I've accumulated a bunch of useful tidbits to make my Google Docs workflow as productive as possible -- and I'll try to cover as much as I can today!

# How to Docs
At face value, Google Docs is like any standard text editor. You can edit text, add images, change the font, add headings, etc. However, I've watched my friends use Google Docs, and it's **painfully slow**. Want to change the text size? Move the mouse up to click the "increase font size" button. Want to create a bulleted list? Drag your hand to the mouse and toggle the "bulleted list" button. As someone who uses [Vim keybindings](https://en.wikipedia.org/wiki/Vim_(text_editor)#Interface) way too much, this process is unbearable. Luckily, I've found ways to be lazy and never leave the keyboard. Even if you aren't planning on throwing away your mouse, I'd still recommend integrating these tips into your daily workflow.

## Markdown
The first lifesaver is [Markdown](https://www.markdownguide.org/getting-started/). Markdown is a simple standard for writing *slightly fancier* text documents. Think of text documents but with headings, bolded text, and links. The power of Markdown lies in its simple yet powerful set of notations, all written in plaintext. You may be wondering why I'm yapping about this "markdown" thing in an article about Google Docs, but Google Docs has a Markdown integration! You can easily create headings, lists, and more without using that pesky mouse. To enable Markdown integration, go to **Tools > Preferences** and click **Enable markdown**:

![[google-docs-markdown.png]]
Google Docs option to enable Markdown

Now that you have this feature enabled, let's take a look at the most useful Markdown shortcuts:

**Headings**. These divide your document into sections. The "Document outline view" (on the left panel of Google Docs; if it's not there, go to **View > Expand tabs & outlines sidebar**) shows an outline containing your document's headings. To format a line into a heading, type a pound sign (or "hashtag," as the kids call it), with the number of pound signs denoting reverse importance (1 = most important, 2 = second most important, and so on):

```md
# This is a heading
## This is a sub-heading
### This is a sub-sub-heading
etc.
```

Try this in a Google Doc now (Did you know that [docs.new](https://docs.new) creates a new Google Doc?!) -- notice how when you hit space, it automatically changes the format (see below sections) to `Heading <#>`, based on how many hashes you typed.

**Lists**. If you've ever tried creating them, making bullet point lists is relatively tedious in Google Docs -- you either have to click the button or use the keyboard shortcut (why is the keyboard shortcut **Ctrl+Shift+8**???) Instead, type a star character (`*`) and click space. Boom! There's a bulleted list. If you want a numbered list, type `1.` and hit space. Bam! Numbered list.

## Keyboard Shortcuts
I know I complained about how the "toggle bulleted list" keyboard shortcut kinda sucks, but there are actually a ton of good keyboard shortcuts. The most used and simplest ones are underlining, bolding, and italicizing: **underline** with `Ctrl+U`, **bold** with `Ctrl+B`, and **italicize** with `Ctrl+I`. You've almost definitely seen these if you've used any [rich text editor](https://en.wikipedia.org/wiki/Formatted_text).

Here are some of my other favorite shortcuts that are extremely helpful to use while typing in Google Docs:

- Increase font size: Ctrl+Shift+\[period]
- Decrease font size: Ctrl+Shift+\[comma]
- Superscript: Ctrl+\[period]
- Subscript: Ctrl+\[comma]
- Left align: Ctrl+Shift+L
- Center align: Ctrl+Shift+E
- Right align: Ctrl+Shift+R
- Increase/Decrease Indention: Tab / Shift+Tab
- Clear formatting: Ctrl+\[backslash] (`\`)

I use that last one a lot. It removes all formatting applied to the selection. This "Clear formatting" feature is especially powerful when combined with the next feature.

## Defaults
One significantly underutilized feature of Google Docs is the default formatting for each type of text. In the menu, notice how there are a couple of different formats like "Normal text," "Title," "Heading 1," etc. By selecting one of these, the text in the current line will change (most noticeably, the font size). However, did you know you can customize each one of these defaults?

Let's try it. Select any line of text and adjust its formatting (font family, font size, maybe even bolding it). Then, highlight and right-click. Go down to "Format options" and select "Update '[format]' to match," where [format] would be replaced by "Normal text" or whatever text format you're currently working with.

![[google-docs-text-format.png]]
Default text formatting

Upon clicking it, you'll notice that the text in the rest of the document has changed! We can demonstrate this most clearly with the font family. Let's say you love the font [Rubik](https://fonts.google.com/specimen/Rubik) (one of my favorites) and want the entire document to use that font. Change some text to Rubik, right-click, select "Format Options," and hit "Update 'Normal text' to match." Now all your text looks pretty!

The hidden power of default styling shines when you hit `Ctrl+\` (clear formatting). No matter what formatting you've applied, `Ctrl+\` resets the selected text to **match the default style you set**.

## Substitutions
You may have used a substitution without realizing it. Have you ever typed `1/2` only for it to be automatically replaced by `½`? Google Docs has a ton of default substitutions, but you can add as many custom substitutions as you want! Go to `Tools > Preferences > Substitutions` to see all automatic substitutions. Once you've set the substitutions, type the left-hand side (e.g. `1/2`), hit space, and the substitution will appear!

![[google-docs-subs.png]]
Substitutions menu

I often use this feature to insert [em dashes](https://www.merriam-webster.com/grammar/em-dash-en-dash-how-to-use) into my writing. When I took Discrete math, I used Google Docs to take all my notes. If you've ever tried to take math notes on a computer, you'll know that the standard keyboard sorely lacks symbols. To remedy this, I added a TON of substitutions for Greek characters, set notation, and other fancy symbols. For example, I used `/omega` to substitute for the `ω` character.

# Search the menus
I've gone through a TON of keyboard shortcuts here, but you'll notice that you still have to use a mouse to do some rather basic things. How do I change the color of my text? Click on the text color icon. Strikethrough text? Find it in the formatting menu -- or remember the horrendous `Alt+Shift+5` keyboard shortcut. Of course, I wouldn't be telling you all this if I didn't have a simple solution.

The magic lies in the `Alt+/` (forwardslash) keyboard shortcut. This shortcut is also accessible through Help > Search the menus. Hitting these two keys opens up a small dialog box. If you've ever used [Spotlight Search](https://support.apple.com/guide/mac-help/search-with-spotlight-mchlp1008/mac) on a Mac, this will feel very familiar. You can search for **any** action or command in Google Docs through this menu. Need to change the text color? `Text color: Cornflower blue` is on there. Strikethrough text? Also there. Anything you can access through mouse clicks is now accessible through this simple search box.

The "Search the menus" dropdown will also show you the keyboard shortcut for any command, so if you forget any shortcuts presented in the above sections, `Alt+/` is just two keystrokes away.

So many people have asked, "How did you do that?!" after seeing me change the text color or strikethrough text with less than five keystrokes. Trust me, this feature is so damn useful I'm shocked that it's so hidden.

![[google-docs-help.png]]
The Most Useful Feature, "Search the Menus"

# Conclusion
At the end of the day, there's no "right" way to use Google Docs. This isn't an article trashing people who use the mouse. Even I still use the mouse for specific things like selecting and choosing custom colors. At the end of the day, the web interface is inherently mouse-based, and there's absolutely nothing wrong with using one.

That being said, I am someone who finds a way to have Vim keybindings in every single editor I use (VSCode, Obsidian, Android Studio, etc). So writing to that audience, I encourage you to start using these shortcuts and propel your productivity within the Google Docs ecosystem! These shortcuts do take time to get used to, so I suggest slowly starting to apply these shortcuts until they become second nature.
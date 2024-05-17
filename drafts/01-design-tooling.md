---
title: "What's wrong with design tooling?"
publishedAt: 2017-05-03
description: "Some thoughts about industry tools, and where we might want to go in the future."
slug: "design-tooling"
isPublish: false
---

I think there are a few problems with the current design tooling ecosystem.

## Monolithic design

Most design tools today enforce a top-down approach to app design. That is, you design your app page-by-page (or view-by-view). Your design therefore consists of a series of drawings, each of which displays the entire screen for a given state. This is "monolithic" - the process of drawing *everything* over again for each page. It is difficult, if not impossible, to design individual components in isolation. Most tools have some assistance to make this task easier, but even then it is an afterthought.

## Information overload

Virtually all design tools inherit the UI conventions that have been handed down by Adobe products. You have a central canvas, a left-aligned toolset, a list of contextual options on the top, and attribute panels on the right. While this is a powerful layout for applications that are broad in scope (like Photoshop), it is not really necessary for designing digital products. Additionally, it creates massive information overhead, and as a result it takes quite a long time to "settle in" so that you can quickly find what you need.

## Design to code

In recent years, there has been significant interest in exploring the boundaries between design and code. Recently, there has been a trend in design tooling to cross that boundary completely. Many of these attempts result in a code-generation app: designers draw a picture, and the app generates corresponding css code. Outside of a few simple cases, this is simply not a scalable approach. Designers and developers have their own internal terminologies, conceptual frameworks, and methodologies. Though it is worthwhile to explore this relationship, I don't believe it's possible to create a design tool that performs an *implementation* of the final product.

## Where should we go from here?

I think the next generation of tooling should incorporate the following features.

- There should be a design tool that allows for a completely "bottom-up" approach. With the current (2017) popularity of dev tools like Storybook, where app components are built in isolation, it seems even more appropriate to have an equivalent tool for designers.
- A design should cater to all deliverables. A design tool needs to provide deliverables to developers, to product managers, and to marketers. Tools like photoshop do a great job at providing flashy and beautiful grahics (great for marketing), but they are terrible for inferring how a design should be coded.  
Why did the designer use this hex code for this text? Where else is this hex code being used? Is there any relationship between this hex code and the others? Questions like these are what developers ask, and there should be a design tool that caters to them.
- Related to the former principle: a design should self-document. In other words, inspecting the design should quickly reveal *design values* (the relevant parts for developers). It should also reveal *design intent*, which is the designers intended relationship between the design values.
- A design tool should focus on reusability. While tools like Sketch have certain features that make this fairly simple (Symbols), there should be a tool that puts this front and center.
- Instead of attempting to translate designs directly into code, a design tool should create a mutually understandable conceptual framework that acts as an interface between designers and developers. For instance, the term "swatch" belongs neither to designers or developers, but both can understand what the term signifies in their respective domain. In other words, a designer understands that "swatch" refers to what they know as an "appearance" (adobe) or "shared styles" (sketch). A developer understands that "swatch" refers to what they know as a "class" or a "ruleset". To summarize this point, a shared grammar that is easily understood by both design and development teams does more to enhance design-to-code fluidity than any code generation functionality.

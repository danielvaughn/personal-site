---
title: "constraint resolution in css"
publishedAt: 2024-05-15
description: "css anchor positioning might be able to give us 'autolayout but for the web'"
slug: "anchor"
isPublish: false
---

With the release of [Chrome 125](https://developer.chrome.com/blog/new-in-chrome-125#:~:text=With%20CSS%20Anchor%20Positioning%20you,large%20number%20of%20CSS%20properties.), we now have anchor-positioning landing in CSS.

Right off the bat, one thing I love about it is how much it reminds me of iOS's approach to layout.
I've been wanting some kind of constraint resolver in CSS since I first built a couple of native iOS apps way back in 2015.
Before SwiftUI, iOS interfaces were created with a layout engine called [AutoLayout](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/index.html),
which is based on a constraint-resolution algorithm called [Cassowary](https://constraints.cs.washington.edu/solvers/cassowary-tochi.pdf).

I won't go into depth about AutoLayout, but suffice to say that it makes layout very easy in most cases.
I've always thought it was a shame that we didn't have an equivalent on the web, though via a quick Google search I came across a handful of attempts:

- [GSS (grid style sheets)](https://github.com/gss/engine)
- [CCSS (Constraint Cascading Style Sheets)](https://constraints.cs.washington.edu/web/ccss-uwtr.pdf)
- [Layx](http://www.layx.org/)
- [CassowaryJS](https://github.com/slightlyoff/cassowary.js/)

Here's a basic example of anchor-positioning:

<iframe height="300" style="width: 100%;" scrolling="no" title="Anchor Positioning Test 1" src="https://codepen.io/danielvaughn/embed/zYQvVNZ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/danielvaughn/pen/zYQvVNZ">
  Anchor Positioning Test 1</a> by Daniel Vaughn (<a href="https://codepen.io/danielvaughn">@danielvaughn</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Another thing I love about this syntax is how easy it maps to spoken language.
It's not hard to imagine uttering the following sentence - "I want the top of the blue square to be at the bottom of the red square".
It's one of the things I'd been trying to accomplish with [Matry](https://github.com/matry) - I wanted a layout framework that aligned to designers' vocabulary and mental models.

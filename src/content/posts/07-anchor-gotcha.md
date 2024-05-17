---
title: "aww my very first gotcha with anchor-positioning <3"
publishedAt: 2024-05-17
description: "just jotting down an unintuitive aspect of this new api"
slug: "anchor-gotcha"
isPublish: false
---

Just jotting down an unintuitive aspect of this new API.
I've been playing around with CSS anchor positioning and it's been super easy up until now.
Give an element an `anchor-name`, and call the `anchor()` function on any element you want to append to it.

<iframe height="300" style="width: 100%;" scrolling="no" title="Anchor Positioning Test 1" src="https://codepen.io/danielvaughn/embed/zYQvVNZ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/danielvaughn/pen/zYQvVNZ">
  Anchor Positioning Test 1</a> by Daniel Vaughn (<a href="https://codepen.io/danielvaughn">@danielvaughn</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

However, I ran into an interesting hiccup that I wanted to share.
I wanted to see if I could anchor to two different elements simultaneously.
See the shitty drawing below:

1. red guy on left
2. blue guy on right
3. left side of purple guy anchored to right side of red guy
4. right side of purple guy anchored to left side of blue guy

<img src="/vector-drawing-1.svg" />

In theory, it should be simple.
Alas, here's what happens when we try that approach:

<iframe height="300" style="width: 100%;" scrolling="no" title="Anchor Positioning Test 2" src="https://codepen.io/danielvaughn/embed/MWdaMrj?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/danielvaughn/pen/MWdaMrj">
  Anchor Positioning Test 2</a> by Daniel Vaughn (<a href="https://codepen.io/danielvaughn">@danielvaughn</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Why is purple guy not visible?
As it turns out, the reason is because of the source order.
Apparently, the `anchor-name` declarations aren't hoisted such that you can refer to an anchor that appears later in source.

If I had to guess, I would say that this behavior is due to how cascade rules take source order into account,
and that probably imposes significant downstream limitations on the positioning API.

Here's the working example.
The only change I've made from the previous example is that I moved the purple div so that it's the last child in the node list:

<iframe height="300" style="width: 100%;" scrolling="no" title="Anchor Positioning Test 3" src="https://codepen.io/danielvaughn/embed/OJYyKEW?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/danielvaughn/pen/OJYyKEW">
  Anchor Positioning Test 3</a> by Daniel Vaughn (<a href="https://codepen.io/danielvaughn">@danielvaughn</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

All in all, not too difficult to remember once you know it,
but it's definitely a massive gotcha and could give you a mild migraine if you aren't careful.

I'm also kinda disappointed because I wanted to see if I could build a fully fleshed out layout system just using anchor positioning,
similar to AutoLayout in iOS.
But with this constraint, it would require markup to be placed out-of-order and could therefore affect accessibility.
Bleh.

Anyways, cheers.

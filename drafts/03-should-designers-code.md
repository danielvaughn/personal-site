---
title: "Should designers code?"
publishedAt: 2023-09-15
description: "This horse has been beaten to death many times over, I know."
slug: "should-designers-code"
isPublish: false
---

This horse has been beaten to death many times over, I know.
But since I'm creating a programming language for designers, it's worth revisiting this topic.
If you're a designer who doesn't want to code, I'm going to try to convince you to reconsider.
By the end of this post, I hope you'll understand why I'm building Matry.

## What is code?

First off, let's get specific about our terms.
When we ask the question "shoulder designers code", I find myself wondering what we actually mean when we say "code".
The truth is that when we talk about code, we could be talking about _very_ different things.

Here are two viable interpretations of the word:

1. Code is implementing the functional behavior of software
2. Code is the act of typing things that both humans and computers understand

It pays to be clear, yet there is a lot of semantic spread in these variants.
Since our answer to the titular question will depend on which interpretation we mean,
we should dig into both.

## 1. Implementing the functional behavior of software

Historically, _this_ is what engineers mean by "code". The mathematical-logical constructs that produce the features exhibited by a computer.
But computers are more than just implementation - they can actually be divided into 3 core units - input, implementation, and output.
Together, input and output form the _interface_:

![alt text](/io.png)

My favorite concrete example of the above diagram is a calculator.
If you open up the default calculator app on either your desktop or mobile device,
you're going to see at least the following two things:

1. Various buttons - numbers, operations, etc
2. A section where the output of the calculation will be displayed

Together, these two things respectively form the _input_ and _output_ (the interface) of the calculator.
The _implementation_ is hidden within the calculator, and is what is responsible for making `2 + 2` give you `4`.

![alt text](/calc.png)

Typically, the interface itself will also be built by engineers,
while designers merely spec out the presentation-level details.
In some ways, this makes sense because interfaces themselves have behavior of their own and thus require some degree of engineering domain knowledge.
For instance, when you hover over a button, it will often respond with some kind of visual effect.

But I'd like to point out that design tools have been slowly integrating behavioral specification into their tools for a while now.
Figma, for instance, allows you to specify hover states in a prototype, as well as with variants and variables.
On a conceptual level, this is identical to what engineers do when they write UI code, so what's the difference?
That in Figma you're working with visual tools, while programmers use a language?
It's a distinction without a difference, I say.

Now let's ask ourselves "should designers implement the functional behavior of software"?
Clearly it depends on whether the behavior is tied to the interface or to the implementation.
If a calculator returns `2 + 2 = 5`, then I would think that an engineer should be liable.
But if the button has an incorrect color applied on hover...well, why _wouldn't_ we want designers to take an active role in the development and maintenance of the product?

## 2. Typing things that both humans and computers can understand

We find ambiguity with this definition as well, so let's clear it up.


The second interpretation of "code" could be that it's merely a language that is understandable by both humans and computers.

Would this include things like keyboard shortcuts?

```
begin dishwashing:
  gather(plates)
  sink.load(plates)
  each plate(rinse)
  each plate(dishwasher.load)
  dishwasher.on()
end dishwashing
```

Now consider the _other_ use of the word "code", which effectively means "implementing the functional behavior of a computer".
If that definition sounds unclear, let's use my favorite example to demonstrate this concept - a calculator.

In a calculator you typically have a set of numeric buttons 0-9, some operative buttons like plus and minus, a submit button, and a window displaying the result of the calculation.
All of these elements have various visual states - for instance, the buttons may have a hover or active state that triggers when the user presses on them.
These behaviors are primarily visual, interface-level behaviors.
On the other hand, there are the calculations themselves; i.e. "1 + 1 should give you 2".
Let's call these "functional behaviors".
When developers write code, they are _almost always_ defining functional behavior.

With that in mind, let's rephrase the original question "should designers code" to something more meaningful - "should designers implement functional behavior?"
To this more specific question, I believe the correct answer is overwhelmingly _no_.
That's not to say that a designer couldn't do so, but if they do, they are acting outside of the _scope of design_.

## 3. Typing on a keyboard

Imagine if, instead of asking "should designers code", we ask "should designers use keyboard shortcuts".
That question doesn't make as much sense, does it?

## So wait, designers shouldn't code?

Correct, though to be more specific, designers _shouldn't implement functional behavior_.
In other words, if a calculator returns "1 + 1 = 3", the designer shouldn't be the one responsible for fixing it.

But what about the first definition of code - text that both humans and computers understand?
Should designers, for lack of a better phrase, "write their designs?"
I believe the answer is "maybe!"

In many cases, writing text is _vastly_ more efficient and easy than using a GUI (graphical user interface).
This might come as a surprise to many people, but is common knowledge among developers.
If designers had a tool that allowed them to write out their ideas, I believe many of them would quickly see the benefits.

This doesn't mean it would be for everyone, of course.
There are certainly many developers who've become so entrenched in their toolset that they couldn't imagine anything else, and that's perfectly fine!
But you may be surprised at just how efficient you could be.

## But isn't code really complex?

This may be surprising to hear, but actually no!
It's not complex, or at least...it's not _inherently_ complex.
The truth is that code is only as complex as the problem it's trying to solve.

If I were asked to write code that powers a SpaceX rocket, then even my 10 years of experience wouldn't have prepared me for that task.
But consider this example:

```
begin dishwashing:
  gather(plates)
  sink.load(plates)
  each plate(rinse)
  each plate(dishwasher.load)
  dishwasher.on()
end dishwashing
```

Now, for those unfamiliar with programming conventions, you may need to think a bit about this before you understand it.
But if I were a gambler, I'd bet that virtually everyone can understand what this code is meant to do, regardless of your level of technical knowledge.
That's because we all understand the _problem_, even if we don't fully understand the syntax of the language.

Now imagine a language that is built to solve the problems you're used to solving as a designer.
This would be a language that uses the same terminology, verbiage, and mental models that you use every day.

## End

To summarize, the question of whether designers should code is a complicated one,
and there are no hard and fast rules.
There is clearly value in bringing designers and developers closer together,
but that doesn't mean there is no difference at all between each respective domain.

Boundaries are healthy, so long as they facilitate cohesiveness in a team of people.
But boundaries shouldn't be arbitrary,
and I hope that in this post,
I've described how arbitrary these specific ones can be.

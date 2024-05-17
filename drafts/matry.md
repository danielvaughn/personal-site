
# Matry

My main side project for several years.
A programming language for UI designers.

---

### Friday 11.17.23

I've made some undocumented progress here and there with Matry since my last log.
I wrote an initial tree-sitter implementation, which now produces an AST in s-expression format.
My next TODO on that front is to figure out which language I want to consume the AST in for transpilation.
Tree-sitter offers APIs in Typescript, Rust, and Go.
There are various pros and cons for each one.
Since I'm just trying to get something off the ground, Typescript is probably the best first choice as I have the most experience with it.

Another development over the last couple of days is that I'm considering using React to render Matry code in a dev tool.
I'd be creating a custom renderer using the core React library, not JSX/ReactDOM.
The reason I'm attracted to this idea is that the functionality I need is exactly what React core was designed for.
It could end up being quite a bit of work to support a custom renderer.
The dev tooling is a critical part of the experience, so it may be worth it.
But I'm also imagining that it could be overkill for what I'm actually trying to do.
Designers will only ever need to render subsets of their projects, never the entire thing, and the re-renders can afford to be somewhat inefficient.
I don't really think I need granular diffing, but I still need to do some research.

### Wednesday 11.8.23

Attended a Design Systems Wednesday meeting.
These are monthly 1-hour meetings that are open to anyone interested in design systems.
I didn't plan on talking about Matry, but the conversation gravitated towards a topic that was relevant.
I briefly spoke about it, but didn't really elaborate much, and was somewhat awkward because it was my first time discussing the idea with designers, and I was slightly nervous.

### Sunday 10.15.23

Began building a tree-sitter parser for Matry.
I'm disenchanted with ANTLR - the tooling feels dated and I heard complaints about performance and the quality of it's codegen.
I don't want to end up in a situation where I'm trying to debug perf.
Tree-sitter allows for incremental parsing, which is precisely what I'd like to use in an LSP.

### Saturday 10.08.23

Revamped the syntax highlighter so that it doesn't require semicolons.
Also, the logic is simpler and will be somewhat easier to maintain.

Now that semicolons are optional, it could make it more difficult when I go to build the LSP.

### Saturday 10.07.23

Finally code complete on the initial version of the Matry syntax highlighter.
Release version is v0.0.3.
Some bugs I noticed:

- The switch options don't highlight the last option
- I forgot to include all the css-compatible properties

### Friday 10.06.23

Continued working on the highlighter.
Finally starting to get to a point of fluency with TextMate grammars.
Took me about an hour to get stories into a working state.

### Thursday 10.05.23

Worked on syntax highlighter for VSCode, nearly finished with the tokens syntax.
Still some bugs.
TextMate grammars are confusing.

### Monday 09.25.23

Updated parts of the website, finally got Tailwind working.
Looked into loops for email, terrible pricing model.
Set up a database with Turso, 10GB limit lol, *should be good enough for emails*.

### Sunday 09.24.23

Had a *very* productive day, building out most of the initial content for the website.
Also re-vitalized Matry's Twitter account and posted about building in public.

### Saturday 09.23.23

Wrote some documentation for the Matry website.

### Friday 09.22.23

Made quite a bit of progress on the Matry website.
Wrote both the tokens and blocks reference pages.

### Sunday 09.17.23

Published the new version of the Matry website.
For now, the website only shows a basic one-page overview of the language.

The rest of the documentation will continue to live on Github, for now.

### Sunday 09.17.23

Wrote several articles on Matry's core concepts, which will be included in the documentation site.
I'd like to publish not just the site but also have the same markdown be accessible in Github.
I'm trying to figure out the best way to do that.

### Wednesday 09.13.23

Spent a few hours chatting with ChatGPT.
Mostly it was about using textmate grammar to improve the syntax highlighting for the VSCode extension.

### Tuesday 09.12.23

I finally got my VSCode extension published.
Initially it's just basic syntax highlighting for tokens.

The plan is to eventually add:
1. Better syntax highlighting for tokens
2. Syntax highlighting for components
3. Syntax highlighting for stories
4. LSP features for tokens
5. LSP features for components
6. LSP features for stories
7. Tokens renderer
8. Components renderer
9. Stories renderer

Lots of stuff to do.

### Saturday 08.26.23

I created new nextjs project titled `interactive-docs`.
The goal is to create React-rendered examples of Matry.
At the root of the project is a file called `examples.matry` which contain the code samples.

At this point I'm torn between (a) using ANTLR to actually generate the output bundle, or (b) just building fake React renderings that mimic how Matry will work.

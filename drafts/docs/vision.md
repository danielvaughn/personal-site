
# Vision

##### Table of Contents

[Drawing vs Building](#drawing-vs-building)  
[Pillars](#pillars)

---

Matry's vision is to create an opinionated design application with a build-focused methodology. This solution is centered around three pillars: Indirect Manipulation, Separation of Concerns, and Isolated Component Design.

To explain these in more detail, it's first important to take a detour and explore the difference between "drawing" and "building".

### <a name="drawing-vs-building"/>Drawing vs Building</a>

All UI design tools, both traditional and new, are built around the notion of _drawing_. The purpose of a drawing tool is to create a flat arrangement of shapes representing your desired subject. This model works well for traditional print design, but it does not work for designing an interactive object that exhibits behavior, maintains state, and has a hierarchical structure. To put it simply - a UI design is a _built_ thing, not a _drawn_ thing. Therefore a modern design tool needs to afford designers the ability to build a design rather than draw it.

There are two primary differences between a tool that is used to _build_ vs one that is used to _draw_:

##### a. Top Down vs Bottom Up

###### Drawing tools are approached from the top down. Building tools are approached from the bottom up.

Normally, the drawing process begins with roughly outlining the basic shapes that make up the subject. Once those larger shapes are established, smaller shapes are drawn on top, and this process continues until all the details have been rendered. The image below demonstrates this flow well.

<img width="400" src="http://dirktiede.com/wp-content/uploads/2017/11/drawing-characters-handout-1-1200x1580.jpg" />

On the other hand, tools meant for building typically conceive of the workflow as one large problem. In order to effectively solve the problem, you must start with the smallest problem, solve it, and use the resulting solution to solve the next-smallest problem. This process is repeated until you solve the largest problem in the set.

##### b. Structure vs Style

###### Building tools separate notions of _structure_ and _style_. Drawing tools have no concept of structure.

To understand this point, it is helpful to compare 2D design tools with 3D design tools. Consider the following image:

<img width="400" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/87d28a29580265.55f9aa59a212f.jpg" />

In 3D applications there is the notion of a "model". The model is a structural notion, meant to express the points and vertices _onto which_ rendered surfaces will be applied. Web developers reading this will recognize this pattern as Separation of Concerns. As its name suggests, SoC is a methodology that encourages boundaries between different concerns. So in the 3D example, _what_ is on the page is one concern (structure), and _how it appears_ is another concern (style). The two are conceived and managed separately in nearly every 3D tool you can find, and for good reason.

However, no 2D drawing tool exists of this kind. As stated before, the result of a drawing tool is a flat arrangement of shapes. In a drawing tool, the concept of "what is on the page" and "how it appears" are fundamentally the same thing.

---

### <a name="pillars"/>Pillars</a>

Matry's solution is to create an application with a build-focused design methodology. This solution centers around three pillars:

##### a. Indirect Manipulation

Indirect manipulation, as its name suggests, stands in contrast to [direct manipulation](https://en.wikipedia.org/wiki/Direct_manipulation_interface). Direct manipulation allows users to directly change representative objects in an interface, in a manner that resembles handling of objects in the real world. A clear example is clicking and dragging an edge of a rectangle graphic in order to resize it. This is the UI pattern chosen for drawing tools.

Direct manipulation triggers more activity in the left hemisphere of the brain - the side that performs creative tasks. Whereas indirect manipulation triggers more activity in the right hemisphere - the side that performs logical tasks.

To build a design as if it is a system, it is necessary to privilege UI interactions that help designers think systematically. When you manipulate an object indirectly, you are thinking firstly in terms of _values_. When you manipulate an object directly, the values are only the result of your interaction, not the primary focus. Since a system is a set of relationships between values, it is crucial to place _values_ as the primary working object of the application.

##### b. Isolated Component Design

As explained earlier, drawing tools encourage a top-down approach to design. So a designer might first draw an outline of a browser window, then the page header, then invisible columns for page layout, etc. Over time, the details of the design are filled in, similar to drawing in the real world. But, as also explained earlier, a system is best conceived as a collection of problems, which are solved from smallest-to-largest. Matry will encourage the latter approach with an Isolated Component Design framework.

In the years since React JS was first introduced, the web development industry has strongly shifted to component-driven architectures. A component is a reusable UI fragment, typically containing encapsulated behavior and styles, with a lifecycle driven by a set of inputs and outputs. Using this concept, a UI is "composed" of interoperable units, similar to Lego pieces. The goal is to resist deeply nested hierarchies that produce inflexible code.

[Storybook](https://storybook.js.org/) is a tool that has become very popular among web developers. It is a tool for building UI components in isolation, starting from the smallest components and gradually composing them into larger components. This results in a very organized and efficient UI architecture.

These trends have bled into the design industry, and there is now a strong emphasis on conceiving of a design as a set of UI components. But Storybook is a developer-focused tool, meant for building components in code. There is no such tool on the design side to design components in isolation. Matry will be the first tool designed for such a purpose.

##### c. Separation of Concerns

As explained earlier, SoC is one of the key differences between drawing tools and building tools. Matry will be the first design tool of its kind that maintains separated notions of structure and style. Each component will be designed using a "model" (the various content that make up a component, along with their groupings), along with applied "styles".

The power of this separation is in model persistence. Model persistence is an overly fancy term; it only means that the structure of a component persists throughout changes in its visual styling. This allows for easy description of state changes throughout a component's lifecycle. This will be explained in more detail later in this document.

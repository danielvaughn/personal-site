
# Matry

Matry is the worlds first parametric UI design tool. Instead of drawing static images of an applications screens, designers will specify the visual behavior of an applications components.


### Table of Contents

[Problem](#problem)  
[Requirements](#requirements)  
[Our Vision](#vision)  
[Solution](#solution)  
[Inspiration](#inspiration)  

---

### <a name="problem"/>Problem</a>

User interfaces are complex and fluid things. They exhibit behavior, maintain state, react to user input, and express hierarchical relationships. Yet the tools used to design these products are typically the same ones used for portrait painting, logo design, and photo editing. 2D drawing tools are ill-suited for modern digital product design.

[Read more about the problem with current design tools](./market.md)

---

### <a name="requirements"/>Requirements</a>

To create a design tool that serves modern needs, it's important to first establish the features that would be required for such a tool. Ideally, it would have the following attributes:

- **Scaleable**  
Many apps have dozens or hundreds of views, each with several possible user flows. The design tool needs to be able to generate any number of views and user flows with minimal effort.
- **Reusable**  
For large applications, organizing reusable UI patterns is important in maintaining a consistent experience. A design tool must prioritize this organization first, not as an afterthought.
- **Interactive**  
It is difficult to guage the effectiveness of a UI design without simulating user interaction. The current tools that accomplish this are slow and cumbersome to maintain. A design tool should remove as much complexity from this task as possible.
- **Shareable**  
Once a UI design is created, it needs to be delivered both to stakeholders for approval, and developers for implementation. Currently, most of this work is either done manually by designers, or offloaded to a separate application. This task should be assumed and accounted for by the design tool.
- **Versionable**  
Unlike traditional print design, UI designs are intended to be maintained and developed over time. Yet there is no tool currently on the market that anticipates and accounts for version control. A truly modern tool must have this ability, if only as an optional feature.
- **Procedural**  
Since drawing tools are oriented towards creativity, they are configured to be open-ended. But designing a consistent UI requires a more rigorous and procedural workflow, and the design tool should be opinionated in this regard.

[Read more about ](./requirements.md)

---

### <a name="vision"/>Our Vision</a>

At its core, Matry's vision is founded on 3 pillars - indirect manipulation, separation of concerns, and isolated component design.

- **Indirect Manipulation**  
In contrast to direct manipulation, which is a fancy way of saying "drawing", Matry will instead focus on indirectly describing the visual attributes of the UI. This encourages systematic thinking and a problem-oriented mindset.
- **Separation of Concerns**  
Though the term is known to web developers, SoC is virtually unknown to designers. The idea behind SoC is to conceptually distinguish the semantic structure of an application from its visual presentation. SoC is an extremely powerful concept for managing state changes in a UI, and Matry will be the first design tool that is built around this principle.
- **Isolated Component Design**  
Since ReactJS was introduced, "components" have become the primary focus not only of front-end developers, but also designers. The key to building an organized, systematic design is to conceive of a UI as a collection of reusable and interoperable components. Matry will only allow for one component to be designed at a time, enforcing a bottom-up approach that more closely resembles building lego sets than drawing pictures.

[Read more](./vision.md)

---

### <a name="solution"/>Solution</a>

The primary workspace in Matry will be called a Project. The intended output of a project is **(A)** an organized list of design values, **(B)** an organized list of UI components, **(C)** a series of images that communicate a variety of state lifecycles in the application, and **(D)** all style values in a data interchange format like JSON or YAML, for developer consumption.

These project tasks will be divided into the following areas.

- **Tokens**  
Tokens are global design values that are shared across components. Tokens can be one of several types: Colors, Fonts, Scales, Images, Icons, Content, and a few others. A token is comprised of 3 basic items: (1) a display name such as "Primary Brand Color", (2) a token slug such as "$primary-brand-color", and (3) the associated design value, such as "#007bff".  
These values can be used in defining style attributes for any component in its respective project.
- **Components**  
As suggested previously, UI designs in Matry are primarily built by Components. A Component itself is comprised of (1) a set of elements called a "Model", (2) a set of states called "Contexts", and (3) a set of style attributes called "Swatches". Together, these items form an unparalleled schema for describing the visual lifecycle of a UI component.
- **Stories**  
Stories are where the components of the design are arranged into a presentable format for stakeholders and developers. There are two primary uses of a story - (1) to demonstrate the various visual options that a single component may have, or (2) to demonstrate a particular user flow through one or more components.  
Stories are arranged as a series of frames, and can either be shown in succession like a slideshow, or dynamically navigated through direct user interaction.

[Read more](./solution.md)

---

### <a name="inspiration"/>Inspiration</a>

Matry draws inspiration from several sources, but the following two stand out.

- **Atomic Design**  
Atomic Design is a component schema that encourages a bottom-up hierarchy, beginning with "atoms" and moving upwards to "molecules", "organisms", and so on. This bottom-up framework was the original inspiration for Matry.
- **Browser Dev Tools**  
For several years, the more tech-saavy UI designers have opted for a design-in-the-browser workflow. This workflow depends entirely on browser dev tools, which allow for relatively easy styling of HTML elements. The fact that several designers are open to this approach suggests that a tool should exist that is entirely dedicated to this kind of functionality.

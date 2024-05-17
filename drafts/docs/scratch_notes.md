
# Scratch Notes

> These are random thoughts of mine, unstructured and scattered

### A list of conceptual topics
1. Design terminology vs developer terminology: does it need to match or nah?
2. Component driven design, explained from the ground up
3. Design to an interface, not an implementation
4. "Traditional" design: designers must rely on interpretation because they can't represent all states
5. Designers draw entire screens to use gestalt methods, but they can't "gestalt" individual components
6. Rather than making design systems, designers should be designing systematically
7. The outputs of a design - design values and design intent
8. Designing from the bottom up, in isolation
9. The "blinds" effect in CSS - what is the responsibility of the designer? Designers should inherit visual logic complexity

### CDD, component driven design

At its core, UI design is the process by which the visual behavior of a digital product is communicated. By "visual behavior", I mean the total set of visual states that are expected to occur during the lifecycle of an application.

At any one point in time during this lifecycle, the application can be said to have a particular "state". However, while this is an easy concept to understand, it is far more difficult to precisely communicate. This is because there is never any one single "state" being represented. There is always a multitude of states - usually more than one for every single item on the screen. For instance, a button may be disabled, it may have an icon or not, it may be set to a certain size, or a certain color, etc. All of these attributes are effectively states, as they are intended to make some contribution, however small, to the overall state of the application.

It would be helpful, then, to split this state - this _visual behavior_ - into easily digestable units. These units are what developers call "components". From an engineering perspective, a component is an encapsulated and reusable unit of application behavior, with an associated interface and implementation. From a designers perspective, however, it's appropriate to change the definition slightly. For a designer, a component is a discrete unit of *visual* behavior.

### Traditional design flows

Designers must communicate a set of visual states for an application. The total set of states for an application can be extraordinarily large. Design has historically been a manual task, so attempting to communicate all possible visual states is an impractical goal. As a result, designers choose to instead create a relatively brief set of representative states, relying on the interpretation/imagination of stakeholders and developers to fill in the gaps.

This presents a problem, however, since many critical details are often left out of the design. The effects of this approach can sometimes be devastating for a product team. The most benign effects are small imperfections in the UI, where the developer incorrectly interpreted the design. In a more serious scenario, a product can be delayed by weeks or even months due to misunderstandings between design and product/engineering. These are costly mistakes, and every step should be taken to avoid them wherever possible.

However, designers cannot be expected to perfectly communicate every single detail through the use of visual designs. But, if we create better tools for designers, their communicative abilities can be far greater than they are today.

### Gestalt design

Gestalt principles are based on a psychological theory that states that the human brain perceives the "whole" of a subject before perceiving its individual parts. This is used quite heavily in design, as designers rely on users' pattern recognition to inform their design choices. It is for this reason that designers prefer to design entire screens all at once - it allows them to tweak each individual part of the screen so that it better "fits" visually with the whole.

However, the drawback to this approach is that while each component of a screen should relate to one another, every component of every screen should also relate to one another. This is for two reasons; (1) it providers the user with a consistent experience across the entire application (or even set of applications), and (2) it ensures that creating new screens doesn't use components that were never intended to visually exist together.

Ideally, it would be the case that designers can design for intrascreen consistency and interscreen consistency at the same time. But how do we do this? We do it by using component driven design. Initially, a component should be designed in isolation, such that it is internally consistent with the expected variations of its own kind. Then, these values can be edited so that they can fit into each screen.

Matry solves this problem by (1) forcing designers to provide visual options for each attribute of a component, and then (2) displaying to them every possible combination of those options at once. The designer can then easily evaluate how each attribute change effects the total set of component variations.

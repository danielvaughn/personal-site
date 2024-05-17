
Matry is a tool for describing UI components in isolation, using parametric constraints to describe relational design values.

The basic job of a designer is to describe the visual behavior of an application. Visual behavior is (a) the visual attributes of an application, and (b) the expected changes to those visual attributes throughout the lifecycle of the application. For example, a form button may have a gray background initially, but when the form is ready to submit, the button's background should be blue. This is *visual behavior*.

Since the sum total visual behavior of an application can be very verbose and complex, it is necessary to break this visual behavior down into units. Given this requirement, Matry takes a component-centered design approach. Matry defines a component as encapsulated visual behavior.

To create a component, a designer will take the following steps, though not necessarily in the prescribed order:

1. Describe the interface for the component. The "interface" is a set of options that will affect the visual state of the component. For example, a button might be enabled or disabled, or it may have a size option.
2. Describe the model for the component. The "model" is the structure of the component, and is made of the individual elements that make up the component. For example, a button might have one containing element, a text element, and maybe an icon element.
3. Describe the default styles for the component. This step is typically the only step taken in traditional design tools, since they are essentially drawing tools. Styles are applied to individual elements within the component, and can use the options defined in the interface to affect styling.
4. Add contexts for the components, and for each one, alter the elements styles when appropriate. A "context" can be thought of as a piece of state, and are analagous to CSS classes.
5. Create one or more stories for the component. A "story" is a slideshow-like display of a single component, rendered in different states. Each story represents a particular *flow* the component might take in the real application.

Components can use other components as elements. This allows a design to be built from the bottom up, starting with the smallest units and building up to page-level components. This approach, while unfamiliar to many designers, offers many benefits:


1. Designers are encouraged to think of a UI design as a system, rather than as a set of pages.
2. Designers can establish micro feedback loops with developers, collaborating at the component level, rather than merely at the page/feature level.
3. Designers get reusability out-of-the-box, as a natural consequence of designing components.
4. Designers get structure and organization out-of-the-box.
5. Designers can easily distinguish the source of truth for a design from its transient forks.

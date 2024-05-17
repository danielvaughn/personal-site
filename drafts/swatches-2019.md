
# this was written for the v5 prototype in 2019

## Swatch

A swatch is a logical grouping of styles.
Swatches are owned directly by components.
This means that for a given component, a user can see all the swatches associated with that component.
An element includes a swatch for a particular context.
By doing so, the styles in that swatch become assigned to that element in that context.

To get an idea of what a swatch looks like, observe the following:

```
  Large Blue Box
    Width: 300px
    Height: 300px
    Background Color: #0000ff
```

In the above example, the swatch is titled "Large Blue Box". Notice that the styles, along with the title, are very self-documenting in describing what this swatch is intended for. It styles an element such that it forms a large blue rectangle.

In addition to a title and a list of styles, a swatch can contain 2 additional "directives":

1. **Target**  
    A target directive is a selection modifier which augments which aspect of the element is going to be styled. The CSS term for this is "pseudo selector". An example is the "First Letter" target, which will only apply the swatch styles for the first character in the element's text. Below is a full list of targets:
    - All (default/applies to entire element)
    - First Letter
    - First
    - Last
    - Empty
2. **Action**  
    An action directive determines under which interaction the styles of the swatch are applied to the element. An example is the "Hover" action, which will only apply the styles if the user hovers over the element. Below is a full list of actions:
    - Rest (default/no interaction)
    - Hover
    - Press

To see these directives in action, consider the following swatches:

```
  Fancy Text
    Target: All
    Action: Rest
    Styles:
      Color: #333
      Font Size: 16px

  Fancy Drop Cap
    Target: First Letter
    Action: Rest
    Styles:
      Color: red
      Font Size: 22px

  Fancy Drop Cap Hover
    Target: First Letter
    Action: Hover
    Styles:
      Color: Blue
```

The above example contains 3 swatches. If they are all applied to one element, they would describe medium-sized dark gray text, where the first character is slightly larger and has red text. If the user hovers over the element, the first character will turn blue.



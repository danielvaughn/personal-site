## Styles

A style defines a particular visual attribute for an [element](element.md). Styles are comprised of 2 units: a style property, and its associated value.

An example is `width: 100px` or `background-color: red`. In these cases, *width* and *background-color* are style properties, while *100px* and *red* are style values.
Most styles in this application will be CSS properties, though there will be a few additional non-CSS properties.
Styles will be named using a display translation of css names, where hyphens are removed and words are capitalized.
For example, "width" will be named "Width", "font-size" will be named "Font Size", and so on.

Styles can be one of several types. Note that these names will not be displayed to the user; they are for internal usage only.

1. **Dimension**  
    Dimensional values define numerical units of length in a design. Examples: Width, Height, Font Size, etc.
2. **Range**  
    Like dimensions, these values are numerical, but must contain a minimum and maximum value. Examples: Opacity, Scale, etc.
3. **Enumerated**  
    Enumerated values consist of a string that can only be one of a limited set of string options.
    For example, the Display property can be "none", "block", "inline-block", "flex", and a few others.
4. **Boolean**  
    Booleans are like enumerated values, but can be only one of two strings, and can be represented by a true:false schema.
    An example is Visibility, which can be either "visible" or "hidden".
    These two values are, respectively, truthy and falsy values for Visibility.
5. **Color**  
    As its name suggests, color values define colors. They can be represented as hex, rgb(a), and hls(a). Examples: Color, Background Color, etc.
6. **File**  
    File values define a url path for a static resource. Examples: Background Image, Font Family, etc.
7. **Content**  
    Content values are not CSS values, and they do not define stylistic attributes. Instead they define the content for an element. Content can either be text or an image url (similar to File). All elements have one slot for text and one slot for an image.
8. **Slotted**  
    Slotted values are those style properties which are too complex to be defined by one type.
    These values are instead composed of multiple "slots", where each slot is an individual style value.
    An example is Border, which is comprised of values like "1px solid #eee".
    In this example, Border consists of three slots - a dimensional value, an enumerated value, and a color value.

Each of these types will have specific UI that assists in generating their respective values.
For example, enumerated values should be accompanied by a selectable list of available options.
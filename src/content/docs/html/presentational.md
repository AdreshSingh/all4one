---
title: Presentational Tags
---

**These tags are to used perform basic formatting on the content on data.**

| Tag        | Details                           |
| :--------- | :-------------------------------- |
| `<i>`      | for italzing the text             |
| `<b>`      | for bolding the text              |
| `<u>`      | for underline on the text         |
| `<strike>` | for overline on the text          |
| `<mono>`   | for equally spaced letter         |
| `<sup>`    | for making text above normal line |
| `<sub>`    | for making text below normal line |

## `<font>` tag

It is used for changing default formatting of the text like it's font size, color, face(writing style),

### Attributes

1. face - used for changing writing style (face).
   ```html
   <font face="consolas">----------</font>
   ```
2. size: used to modify the size of content.

   syntax: _size='px/%/number'_

   ```html
   <font size="27px">----------</font>
   ```

3. color: for changing just color.

   syntax: **size='color_name|rgba_color|hsl_color|hexadecimal_color'**

### Color Codes

In HTML,There are varoius ways coloring things out like from most common is color names to using HSL colors(Hue Saturation Lightness).

### RGB Table

| Color Name | RGB Value   |
| ---------- | ----------- |
| Red        | 255,0,0     |
| Green      | 0,255,0     |
| Blue       | 0,0,255     |
| White      | 255,255,255 |
| Black      | 0,0,0       |

> Whenver color needed in rgb then just use values(0..255). 0 is the lowest one. like we need blue then it will be -> 0,0,255.

### Hexadecimal Colors

| Color Name | hexadecimal Color Value |
| ---------- | ----------------------- |
| Red        | ff0000                  |
| Green      | 00ff00                  |
| Blue       | 0000ff                  |
| White      | ffffff                  |
| Black      | 000000                  |

> Whenver color needed in hexacolor needed then just use values(1,2,3..9,a,b,..,f). 0 is the lowest one. like we need blue then it will be -> 00 00 ff.

## Perserve Formatting

The `<pre>` (container) tag is ued when we want to preserve the formatting of content i.e. the way it appear on Editor(Notepad,Notepad++,Visual Code), must appear same on the _HTML_ webpage.

> When browser interpretes the HTML code, it removes extra new lines or spaces. So, to prevent from this happening, use `<pre>` tag.

```html
<html>
  <head>
    <title>Preserve Formatting</title>
  </head>
  <body>
    <pre>
        Welcome, everyone
        HTML language stands 
        for Hyper Text Markup Language.
        <b>
            This source code will remain same 
            i.e. the line breaks and spacing 
            remain same and browser will 
            modify it.
        </b>
    </pre>
  </body>
</html>
```

## Centering the Content

To center all the content in the webpage, we can use `<center>` (container) tag. All the main content which is packed inside it.

```html
<html>
  <head>
    <title>HTML is Quite 😊</title>
  </head>
  <body>
    <p>This text is outside of center tag</p>
    <center>
      <p>This text will appear at center of the webpage.</p>
    </center>
  </body>
</html>
```

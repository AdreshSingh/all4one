---
title: The Marquee & Img tag
---

## The Most Funful tag

This tag is used to scroll the content in any direction. It can be either left, right, up, and down, depending upon setted attributes.

### Attributes of marquee tag

1. **direction** `to set the scrolling direction either in up, down, left or right.`
2. **behavior** `to initiate the bouncing behavior, must be set to` _behavior = 'alternate'_.
3. **scrollamount** `to set scrolling speed, heigher the number, more the scrolling speed.`

4. **loop** `to set the number of times should repeat, default is _infinite_`

5. **bgcolor** `to set background color of <marquee> tag.`

6. **vspace** `used to the vertical spacing around the element.`

7. **hspace** `used to set the horizontal spacing around the element.`

```html
<marquee> I am Scrolling </marquee>
```

---

### Complete Code

```html
<html>
  <head>
    <title></title>
  </head>
  <body>
    <marquee
      direction="right"
      loop="10"
      bgcolor="yellowgreen"
      behavior="alternate"
      scrollamount="5"
      delay="3"
      vspace="8"
      hspace="5"
    >
      Try me too🚀
    </marquee>
  </body>
</html>
```

---

## `<img> tag`

In HTML tag, basically used render(display) iamge in the webpage.
it's `src` attribute needs either relative or absolute link to the image content.

> It is important that image must have `alt` attribute, use to define the alternative text for the image.

### Attributes of `<img>` tag

1. `src` **used to set the scource of the image.**
2. `alt` **used to set the alternative text for the image, mostful helpful for disable persone or reading software.**
3. `width` **sets the width of image.**
   _width='pixel|percentage|number'_
4. `height` **sets the height of the height simple.**
   _height='pixel|percentage|number'_
5. `title` **sets the hover text to appear when mouse left still over on current element**

### Complete Code

```html
<html>
  <head> </head>
  <body>
    <img src="" alt="" width="" height="" title="" />
  </body>
</html>
```

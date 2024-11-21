---
title: HTML Attributes
---

## Attributes

- are the special word that are to used define additional characteristics or modify default looks of element(tag).

## Declaring a attribute

> _Syntax_ > `<tag_name attribute_name='attribute_value'></tage_name>`

### Common attributes of tag

1. `<body>` tag:
   - `bgcolor` used to change background color of page( default is white ).
     > _Syntax_ > `bgcolor='color|rgba|hexadecimal|hsl'`
   ```html
   <html>
     <head>
       Learning Attributes
     </head>
     <body bgcolor="black" text="white">
       <h1>This is my unique page</h1>
     </body>
   </html>
   ```
   - `background` attribute used to set a image in webpage background.
     > _Syntax_ > `background='URL of file'`
   ```html
   <html>
     <head>
       Learning Attributes
     </head>
     <body background="" text="white">
       <h1>This is my new background page</h1>
     </body>
   </html>
   ```

- `text` attribute used to change default black color of content or text.
  > `text='color'`
  ```html
  <html>
    <head>
      Learning Attributes
    </head>
    <body background="" text="white">
      <h1>This is my new background page</h1>
    </body>
  </html>
  ```

2.  `<h1>` tag:

    > - `align` attribute is used to set text alignment of the content. `align='left|right|center'`

    > - `id` attribute is used to set unique identity to element.
    > - `id='value'`

    > - `name` attribute to is ued to give name to the element .
    > - `name='value'`

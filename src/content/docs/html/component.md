---
title: HTML Component
---

## Component

HTML document usually divided into two section:

1. **`<Head>` section**- It include information about the document like the content of author name, keywords used in webpage, device platform and it's details like site's logo, and purpose and so on.

> **Information inside the `<Head>` tag never displays on webpage as it only meant for Browser and only `<title>` is visible, used to define page's tab name.**

2. **`<Body>` section**- It includes all the main content of the webpage that can be viewd on a web browser.

---

## **Composition of HTML**

1. Tags or Element
2. Attributes

### Tag

- A tag or element is similar to command that indicate how parts of webpage should be displayed.

### Basic HTML Tags are:-

1. `<html>` tag descirbe the document is a HTML file.
2. `<head>` tag used to describe the metadata( information about information ).
3. `<title>` tag used to set the title or tag name of the webpage.
4. `<body>` tag mostly display main content of webpage that displayed to the user.

---

### Categories of Tags

#### Container Tag

**These neede to be closed after stating the tag.**

> _Syntax_

```html
<tag_name>......................</tag_name>
```

#### Empty Tag

These tags do not require to be closed.

> _Syntax_

```
<tag_name>
```

```bash
Tag types
|--------------- Container tag
|                   heading - <h1>,<h2>,<h3>,<h4>,<h5>,<h6>
|                   paragraph - <p> .... </p>
|--------------- Empty tag
|                   break line      - <br>
|                   horizontal line - <hr>
|                   image           - <img>
```

#### Example of `<hr>` tag

```htm
<html>
  <head>
    <title>Sample Page</title>
  </head>
  <body>
    <p>
        Learning each day is a best practice ever!.
        <hr>For now, we are learning HTML basics.
    </p>
  </body>
</html>
```

#### Example of `<br>` tag

```htm
<html>
  <head>
    <title>Sample Page</title>
  </head>
  <body>
    <p>
      Learning each day is a best practice ever!.
      <br />For now, we are learning HTML basics.
    </p>
  </body>
</html>
```

> Are you able to find difference between `<br>` and `<hr>` ?

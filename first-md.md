# My First Markdown!

---

This is my first paragraph.

This is my second paragraph.

---

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

---

##Text Attributes
_Underscores_ provide emphasis to a word. _Asterisks_ work as well.

This is *intra*word emphasis.

**Double underscores** makes text bold/strong. **Double asterisk** does this as well.

---

##Quote Example

> If you can dodge a wrench, you can dodge a ball.
> Dodge, Duck, Dip, Dive, and Dodge.

_Patches O'Hoolihan_

---

##Source Code Examples

####Inline
The `backticks` can be used to represent inline code.

####Block
Tab in to represent block code

    #This is a comment example.
    #Markdown will ignore hashes in code blocks.

    `Backticks` are also ignored in code blocks.

```#!/bin/bash
echo "This is an example of a bash script block"
```

```javascript
const example = "This is an example of a javascript code block";
```

---

##List Examples

####Un-ordered

- Asterisk works
- Asterisk works
- Asterisk works

* Plus sign works
* Plus sign works
* Plus sign works

- Dash works
- Dash works
- Dash works

####Ordered

1. Red
2. Green
3. Blue
4. Yellow

####Nested
#####Phones

- Apple
  - IPhone 15
  - Iphone 14
- Google
  - Pixel
  - Pixel Plus
- Samsung
  - Galaxy

---

##Horizontal Rules

Three or more consecutive dashes, asterisks, or underscores make a new horizontal rule.

---

##Links

####External

This is a link to [Google](http://Google.com "Google Search"), including optional helper text.

####Reference

This is a refrence link to [FreeCodeCamp][fcc].

[fcc]: http://freecodecamp.org "FreeCodeCamp Home"

####Automatic Links

This is an automatic link to <http://udemy.com>

This is an example email: <example@gmail.com>

---

##Images

This is an inline image: ![Img-Demo](http://placehold.it/150x150)

This is a reference to a bigger image:
![400x200 demo][Demo400]

[Demo400]: http://placehold.it/400x200 "Big Boi!"

---

##Inline HTML

<dl>
  <dt>This is an example</dt>
  <dd>Of using inline HTML</dd>
</dl>

####Here's what it looks like behind the scenes:

<dl>
<dt>This is an example</dt>
<dd>Of using inline HTML</dd>
</dl>

---

##Tables

This is text above a table.

| Col Head 1 | Col Head 2 | Col Head 3 |
| :--------- | :--------: | ---------: |
| R1,C1      |   R1,C2    |      R1,C3 |
| R2,C1      |   R2,C2    |      R3,C3 |
| R3,C1      |   R3,C2    |      R3,C3 |

Colons omitted or colon to the left of the dashes aligns text to the left (Col 1).

Colons on both sides centers the text (Col 2).

Colon to the right of the dashes aligns text to the right (Col 3).

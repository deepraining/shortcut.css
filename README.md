# A shortcut css style collection, like margin, padding, border, width, height, font ...

## Quick start

install

```
npm install shortcut.css --save
```

how to use

```
require('shortcut.css');
```

use segments alone

```
// margin
require('shortcut.css/dist/margin.css');

// padding
require('shortcut.css/dist/padding.css');

// border
require('shortcut.css/dist/border.css');

// border-radius
require('shortcut.css/dist/border-radius.css');

// line-height
require('shortcut.css/dist/line-height.css');

// font
require('shortcut.css/dist/font.css');

// position
require('shortcut.css/dist/position.css');

// width
require('shortcut.css/dist/width.css');

// height
require('shortcut.css/dist/height.css');

// misc
require('shortcut.css/dist/misc.css');
```

## segments code

1. [shortcut.css](./dist/shortcut.css)
2. [margin.css](./dist/margin.css)
3. [padding.css](./dist/padding.css)
4. [border.css](./dist/border.css)
5. [border-radius.css](./dist/border-radius.css)
6. [line-height.css](./dist/line-height.css)
7. [font.css](./dist/font.css)
8. [position.css](./dist/position.css)
9. [width.css](./dist/width.css)
10. [height.css](./dist/height.css)
11. [misc.css](./dist/misc.css)

## base rule

1. use `-` to concat attr and value, and if `-` exists in attr, just keep it, like `mg-l-10 -> margin-left: 10px`
2. use 2 consonants to represent a long text word, and 1 consonant to represent a short text word, like `mg-l -> margin-left`
3. if value is integer, just keep it, like `mg-10 -> margin: 10px`
4. if value is string, just keep it, like `mg-auto -> margin: auto`
5. if value is decimal, use `-` to split it, like `l-hg-1-1 -> line-height: 1.1`
6. use `-` to concat special unit, like `50-pc -> 50%`

## special unit:

* `pc -> %`

## abbreviation

1. `margin`:
    - `margin`: `mg`
    - `margin-left`: `mg-l`
    - `margin-top`: `mg-t`
    - `margin-right`: `mg-r`
    - `margin-bottom`: `mg-b`

2. `padding`:
    - `padding`: `pd`
    - `padding-left`: `pd-l`
    - `padding-top`: `pd-t`
    - `padding-right`: `pd-r`
    - `padding-bottom`: `pd-b`

3. `border`:
    - `border`: `bd`
    - `border-left`: `bd-l`
    - `border-top`: `bd-t`
    - `border-right`: `bd-r`
    - `border-bottom`: `bd-b`

4. `border-radius`:
    - `border-radius`: `bd-rd`
    - `border-top-left-radius`: `bd-rd-t-l`
    - `border-top-right-radius`: `bd-rd-t-r`
    - `border-bottom-left-radius`: `bd-rd-b-l`
    - `border-bottom-right-radius`: `bd-rd-b-r`

5. `line-height`: `l-hg`

6. `font-size`: `f-s`

7. `font-weight`: `f-wg`

8. `position`:
    - `left`: `l`
    - `right`: `r`
    - `top`: `t`
    - `bottom`: `b`

9. `width`: `wd`

10. `height`: `hg`

11. `float`: `fl`

12. `overflow`: `of`

13. `cursor`: `cs`

14. `position`: `ps`

15. `display`: `dp`

16: `text-align`: `ta`

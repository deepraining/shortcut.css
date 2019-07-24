# shortcut.css

[中文文档](./README.md)

A commonly used styles collection, margin, padding, border, width, height, font ...

```
npm install @senntyou/shortcut.css --save
```

```
import '@senntyou/shortcut.css';
```

- [less source codes](./src/index.less)
- [css codes](./lib/shortcut.css)

## class name rules

1. use `-` to concat attr and value, and if `-` exists in attr, just keep it: `mg-l-10 -> margin-left: 10px`
2. use 2 consonants to represent a long text word, and 1 consonant to represent a short text word： `mg-l -> margin-left`
3. if value is integer, just keep it: `mg-10 -> margin: 10px`
4. if value is string, just keep it: `mg-auto -> margin: auto`
5. if value is decimal, use `-` to split it: `l-hg-1-1 -> line-height: 1.1`
6. use `-` to concat special unit: `50-pc -> 50%`

## special unit

- `pc -> %`

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

16. `flex`: `fx`

17. `text-align`: `t-a`

# shortcut.css

[English Documentation](./README.en.md)

一个通用的样式类集合, margin, padding, border, width, height, font ...

```
npm install @senntyou/shortcut.css --save
```

```
import '@senntyou/shortcut.css';
```

- [less 源代码](./src/index.less)
- [css 代码](./lib/shortcut.css)

```
// 如果需要以 rpx 单位的样式，需要这样导入
import '@senntyou/shortcut.css/lib/shortcut.rpx.css';
```

- [rpx less 源代码](./src-rpx/index.less)
- [rpx css 代码](./lib/shortcut.rpx.css)

## 类名规则

1. 用 `-` 链接属性与值, 如果属性中已有 `-`, 则保留: `mg-l-10 -> margin-left: 10px`
2. 用 2 个辅音字母代替长单词, 用 1 个辅音字母代替短单词： `mg-l -> margin-left`
3. 如果值是整数, 则保留: `mg-10 -> margin: 10px`
4. 如果值是字符串, 则保留: `mg-auto -> margin: auto`
5. 如果值是小数, 则用 `-` 分割开: `l-hg-1-1 -> line-height: 1.1`
6. 用 `-` 连接特殊单位: `50-pc -> 50%`

## 特殊单位

- `pc -> %`
- `rem -> rem`

## 缩写

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

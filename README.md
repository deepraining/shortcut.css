# shortcut.css

一个通用的样式类集合, margin, padding, border, width, height, font ...

```
npm install @senntyou/shortcut.css --save
```

- `px`单位: `import '@senntyou/shortcut.css'`
- `rem`单位(屏宽 375): `import '@senntyou/shortcut.css/lib/shortcut.375rem.css'`
- `rem`单位(屏宽 750): `import '@senntyou/shortcut.css/lib/shortcut.750rem.css'`
- `vw`单位(屏宽 375): `import '@senntyou/shortcut.css/lib/shortcut.375vw.css'`
- `vw`单位(屏宽 750): `import '@senntyou/shortcut.css/lib/shortcut.750vw.css'`
- `rpx`单位(屏宽 750): `import '@senntyou/shortcut.css/lib/shortcut.750rpx.css'`

## 类名规则

1. 用 `-` 链接属性与值, 如果属性中已有 `-`, 则保留: `mg-l-10 -> margin-left: 10px`
2. 用 2 个辅音字母代替长单词, 用 1 个辅音字母代替短单词： `mg-l -> margin-left`
3. 如果值是整数, 则保留: `mg-10 -> margin: 10px`
4. 如果值是字符串, 则保留: `mg-auto -> margin: auto`
5. 如果值是小数, 则用 `-` 分割开: `l-hg-1-1 -> line-height: 1.1`
6. 用 `-` 连接特殊单位: `50-pc -> 50%`

## 简化类名规则

在一般的命名规则之上，另加一套简化的命名，比如

```
margin-top: 20px => mg-t-20 => mgt-20
margin-left: 10% => mg-l-10-pc => mgl-10p
```

1. 类名中只保留一个 `-`，属性名与属性值中的 `-` 都不保留
2. 对于 `0.x` 的小数，直接去掉 `.`；而 `1.x, 2.x` 等大于 1 的小数，则用横线代替 `.`
3. 使用简化单位

## 特殊单位

- `pc -> %`
- `p -> %`（简化）

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

# HTML

# CSS

### Sass

变量声明赋值：  `$`+`变量名`:`变量值`；

字符串拼接和js类似，可以用引号和加号拼接，也可以用`#{$变量名}`的形式，类似ES6中模板字符串，只不过花括号外面是#。

在CSS中也是可以不用区分单引号和双引号。

```Css
$width: 100px;
$height: 200px;
$imgName: hello.jpg;
$className: div2

.div{
    width: $windth;
    height: $height;
    background-image: url("./imgs/" + $imgName);
    // background-image: url("./imgs/#{$imgName}"); 与上面作用一样
}

.#{className} {
    ...
    ...
    ...
}
```







### css动画属性

#### transform 形变

transform属性包括有旋转，扭曲，平移，缩放这个四个主要方法

旋转： rotate(xdeg) x为旋转的度数，deg是单位，必须要带上

平移：translate(x, y) x,y分别对应是现对于x，y轴的平移距离

扭曲：skew(xdeg, ydeg) x,y分别对应水平和垂直的翻转度数，deg是单位

缩放：scale(x,y) x,y分别对应的是相对于水平和竖直的缩放比例

#### transition 过渡

在一定时间内的平滑的过渡效果

transition: property duration timing-function delay

property: css属性如width,height等，可以为transform，为all的时候代表所有动画

该属性相当于监听，一旦属性值改变了就会触发这个过渡效果

duration: 持续时间

timing-function: 过渡动画加速度

delay: 延迟多久后开始动画

#### translate 移动

是transform中的一个效果，平移：translate(x, y) x,y分别对应是现对于x，y轴的平移距离



### 布局

#### Flex布局

首先注意一点，在使用Flex布局之后，子元素的float, clear, vertical-align都将失效

![img](http://www.runoob.com/wp-content/uploads/2015/07/3791e575c48b3698be6a94ae1dbff79d.png)

黄色背景的为容器，蓝色背景的为项目，水平的main axis为主轴，竖直的cross axis为交叉轴main start, main end分别对应水平的起点和终点。cross start, cross end同理。还有单个项目的主轴空间main size和交叉轴空间cross size.



#### 容器的属性

```js
flex-direction // 主轴方向(项目的排列方向)
// row: 默认值，从左至右；row-recerse: 从右至左；
// column: 从上到下；column-reverse: 从下到上

flex-wrap // 默认情况下所有项目都排列在一条，如果一条线排不下，如何换行
// nowrap: 默认不换行； wrap: 向下换行； wrap-reverse: 向上换行

flex-flow // flex-direction 和 flex-wrap 的简写形式
// flex-flow: <flex-dorection> <flex-wrap>

justifi-content // 项目在主轴上的对其方式
// flex-start: 向左； flex-end: 向右； center: 居中； space-between: 两端对齐，
// 间距相等；space-around: 每个项目两侧的间距相等。项目间的间距是两侧的一倍

align-items // 项目在交叉轴上面对齐
// flex-start: 交叉轴起点对齐； flex-end: 交叉轴终点对齐； center: 竖直居中；
// base-line: 项目第一行文字基线对齐 stretch: 若项目未设置高度或为零，占满整个容器高度

align-content // 多根轴线对齐方式，还是竖直方向上的，整体上在交叉线的对齐
// flex-start, flex-end, center同上
// space-between: 交叉线两端对齐， space-around: 每个项目两侧的间距相等。项目间的间
// 距是两侧的一倍; stretch: 占满整个高度
```



#### 项目属性

```js
order
// 排列顺序，默认为0

flex-grow
// 放大比例，默认为0

flex-shrink
// 缩小比例，默认为1

flex-basis
// 项目在分配多余空间之前占据主轴的空间

flex
// flex-grow flex-shrink flex-basis的简写，默认为0 1 auto

align-self
// 单个项目与其他项目不一样的竖直对齐方式
```


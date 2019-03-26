# HTML

# CSS

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


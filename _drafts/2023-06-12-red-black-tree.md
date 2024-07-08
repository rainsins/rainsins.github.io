---
title: 红黑树
author: rainsin
date: 2023-06-12 12:23:00 +0800
categories: [考研, 数据结构]
tags: [数据结构, 二叉查找树, 2-3查找树, 红黑树]
pin: false
math: true
mermaid: true
react: false
video: false
music: false
mathpolt: false
jquery: false
forbid: true
comments: true
favicon: code

post: true
description: 红黑树的实现和基础原理
keywords: rainsin, blog, 数据结构, 二叉查找树, 2-3查找树, 红黑树
author: rainsin
---

## 一、前言

在普通平衡二叉树中我们知道平衡条件苛刻，平衡条件很容易被打破，因此需要频繁的调整全树的结构，代价太大了，应用并不广。下面介绍一种平衡条件放宽的数据结构，它的所有操作都在对数时间内完成。

## 二、2-3查找树

### 2.1 定义

> 一颗2-3查找树或为一颗空树，或由下列结点组成：
> * 2-结点：只有一个键，两条链接的结点，如图1-1。
> * 3-结点：有两个键，三条链接的结点，如图1-2。

![1-1](https://photo.rainsin.cn:2000/LightPicture/2023/06/7d3c62c01fdd2741.png "图1-1")
_图1-1_

![1-2](https://photo.rainsin.cn:2000/LightPicture/2023/06/f927d161fdb59127.png "图1-2")
_图1-2_

如图1-3是一颗标准的2-3查找树：

![4b114f8baae4d3db.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/4b114f8baae4d3db.png "图1-3")
_图1-3_

### 2.2 查找

假设我们可以很好的操作上面定义的结构，那么我们怎样查找一个元素？

树上的结点划分了不同的区间，树越深区间划分的越细，我们查找的是某个以被查找的元素作为端点的区间，如果找到则查找成功，如果永远的落入到一个区间中（非端点），这个区间没有被继续分割（遇到空结点），则查找失败。

例如，我们在图1-3中的树上查找C和M：

查找C元素（成功）：

![37ca9afc051f9e62.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/37ca9afc051f9e62.png)

![63cf6d71c94a44a8.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/63cf6d71c94a44a8.png)

![33faa590aff90694.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/33faa590aff90694.png)

查找M元素（失败）：

![5b53e6d72530bd37.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/5b53e6d72530bd37.png)

![ea3f7606459aed70.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/ea3f7606459aed70.png)

![c9816b4cd583ee23.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/c9816b4cd583ee23.png)

### 2.3 插入

#### 2.3.1 在一个2-结点上插入

就像在上面查找M元素过程中，最后停到了K结点，K结点是一个2-结点，即未命中查找结束在一个2-结点上，这种情况如何处理？

很简单，直接将这个2-结点变为3-结点，插入要插入的键。如图2-1:

![8d70fc328cc16a29.png](https://photo.rainsin.cn:2000/LightPicture/2023/07/8d70fc328cc16a29.png)

#### 2.3.2 只有一个3-结点的树中插入

插入H：

![61cc714cd69e1eaf.png](https://photo.rainsin.cn/LightPicture/2023/07/61cc714cd69e1eaf.png)

这里的4-结点是非常重要的中间结点，后续的操作都离不开它。

#### 2.3.3 向父结点为2-结点的3-结点中插入

插入Z：

![bc2a452efce6e160.png](https://photo.rainsin.cn:2000/LightPicture/2023/07/bc2a452efce6e160.png)

#### 2.3.4 向父结点为3-结点的3-结点中插入

插入N：

![5cc07423bbb54118.png](https://photo.rainsin.cn:2000/LightPicture/2023/07/5cc07423bbb54118.png)



#### 2.3.5 分解根结点

如果`2.3.4`步骤中向上分解到根结点都没有遇到2-结点怎么办？

其实很简单，前面的分解都是`2.3.4`的步骤，到达根结点后执行`2.3.2`的步骤就行了。

### 2.4 分析

上述定义的2-3树操作很直白，容易理解，但是实现起来很复杂，我们需要维护两种结点，实现它们之间的转换，情况还非常多，这不是一件容易的事，代码量会很多。而下面的红黑树是2-3查找树的一种表达，实现起来并不难。

## 三、红黑树

### 3.1 定义

王道的定义：

一棵红黑树是满足如下红黑性质的二叉排序树：
1. 每个结点或是红色，或是黑色的。
2. 根结点是黑色的。
3. 叶结点（虚构的外部结点、NULL结点）都是黑色的。
4. 不存在两个相邻的红结点（即红结点的父结点和孩子结点均是黑色的）。
5. 对每个结点，从该结点到任一叶结点的简单路径上，所含黑结点的数量相同。

另一种定义是我们将讨论的颜色对象换为链接而非结点（颜色的变量在结点中，但是我们使用的时候是这样使用的`node.left.color`，就好像是链接颜色一样）：
1. 红链接均为左链接
2. 没有结点同时和两条红链接相连
3. 完美黑色平衡

2-3查找树定义红黑树：
1. `红链接`将两个2-结点连接起来构成3-结点，都是**左斜**的
2. `黑链接`是2-3树中的普通链接

如果我们将一棵红黑树的红链接画平，那么所有空链接到根链接的距离都是相同的。
我们将图1-3中的2-3树转换为红黑树：

![4559739e4c1da3d8.png](https://photo.rainsin.cn:2000/LightPicture/2023/07/4559739e4c1da3d8.png)

如上图将红链接画平后树是完美平衡的。

### 3.2 实现

#### 3.2.1 结点定义及颜色表示

```cpp
//定义颜色
#define RED true;
#define BLACK false;
using Color = bool;

template <class Key, class Value> 
class RBNode{
private:
    Key key;
    Value value;
    RBNode<Key,Value> left;
    RBNode<Key,Value> right;
    int N;
    Color color;

public:
    RBNode(Key &ikey, Value &ivalue, int inum, Color &c){
        Key = ikey;
        Value = ivalue;
        N = inum;
        color = c;
        left = right = nullptr;
    }
};
```
上述结点定义还是挺直观的。除此之外还需要一个测试结点与父结点之间链接颜色的函数`isRed()`和得到以该结点为根的子树的子结点数目`size()`，实现如下。

```cpp
bool isRed(RBNode<Key,Value> &h){
    if(h == nullptr) return false;
    return h.color == RED;
}

int size(RBNode<Key,Value> &h){
    if(h == nullptr) {
        return 0;
    }else{
        return h.N;
    }; 
}
```

#### 3.2.2 旋转

- 左旋转

![50f1f74fc5c41781.png](https://photo.rainsin.cn:2000/LightPicture/2023/07/50f1f74fc5c41781.png)

```cpp
//左转
RBNode<Key,Value> rotateLeft(RBNode<Key,Value> &h){
    RBNode<Key,Value> x = h.right;
    h.right = x.left;
    x.left = h;
    x.color = h.color;
    h.color = RED;
    x.N = h.N;
    h.N = 1 + size(h.left) + size(h.right);
    return x;
}
```

![b02ceb8e6124def9.png](https://photo.rainsin.cn:2000/LightPicture/2023/07/b02ceb8e6124def9.png)


- 右旋转

右旋转是将上面左旋实现进行镜像，`left`改为`right`，`right`改为`left`。

```cpp
//右转
RBNode<Key,Value> rotateRight(RBNode<Key,Value> &h){
    RBNode<Key,Value> = h.left;
    h.left = x.right;
    x.right = h;
    x.color = h.color;
    h.color = RED;
    x.N = h.N;
    h.N = 1 + size(h.left) + size(h.right);
    return x;
}
```

- 颜色变化

```cpp
//改变颜色
void flipColor(RBNode<Key,Value> &h){
    h.color = RED;
    h.left.color = BLACK;
    h.right.color = BLACK;
}
```

- 插入的总体实现

```cpp
//...
public:
    //...
    void put(Key &key,Value &value){
        root = put(root, key, value);
        root.color = BLACK;
    }
    //...
private:
    //...
    //插入
    RBNode<Key,Value> put(RBNode<Key,Value> &h, Key &key, Value &value){
        if(h == nullptr){
            temp = new RBNode<Key, Value>(Key, Value, 1, RED);
            return temp;
        }
        if(key > h.key){
            h.right = put(h.right, key, value);
        }else if(key < h.key){
            h.left = put(h.left, key, value);
        }else{
            h.value = value;
        }

        if(isRed(h.right) && !isRed(h.left))
            h = rotateLeft(h);
        if(isRed(h.left) && isRed(h.left.left))
            h = rotateRight(h);
        if(isRed(h.left) && isRed(h.right))
            flipColor(h);

        h.N = 1 + size(h.left) + size(h.right);
        return h;
    }
    //...
//...
```

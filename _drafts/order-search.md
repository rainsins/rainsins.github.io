---
title: Order Search（顺序查找）
author: rainsin
date: 2023-05-12 17:32:10 +0800
categories: [考研, 数据结构]
tags: [顺序查找, 二分查找, 查找]
pin: false
math: true
mermaid: true
react: false
video: false
music: false
mathpolt: false
jquery: false
image:
  path: https://photo.rainsin.cn:2000/LightPicture/2023/06/2e5541dcd711bdcc.png
  lqip: data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSDIAAAARL0AmbZurmr57yyIiqE8oiG0bejIYEQTgqiDA9vqnsUSI6H+oAERp2HZ65qP/VIAWAFZQOCBCAAAA8AEAnQEqEAAIAAVAfCWkAALp8sF8rgRgAP7o9FDvMCkMde9PK7euH5M1m6VWoDXf2FkP3BqV0ZYbO6NA/VFIAAAA
  alt: 顺序查找.
---


> 考察重点：
> - 折半查找
> - 判定树
> - 平均查找长度
{: .prompt-tip }

# 0 平均查找长度的定义

$$
ASL=\sum^{n}_{i=1} P_{i}L_{i} \tag{1}
$$

式中，$n$为查找表的长度，$P_{i}$为查找到第$i$个元素的概率，$L_{i}$为查找第$i$个元素所需要的比较次数。考试最喜欢考这种东西，做题的时候就是找到所有情况再乘以概率，概率一般为$1/n$，而判定树的一个作用就是让我们更好的找的所有的情况。

# 1 乱序表的顺序查找
可以从左向右找，也可从右向左找。从右向左找的话，顺序表的第一个位置不存放数据，在开始查找时这个位置会被赋为要查找的值，充当**哨兵**，作为查找停止条件。

实现很简单：
```cpp
//链表存储的顺序查找
Node<E>* list_order_search(LList<E>* l,E& key){
  while(l != nullptr){
    if(l->data == key){
      return l;
    }else{
      l = l->next;
    }
  }
  return nullptr;
}
//顺序存储的顺序查找
int Array_order_search(E* l,E& key){
  int i = 0;
  //哨兵
  l[0] = key;
  for(i = lenght(l); l[i] == key ; i--);
  return i;
}
```
可以看出一般的顺序表查找成功的位置是随机的，但是查找失败的位置是唯一的，就是走完所有元素也没有找到即为失败。所以在求平均查找长度时，查找失败的比较简单，因为位置唯一所以长度比较好求，它的最大和平均查找长度相等，为：

$$
ASL_{\text{失败} }=n+1 \tag{顺序查找}
$$

$$
ASL_{\text{失败} }=n \tag{链式查找}
$$

是$O(n)$级别。

而由于在每个位置都可能查找成功，所以我们可以设查找成功的位置为$i$，每个位置的比较次数不同，也与我们的实现也有关系，就比如上面的顺序存储的算法，从后往前找每个位置$i$的比较次数为$L_{i}=(n-i+1)$，概率为$1/n$，所以有：

$$
\begin{equation*}
\begin{aligned} 
ASL_{\text{成功} }&=\sum^{n}_{i=1} P_{i}\left( n-i+1\right) \\
&=\frac{1}{n} \sum^{n}_{i=1} \left( n-i+1\right)  \\
&=\frac{1}{n} \left( \left( n-\left( 1\right)  +1\right)  +\left( n-\left( 2\right)  +1\right)  +\left( n-\left( 3\right)  +1\right)  +\cdots +\left( n-\left( n-1\right)  +1\right)  +\left( n-\left( n\right)  +1\right)  \right)  \\ 
&=\frac{1}{n} \left( n+n-1+n-2+\cdots +2+1\right)  \\
&=\frac{1}{n} \left( \frac{n}{2} \left( n+1\right)  \right)  =\frac{n+1}{2} 
\end{aligned}
\label{exp1}
\tag{2}
\end{equation*}
$$

从式子$(2)$的第四步可以看出从左往右查找的特征，比较次数依次递减，而如果是从左往右找的话，每个位置的比较次数就是它的位置，也就是把从式子$(2)$的第四步反过来，所以也有$ASL_{\text{成功} }=\frac{n+1}{2} $。

# 2 有序表的顺序查找
由于一般表没有其余我们可以利用的特征，所以只能遍历完所有元素才能知道查找是否成功了，所以它的失败结点只有一个。
而对于有序表有，选定有序表的一个元素，之后的所有元素都比它小（大），可以利用这个特性进行查找。

有以下$n$个元素有序的（升序且离散）排列在一个数轴上：

![轴](https://photo.rainsin.cn:2000/LightPicture/2023/06/e680778ef34508a9.png "图2-1")

如下图，数轴上可以分为两部分，一部分为元素点，另一部分为元素点分开的区间：

![影视](https://photo.rainsin.cn:2000/LightPicture/2023/06/fbbbdeb9fb83425b.png "图2-2")

只有查找在元素点上为查找成功，如果掉入了某个区间即为查找失败。然后将元素点和区间构造成构造树：

![判定树](https://photo.rainsin.cn:2000/LightPicture/2023/06/bc00a301f4ff3faf.png "图2-3")

区间映射为▪️方形结点，是失败结点，元素点为⭕️圆形结点，是成功节点，结点的高度即为比较次数，则查找成功的平均查找长度为：

$$
ASL_{\text{成功} }=\frac{1}{n} \left( 1+2+3+\cdots +n\right)  =\frac{n+1}{2} \tag{3}
$$

而查找失败时，高度最高的失败结点有两个，故每个失败结点概率为$\frac{1}{n+1} $，则查找失败的平均查找长度为：

$$
ASL_{\text{失败} }=\frac{1}{n+1} \left( 1+2+3+\cdots +n+n\right)  =\frac{n}{2} +\frac{n}{n+1} \tag{4}
$$

# 3 折半查找

## 思想

先将表在中间分割，中间元素左边的都比它小，右边的都比它大，这样就分成一个元素点和两个区间，如果key与中间元素相等则查找成功，如果不同，则会落入其中一个区间，在落入的区间中重复上面的操作，直到查找成功或失败。

## 实现

```cpp
int B_search(E* l,E& key){
  int slight = 0, big = lenght(l) - 1, mid;
  while(slight <= big){
    //分割，C++默认向下取整
    mid = (slight + big) / 2;
    if(l[mid] == key){
      //查找成功
      return mid;
    }else if(l[mid] < key){
      //落入小区间
      big = mid - 1;
    }else{
      //落入大区间
      slight = mid + 1;
    }
  }
}
```

## 平均查找长度分析

设有n个元素的有序表L：

首先，比较一次的情况，有一种：

![1](https://photo.rainsin.cn:2000/LightPicture/2023/06/14b1ae448180750d.png "图3-1")

比较两次，有两种：

![2](https://photo.rainsin.cn:2000/LightPicture/2023/06/8044afc7040521c1.png "图3-2")

比较三次，有四种：

![3](https://photo.rainsin.cn:2000/LightPicture/2023/06/1287c1cf62154791.png "图3-3")

比较四次，有八种：

![4](https://photo.rainsin.cn:2000/LightPicture/2023/06/9998a43f10d83944.png "图3-4")

可以看出一些规律，比较次数有明显的二叉树的特征，比较第$i$次，有：

![5](https://photo.rainsin.cn:2000/LightPicture/2023/06/14cf2308e5810118.png "图3-5")

由上面的我们知道比较$i$次的情况有$2^{i-1}$种，这样就可以算出比较的总次数：

$$
L_{i}=1\times 1+2\times 2+3\times 4+4\times 8+\cdots +i\times 2^{i-1}
$$

故查找成功的平均查找长度：

$$
ASL_{\text{成功} }=\frac{1}{n} \left( \sum^{a}_{i=1} i\cdot 2^{i-1}\right)  \tag{5}
$$

由于结点数目的总和等于n，则有：

$$
1+2+4+\cdots +2^{i-1}=n \Rightarrow i=log_{2}\left( n+1\right)  
$$

所以，有$a=log_{2}(n+1)$，这样就可以带入式$(5)$中：



$$
\begin{equation*}
\begin{aligned} 
ASL_{\text{成功} }&=\frac{1}{n} \left( \sum^{log_{2}\left( n+1\right)  }_{i=1} \left( i\cdot 2^{i-1}\right)  \right)    \\
&=\frac{1}{n} (\left( log_{2}\left( n+1\right)  -1\right)  2^{log_{2}\left( n+1\right)  }+1) \\
&=\frac{n+1}{n} \left( log_{2}\left( n+1\right)  -\frac{n}{n+1} \right)  \\
\end{aligned} 
\tag{6}
\end{equation*}
$$

特殊的我们将：

$$
\frac{n+1}{n} \approx 1,\  \frac{n}{n+1} \approx 1
$$

这样，查找成功的查找长度为：

$$
ASL_{成功}=log_{2}\left( n+1\right)  -1 \tag{7}
$$

由式$(7)$我们可以知道二分查找的时间复杂度为$O(log_{2}n)$。



高中的知识忘的一干二净，上述式$(6)$中的差比数列的求和费了老大的劲了，最后将方法贴在下面，以示警戒：

有差比数列：

$$
A_{n}=n\cdot 2^{n-1}=\frac{n}{2} \cdot 2^{n} \tag{8}
$$

广义裂项法：

我们把这个数列设成数列后项减前项的形式。之后我们用待定系数法来确定A和B的值，以确保等号左右两端相等。

$$
\begin{aligned} n \cdot 2^{n-1}=\frac{n}{2} \cdot 2^{n} & =X_{n+1}-X_{n} \\ & =\left[A\left(\frac{n+1}{2}\right)+B\right] 2^{n+1}-\left(A \frac{n}{2}+B\right) 2^{n} \\ & =[A(n+1)+2 B] 2^{n}-\left(A \frac{n}{2}+B\right) 2^{n} \\ & =\left(\frac{A}{2} n+A+B\right) 2^{n}\end{aligned}\tag{9}
$$

由$\dfrac{A}{2}n+A+B=\dfrac{n}{2}$，得$A=1,B=-1$。

我们用构造出的数列来表示原数列的前n项和，然后将算出来的A和B带入，得出最后的结果

$$
\begin{aligned}S_{n}&=X_{2}-X_{1}+X_{3}-X_{2}+\ldots +X_{n+1}-X_{n}\\ 
&=X_{n+1}-X_{1}\\ 
&=\left( n-1\right) 2^{n}+1
\end{aligned}\tag{10}
$$

## 判定树

有了上面的图3-5的分析，可以得出一个只有数据元素的二叉排序树，它是平衡的。在这个树的基础上我们将所有子女有空结点的结点找出来，将他们的空子结点设置为失败结点，失败结点表示区间，而二叉树中的边表示比较之后落入了某个区间。
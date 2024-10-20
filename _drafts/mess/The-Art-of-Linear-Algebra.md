---
title: 线性代数基础
author: rainsin
date: 2023-04-10 12:23:00 +0800
categories: [Math]
tags: [Linear Algebra, math, 矩阵计算]
pin: false
math: true
mermaid: true
react: false
video: false
music: false
mathpolt: false
jquery: false
image:
  path: https://photo.rainsin.cn:2000/LightPicture/2023/06/72169bf77b6b9ad9.jpeg
  lqip: data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSDIAAAARL0AmbZurmr57yyIiqE8oiG0bejIYEQTgqiDA9vqnsUSI6H+oAERp2HZ65qP/VIAWAFZQOCBCAAAA8AEAnQEqEAAIAAVAfCWkAALp8sF8rgRgAP7o9FDvMCkMde9PK7euH5M1m6VWoDXf2FkP3BqV0ZYbO6NA/VFIAAAA
  alt: 线性代数.
---

# 线性代数基础

线性代数是工科最重要的课程之一，有非常广泛的应用场景，机器学习、神经网络等的底层计算都是以矩阵计算为基石，它撑起了AI的底层，另外它也应用在计算机的方方面面，虽然在考研中它的占比不大，但是学会使用它收益还是挺高的。

# 1 矩阵表示

一个矩阵($m\times n$)可以看作一个矩阵，$mn$个数字，$n$列和$m$行。

![矩阵的四种表示](https://photo.rainsin.cn:2000/LightPicture/2023/06/dbf1d172ca7db898.png)

矩阵的四种表示

$$
A=\left[ \begin{matrix}a_{11}&a_{12}\\ a_{21}&a_{22}\\ a_{31}&a_{32}\end{matrix} \right]  =\left[ \begin{matrix}|&|\\ a_{1}&a_{2}\\ |&|\end{matrix} \right]  =\left[ \begin{matrix}-&a^{\ast }_{1}&-\\ -&a{}^{\ast }_{2}&-\\ -&a^{\ast }_{3}&-\end{matrix} \right]  
$$

# 2 向量$\times$ 向量

![矩阵1.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/e165fdeb07b44f74.png)

![$\beta \alpha^{T}$运算与$\alpha \beta^{T}$运算相同，得到一个矩阵](https://photo.rainsin.cn/LightPicture/2023/06/6b80be80492a0bb6.png)

$\beta \alpha^{T}$运算与$\alpha \beta^{T}$运算相同，得到一个矩阵

![矩阵5.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/486ff64f21c04d9b.png)

设$A=\alpha \beta^{T}$，则$A^{T}=\left( \alpha \beta^{T} \right)^{T} =\left( \beta^{T} \right)^{T} \alpha^{T} =\beta \alpha^{T}$。

![矩阵3.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/73819bbe45289d25.png)

![矩阵4.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/ce5f23a5886dd090.png)

$\alpha^{T} \beta =\beta^{T} \alpha$为$\alpha \beta^{T} , \beta \alpha^{T}$的迹。

举例：

$$
\alpha =\left[ \begin{matrix}2&3&4\end{matrix} \right]^{T}  ,\  \beta =[ \begin{matrix}1&4&1\end{matrix} ]^{T}  
$$

$$
\alpha \beta^{T} =\left[ \begin{matrix}4&16&4\\ 3&12&3\\ 2&8&2\end{matrix} \right]  ,\  \beta \alpha^{T} =\left[ \begin{matrix}2&3&4\\ 8&12&16\\ 2&3&4\end{matrix} \right]  .
$$

$$
\alpha^{T} \beta =2+12+4=18,\  \beta^{T} \alpha =2+12+4=18.
$$

# 3 矩阵$\times$向量

![iShot_2022-10-13_10.48.22.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/5d7e6a692b1e8fbe.png)

$$
Ax=\left[ \begin{matrix}1&4\\ 2&5\\ 3&6\end{matrix} \right]  \left[ \begin{matrix}x_{1}\\ x_{2}\end{matrix} \right]  =\left[ \begin{matrix}\left( x_{1}+4x_{2}\right)  \\ \left( 2x_{1}+5x_{2}\right)  \\ \left( 3x_{1}+6x_{2}\right)  \end{matrix} \right]  
$$

---

![iShot_2022-10-13_10.45.48.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/cd27af126ce9a388.png)

$$
Ax=\left[ \begin{matrix}1&4\\ 2&5\\ 3&6\end{matrix} \right]  \left[ \begin{matrix}x_{1}\\ x_{2}\end{matrix} \right]  =x_{1}\left[ \begin{matrix}1\\ 2\\ 3\end{matrix} \right]  +x_{2}\left[ \begin{matrix}4\\ 5\\ 6\end{matrix} \right]  
$$

首先，我们学习第一种运算。但是，当您习惯于将其视为第二种方法时，您可以将$Ax$理解为 $A$列的线性组合， $Ax=0$ 的解空间是 $A$ 的零空间，表示为 $N（A）$。 

![iShot_2022-10-13_11.16.38.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/f4470fea39712b3a.png)

$$
\boldsymbol{y} A=\left[\begin{array}{lll}y_{1} & y_{2} & y_{3}\end{array}\right]\left[\begin{array}{ll}1 & 2 \\ 3 & 4 \\ 5 & 6\end{array}\right]=\left[\begin{array}{ll}\left(y_{1}+3 y_{2}+5 y_{3}\right) & \left(2 y_{1}+4 y_{2}+6 y_{3}\right)\end{array}\right]
$$

---

![iShot_2022-10-13_11.16.11.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/43930b671946db0a.png)

$$
y A=\left[\begin{array}{lll}y_{1} & y_{2} & y_{3}\end{array}\right]\left[\begin{array}{ll}1 & 2 \\ 3 & 4 \\ 5 & 6\end{array}\right]=y_{1}\left[\begin{array}{ll}1 & 2\end{array}\right]+y_{2}\left[\begin{array}{ll}3 & 4\end{array}\right]+y_{3}\left[\begin{array}{ll}5 & 6\end{array}\right]
$$

# 4 四个子空间

![iShot_2022-10-13_11.45.43.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/ea3c64c96714051c.png)

# 5 矩阵$\times$矩阵

![$(M\times M)_{1}$](https://photo.rainsin.cn:2000/LightPicture/2023/06/049d20e19fc49529.png)

$(M\times M)_{1}$

$$
\left[\begin{array}{ll}1 & 2 \\ 3 & 4 \\ 5 & 6\end{array}\right]\left[\begin{array}{ll}x_{1} & y_{1} \\ x_{2} & y_{2}\end{array}\right]=\left[\begin{array}{cc}\left(x_{1}+2 x_{2}\right) & \left(y_{1}+2 y_{2}\right) \\ \left(3 x_{1}+4 x_{2}\right) & \left(3 y_{1}+4 y_{2}\right) \\ \left(5 x_{1}+6 x_{2}\right) & \left(5 y_{1}+6 y_{2}\right)\end{array}\right]
$$

---

![$(M\times M)_{2}$](https://photo.rainsin.cn:2000/LightPicture/2023/06/3a0a8413bd264338.png)

$(M\times M)_{2}$

$$
\left[\begin{array}{ll}1 & 2 \\ 3 & 4 \\ 5 & 6\end{array}\right]\left[\begin{array}{ll}x_{1} & y_{1} \\ x_{2} & y_{2}\end{array}\right]=A\left[\begin{array}{ll}\boldsymbol{x} & \boldsymbol{y}\end{array}\right]=\left[\begin{array}{ll}A \boldsymbol{x} & A \boldsymbol{y}\end{array}\right]
$$

---

![$(M\times M)_{3}$](https://photo.rainsin.cn:2000/LightPicture/2023/06/f66c7c182bac8d40.png)

$(M\times M)_{3}$

$$
\left[\begin{array}{ll}1 & 2 \\ 3 & 4 \\ 5 & 6\end{array}\right]\left[\begin{array}{ll}x_{1} & y_{1} \\ x_{2} & y_{2}\end{array}\right]=\left[\begin{array}{l}a_{1}^{*} \\ a_{2}^{*} \\ a_{3}^{*}\end{array}\right] X=\left[\begin{array}{l}a_{1}^{*} X \\ a_{2}^{*} X \\ a_{3}^{*} X\end{array}\right]
$$

---

![$(M\times M)_{4}$](https://photo.rainsin.cn:2000/LightPicture/2023/06/db0eb4aaef98d8d7.png)

$(M\times M)_{4}$

$$
\left[\begin{array}{ll}1 & 2 \\ 3 & 4 \\ 5 & 6\end{array}\right]\left[\begin{array}{ll}b_{11} & b_{12} \\ b_{21} & b_{22}\end{array}\right]=\left[\begin{array}{ll}\boldsymbol{a}_{\mathbf{1}} & \boldsymbol{a}_{2}\end{array}\right]\left[\begin{array}{l}\boldsymbol{b}_{\mathbf{1}}^{*} \\ \boldsymbol{b}_{2}^{*}\end{array}\right]=\boldsymbol{a}_{\mathbf{1}} \boldsymbol{b}_{\mathbf{1}}^{*}+\boldsymbol{a}_{\mathbf{2}} \boldsymbol{b}_{\mathbf{2}}^{*}\\=\left[\begin{array}{l}1 \\ 3 \\ 5\end{array}\right]\left[\begin{array}{ll}b_{11} & b_{12}\end{array}\right]+\left[\begin{array}{l}2 \\ 4 \\ 6\end{array}\right]\left[\begin{array}{ll}b_{21} & b_{22}\end{array}\right]=\left[\begin{array}{ll}b_{11} & b_{12} \\ 3 b_{11} & 3 b_{12} \\ 5 b_{11} & 5 b_{12}\end{array}\right]+\left[\begin{array}{ll}2 b_{21} & 2 b_{22} \\ 4 b_{21} & 4 b_{22} \\ 6 b_{21} & 6 b_{22}\end{array}\right]
$$

<aside>
⚠️ 注意：

1. $AB\neq BA$
2. $AB=0 ⇏A=0或B=0$
3. $AB=AC,\ A\neq 0 ⇏ B=C$
</aside>

### 考点：$A^{n}$

1. 对角矩阵
    
    ![iShot_2022-10-17_12.06.13.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/4ec18bd8e38d779e.png)
    
2. 秩1矩阵
$r(A)=1, A^2=lA$，其中$l=\sum a_{ii}$是$A$的迹，则$A^n=l^{n-1}A$。

# 6 实用模式

### $P.1$ 列-列得到列

![iShot_2022-10-17_10.31.54.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/cd3fb2b742236508.png)

![iShot_2022-10-17_10.32.14.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/ae34b087270c89c5.png)

### $P.2$  行-行得到行

![iShot_2022-10-17_10.51.52.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/1ce49087386cc35f.png)

![iShot_2022-10-17_10.52.01.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/1252449ba3ac1367.png)

### P.3

![iShot_2022-10-17_11.09.15.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/587ec916db304c1b.png)

![iShot_2022-10-17_11.10.50.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/78d111cf21e870af.png)

### P.4
。。。

# 7 对角矩阵

## 普通矩阵$\times$对角：

![iShot_2022-10-17_11.01.59.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/577266170185ee48.png)

![iShot_2022-10-17_11.02.08.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/4e2ee985afcc948c.png)

## 对角$\times$对角

![iShot_2022-10-17_11.57.45.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/a31bb5a39fd8a71d.png)


> 注意：
>
> - $\Lambda_{1} \Lambda_{2} =\Lambda_{2} \Lambda_{1}$
> - $\Lambda^{n}$\
>    ![iShot_2022-10-17_12.06.13.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/fbfc4882d792eae4.png)
>
> - 倒数关系\
>   ![iShot_2022-10-17_12.11.31.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/86d0ffdf644e7250.png)
{: .prompt-tip }
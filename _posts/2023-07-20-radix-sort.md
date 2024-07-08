---
title: 基础排序算法之基数排序
author: rainsin
date: 2023-07-20 12:32:10 +0800
categories: [考研, 数据结构]
tags: [排序, 基数排序]
pin: false
math: true
mermaid: true
react: false
video: false
music: false
jquery: false
forbid: true
comments: true
favicon: code

post: true
description: 基础排序算法之基数排序
keywords: rainsin, blog, 排序, 基数排序
author: rainsin
---



#  排序算法之基数排序

### 前期准备

我们提前定义一下基础操作：

```cpp
template <class E>
class Sort
{
protected:
    // 得到最大值索引
    static int v_max_index(vector<E> &a)
    {
        int biggest = (int)*max_element(begin(a), end(a));
        return biggest;
    }
    // 得到最小值索引
    static int v_min_index(vector<E> &a)
    {
        int biggest = (int)*min_element(begin(a), end(a));
        return biggest;
    }
}
```

### 具体过程

假定我们有一个待排数组`a[]={213,119,32,10,1,21}`。

我们新建两个辅助数组`count[]`和`tmp[]`，`count[]`记录当前位的元素个数，每位的数值是`[0...9]`这个范围，所以`count[]`的长度为10，`tmp[]`辅助存储`a[]`的元素，长度和`a[]`的相等，基数排序不是一个原地排序。

```cpp
int l = a.size();
vector<E> temp(l);
vector<E> count(10, 0);

int k = 0;
//提取当前的位数的值
int digit = 1;
```

如下图：

![基数1](https://photo.rainsin.cn:2000/LightPicture/2023/07/7df73343eb3c7a28.png)

首先，我们要定义一个方法`max_digit()`获取`a[]`的最大值的位数`d`，比如上面的最大值为213，所以`d = 3`。这个`d`控制最外层的循环，以便依次对个位、十位、百位∙∙∙∙∙∙进行处理，基数排序先对最低有效位进行排序。

```cpp
// 得到最大位数
static int max_digit(vector<E> &a)
{
     int max = v_max_index(a);
     int d = 1;
     while (max >= 10)
     {
         max = max / 10;
         d++;
     }
     return d;
}
```

然后我们进行类似计数排序的过程，

#### 1. 创建count[]数组

第一步是先将`count[]`所有元素重置为`0`，现在是刚开始的阶段，我们初始化位置控制变量`p = 1` ，即从个位开始，我们先对个位的数值进行统计，初始化一个遍历指针`i = 0`，取出`a[0] = 213`，得到该元素的个位`k = (a[0] / digit ) % 10 = (213 / 1) % 10 = 3`，将`count[k]`加一，即个位为3的元素多了一个，之后`i++`进行下一轮循环，直到遍历完所有元素，如下图：

`i=0`，先取出`a[0]`进行处理：

![基数2](https://photo.rainsin.cn:2000/LightPicture/2023/07/25a9a72e33759b08.png)

`i=1`,取出`a[1]`：

![基数3](https://photo.rainsin.cn:2000/LightPicture/2023/07/a246e6c68df6eae6.png)



如此重复上述过程直到到达最后一个元素：

![基数4](https://photo.rainsin.cn:2000/LightPicture/2023/07/184cdb292da8bfee.png)

部分代码如下：

```cpp
for (int j = 0; j < l; j++)
{
    k = (a[j] / digit) % 10;
    count[k]++;
}
```



最后我们得到了一个个位的计数数组`count[]={1,2,1,1,0,0,0,0,0,1}`，下一步是将这个数组进行一个处理，使得其可以表征一些位置信息，比如个位为1的元素位置在个位为0的元素后面在个位为2的元素前面，怎么实现这个处理，其实很简单，只需当前位的个数加上减一位的个数：`count[i] = count[i] + count[i - 1]`，得到处理过的`count[]`，过程如下：

![基数5](https://photo.rainsin.cn:2000/LightPicture/2023/07/38d65cc3caeacea1.png)

![基数6](https://photo.rainsin.cn:2000/LightPicture/2023/07/3e829f87d6c1af20.png)

![基数7](https://photo.rainsin.cn:2000/LightPicture/2023/07/5ccf724cdc9198d8.png)

![基数17](https://photo.rainsin.cn:2000/LightPicture/2023/07/ae32a9254588680a.png)

![基数18](https://photo.rainsin.cn:2000/LightPicture/2023/07/225822cdc40796f2.png)

![基数19](https://photo.rainsin.cn:2000/LightPicture/2023/07/ed18034ff8a9f9fe.png)

代码如下：

```cpp
for (int j = 1; j < 10; j++)
    count[j] = count[j] + count[j - 1];
```



#### 2.使用上述生成的count[]进行排序

这个过程比较简单，就是倒过来遍历`a[]`，经过式$(1)$的变化得到经过个位排序的`tmp[]`，然后把`tmp[]`复制到`a[]`。

$$
a\left[ j\right]  \xrightarrow[]{k\  =\  \left( a\left[ j\right]  \  /\  digit\right)  \  /\  10} tmp\left[ count\left[ k\right]  -1\right]  \  =\  a\left[ j\right]  \rightarrow count\left[ k\right]  \  =\  count\left[ k\right]  \  -\  1
\tag{1}
$$

过程如下：

![基数10](https://photo.rainsin.cn:2000/LightPicture/2023/07/383e7a17c6b66e5c.png)

然后将`count[1]`的值减一，之后`j = 4` :

![基数11](https://photo.rainsin.cn:2000/LightPicture/2023/07/e6e9c6f84ac0b090.png)

然后将`count[1]`的值减一，之后`j = 3` :

![基数12](https://photo.rainsin.cn:2000/LightPicture/2023/07/2db65ce23760446e.png)

然后将`count[0]`的值减一，之后`j = 2` :

![基数14](https://photo.rainsin.cn:2000/LightPicture/2023/07/1136d22fef035c27.png)

然后将`count[2]`的值减一，上图的`count[0]`应为0，不想改图了，之后`j = 1` :

![基数15](https://photo.rainsin.cn:2000/LightPicture/2023/07/89ea2daac94366a6.png)

然后将`count[9]`的值减一，之后`j = 0` :

![基数16](https://photo.rainsin.cn:2000/LightPicture/2023/07/36aff3e07910c42d.png)

这样我们就排好了个位的顺序，然后我们将`tmp[]`的内容复制给`a[]`，将`digit = digit * 10= 1 * 10 = 10`来提取十位的数值，进行下一轮的循环，重复1和2的过程，直到最外层循环超过了最大值位数`d`为止，后面的具体过程就不具体讲了，可以自己动手模拟模拟。

这样我们可以写出代码了：

```cpp
	// 基数排序
    static void Radix(vector<E> &a)
    {
        int l = a.size();
        vector<E> temp(l);
        vector<E> count(10, 0);

        int k = 0;
        int digit = 1;

        int d = max_digit(a);
        for (int i = 1; i <= d; i++)
        {
            for (int j = 0; j < 10; j++)
                count[j] = 0;

            for (int j = 0; j < l; j++)
            {
                k = (a[j] / digit) % 10;
                count[k]++;
            }

            for (int j = 1; j < 10; j++)
                count[j] = count[j] + count[j - 1];

            for (int j = l - 1; j >= 0; j--)
            {
                k = (a[j] / digit) % 10;
                temp[count[k] - 1] = a[j];
                --count[k];
            }

            for (int j = 0; j < l; j++)
                a[j] = temp[j];

            digit = digit * 10;
        }
    }
```

### 测试

首先需要一个生成测试用例的函数：
```cpp
// 测试用例生成
// n为生成的数量，RangeL和RangeR表示生成的数在这两个之间
static vector<E> generateRandomA(int n, int RangeL, int RangeR)
{
    vector<E> a;
    if (RangeL > RangeR)
    {
        int temp = RangeL;
        RangeL = RangeR;
        RangeR = temp;
    }
    srand((unsigned)time(NULL));
    for (int i = 0; i < n; i++)
    {
        a.push_back((E)(rand() % (RangeR - RangeL + 1) + RangeL));
    }
    return a;
}
```
{: file='Sort.hpp'}

还需要一个时间测试函数，时间精确到纳秒(ns)：

```cpp
static long long getCurrentTimeNano()
{
    return std::chrono::duration_cast<std::chrono::nanoseconds>(std::chrono::high_resolution_clock::now().time_since_epoch()).count();
}
```
{: file='Sort.hpp'}

将升序的数组反向排序：

```cpp
// 将降序排列
static void re_vet(vector<E> &a)
{
    std::sort(a.rbegin(), a.rend());
}
```
{: file='Sort.hpp'}

随后进行测试：

```cpp
int main()
{
    int max = 20000;
    int min = 0;
    int num = 30000;

    vector<int> a = Sort<int>::generateRandomA(num, min, max);
    
    startTime = (double) Sort<int>::getCurrentTimeNano();
    Sort<int>::Radix(a5);
    endTime = (double) Sort<int>::getCurrentTimeNano();
    elapsedNanoseconds = (endTime - startTime)/1000000.0;
    printf("基数排序平均情况所需时间: %f ms\n", elapsedNanoseconds);


    startTime = (double) Sort<int>::getCurrentTimeNano();
    Sort<int>::Radix(a5);
    endTime = (double) Sort<int>::getCurrentTimeNano();
    elapsedNanoseconds = (endTime - startTime)/1000000.0;
    printf("基数排序有序情况所需时间: %f ms\n", elapsedNanoseconds);

    //反向排序
    Sort<int>::re_vet(a5);

    startTime = (double) Sort<int>::getCurrentTimeNano();
    Sort<int>::Radix(a5);
    endTime = (double) Sort<int>::getCurrentTimeNano();
    elapsedNanoseconds = (endTime - startTime)/1000000.0;
    printf("基数排序逆序情况所需时间: %f ms\n", elapsedNanoseconds);
    cout << endl;
}

```
{: file='main.cpp'}

结果：

```shell
待排数组有30000个元素。

基数排序平均情况所需时间: 4.363448 ms
基数排序有序情况所需时间: 4.207993 ms
基数排序逆序情况所需时间: 5.190794 ms
```

### 分析

空间复杂度：我们用到了和输入数组等大小的辅助数组和一个固定大小的辅助数组，故空间复杂度为$O(n+1) = O(n)$。

时间复杂度：其时间复杂度为$O (nlog(r)m)$，其中$r$为所采取的基数，而$m$为堆数。

基数排序是一个稳定的算法。

可视化过程：

输入：768个元素，范围在[0, 256]。

![基数排序](https://photo.rainsin.cn:2000/LightPicture/2023/07/200f36fa0b8f4ef6.gif)




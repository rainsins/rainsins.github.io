---
title: 「功能」代码块分组
author: rainsin
date: 2024-10-02 12:32:10 +0800
categories: [功能, 代码块分组]
tags: [功能]
pin: false
math: false
react: true
mermaid: false
video: false
music: false
cube: false
babel: true
tooltipjs: false
tooltipcss: false
animatecss: false

mathpolt: false
jquery: false
forbid: false
comments: true

code-group: true
better-scroll: true
favicon: code

post: true
description: 「功能」代码块分组
keywords: rainsin, blog, 写真
---

<!-- alarm|code|comfort|comment|heart|home|individual|main|star -->

> markdown原生没有代码块分组这个功能，jekyll所使用的kramdown也没有扩展，再者我不熟悉ruby这个语言，所以只能在浏览器里用js实现这个功能。它的使用场景是LeetCode题解展示多个语言实现、前端多个包管理器的安装代码等。
{: .prompt-tip }

## 例子

### 多个语言代码

<div class="code-group" markdown="1">
{% raw %}
@tab index.js js active
::::js
function lengthOfLongestSubstring(s) {
    const bus = new Set();
    const n = s.length;
    let rk = -1, ans = 0;
    for (let i = 0; i < n; ++i) {
        if (i != 0) {
            // 左指针向右移动一格，移除一个字符
            bus.delete(s.charAt(i - 1));
        }
        while (rk + 1 < n && !bus.has(s.charAt(rk + 1))) {
            // 不断地移动右指针
            bus.add(s.charAt(rk + 1));
            ++rk;
        }
        // 第 i 到 rk 个字符是一个极长的无重复字符子串
        ans = Math.max(ans, rk - i + 1);
    }
    return ans;
};
::::

@tab index.ts ts
::::ts
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let left = 0 , right = 0 ,add = nums1.length + nums2.length,ansIndex = [];
    const index = add % 2 === 0 ? [add / 2 - 1, add / 2] : Math.floor(add / 2);
    while(ansIndex.length <= (add / 2 + 1)){
        if(nums2.length === 0) {
            ansIndex = nums1
            break;
        }
        if(nums1.length === 0){
            ansIndex = nums2
            break;
        }
        if(nums1[left] !== undefined && nums2[right] !== undefined && nums1[left] > nums2[right]){
            ansIndex.push(nums2[right])
            right++
        }else if(nums1[left] !== undefined && nums2[right] !== undefined && nums1[left] < nums2[right]){
            ansIndex.push(nums1[left])
            left++
        } else if (nums1[left]=== undefined && nums2[right] !== undefined) {
            ansIndex.push(nums2[right])
            right++
        } else if (nums1[left] !== undefined && nums2[right] === undefined ) {
            ansIndex.push(nums1[left])
            left++
        }else  if (nums1[left] !== undefined && nums2[right] !== undefined && nums1[left] === nums2[right]){
            ansIndex.push(nums1[left])
            left++
        } else {
            break;
        }
    }
    return Array.isArray(index) ? ((ansIndex[index[0]] + ansIndex[index[1]]) / 2).toFixed(5) : ansIndex[index].toFixed(5);
::::

@tab main.java java
::::java
#FileName: HelloWorld.java  
public class HelloWorld   #如果有 public 类的话，类名必须和文件同名，注意大小写  
{  
  #Java 入口程序，程序从此入口  
  public static void main(String[] args)  
  {  
  #向控制台打印一条语句  
    System.out.println("Hello,World!");  
  }  
}
::::
@tab main.py python
::::py
import os
import subprocess


\# 只提取html和js文件
def is_file(file_path):
    ext = os.path.splitext(file_path)[1]
    if ext.lower() == ".html" or ext.lower() == ".js":
        return True
    else:
        return False

def remove_duplicates(text):
    """
    使用set去重
    """
    chars = set(text)
    return ''.join(chars)

\# 最后得到的字符集
results = ''

def recursive_walk(directory):
    global results
    \# 遍历_site文件夹下的js和html文件
    for root, dirs, files in os.walk(directory):
        for file in files:
            if is_file(file):
                with open(os.path.join(root, file),'r', encoding="utf-8") as f :
                    \# 读取文件
                    content = f.read()
                    \# 文件字符去重
                    texts = remove_duplicates(content)
                    \# 拼接起来
                    results += texts
    \# 上面的去重是每个文件去重一次，这次是所有的文件字符合起来再去重，然后按照字符编码排序
    results = ''.join(sorted(remove_duplicates(results)))
    \# 将字符写入txt
    with open(r"./updatefont/font.txt", 'a+', encoding="utf-8") as f: 
        \# 清空txt
        f.seek(0)
        f.truncate()
        \# 写入txt
        f.write(results)
    print(results)  
    \# 使用js的Fontmin处理这些字符生成压缩过的字体文件，并上传COS
    subprocess.run(["node", "./updatefont/update_font.js"])
\# 使用函数遍历指定目录
recursive_walk('./_site')
::::
{% endraw %}
</div>

### 又一个例子

<div class="code-group" markdown="1">
@tab yarn yarn
::::sh
yarn add react
::::
@tab pnpm pnpm
::::sh
pnpm i react
::::
@tab npm npm
::::sh
npm i react
::::
</div>
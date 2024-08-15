---
title: 我的黑苹果主机配置文件
author: rainsin
date: 2023-04-12 14:32:10 +0800
categories: [黑苹果, EFI]
tags: [黑苹果, Opencore, EFI, Windows, Linux, FydeOS]
pin: true
math: true
react: false
mermaid: true
video: false
music: false
mathpolt: false
jquery: false
image:
  path: https://photo.rainsin.cn:2000/LightPicture/2023/06/769d43944dd722fc.png
  alt: 黑苹果.
---

随着今年的苹果开发者大会的结束，苹果对Intel的CPU支持到明年可能会结束，现在的MacOS Snonma也许是最后一个支持Intel的版本，后半年更新到MacOS Snonma就养老了。Mac主要写代码，Windows玩或者Mac用腻了用一下，我一直用Windows的Linux子系统，可以装好多个不同的发行版，我装了Debian和Arch，可以安装一些测试环境和集群。

> 如何使用Opencore引导MacOS、Windows11、Linux三个系统，请看这篇[文章](https://blog.rainsin.cn/posts/more-system-opencore/)。
{: .prompt-warning }

## 配置

| 项目   | 名称        |
|:----------|:--------------------:|
| 处理器 | Intel Core I5-9600KF |
| 主板   | 微星 Z390M-S01 |
| 显卡 | 蓝宝石 RX570 4G |
| 内存 | 芝奇幻光戟 3600C18 16G✖️2 |
| Mac主硬盘 | 致钛 TiPlus5000 500G |
| Mac副硬盘 | 日立 1T |
| Win硬盘 | 三星 970EVO PLUS 500G |
| OpenKylin硬盘 | 英睿达 MX1000-1T |
| Deepin硬盘 | 英睿达 MX500-500G |
| 声卡 | 螃蟹 ALC892 Codec |
| 无线模块 | Intel AX200 |
| 网卡 | 螃蟹 8111H |
| 机箱 | 小喆C2P白色 |
| 电源 | TT SFX钢影450W |
| 屏幕 | 熊猫 2k 75Hz |

> 主板、CPU、显卡这些虽然已经有点过时，但是应付日常使用没有问题，买的时候看看E类PCIE口是否支持NGFF。
{: .prompt-warning }

## 引导
- Opencore 0.9.3

> 如果你只有一个Mac系统，可以禁用以下三项：
![fd07441c5fcc17a5.png](https://photo.rainsin.cn:2000/LightPicture/2023/07/fd07441c5fcc17a5.png)
{: .prompt-warning }

## 系统

- Snonma 14.2.1
- Windows 11
- 统信

## 正常的功能

- CPU
- 显卡
- 声卡
- USB
- 有线网卡
- 变频
- 睡眠
- 休眠
- Wifi

> 确实是我买的网卡是坏的，博通的网卡被炒的太高了，后面又换了AX200模块，使用的PCI-E短口，蓝牙还是不行，速度，其他系统都正常。
{: .prompt-warning }

> 自己自行注入三码，三码重复会封你的Apple号，怎么注入Google搜一下就有。
{: .prompt-danger }

## 文件

[EFI-蓝奏云](https://2000python.lanzoum.com/iA7Z011mpjba)

[EFI-Zfile](https://pan.rainsin.cn:2000/s/tel67c)

## 效果
### 引导

![26021616](https://photo.rainsin.cn:2000/LightPicture/2023/07/e4ff45bf0086f1ab.png)

![26021622](https://photo.rainsin.cn:2000/LightPicture/2023/07/58ab4a731c3fb6b8.png)



  

​		

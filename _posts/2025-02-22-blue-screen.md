---
title: 「解决问题」记一次绿屏
date: 2025-02-21 12:00:00 +0800
categories: [解决问题]
tags: [解决问题]
pin: false
math: true
mermaid: false
react: false
video: false
music: false
mathpolt: false
jquery: false
forbid: true
comments: true

favicon: code
pangu: true

post: true
keywords: rainsin, blog, 解决问题
author: rainsin
---

## 问题

### 如何出现

加了一片显卡后，运行高负载的任务时卡死，出现绿屏，代码：`Clock WatchGog TimeOut`。

几天前我在闲鱼上淘了一张 Intel 的 A770，峰值功耗 $ 210W $，由于我的是Matx机箱（小喆C2P），当时买电源时并没有想以后要升级的问题，所以买了 $ 450W $ 的电源（TT 钢影 SFX 450W）。

昨天，我把CPU的超频到了 $ 5.0 $ ，在使用 FFmpeg 运行 AV1 编码任务或者用 Ollama 运行 R1 时，会出现这个问题。

### 排查

驱动都是最新的，CPU不超频并且只留一个显卡，问题不会发生。

### 原因

我现在主机的峰值功耗为

$$
100W (9600KF) + 150W (RX 570) + 210W (Intel ARC A770) = 460W > 450W 
$$

再加上一些其他功耗，现在这个电源完全不够用，由于功率不够，供电质量降低，电压下降，导致CPU无法正常工作，然后绿屏。

### 解决

换个更高型号的电源，如海盗船 SF750 或 SF850。

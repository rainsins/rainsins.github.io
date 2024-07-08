---
title: 常用不等式小整理
author: rainsin
date: 2023-04-08 14:33:00 +0800
categories: [考研, 数学]
tags: [数列极限, 不等式]
pin: true
math: true
mermaid: true
react: true
video: false
music: false
mathpolt: true
jquery: true

permalink: /src/math/
---

# 常用不等式

| 不等式 | 等号成立条件 | 备注 | 图形 |
| :------: | :------------ | ---- | ---- |
| $\frac{a+b}{2} \leqslant \sqrt{ab} $ |  $a=b$  |  $a,b\in R$ ，基本不等式   | <div id="root1"></div> |
| $ a^{2}+b^{2} \geqslant 2ab$  | $a=b$ | $a,b\in R$ | <div id="root2"></div> |
| $\frac{a}{b} +\frac{b}{a} \geqslant 2 $ | $a=b$ |   $ab>0$ ，a和b同号  | |
| $\left( a+b\right)^{2}  \geqslant 4ab$ | $a=b$ | $a,b\in R$ | |

<table>
    <caption style="text-align: center"><b>常用不等式</b></caption>
	<tr>
	    <th style="text-align: center">不等式</th>
	    <th>\n 等号成立条件</th>
	    <th>\n 备注</th> 
        <th>\n 图形</th> 
	</tr>
	<tr>
	    <td> $\frac{a+b}{2} \leqslant \sqrt{ab} $</td>
	    <td> $a=b$ </td>
	    <td> $a,b\in R$ ，基本不等式 </td>
        <td> <div class="polt_box_ui"> <div id="root1"></div></div> </td>
	</tr>
	<tr>
	    <td> $ a^{2}+b^{2} \geqslant 2ab$</td>
	    <td> $a=b$ </td>
	    <td> $a,b\in R$ </td>
        <td> <div class="polt_box_ui"> <div id="root2"></div></div> </td>
	</tr>
	<tr>
	    <td> $\frac{a}{b} +\frac{b}{a} \geqslant 2 $</td>
	    <td> $a=b$ </td>
	    <td> $ab>0$ ，a和b同号 </td>
        <td> <div id="root3"></div> </td>
	</tr>
	<tr>
	    <td> $\left( a+b\right)^{2}  \geqslant 4ab$</td>
	    <td> $a=b$ </td>
	    <td> $a,b\in R$ </td>
        <td> <div id="root4"></div> </td>
	</tr>

</table>

<script src="inequality.js"></script>

<style>
.polt_box_ui{
    box-shadow: 0 1px 2px 0 rgba(34, 36, 38, .15);
    margin: 1rem 0;
    border-radius: .2857rem;
    border:1px solid rgba(34, 36, 38, .15);
    width: 300px;
}
</style>
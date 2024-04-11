---
title: 使用Opencore引导多个系统
author: rainsin
date: 2023-07-02 12:23:00 +0800
categories: [黑苹果, EFI]
tags: [黑苹果, EFI, Openkylin, Deepin, Ubuntu, Debian, Windows10, Windows11, MacOS, Linux]
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
favicon: heart

post: true
description: 使用Opencore引导多个系统
keywords: rainsin, blog, 黑苹果, 解决问题
author: rainsin
---

## 前提

Mac可以正常引导，其他系统都已经安装好了（本文使用UEFI+GPT引导，传统的方式需要自己查找资料）。

## 步骤

1. 在OpenCore中安装`OpenShell.efi`工具。
    
    下载[OpenShell.efi](https://github.com/acidanthera/OpenCorePkg/releases)在`/EFI/OC/tool`路径下，一般OC自带这个文件不用单独下。

    在OC中进行如下设置:
    ![64b6e88bf1e87da3.png](https://photo.rainsin.cn:2000/LightPicture/2023/07/64b6e88bf1e87da3.png)
    重启。
2. 如果你的OC隐藏了辅助条目，则在开机引导界面看不到`UEFI Shell`项，按空格键就会显示出来，之后选择`UEFI Shell`项回车进入。

    ![1a1a7d4a24411a42.jpg](https://photo.rainsin.cn:2000/LightPicture/2023/07/1a1a7d4a24411a42.jpg)
3. 找到所有的要引导的系统的EFI文件分区

    FS1:,FS2:,…FS12：是连接到系统的所有硬盘设备的分区，你必须确定哪个是Windows分区，哪个是Mac分区，哪个是Linux分区：

    `ls`或`dir`命令查看文件目录，`cd /路径`进入文件目录。熟悉Linux的这些命令都很熟悉，用这些命令找根目录长下面这样的FS：

    ![b5c77c7a02cb49c1.png](https://photo.rainsin.cn:2000/LightPicture/2023/07/b5c77c7a02cb49c1.png)

    键入`cd EFI`，看文件目录，如果有Microsoft文件夹就是windows的EFI分区，如果有Deepin文件夹就是Linux/deepin的EFI分区，记住这些分区对应的`FS{n}`。

    进入你知道的那个EFI分区，比如FS2是windows的EFI分区对应的文件系统，你就可以进入这个分区`FS2:`，输入`map > fast.txt`，这个分区根目录就会保存一个fast.txt的文本文件，里面保存着路径信息，当然你也可以选择其它你知道的分区。

    我以我的为例：
    经过上述步骤我知道我的FS0是OC的分区，FS2是Windows的分区，FS4是Deepin的分区，FS6是OpenKylin的分区，我的分区信息文件保存在windows的EFI分区下，通过OCC工具挂载EFI分区，找到这个文件，记住相应的路径：

    ![a74ee0723f2855c6.png](https://photo.rainsin.cn:2000/LightPicture/2023/07/a74ee0723f2855c6.png)
4. 在OC中设置
    
    在`Misc->Boot->Entries`中添加条目，`Path`项就是我们上面得到的那些设备路径再加上具体的EFI文件路径，比如下面这个是我们找到的Windows的设备路径：
    ```
    PciRoot(0x0)/Pci(0x17,0x0)/Sata(0x1,0xFFFF,0x0)/HD(1,GPT,1EFB24B9-9F07-4C77-8B75-B7D467010F2C,0x800,0x96000) 
    ```
    则Path为

    ```
    PciRoot(0x0)/Pci(0x1B,0x0)/Pci(0x0,0x0)/NVMe(0x1,EA-AE-B4-91-56-38-25-00)/HD(1,GPT,A64D3A6A-2333-4107-AAA2-6EFD5A06180E,0x800,0x96000) /\EFI\Microsoft\Boot\bootmgfw.efi
    ```
    前面的设备路径和后面的文件路径中间有一个空格，如果是Linux，后面的文件路径是

    ```
    /\EFI\{Linux发行版名称}\grubx64.efi 
    ```
    比如我用的是Deepin则文件路径为 `/\EFI\deepin\grubx64.efi`。

    我的设置：

    ![e934fcd4daafd983.png](https://photo.rainsin.cn:2000/LightPicture/2023/07/e934fcd4daafd983.png)
5. 一些小设置
    - 如果你想自定义你的引导项标题比如下面这样：

        ![22](https://photo.rainsin.cn:2000/LightPicture/2023/07/5636be4a142f8386.png)

        可以到对应的EFI目录下更改`.contentDetails`文件

    - 如果开机蓝屏，可能你的路径不对，或者在OC中打开下面的项目，我也忘了是具体哪一个生效的，都试试吧

        `Kernel`中的设置：

        ![a7b3c3625204762f.png](https://photo.rainsin.cn:2000/LightPicture/2023/07/a7b3c3625204762f.png)

        `Booter`中的设置：

        ![0f986ea733d585b1.png](https://photo.rainsin.cn:2000/LightPicture/2023/07/0f986ea733d585b1.png)

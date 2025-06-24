/**
 * 代码组标签页交互功能
 */
class CodeTabs {
  constructor() {
    this.init();
  }

  init() {
    // 等待DOM加载完成
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupTabs());
    } else {
      this.setupTabs();
    }
  }

  setupTabs() {
    // 为所有代码组设置事件监听
    const tabGroups = document.querySelectorAll('.code-tabs');
    
    tabGroups.forEach(group => {
      this.initTabGroup(group);
    });

    // 监听键盘导航
    this.setupKeyboardNavigation();
    
    // 监听窗口resize事件，优化移动端体验
    this.setupResponsiveHandling();
  }

  initTabGroup(tabGroup) {
    const buttons = tabGroup.querySelectorAll('.code-tab-button');
    const panels = tabGroup.querySelectorAll('.code-tab-panel');
    const groupId = tabGroup.getAttribute('data-tab-group');

    // 为每个按钮添加点击事件
    buttons.forEach((button, index) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchTab(tabGroup, index);
      });

      // 添加键盘支持
      button.addEventListener('keydown', (e) => {
        this.handleKeyNavigation(e, tabGroup, index);
      });
    });

    // 恢复之前的选择状态（如果有的话）
    this.restoreTabState(tabGroup, groupId);
  }

  switchTab(tabGroup, activeIndex) {
    const buttons = tabGroup.querySelectorAll('.code-tab-button');
    const panels = tabGroup.querySelectorAll('.code-tab-panel');
    const groupId = tabGroup.getAttribute('data-tab-group');

    // 移除所有活动状态
    buttons.forEach(btn => btn.classList.remove('active'));
    panels.forEach(panel => panel.classList.remove('active'));

    // 添加新的活动状态
    if (buttons[activeIndex] && panels[activeIndex]) {
      buttons[activeIndex].classList.add('active');
      panels[activeIndex].classList.add('active');

      // 确保活动标签页在视口中可见
      this.scrollTabIntoView(buttons[activeIndex]);

      // 保存状态到localStorage
      this.saveTabState(groupId, activeIndex);

      // 触发自定义事件
      this.dispatchTabChangeEvent(tabGroup, activeIndex);

      // 添加动画效果
      this.animateTabSwitch(panels[activeIndex]);
    }
  }

  handleKeyNavigation(event, tabGroup, currentIndex) {
    const buttons = tabGroup.querySelectorAll('.code-tab-button');
    let newIndex = currentIndex;

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        newIndex = currentIndex > 0 ? currentIndex - 1 : buttons.length - 1;
        break;
      case 'ArrowRight':
        event.preventDefault();
        newIndex = currentIndex < buttons.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = buttons.length - 1;
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.switchTab(tabGroup, currentIndex);
        return;
      default:
        return;
    }

    // 聚焦到新的标签页并激活
    buttons[newIndex].focus();
    this.switchTab(tabGroup, newIndex);
  }

  scrollTabIntoView(button) {
    const nav = button.closest('.code-tabs-nav');
    const buttonRect = button.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    // 检查按钮是否在可视区域内
    if (buttonRect.left < navRect.left || buttonRect.right > navRect.right) {
      button.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }

  saveTabState(groupId, activeIndex) {
    try {
      const key = `code-tabs-${groupId}`;
      localStorage.setItem(key, activeIndex.toString());
    } catch (e) {
      // localStorage可能不可用，静默忽略
    }
  }

  restoreTabState(tabGroup, groupId) {
    try {
      const key = `code-tabs-${groupId}`;
      const savedIndex = localStorage.getItem(key);
      
      if (savedIndex !== null) {
        const index = parseInt(savedIndex, 10);
        const buttons = tabGroup.querySelectorAll('.code-tab-button');
        
        if (index >= 0 && index < buttons.length) {
          this.switchTab(tabGroup, index);
        }
      }
    } catch (e) {
      // localStorage可能不可用，静默忽略
    }
  }

  dispatchTabChangeEvent(tabGroup, activeIndex) {
    const event = new CustomEvent('codeTabChanged', {
      detail: {
        tabGroup,
        activeIndex,
        groupId: tabGroup.getAttribute('data-tab-group')
      },
      bubbles: true
    });
    
    tabGroup.dispatchEvent(event);
  }

  animateTabSwitch(panel) {
    // 添加淡入动画
    panel.style.opacity = '0';
    panel.style.transform = 'translateY(10px)';
    
    // 强制重绘
    panel.offsetHeight;
    
    // 应用过渡效果
    panel.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    panel.style.opacity = '1';
    panel.style.transform = 'translateY(0)';
    
    // 清理样式
    setTimeout(() => {
      panel.style.transition = '';
      panel.style.transform = '';
    }, 200);
  }

  setupKeyboardNavigation() {
    // 全局键盘快捷键
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + Shift + Tab切换组
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'Tab') {
        e.preventDefault();
        this.switchToNextTabGroup();
      }
    });
  }

  switchToNextTabGroup() {
    const tabGroups = Array.from(document.querySelectorAll('.code-tabs'));
    const currentFocus = document.activeElement;
    
    // 找到当前聚焦的标签组
    let currentGroupIndex = -1;
    for (let i = 0; i < tabGroups.length; i++) {
      if (tabGroups[i].contains(currentFocus)) {
        currentGroupIndex = i;
        break;
      }
    }
    
    // 切换到下一个组
    const nextGroupIndex = (currentGroupIndex + 1) % tabGroups.length;
    const nextGroup = tabGroups[nextGroupIndex];
    const firstButton = nextGroup.querySelector('.code-tab-button.active') || 
                       nextGroup.querySelector('.code-tab-button');
    
    if (firstButton) {
      firstButton.focus();
    }
  }

  setupResponsiveHandling() {
    let resizeTimer;
    
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.handleResize();
      }, 150);
    });
  }

  handleResize() {
    // 重新检查所有活动标签页的可见性
    const activeButtons = document.querySelectorAll('.code-tab-button.active');
    
    activeButtons.forEach(button => {
      this.scrollTabIntoView(button);
    });
  }

  // 公共API方法
  static getInstance() {
    if (!CodeTabs.instance) {
      CodeTabs.instance = new CodeTabs();
    }
    return CodeTabs.instance;
  }

  // 程序化切换标签页
  switchToTab(groupId, tabIndex) {
    const tabGroup = document.querySelector(`[data-tab-group="${groupId}"]`);
    if (tabGroup) {
      this.switchTab(tabGroup, tabIndex);
    }
  }

  // 获取当前活动标签页
  getActiveTab(groupId) {
    const tabGroup = document.querySelector(`[data-tab-group="${groupId}"]`);
    if (tabGroup) {
      const activeButton = tabGroup.querySelector('.code-tab-button.active');
      const activeIndex = Array.from(tabGroup.querySelectorAll('.code-tab-button')).indexOf(activeButton);
      return activeIndex;
    }
    return -1;
  }
}

// 自动初始化
if (typeof window !== 'undefined') {
  // 创建全局实例
  window.CodeTabs = CodeTabs.getInstance();
  
  // 支持AMD/CommonJS
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = CodeTabs;
  } else if (typeof define === 'function' && define.amd) {
    define('CodeTabs', [], function() {
      return CodeTabs;
    });
  }
}
require 'digest'

module Jekyll
  class CodeTabsBlock < Liquid::Block
    def initialize(tag_name, markup, tokens)
      super
      @tabs = []
      @active_tab = 0
    end

    def render(context)
      content = super
      
      # 生成唯一ID
      tab_id = Digest::MD5.hexdigest(content)[0..7]
      
      # 解析内容
      parse_tabs(content)
      
      # 生成HTML
      generate_html(tab_id)
    end

    private

    def parse_tabs(content)
      current_tab = nil
      lines = content.strip.split("\n")
      
      lines.each do |line|
        if line.match(/^@tab\s+(.+)/)
          # 保存之前的tab
          @tabs << current_tab if current_tab
          
          # 开始新的tab
          tab_name = $1.strip
          current_tab = {
            name: tab_name,
            language: detect_language(tab_name),
            content: []
          }
        elsif current_tab
          current_tab[:content] << line
        end
      end
      
      # 添加最后一个tab
      @tabs << current_tab if current_tab
      
      # 清理内容
      @tabs.each do |tab|
        # 移除开头和结尾的空行
        tab[:content] = tab[:content].drop_while(&:empty?)
        tab[:content] = tab[:content].reverse.drop_while(&:empty?).reverse
        
        # 移除代码块标记
        if tab[:content].first&.match(/^```/)
          tab[:content].shift
        end
        if tab[:content].last&.match(/^```/)
          tab[:content].pop
        end
        
        tab[:content] = tab[:content].join("\n")
      end
    end

    def detect_language(tab_name)
      # 语言映射表
      language_map = {
        'pnpm' => 'bash',
        'npm' => 'bash', 
        'yarn' => 'bash',
        'javascript' => 'javascript',
        'js' => 'javascript',
        'typescript' => 'typescript',
        'ts' => 'typescript',
        'python' => 'python',
        'py' => 'python',
        'ruby' => 'ruby',
        'rb' => 'ruby',
        'go' => 'go',
        'rust' => 'rust',
        'rs' => 'rust',
        'java' => 'java',
        'php' => 'php',
        'c++' => 'cpp',
        'cpp' => 'cpp',
        'c' => 'c',
        'html' => 'html',
        'css' => 'css',
        'scss' => 'scss',
        'sass' => 'sass',
        'json' => 'json',
        'xml' => 'xml',
        'yaml' => 'yaml',
        'yml' => 'yaml',
        'shell' => 'bash',
        'bash' => 'bash',
        'sh' => 'bash',
        'powershell' => 'powershell',
        'ps1' => 'powershell'
      }
      
      # 检查完全匹配
      return language_map[tab_name.downcase] if language_map[tab_name.downcase]
      
      # 检查部分匹配
      language_map.each do |key, value|
        return value if tab_name.downcase.include?(key)
      end
      
      # 默认返回text
      'text'
    end

    def get_icon(language)
      # 图标映射表 (使用Iconify图标)
      icon_map = {
        'bash' => 'devicon:bash',
        'javascript' => 'logos:javascript',
        'typescript' => 'logos:typescript-icon',
        'python' => 'logos:python',
        'ruby' => 'logos:ruby',
        'go' => 'logos:go',
        'rust' => 'logos:rust',
        'java' => 'logos:java',
        'php' => 'logos:php',
        'cpp' => 'logos:cplusplus',
        'c' => 'logos:c',
        'html' => 'logos:html-5',
        'css' => 'logos:css-3',
        'scss' => 'logos:sass',
        'sass' => 'logos:sass',
        'json' => 'logos:json',
        'xml' => 'simple-icons:xml',
        'yaml' => 'simple-icons:yaml',
        'powershell' => 'logos:powershell',
        'text' => 'material-symbols:code'
      }
      
      # 包管理器特殊处理
      if ['pnpm', 'npm', 'yarn'].include?(@tabs.find { |tab| tab[:name].downcase == 'pnpm' }&.dig(:name)&.downcase)
        case language
        when 'pnpm'
          return 'logos:pnpm'
        when 'npm' 
          return 'logos:npm-icon'
        when 'yarn'
          return 'logos:yarn'
        end
      end
      
      icon_map[language] || 'material-symbols:code'
    end

    def generate_html(tab_id)
      html = []
      
      # 容器开始
      html << '<div class="code-tabs" data-tab-group="' + tab_id + '">'
      
      # 标签页头部
      html << '  <div class="code-tabs-nav">'
      @tabs.each_with_index do |tab, index|
        active_class = index == @active_tab ? ' active' : ''
        icon = get_icon(tab[:language])
        
        html << '    <button class="code-tab-button' + active_class + '" '
        html << 'data-tab="' + index.to_s + '" '
        html << 'data-tab-group="' + tab_id + '">'
        html << '      <iconify-icon icon="' + icon + '"></iconify-icon>'
        html << '      <span>' + tab[:name] + '</span>'
        html << '    </button>'
      end
      html << '  </div>'
      
      # 标签页内容
      html << '  <div class="code-tabs-content">'
      @tabs.each_with_index do |tab, index|
        active_class = index == @active_tab ? ' active' : ''
        
        html << '    <div class="code-tab-panel' + active_class + '" '
        html << 'data-tab="' + index.to_s + '" '
        html << 'data-tab-group="' + tab_id + '">'
        
        # 使用Jekyll的语法高亮
        highlighted_code = Kramdown::Document.new("```#{tab[:language]}\n#{tab[:content]}\n```", 
                                                 input: 'GFM', 
                                                 syntax_highlighter: 'rouge').to_html
        
        html << highlighted_code
        html << '    </div>'
      end
      html << '  </div>'
      
      # 容器结束
      html << '</div>'
      
      html.join("\n")
    end
  end
end

Liquid::Template.register_tag('code_tabs', Jekyll::CodeTabsBlock)
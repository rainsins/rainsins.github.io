require 'ruby-pinyin'

module Heti

    def tr_heti(html)
        heti(html)
        html
    end

	private

    def heti(html)
        html =~ 
    end
end 

Liquid::Template.register_filter(Heti)
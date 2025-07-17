# frozen_string_literal: true

#source "https://mirrors.tuna.tsinghua.edu.cn/rubygems/"
source "https://rubygems.org"

if RUBY_VERSION =~ /1.9/
  Encoding.default_external = Encoding::UTF_8
  Encoding.default_internal = Encoding::UTF_8
end

gemspec

# Only include html-proofer in development, not in production
group :development, :test do
  gem "html-proofer"
end

# Windows and JRuby specific gems
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
gem "wdm", "~> 0.1.1", platforms: [:mingw, :mswin, :x64_mingw]
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]

group :jekyll_plugins do
  gem 'jekyll-brotli'
end
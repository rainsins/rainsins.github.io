# frozen_string_literal: true

#source "https://mirrors.tuna.tsinghua.edu.cn/rubygems/"
source "https://rubygems.org"

if RUBY_VERSION =~ /1.9/
  Encoding.default_external = Encoding::UTF_8
  Encoding.default_internal = Encoding::UTF_8
end

gem "jekyll", "~> 4.3"

group :jekyll_plugins do
  gem "jekyll-paginate"
  gem "jekyll-redirect-from"
  gem "jekyll-seo-tag"
  gem "jekyll-archives"
  gem "jekyll-sitemap"
end

# Only include html-proofer in development, not in production
group :development, :test do
  gem "html-proofer"
end

# Windows and JRuby specific gems
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem "wdm", "~> 0.1.1", platforms: [:mingw, :mswin, :x64_mingw]
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]

group :jekyll_plugins do
  gem 'jekyll-brotli'
end
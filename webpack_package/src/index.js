import { codeToHtml } from 'shiki';

const ss = async (code, lang) => {
  return await codeToHtml(code, {
    lang: lang,
    theme: 'one-dark-pro'
  })
}

window.code_to_html = ss;
import{_ as e,c as i,o,a1 as l}from"./chunks/framework.yskgK-vV.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Memo/02.VsCode使用.md","filePath":"Memo/02.VsCode使用.md"}'),d={name:"Memo/02.VsCode使用.md"},a=l('<h2 id="vscode" tabindex="-1">VsCode <a class="header-anchor" href="#vscode" aria-label="Permalink to &quot;VsCode&quot;">​</a></h2><blockquote><p>TODO：这里需要重新整理，<code>VsCode</code>迭代好多版了</p></blockquote><h3 id="_01-vscode中无法使用的问题" tabindex="-1">01. <code>VsCode</code>中无法使用的问题 <a class="header-anchor" href="#_01-vscode中无法使用的问题" aria-label="Permalink to &quot;01. `VsCode`中无法使用的问题&quot;">​</a></h3><ul><li><p>以管理员身份运行<code>VsCode</code>，然后在终端中执行</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set-ExecutionPolicy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> RemoteSigned</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>如果继续报错，则</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Set-ExecutionPolicy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> RemoteSigned</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Scope</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Process</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul><hr><h3 id="_02-插件整理" tabindex="-1">02. 插件整理 <a class="header-anchor" href="#_02-插件整理" aria-label="Permalink to &quot;02. 插件整理&quot;">​</a></h3><blockquote><p>这是很久之前整理的，现在很多插件可能都有代替的，或者官方已经实现了的</p><p>后续再整理，这里先这样</p></blockquote><h4 id="_1-普通插件" tabindex="-1">（1）普通插件 <a class="header-anchor" href="#_1-普通插件" aria-label="Permalink to &quot;（1）普通插件&quot;">​</a></h4><ul><li><p><code>Chinese (Simplified) Language Pack</code>：中文语言包</p></li><li><p><code>open in browser</code>：在浏览器打开</p></li><li><p><code>Live Server </code>：以本地服务启动</p></li><li><p><code>Image preview</code>：预览图像</p></li><li><p><code>Local History</code>：记录本地文件修改历史版本</p></li><li><p><s><code>Auto Rename Tag</code>：当修改标签时，可以自动重命名开始标签/结束标签</s></p></li><li><p><s><code>Auto Close Tag</code>：自动闭合标签</s></p></li><li><p><code>Code Spell Checker</code>：驼峰大小写拼写检查</p></li><li><p><code>wakaTime</code>：记录编码量</p></li><li><p><code>Todo Tree</code>：在侧边栏添加 Todo Tree，方便快速找到代码中的 TODO，件可以高亮显示 TODO</p></li><li><p><code>GitLens-Git supercharged</code>：拓展 Git 信息显示，可以显示当前代码的提交者、修改者、提交时间等等</p></li><li><p><code>gitflow</code>：方便、快速的使用 gitflow 来管理你的代码分支</p></li><li><p><code>git history</code>：</p></li><li><p><code>CSS Peek</code>：快速查看/跳转 CSS 样式，似乎只有外部 CSS 文件才行</p></li><li><p><code>Dracula Official</code></p></li><li><p><code>VSCode Great Icons</code></p></li><li><p><code>Indent-Rainbow</code>：用颜色标识你的代码块缩进，可以很清晰的识别你的代码块</p></li><li><p><code>Bracket Pair Colorizer 2</code>：为前后匹配的括号添加相同的颜色进行突出显示</p></li><li><p><code>ESLint</code></p></li><li><p><code>Prettier</code></p></li><li><p><code>别名路径跳转</code></p></li><li><p><code>vetur</code></p></li><li><p><code>vue 3 Snippets</code></p></li><li><p><code>vue-helper</code></p></li><li><p><code>Vue peek</code></p></li><li><p><code>vue-definition</code></p></li><li><p><code>Vetur</code>——语法高亮、智能感知、Emmet</p></li><li><p><code>ESLint</code>——语法检查</p></li><li><p><code>Prettier</code>——代码格式化</p></li><li><p><code>minapp</code></p></li><li><p><code>VSCode wxml</code></p></li><li><p><code>wechat0snippet</code></p></li></ul><hr><h4 id="保留" tabindex="-1">保留 <a class="header-anchor" href="#保留" aria-label="Permalink to &quot;保留&quot;">​</a></h4><ul><li><p>Add jsdoc comments</p></li><li><p>At Template Helper</p></li><li><p>别名路径跳转</p></li></ul>',12),p=[a];function s(c,t,n,r,h,u){return o(),i("div",null,p)}const _=e(d,[["render",s]]);export{k as __pageData,_ as default};

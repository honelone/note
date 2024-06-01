import{_ as s,c as i,o as a,a1 as n}from"./chunks/framework.yskgK-vV.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Packages/Git/04.拓展.md","filePath":"Packages/Git/04.拓展.md"}'),l={name:"Packages/Git/04.拓展.md"},e=n(`<h2 id="git-拓展" tabindex="-1">Git 拓展 <a class="header-anchor" href="#git-拓展" aria-label="Permalink to &quot;Git 拓展&quot;">​</a></h2><h3 id="_01-gitee和github" tabindex="-1">01. <code>gitee</code>和<code>github</code> <a class="header-anchor" href="#_01-gitee和github" aria-label="Permalink to &quot;01. \`gitee\`和\`github\`&quot;">​</a></h3><h4 id="_1-普通方法-手动同步" tabindex="-1">（1）普通方法，手动同步 <a class="header-anchor" href="#_1-普通方法-手动同步" aria-label="Permalink to &quot;（1）普通方法，手动同步&quot;">​</a></h4><ul><li><p>将<code>gitee</code>仓库同步到<code>github</code></p><ul><li>首先，在<code>github</code>创建一个新仓库</li><li>然后，在创建仓库之后的页面里点击<code>import code</code>，进入导入页面</li><li>其次，复制<code>gitee</code>中需要导入的仓库的地址，并填入到导入页面中的输入框中</li><li>最后，点击<code>Begin import</code>，就可以将<code>gitee</code>仓库同步到<code>github</code></li></ul></li><li><p>需要创建一个用于将<code>github</code>同步到<code>gitee</code>的私人令牌<code>{GITEE_MIRROR}</code></p></li></ul><h4 id="_2-推送两个仓库" tabindex="-1">（2）推送两个仓库 <a class="header-anchor" href="#_2-推送两个仓库" aria-label="Permalink to &quot;（2）推送两个仓库&quot;">​</a></h4><ul><li><p>在项目里新建<code>.sh</code>文件，直接推送到两个仓库地址</p><ul><li>直接执行<code>sh deploy.sh</code>，就会自动推动到配置的两个仓库</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># deploy.sh</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成静态文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入生成的文件夹</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs/.vuepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;deploy&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">USERNAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">REP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">O</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master:gh-pages</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@gitee.com:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">USERNAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">REP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">O</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></li></ul><h4 id="_3-github-actions-自动同步" tabindex="-1">（3）<code>Github Actions</code> 自动同步 <a class="header-anchor" href="#_3-github-actions-自动同步" aria-label="Permalink to &quot;（3）\`Github Actions\` 自动同步&quot;">​</a></h4><ul><li><p>利用<code>Github Actions</code>，写一个工作流，由<code>github</code>在检测到当前仓库更新后，自动同步当前代码到<code>gitee</code>仓库</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">steps:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Mirror</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Github</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> organization</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> repos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Gitee.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  uses:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Yikun/hub-mirror-action@master</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  with:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    src:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github/kunpengcompute</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    dst:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gitee/kunpengcompute</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    dst_key:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${{ ... }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    dst_token:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${{ ... }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    account_type:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> org</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li><code>src</code>：表示需要被同步的源端账户名，即我们的<code>gihub</code>的账户名，如<code>github/&lt;USERNAME&gt;</code></li><li><code>dst</code>：表示需要同步到的目标端的账户名，即我们的<code>gitee</code>的账户名，如<code>gitee/&lt;USERNAME&gt;</code></li><li><code>dst_key</code>：表示目标端上传代码的私钥，需要将其保存在<code>github</code>的<code>Secrets</code>中</li><li><code>dst_token</code>：表示目标端用于创建仓库的<code>Token</code></li></ul></li><li><p>在项目根目录下新建目录<code>.github/workflows</code>，然后创建一个名为<code>syncToGitee.yml</code>的文件</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> syncToGitee</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  push:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    branches:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gh-pages</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">jobs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  repo-sync:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    runs-on:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    steps:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Mirror</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Github</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> organization</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> repos</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Gitee.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        uses:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Yikun/hub-mirror-action@master</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        with:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          src:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;github/&lt;USERNAME&gt;&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          dst:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;gitee/&lt;USERNAME&gt;&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          dst_key:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${{ secrets.GITEE_PRIVATE_KEY }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          dst_token:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  \${{ secrets.GITEE_TOKEN }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          static_list:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&lt;REPO&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          force_update:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">			    debug:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></li></ul><h4 id="_4-修改-git-的配置文件" tabindex="-1">（4）修改 <code>Git</code> 的配置文件 <a class="header-anchor" href="#_4-修改-git-的配置文件" aria-label="Permalink to &quot;（4）修改 \`Git\` 的配置文件&quot;">​</a></h4><ul><li><p>在项目根目录下哎进入<code>.git</code>文件夹，打开<code>config</code>文件进行修改</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[remote </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;origin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	## 在这里新增一个 url = github仓库地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 	url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">USERNAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">REP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">O</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@gitee.com:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">USERNAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">REP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">O</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	fetch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +refs/heads/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:refs/remotes/origin/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul><hr><h3 id="_02-git-的一些错误记录" tabindex="-1">02. git 的一些错误记录 <a class="header-anchor" href="#_02-git-的一些错误记录" aria-label="Permalink to &quot;02. git 的一些错误记录&quot;">​</a></h3><h4 id="port-443" tabindex="-1"><code>port 443</code> <a class="header-anchor" href="#port-443" aria-label="Permalink to &quot;\`port 443\`&quot;">​</a></h4><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Failed to connect to github.com port 443:connection timed out</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 先设置代理</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http.proxy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https.proxy</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 取消全局代理：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --unset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http.proxy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --unset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https.proxy</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="openssl-ssl-read" tabindex="-1"><code>OpenSSL SSL_read</code> <a class="header-anchor" href="#openssl-ssl-read" aria-label="Permalink to &quot;\`OpenSSL SSL_read\`&quot;">​</a></h4><h4 id="_10054" tabindex="-1">10054 <a class="header-anchor" href="#_10054" aria-label="Permalink to &quot;10054&quot;">​</a></h4><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## OpenSSL SSL_read: Connection was reset, errno 10054</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 解除SSL认证</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http.sslVerify</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;false&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="更新-dns-缓存" tabindex="-1">更新 DNS 缓存 <a class="header-anchor" href="#更新-dns-缓存" aria-label="Permalink to &quot;更新 DNS 缓存&quot;">​</a></h4><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 更新DNS缓存</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ipconfig</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /flushdns</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><h3 id="_03-代码校验报错造成的代码丢失的问题" tabindex="-1">03. 代码校验报错造成的代码丢失的问题 <a class="header-anchor" href="#_03-代码校验报错造成的代码丢失的问题" aria-label="Permalink to &quot;03. 代码校验报错造成的代码丢失的问题&quot;">​</a></h3><ul><li><p>原因：</p><ul><li>因为代码校验未通过，导致代码消失，啥都没有了</li></ul></li><li><p>解决办法：</p><ul><li><p><code>Git</code>把<code>stash</code>内容存在某个地方了，但是需要恢复一下，有两个办法：</p><ul><li><p><code>git stash apply</code> ，但是恢复后，<code>stash</code>内容并不会删除，还需要手动用<code>git stash drop</code>来删除；</p></li><li><p><code>git stash pop</code>，恢复的同时会把<code>stash</code>内容一起删了</p></li></ul></li><li><p>先使用<code>git stash list</code>显示，使用<code>git stash</code>无用</p></li><li><p>然后使用<code>git apply</code>或者<code>git pop</code></p></li></ul></li></ul><hr><h3 id="_04-批量修改历史提交人" tabindex="-1">04. 批量修改历史提交人 <a class="header-anchor" href="#_04-批量修改历史提交人" aria-label="Permalink to &quot;04. 批量修改历史提交人&quot;">​</a></h3><ul><li><p><code>OLD_EMAIL</code>为历史邮箱，无需<code>name</code>，用邮箱搜索内容</p></li><li><p><code>CORRECT_NAME</code>，<code>CORRECT_EMAIL</code>为希望修改后提交人和提交邮箱</p></li><li><p>执行完成用<code>git log</code>查看就变了</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filter-branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --env-filter</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">OLD_EMAIL=&quot;&lt;YOUR_OLD_EMAIL&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CORRECT_NAME=&quot;&lt;YOUR_NEW_NAME&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CORRECT_EMAIL=&quot;&lt;YOUR_NEW_EMAIL&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">if [ &quot;$GIT_COMMITTER_EMAIL&quot; = &quot;$OLD_EMAIL&quot; ]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">then</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    export GIT_COMMITTER_NAME=&quot;$CORRECT_NAME&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    export GIT_COMMITTER_EMAIL=&quot;$CORRECT_EMAIL&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fi</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">if [ &quot;$GIT_AUTHOR_EMAIL&quot; = &quot;$OLD_EMAIL&quot; ]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">then</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    export GIT_AUTHOR_NAME=&quot;$CORRECT_NAME&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    export GIT_AUTHOR_EMAIL=&quot;$CORRECT_EMAIL&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fi</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --tag-name-filter</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --branches</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --tags</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li>这个可以</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filter-branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --env-filter</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GIT_AUTHOR_NAME=&quot;&lt;YOUR_NEW_NAME&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GIT_AUTHOR_EMAIL=&quot;&lt;YOUR_NEW_EMAIL&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GIT_COMMITTER_NAME=&quot;$GIT_AUTHOR_NAME&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GIT_COMMITTER_EMAIL=&quot;$GIT_AUTHOR_EMAIL&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">export GIT_AUTHOR_NAME</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">export GIT_AUTHOR_EMAIL</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">export GIT_COMMITTER_NAME</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">export GIT_COMMITTER_EMAIL</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --all</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li></ul>`,25),p=[e];function t(h,k,r,d,F,c){return a(),i("div",null,p)}const b=s(l,[["render",t]]);export{o as __pageData,b as default};

import{_ as s,c as i,o as a,a3 as e}from"./chunks/framework.BkEKdGEG.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"created":"2023-08-20T00:00:00.000Z","updated":"2023-09-10T00:00:00.000Z"},"headers":[],"relativePath":"JavaScript/DOM+BOM/BOM.md","filePath":"JavaScript/DOM+BOM/BOM.md","lastUpdated":1716610678000}'),t={name:"JavaScript/DOM+BOM/BOM.md"},l=e(`<h2 id="bom" tabindex="-1">BOM <a class="header-anchor" href="#bom" aria-label="Permalink to &quot;BOM&quot;">​</a></h2><h3 id="_01-bom-概述" tabindex="-1">01. BOM 概述 <a class="header-anchor" href="#_01-bom-概述" aria-label="Permalink to &quot;01. BOM 概述&quot;">​</a></h3><ul><li><p>BOM（ Browser Object Model）即浏览器对象模型</p><ul><li>提供了独立于內容而与<strong>浏览器窗口</strong>进行<strong>交互</strong>的对象，其核心 BOM 由一系列相关的对象构成，每个对象都提供了方法与属性（3</li></ul></li><li><p>BOM 的顶级对象是 <strong><code>window</code></strong></p><ul><li>window 对象是浏览器的<strong>顶级对象</strong></li><li>是 JS 访问浏览器窗口的一个<strong>接口</strong></li><li>是一个<strong>全局对象</strong>：定义在<strong>全局作用域中</strong>的<strong>变量、函数</strong>都会变成<strong>window 对象的属性和方法</strong></li><li>在调用的时候<strong>可以省略</strong> window</li></ul></li></ul><h3 id="_02-bom-的一些事件" tabindex="-1">02. BOM 的一些事件 <a class="header-anchor" href="#_02-bom-的一些事件" aria-label="Permalink to &quot;02. BOM 的一些事件&quot;">​</a></h3><h4 id="_1-窗口加载事件" tabindex="-1">（1）窗口加载事件 <a class="header-anchor" href="#_1-窗口加载事件" aria-label="Permalink to &quot;（1）窗口加载事件&quot;">​</a></h4><ul><li><p><code>window.onload</code></p><ul><li><p>窗口加载事件，当文档内容<strong>完全加载完成后</strong>，才执行</p></li><li><p>用传统的注册事件方式，<strong>只能写一次</strong>，以最后一个为准</p></li><li><p>可以用<code>addEventListener</code>，添加多个</p></li><li><p>作用：可以让<code>JS</code>代码放在页面</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onload</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 当页面文档内容完全加载完成后，才执行这里的内容，只能有一个</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;load&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //可以写多个</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul></li><li><p><code>DOMContentLoaded</code></p><ul><li><p>该事件触发时，仅当<strong>DOM 加载完成</strong>，且不包括样式表、图片、Flash 等等</p></li><li><p>如果页面的图片很多的话，从用户访问到 <code>window.onload</code>触发，可能需要较长的时间，交互效果可能无法实现，此时用 <code>DOMContentloaded</code> 事件比较合适（大型网站）</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;DOMContentloaded&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // DOM加载完即执行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul></li><li><p><code>pageshow</code></p><ul><li>重新加载页面触发事件</li></ul></li></ul><h4 id="_2-调整窗口大小事件" tabindex="-1">（2）调整窗口大小事件 <a class="header-anchor" href="#_2-调整窗口大小事件" aria-label="Permalink to &quot;（2）调整窗口大小事件&quot;">​</a></h4><ul><li><p><code>resize</code></p><ul><li><p>当<strong>浏览器窗口</strong>发生变化时，就执行内部代码</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;resize&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul></li></ul><h3 id="_03-bom-的一些方法" tabindex="-1">03. BOM 的一些方法 <a class="header-anchor" href="#_03-bom-的一些方法" aria-label="Permalink to &quot;03. BOM 的一些方法&quot;">​</a></h3><h4 id="_1-定时器" tabindex="-1">（1） 定时器 <a class="header-anchor" href="#_1-定时器" aria-label="Permalink to &quot;（1） 定时器&quot;">​</a></h4><ul><li><p><code>setTimeout()</code></p><ul><li><p>设置一个定时器，该定时器在<strong>时间到之后</strong>，执行调用函数</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(调用函数，延时时间);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p><code>window</code> 可以省略</p><p>延时时间单位是毫秒，但是可以省略，省略默认是 0</p><p>这个调用函数可以直接写函数，或者写函数名，或者字符串形式 “函数名()”</p><p>页面中可能有很多的定时器，我们经常给定时器<strong>通过赋值设定标识符</strong> （名字)</p></blockquote></li><li><p>清除定时器</p><ul><li><code>window.clearTimeout(标识符)</code></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> timer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;我花了5s才显示！&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clearTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(timer);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr></li></ul></li><li><p><code>setInterval()</code></p><ul><li><p>设置一个定时器<strong>重复调用</strong>这一个函数，每<strong>隔一段时间</strong>，就调用一次回调函数</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setInterval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(回调函数，间隔时间);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p><code>window</code> 可以省略</p><p>延时时间单位是毫秒，但是可以省略，省略默认是 0</p><p>这个调用函数可以直接写函数，或者写函数名，或者字符串形式 ”函数名()“</p><p>可以给定时器<strong>赋值设置标识符</strong> （名字)</p></blockquote></li><li><p>停止定时器</p><ul><li><code>window.clearInterval(标识符)</code></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> timer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setInterval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;我每隔5s写一次！&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clearInterval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(timer);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr></li></ul></li><li><p><strong>回调函数</strong></p><ul><li><p>普通函数是按照代码顺序直接调用而这个函数</p></li><li><p>而定时器的函数，需要等待时间，时间到了才去调用这个函数，因此称为<strong>回调函数</strong></p></li><li><p>简单理解：回调，就是回头调用的意思，上一件事干完，再<strong>回头调用</strong>这个函数</p><blockquote><p>如：点击触发的事件函数，点击之后再调用这个函数；定时器，时间到后再调用这个函数</p></blockquote></li></ul></li></ul><h3 id="_04-bom-上的一些对象" tabindex="-1">04. BOM 上的一些对象 <a class="header-anchor" href="#_04-bom-上的一些对象" aria-label="Permalink to &quot;04. BOM 上的一些对象&quot;">​</a></h3><h4 id="_1-location对象" tabindex="-1">（1）<code>location</code>对象 <a class="header-anchor" href="#_1-location对象" aria-label="Permalink to &quot;（1）\`location\`对象&quot;">​</a></h4><ul><li><p>概念：window 对象提供了一个 <code>location</code>属性，用于获取或设置窗体的<code>URL</code>，并且可以用于<strong>解析 URL</strong></p></li><li><p>因为这个属性<strong>返回的是一个对象</strong>，所以我们将这个属性也称为 <strong><code>location对象</code></strong></p></li><li><p>关于<code>URL</code></p><ul><li><code>URL</code>：统一资源定位符，是互联网上标准资源的地址</li><li>互联网上的每个文件都有一个<strong>唯一的 URL</strong>，它包含的信息指出文件的位置以及浏览器应该怎么处理它</li></ul></li><li><p>语法结构</p><div class="language-url vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">url</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>protocol://host[:port]/path/[?query]#fragment http://www.itcast.cn/index.html?name=andy&amp;age=18#link</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>属性</p><table><thead><tr><th>location 对象属性</th><th>返回值</th></tr></thead><tbody><tr><td><code>location.href</code></td><td>获取或设置 URL</td></tr><tr><td><code>location.host</code></td><td>返回主机（域名）</td></tr><tr><td><code>location.port</code></td><td>返回端口号，没有则为空字符串</td></tr><tr><td><code>location.pathname</code></td><td>返回路径</td></tr><tr><td><code>location.search</code></td><td>返回参数，（？及后面的所有参数）</td></tr><tr><td><code>location.hash</code></td><td>返回片段，#后面的内容，常见于链接、锚点</td></tr></tbody></table><table><thead><tr><th>location 对象方法</th><th>返回值</th></tr></thead><tbody><tr><td><code>location.assign()</code></td><td>跳转页面，重定向页面，可以后退页面</td></tr><tr><td><code>location.replace()</code></td><td>替换当前页面，不能后退页面（不记录浏览历史）</td></tr><tr><td><code>location.reload()</code></td><td>重新加载页面，刷新页面，强制刷新——括号（true）</td></tr></tbody></table></li></ul><h4 id="_2-navigator对象" tabindex="-1">（2）<code>navigator</code>对象 <a class="header-anchor" href="#_2-navigator对象" aria-label="Permalink to &quot;（2）\`navigator\`对象&quot;">​</a></h4><ul><li>概念：<code>navigator</code>对象，获取有关浏览器的信息 <ul><li>如浏览器版本，浏览器类型（PC 端和移动端）</li></ul></li></ul><h4 id="_3-history对象" tabindex="-1">（3）<code>history</code>对象 <a class="header-anchor" href="#_3-history对象" aria-label="Permalink to &quot;（3）\`history\`对象&quot;">​</a></h4><ul><li>概念：window 对象给我们提供了—个 history 对象，与浏览器历史记录进行交互 <ul><li>该对象包含用户（在浏览器窗囗中）访问过的 URL。</li></ul></li><li>方法 <ul><li><code>back()</code>：后退</li><li><code>forward()</code>：前进</li><li><code>go(参数)</code>：前进后退 <ul><li>参数是 1，则前进 1 个页面</li><li>参数是-1，则后退 1 个页面</li></ul></li></ul></li></ul><h3 id="_05-bom-上的一些属性" tabindex="-1">05. BOM 上的一些属性 <a class="header-anchor" href="#_05-bom-上的一些属性" aria-label="Permalink to &quot;05. BOM 上的一些属性&quot;">​</a></h3><h4 id="_1-元素偏移量-——offset" tabindex="-1">（1） 元素偏移量 ——offset <a class="header-anchor" href="#_1-元素偏移量-——offset" aria-label="Permalink to &quot;（1） 元素偏移量 ——offset&quot;">​</a></h4><ul><li><p><code>offset</code>：偏移量，可以得到元素的<strong>位置（偏移）</strong>、大小</p><ul><li>获取元素相对于<strong>父元素</strong>的偏移量 <ul><li>【注意】父元素<strong>需要定位</strong>，如果没有定位，则找到<strong>有定位的祖先元素</strong>，直到<strong>body</strong></li></ul></li><li>获取元素自身的大小（宽高）</li><li><code>offset</code>偏移量返回的是<strong>数值</strong>，<strong>不带单位</strong></li></ul></li><li><p>常见属性</p><table><thead><tr><th>属性</th><th>作用</th></tr></thead><tbody><tr><td><code>element.offsetParent</code></td><td>返回目标元素<strong>带有定位的父级元素</strong>，没有则向上一级查找（<strong>就近原则</strong>），直到 body</td></tr><tr><td><code>element.offsetTop</code></td><td>返回元素相对于**父元素（有定位）**上方的偏移量</td></tr><tr><td><code>element.offsetLeft</code></td><td>返回元素相对于**父元素（有定位）**左边框的偏移量</td></tr><tr><td><code>element.offsetWidth</code></td><td>返回自身的宽度（padding+border+content）</td></tr><tr><td><code>element.offsetHeight</code></td><td>返回自身的高度（padding+border+content）</td></tr></tbody></table></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> son </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.father&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(son.offsetParent); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//	返回son的father，如果father没有定位,则返回body</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><p><code>offset</code>与<code>style</code>的区别</p><table><thead><tr><th><strong>offset</strong></th><th>style</th></tr></thead><tbody><tr><td><code>offset</code>可以获取任意<strong>样式表中</strong>的样式值</td><td><code>style</code>只能获取<strong>行内样式表中</strong>的样式值</td></tr><tr><td><code>offset</code>获取的数值<strong>没有单位</strong></td><td><code>style.width</code>获取带<strong>有单位</strong>的字符串</td></tr><tr><td><code>offsetwidth</code>包含 <code>padding+border</code></td><td><code>style.width</code>获得不包含 <code>padding+border</code></td></tr><tr><td><code>offset~</code>属性是只读属性，<strong>只能获取不能赋值</strong></td><td><code>style.width</code>是可读写属性，可以<strong>获取</strong>也可以<strong>赋值</strong></td></tr></tbody></table></li><li><p>总结：如果是要获取元素的<strong>大小、位置</strong>，则用<code>offset</code> ；如果是要给元素<strong>更改值</strong>，则需要用<code>style</code></p></li></ul><h4 id="_2-元素可视区——client" tabindex="-1">（2）元素可视区——client <a class="header-anchor" href="#_2-元素可视区——client" aria-label="Permalink to &quot;（2）元素可视区——client&quot;">​</a></h4><ul><li><p><code>client</code>：获取元素<strong>可视区</strong>的相关信息，可以动态的得到元素的<strong>边框大小</strong>、<strong>元素大小</strong>等</p></li><li><p>常见属性</p><table><thead><tr><th>属性</th><th>作用</th></tr></thead><tbody><tr><td><code>element.clientTop</code></td><td>返回元素上边框的大小</td></tr><tr><td><code>element.clientLeft</code></td><td>返回元素左边框的大小</td></tr><tr><td><code>element.clientWidth</code></td><td>返回元素宽度（padding+content）</td></tr><tr><td><code>element.clientHeight</code></td><td>返回元素高度（padding+content）</td></tr></tbody></table></li></ul><h4 id="_3-元素滚动-scroll" tabindex="-1">（3）元素滚动 <code>scroll</code> <a class="header-anchor" href="#_3-元素滚动-scroll" aria-label="Permalink to &quot;（3）元素滚动 \`scroll\`&quot;">​</a></h4><ul><li><p><code>scroll</code>：滚动的，可以得到该元素的大小、<strong>滚动距离</strong>等</p></li><li><p>常见属性</p><table><thead><tr><th>属性</th><th>作用</th></tr></thead><tbody><tr><td><code>element.scrollTop</code></td><td>返回元素被卷去的上侧距离（这里的元素是父元素，且子元素内容超出父元素，且父元素有滚动条）</td></tr><tr><td><code>element.scrollLeft</code></td><td>返回元素被卷去的左侧距离</td></tr><tr><td><code>element.scrollWidth</code></td><td>返回元素自身<strong>实际</strong>的宽度（content）(以内容大小为准，即便溢出)</td></tr><tr><td><code>element.scrollHeight</code></td><td>返回元素自身<strong>实际</strong>的高度（content）</td></tr></tbody></table></li><li><p>滚动事件</p><ul><li><code>scroll</code>：滚动时触发的事件</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;scroll&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(element.scrollTop); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//滚动时，打印元素被卷去的上侧距离</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>页面卷去事件</p><ul><li><code>element.scrollTop</code>：<strong>元素</strong>被卷去的上侧距离</li><li><code>window.pageYOffset</code>：<strong>页面</strong>被卷去的上侧距离（主要的）</li><li><code>window.scrollY</code>：页面被卷去的上侧距离，同<code>pageYOffset</code></li></ul></li></ul><hr><h3 id="_06-鼠标事件对象" tabindex="-1">06. 鼠标事件对象 <a class="header-anchor" href="#_06-鼠标事件对象" aria-label="Permalink to &quot;06. 鼠标事件对象&quot;">​</a></h3><ul><li><p>鼠标坐标</p><ul><li><p><code>e.clientX</code>和<code>e.clientY</code></p><blockquote><p>得到鼠标相对于 <code>client</code><strong>可视窗口区域</strong>的坐标</p></blockquote></li><li><p><code>e.pageX</code>和<code>e.pageY</code>————（主要）</p><blockquote><p>得到鼠标相对于<strong>页面文档</strong>的坐标</p></blockquote></li><li><p><code>e.screenX</code>和<code>e.screenY</code></p><blockquote><p>得到鼠标相对于<strong>电脑屏幕</strong>的坐标</p></blockquote></li></ul></li><li><p>鼠标移动</p><ul><li><p><code>mousemove</code></p><blockquote><p>只要鼠标移动，就触发事件</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mousemove&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;X坐标:&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e.pageX </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;,Y坐标:&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e.pageY);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul></li></ul><hr><h3 id="_07-移动端事件" tabindex="-1">07. 移动端事件 <a class="header-anchor" href="#_07-移动端事件" aria-label="Permalink to &quot;07. 移动端事件&quot;">​</a></h3><h4 id="_1-触屏事件-touch" tabindex="-1">（1）触屏事件：touch <a class="header-anchor" href="#_1-触屏事件-touch" aria-label="Permalink to &quot;（1）触屏事件：touch&quot;">​</a></h4><ul><li><code>touchstrat</code>：手指触摸 DOM 元素的事件</li><li><code>touchmove</code>：手指在 DOM 元素上移动的事件</li><li><code>touchend</code>：手指离开 DOM 元素的事件</li></ul><h4 id="_2-触摸事件对象" tabindex="-1">（2）触摸事件对象 <a class="header-anchor" href="#_2-触摸事件对象" aria-label="Permalink to &quot;（2）触摸事件对象&quot;">​</a></h4><ul><li><code>touches</code>：正在触摸屏幕的所有手指的集合</li><li><code>targetTouches</code>：正在触摸当前 DOM 元素的手指的集合</li><li><code>changedTouches</code>：手指状态发生了改变的列表，从无到有，从有到无</li></ul><h4 id="_3-拖动元素" tabindex="-1">（3）拖动元素 <a class="header-anchor" href="#_3-拖动元素" aria-label="Permalink to &quot;（3）拖动元素&quot;">​</a></h4><ul><li>需要阻止屏幕滚动事件</li></ul><h3 id="_08-浏览器存储" tabindex="-1">08. 浏览器存储 <a class="header-anchor" href="#_08-浏览器存储" aria-label="Permalink to &quot;08. 浏览器存储&quot;">​</a></h3><h4 id="_1-基本概念" tabindex="-1">（1）基本概念 <a class="header-anchor" href="#_1-基本概念" aria-label="Permalink to &quot;（1）基本概念&quot;">​</a></h4><ul><li>数据存储在用户浏览器中</li><li>设互、读取方便、甚至页面刷新不丢失数据</li><li>容量较大， <code>sessionstorag</code>约 5M，<code> localstorage</code>约 20M</li><li>只能存储字符串，可以将对象 <code>SON.stringify</code>（编码后存储）</li></ul><h4 id="_2-sessionstorage" tabindex="-1">（2）<code>sessionStorage</code> <a class="header-anchor" href="#_2-sessionstorage" aria-label="Permalink to &quot;（2）\`sessionStorage\`&quot;">​</a></h4><ul><li>概念 <ul><li>生命周期为浏览器窗口关闭</li><li>在同一个窗口（页面）下数据可以共享</li><li>以键值对的形式存储使用存储数据</li></ul></li><li>方法 <ul><li>存储数据：<code>sessionStorage.setItem(key,value)</code></li><li>获取数据：<code>sessionStorage.getItem(key)</code></li><li>删除数据：<code>sessionStorage.removeItem(key)</code></li><li>删除所有数据：<code>sessionStorage.clear()</code></li></ul></li></ul><h4 id="_3-localstorage" tabindex="-1">（3）<code>localStorage</code> <a class="header-anchor" href="#_3-localstorage" aria-label="Permalink to &quot;（3）\`localStorage\`&quot;">​</a></h4><ul><li><p>概念：</p><ul><li>声明周期永久存在，除非手动删除，否则关闭页面后也会存在</li><li>可以多窗口（页面）共享（同浏览器可以共享）</li><li>以键值对的形式存储使用</li></ul></li><li><p>方法</p><ul><li>存储数据：<code>localStorage.setItem(key,value)</code></li><li>获取数据：<code>local.Storage.getItem(key)</code></li><li>删除数据：<code>localStorage.removeItem(key)</code></li><li>删除所有数据：<code>localStorage.clear()</code></li></ul></li></ul>`,45),n=[l];function o(d,r,p,h,c,k){return a(),i("div",null,n)}const E=s(t,[["render",o]]);export{u as __pageData,E as default};

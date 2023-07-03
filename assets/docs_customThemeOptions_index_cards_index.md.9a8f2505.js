import{_ as s,c as n,o as a,a as l}from"./app.63a0c99f.js";const C=JSON.parse('{"title":"[ThemeConfig].customThemeOptions","description":"","frontmatter":{},"headers":[{"level":3,"title":"Example Usage","slug":"example-usage","link":"#example-usage","children":[]},{"level":3,"title":"Tip!","slug":"tip","link":"#tip","children":[]},{"level":3,"title":"Types","slug":"types","link":"#types","children":[]}],"relativePath":"docs/customThemeOptions/index/cards/index.md","lastUpdated":1688410858000}'),p={name:"docs/customThemeOptions/index/cards/index.md"},e=l(`<h1 id="themeconfig-customthemeoptions" tabindex="-1">[ThemeConfig].customThemeOptions <a class="header-anchor" href="#themeconfig-customthemeoptions" aria-hidden="true">#</a></h1><p>An <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noreferrer">Array</a> of addon IDs which will be imported into the theme.</p><h3 id="example-usage" tabindex="-1">Example Usage <a class="header-anchor" href="#example-usage" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">SoftUI</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">customThemeOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">username</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">session</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">username</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Guest</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">const</span><span style="color:#F07178;"> cards </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Current User</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    icon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">single-02</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    getValue</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">username</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    progressBar</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                        enabled</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                        getProgress</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">client</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">guilds</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cache</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">size</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CPU</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    icon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">single-02</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    getValue</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cpus</span><span style="color:#F07178;">()[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(R) Core(TM) </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> CPU </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    progressBar</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                        enabled</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                        getProgress</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">50</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">System Platform</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    icon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">single-02</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    getValue</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">platform</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    progressBar</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                        enabled</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                        getProgress</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">50</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Server count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    icon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">single-02</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    getValue</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">client</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">guilds</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cache</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> out of 75</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    progressBar</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                        enabled</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                        getProgress</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">client</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">guilds</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cache</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">size</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">75</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">cards</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h3 id="tip" tabindex="-1">Tip! <a class="header-anchor" href="#tip" aria-hidden="true">#</a></h3><p>?&gt; <strong>Maximum 4 cards</strong><br> The maximum number of cards to be returned is 4.</p><h3 id="types" tabindex="-1">Types <a class="header-anchor" href="#types" aria-hidden="true">#</a></h3><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" target="_blank" rel="noreferrer">Function</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noreferrer">Array</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" target="_blank" rel="noreferrer">Object</a></li></ul>`,8),o=[e];function r(c,t,F,y,D,i){return a(),n("div",null,o)}const u=s(p,[["render",r]]);export{C as __pageData,u as default};
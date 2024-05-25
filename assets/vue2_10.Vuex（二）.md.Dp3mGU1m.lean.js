import{_ as h,D as p,c as k,j as s,a as i,I as a,w as n,a3 as e,o as r}from"./chunks/framework.BkEKdGEG.js";const R=JSON.parse('{"title":"","description":"","frontmatter":{"created":"2023-08-28T00:00:00.000Z","updated":"2023-08-28T00:00:00.000Z"},"headers":[],"relativePath":"vue2/10.Vuex（二）.md","filePath":"vue2/10.Vuex（二）.md","lastUpdated":1716610678000}'),d={name:"vue2/10.Vuex（二）.md"},E=e("",7),c=s("code",null,"mutation",-1),o=s("li",null,[s("p",null,[s("code",null,"mutation"),i(" 可以"),s("strong",null,"直接改变"),i("状态 "),s("code",null,"state")]),s("ul",null,[s("li",null,[s("code",null,"mutation"),i(" 的第一个参数是 "),s("code",null,"state")])])],-1),u=s("code",null,"action",-1),g=s("ul",null,[s("li",null,[s("code",null,"action"),i(),s("strong",null,[i("提交的是 "),s("code",null,"mutation")]),i("，而不是直接变更状态")]),s("li",null,[s("code",null,"action"),i(" 的第一个参数是 "),s("code",null,"context")])],-1),y=e("",4),b=s("code",null,"getter",-1),m=s("code",null,"mutation",-1),F=s("code",null,"state",-1),_=e("",1),C=s("h3",{id:"_2-关于命名空间的问题",tabindex:"-1"},[i("（2）关于命名空间的问题 "),s("a",{class:"header-anchor",href:"#_2-关于命名空间的问题","aria-label":'Permalink to "（2）关于命名空间的问题"'},"​")],-1),A=s("code",null,"action",-1),B=s("code",null,"mutation",-1),v=s("code",null,"getter",-1),D=s("li",null,[i("如果要使你的模块具有更高的封装度和复用性，你可以通过添加"),s("code",null,"namespaced: true"),i(" 的方式使其成为带命名空间的模块")],-1),T=e("",2),x=e("",1),f=s("h3",{id:"_3-在组件内使用的问题",tabindex:"-1"},[i("（3）在组件内使用的问题 "),s("a",{class:"header-anchor",href:"#_3-在组件内使用的问题","aria-label":'Permalink to "（3）在组件内使用的问题"'},"​")],-1),S=e("",1),P=e("",1);function V(j,q,w,I,N,M){const t=p("font"),l=p("big");return r(),k("div",null,[E,s("ul",null,[s("li",null,[s("p",null,[c,i(" 提交的是"),a(t,{color:"red"},{default:n(()=>[i("同步操作")]),_:1})])]),o,s("li",null,[s("p",null,[u,i(" 可以包含任意"),a(t,{color:"red"},{default:n(()=>[i("异步操作")]),_:1})]),g])]),y,s("ul",null,[s("li",null,[s("p",null,[a(l,null,{default:n(()=>[b,i("和"),m,i("接收的第一个参数"),F,i("，是全局的还是模块的？")]),_:1})]),s("ul",null,[s("li",null,[i("是模块的 state，也就是"),a(t,{color:"blue"},{default:n(()=>[i("局部的 state")]),_:1})])])]),s("li",null,[s("p",null,[a(l,null,{default:n(()=>[i("如何访问全局的 state 和 getter？")]),_:1})]),_])]),C,s("ul",null,[s("li",null,[s("p",null,[a(l,null,{default:n(()=>[i("为什么需要使用命名空间？")]),_:1})]),s("ul",null,[s("li",null,[i("默认情况下，模块内部的"),A,i("、"),B,i("和"),v,i("是"),a(t,{color:"red"},{default:n(()=>[i("注册在全局")]),_:1}),i("命名空间的")]),s("li",null,[i("如果多个模块中 action、mutation 的命名是一样的，那么提交 mutation、action 时，将会"),a(t,{color:"red"},{default:n(()=>[i("触发所有")]),_:1}),i("模块中命名相同的 mutation、action")]),D])]),s("li",null,[s("p",null,[a(l,null,{default:n(()=>[i("命名空间的模块内如何提交全局的 mutation 和 action？")]),_:1})]),T]),s("li",null,[s("p",null,[a(l,null,{default:n(()=>[i("怎么在带命名空间的模块内注册全局的 action？")]),_:1})]),x])]),f,s("ul",null,[s("li",null,[s("p",null,[a(l,null,{default:n(()=>[i("如何使用？")]),_:1})]),S]),s("li",null,[s("p",null,[a(l,null,{default:n(()=>[i("如何使用辅助函数映射模块里的属性和方法？")]),_:1})]),P])])])}const H=h(d,[["render",V]]);export{R as __pageData,H as default};

import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
/* Reset */
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{border:0;font-size:100%;font:inherit;vertical-align:baseline;margin:0;padding:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:none}table{border-collapse:collapse;border-spacing:0}
  :root{
    --purple42: #420066;
    --purple53: #532C69;
    --green21: #21FFB5;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
    scroll-behavior: smooth;
    
  }
  body{
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    color: var(--purple42);
    min-height: 100%;
    width: 100%;
  }
  @keyframes entering{
    from{
      opacity:0
      }
    to{
        opacity:1
    }
  }
  @keyframes to-left{
    from{
      transform: translateX(100%);
      }
    to{
      transform: translateX(0);
    }
  }
`

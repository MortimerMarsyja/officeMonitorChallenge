import { createGlobalStyle } from 'styled-components'
import {blueColor,greyColors} from './colorPalette';

 const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        background-color: inherit;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    .clearfix:before, .clearfix:after { content: ""; display: table; }
    .clearfix:after { clear: both; }
    .clearfix { *zoom: 1; }
  

    font-family:Arial, Helvetica, sans-serif;
    
    h1{
        font-size:1.66em;
        font-weight:700;
        line-height: 1.2em;
        margin: 0.66em 0;
        color:${greyColors[700]};
    }
    h2{
        font-size:1.44em;
        font-weight: 600;
        line-height: 1.2em;
        margin: 0.60em 0;
        color:${greyColors[600]};
    }
    h3{
        font-size:1.6em;
        font-weight:500;
        margin: 0.54em 0;
        color:${blueColor};
    }
    h4{
        font-size:1.4em;
        font-weight:400;
        margin: 0.48em 0;
        color:${greyColors[700]};
    }
    p{
        font-size:1.1em;
        width:200px;
        line-height:1.2em;
    }


    html,body {
        background-color: #DDF2FA ;
        font: 16px "Avenir","HelveticaNeueLTStd","Helvetica Neue",Helvetica,"Liberation Sans",Arial,sans-serif;
        color: #35383E;
        width: 100%;
        min-height: 100%;
        margin: 0;
    }
`

export default GlobalStyles;
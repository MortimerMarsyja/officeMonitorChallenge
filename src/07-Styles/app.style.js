import styled from "styled-components";

const StyledApp = styled('div')`
    #office {
        margin: 0 auto;
        width: 960px;
        position: relative;
    }

    header {
        width: 100%;
        height: 44px;
        line-height: 44px;
        margin-bottom: 15px;
        text-align: center;
        background-color: #54C7EF;
    }



    #logo {
        width: 50px;
        margin-top: 7px;
    }


    .widget {
        height: 200px;
        width: 300px;
        float: left;
        margin: 10px;
        background-color: white;
        font-size: 14px;
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);
        border-radius: 3px;
        overflow: hidden;
    }

    .widget .title {
        height: 25px;
        line-height: 25px;
        padding-left: 7px;
        background-color: #F19063;
        color: #fff;
    }

    .widget .content {
        height: 175px;
        text-align: center;
        line-height: 170px;
        font-size: 140px;
    }

    #mood {
        float: none;
        margin: 30px auto 0;
    }

 
`;

export default StyledApp;
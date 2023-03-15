import { css, getCssBundleUrl, hannaVars as vars } from "@reykjavik/hanna-css";

export default css`
  /*
    Ideally, you should be loading the Hanna CSS files
    with a <link rel="stylesheet" href="..."/>
    in your HTML files, but this is also possible.
  */
  /* @import "${getCssBundleUrl(["-basics"])}"; */

  h1 {
    color: ${vars.color_faxafloi_100};
  }
`;

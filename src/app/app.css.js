import {css} from 'lit';

export const style = css`
    :host {
        height: 100%;
        width: 100vw;
        background-color: white;
    }
  
    sp-theme {
        width: 100%;
        height: 100%;
        display: flex;
    }
    
    #main-container {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  
    halftone-svg {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  
    #background {
      background-color: red;
      width: 100%;
      height: 100%;
    }
`;

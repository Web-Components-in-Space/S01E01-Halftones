import {css} from 'lit';

export const style = css`
    :host {
      display: flex;
      flex-direction: column;
      height: calc(100% - 40px);
      padding: 20px;
      background-color: var(--spectrum-global-color-gray-75);
      width: 250px;
      overflow-y: auto;
    }
  
    #logo-container {
      display: flex;
      align-items: center;
    }
  
    #logo {
      border-style: solid;
      border-width: 2px;
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }

    #logo svg {
      width: 100%;
      height: 100%;
    }
  
    sp-color-slider {
      min-height: 20px;
    }
  
    sp-color-area {
      min-height: 150px;
    }
`;

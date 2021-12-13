import {css} from 'lit';

export const style = css`
  :host {
    display: flex;
    justify-content: flex-end;
    padding: 15px;
    width: calc(100% - 30px);
  }
  
  button, sp-button {
    width: 50px;
    height: 50px;
    background-size: cover;
    border: none;
    margin-right: 5px;
  }

  button {
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
  }

  button[selected] {
    border-color: var(--spectrum-global-color-static-blue);
  }
`;

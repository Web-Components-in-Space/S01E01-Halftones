import {html} from 'lit';
import '@spectrum-web-components/divider/sp-divider';
import '@spectrum-web-components/picker/sp-picker';
import '@spectrum-web-components/field-label/sp-field-label';
import '@spectrum-web-components/menu/sp-menu-item';
import '@spectrum-web-components/slider/sp-slider';
import '@spectrum-web-components/color-slider/sp-color-slider';
import '@spectrum-web-components/color-area/sp-color-area';
import '@spectrum-web-components/tabs/sp-tabs';
import '@spectrum-web-components/tabs/sp-tab';
import '@spectrum-web-components/switch/sp-switch';
import { Renderers } from 'halftone-web-component';

export const template = function(scope) { return html`
    <div id="logo-container">
        <div id="logo"></div>
        <h2>Halftones...<br />in Space!</h2>.
    </div>
    <sp-divider></sp-divider>

    <br />
    <br />
    <sp-field-label for="picker-icons">Choose a shape...</sp-field-label>
    <sp-picker value="${scope.shapeType}" @change=${(event) => {
        scope.sendEvent('shapeType', event.target.value);
    }}>
        ${Renderers.RenderShapeTypes.map(shape => { 
            return html`<sp-menu-item value=${shape}>${shape.charAt(0).toUpperCase() + shape.substring(1)}</sp-menu-item>` })}
    </sp-picker>

    <br />
    <br />
    
    <sp-field-label>Spread</sp-field-label>
    <sp-slider @input=${(event) => {
        scope.sendEvent('spread', event.target.value);
    }}></sp-slider>

    <br />
    <br />

    <sp-field-label>Invert Pattern</sp-field-label>
    <sp-switch @change=${(event) => {
        scope.sendEvent('invert', event.target.checked);
    }}></sp-switch>

    <br />
    <br />

    <sp-field-label>Color</sp-field-label>
    <sp-tabs selected="halftones" 
             @change=${(event) => {
                scope.colorTab = event.target.selected;
             }}>
        <sp-tab label="Halftones" value="halftones"></sp-tab>
        <sp-tab label="Background" value="background"></sp-tab>
    </sp-tabs>
    <br />
    <sp-color-slider 
            color=${scope.halftoneColor}
            @input=${(event) => {
                scope.sendEvent('halftoneColor', event.target.color);
            }}>
    </sp-color-slider>
    <br />
    <sp-color-area 
            color=${scope.halftoneColor}
            @input=${(event) => {
                scope.sendEvent('halftoneColor', event.target.color);
            }}>
    </sp-color-area>

`};

import {html} from 'lit';
import '@spectrum-web-components/theme/sp-theme';
import '@spectrum-web-components/theme/theme-light';
import '@spectrum-web-components/theme/scale-medium';
import 'halftone-web-component';
import '../sidepanel';
import '../floatingheader';
import '../floatingfooter';

export const template = function(scope) { return html`

<sp-theme scale="medium" color="light">
    <ht-sidepanel 
        shapeType=${scope.shapeType}
        ?inverse=${scope.invert}
        halftoneColor=${scope.halftoneColor}
        backgroundColor=${scope.backgroundColor}
        spread=${scope.spread}>
    </ht-sidepanel>
    <div id="main-container">
        <ht-floatingheader image=${scope.image}></ht-floatingheader>
        <halftone-svg 
            src=${scope.image} 
            ?inverse=${scope.invert}
            distance=${scope.spread}
            shapecolor=${scope.halftoneColor}
            shapetype=${scope.shapeType}>
            <div id="background" style="background-color: ${scope.backgroundColor}"></div>
        </halftone-svg>
        <ht-floatingfooter></ht-floatingfooter>
    </div>
</sp-theme>
`};

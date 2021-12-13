import {LitElement} from 'lit';
import {template} from './app.html';
import {style} from './app.css';
import { SAVE_SVG, SAVE_PNG, SAVE_JPG } from '../floatingfooter';

export class App extends LitElement {
    static get styles() {
        return [style];
    }

    static get properties() {
        return {
            shapeType: { type: String },
            spread: { type: Number },
            invert: { type: Boolean },
            backgroundColor: { type: String },
            halftoneColor: { type: String },
            image: { type: String },
        };
    }

    constructor() {
        super();
        this.image = './assets/astronaut.jpg';
        this.shapeType = 'hexagons';
        this.spread = 14;
        this.invert = false;
        this.halftoneColor = '#00ff00';
        this.backgroundColor = '#0000ff';
    }

    firstUpdated() {
        this.halftoneComponent = this.shadowRoot.querySelector('halftone-svg');
        const resizeObserver = new ResizeObserver(() => {
            this.halftoneComponent.resize();
            this.halftoneComponent.render();
        });
        resizeObserver.observe(this.halftoneComponent);

        this.shadowRoot.addEventListener('settingschange', (event) => {
            if (event.detail && event.detail.property !== undefined) {
                this[event.detail.property] = event.detail.value;
            }
        });

        this.shadowRoot.addEventListener(SAVE_SVG, () => this.saveAs('svg'));
        this.shadowRoot.addEventListener(SAVE_PNG, () => this.saveAs('png'));
        this.shadowRoot.addEventListener(SAVE_JPG, () => this.saveAs('jpg'));
    }

    onLocalImage(e) {
        this.image = URL.createObjectURL(e.target.files[0]);
    }

    saveAs(filetype) {
        const svg = this.halftoneComponent.getSVG(undefined, undefined, this.backgroundColor);
        const dl = document.createElement('a');
        dl.setAttribute('download', `myhalftone.${filetype}`);

        if (filetype === 'png' || filetype === 'jpg') {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = 1024;
                canvas.height = 1024 / this.halftoneComponent.sourceAspectRatio;
                const ctx = canvas.getContext('2d');
                ctx.fillStyle = `#${this.backgroundColor}`;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                const imgdata = canvas.toDataURL(`image/${filetype === 'jpg' ? 'jpeg' : 'png'}`);
                const dl = document.createElement('a');
                dl.setAttribute('download', `myhalftone.${filetype}`);
                dl.setAttribute('href', imgdata);
                dl.click();
            };
            img.src = 'data:image/svg+xml,' + escape(svg);
        } else {
            dl.setAttribute('href', 'data:image/svg+xml,' + escape(svg));
            dl.click();
        }
    }

    render() {
        return template(this);
    }
}

customElements.define('ht-app', App);

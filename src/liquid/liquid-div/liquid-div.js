import { Component, html } from "@exalt/core";
import { define, options } from "@exalt/core/decorators";
import styles from "./liquid-div.css";

@define("liquid-div")
@options({ shadow: true, styles: [styles] })
export class LiquidDiv extends Component {

    loader = super.createRef();

    render({ centered, size }) {
            return html `
            <div ref="loader" class="loader ${centered ? " centered" : ""} ${size ? `size-${size}` : ""}">
                <slot></slot>
            </div>
        `;
    }

    setSize(size){
        let oldSize = this.loader.classList.value.split("size-")[1].split(" ")[0];
        this.loader.classList.remove(`size-${oldSize}`);
        this.loader.classList.add(`size-${size}`);
    }
}
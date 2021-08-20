import { LayoutConfig, ResolvedLayoutConfig } from 'golden-layout';
import { ContextProvider } from '@holochain-open-dev/context';
import { BaseElement } from '../utils/base-element';
export declare class GoldenLayout extends BaseElement {
    _goldenLayout: ContextProvider<never>;
    layoutConfig: LayoutConfig | undefined;
    connectedCallback(): void;
    saveLayout(): ResolvedLayoutConfig;
    render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResultGroup[];
}

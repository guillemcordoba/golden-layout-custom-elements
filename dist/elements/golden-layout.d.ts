import { Constructor } from '@open-wc/scoped-elements/types/src/types';
import { LayoutConfig, ResolvedLayoutConfig } from 'golden-layout';
import { ContextProvider } from '@holochain-open-dev/context';
import { BaseElement } from '../utils/base-element';
export declare class GoldenLayout extends BaseElement {
    scopedElements: {
        [key: string]: Constructor<HTMLElement>;
    } | undefined;
    layoutConfig: LayoutConfig | undefined;
    _goldenLayout: ContextProvider<never>;
    connectedCallback(): void;
    saveLayout(): ResolvedLayoutConfig;
    render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResultGroup[];
}

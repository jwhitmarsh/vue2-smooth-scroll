import _Vue, { PluginFunction } from "vue";

// augment typings of Vue.js
import "./vue-injections";

interface SmoothScrollOptions {
  scrollTo: Element;
  duration?: number;
  offset?: number;
  updateHistory?: boolean;
}

export declare function smoothScroll(args: SmoothScrollOptions): void;

declare const Vue2SmoothScroll: PluginFunction<SmoothScrollOptions>;
export default Vue2SmoothScroll;

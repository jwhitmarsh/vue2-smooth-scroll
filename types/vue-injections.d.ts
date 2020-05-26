import Vue from "vue";
import { smoothScroll } from "./index";

declare module "vue/types/vue" {
  interface Vue {
    $smoothScroll: typeof smoothScroll;
  }
}

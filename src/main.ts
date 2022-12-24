import { createApp } from "vue";
import App from "./App.vue";

if (import.meta.env.DEV) {
  createApp(App).mount("#app");
}

const ID = "home";
let app: ReturnType<typeof createApp>;

(window as any)[ID] = {
  mount(wrapper: HTMLElement, props: Record<string, any>) {
    app = createApp(App, {
      props,
    });
    app.mount(wrapper);
    console.log(`[${ID}]: Mounted/Updated!`);
  },
  unmount() {
    app.unmount();
    console.log(`[${ID}]: Unmounted!`);
  },
};

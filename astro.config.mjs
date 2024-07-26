import {
  defineConfig
} from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // output: 'server',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // importしたいファイルを記載 
          additionalData: `@import "src/styles/_mixin.scss", "src/styles/base.scss";`
        }
      }
    }
  },
  build: {
    // 必ずcssを作成
    inlineStylesheets: 'never',
  }
});
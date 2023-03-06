import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { viteMockServe } from 'vite-plugin-mock';
import path from 'path';

const pathSrc = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
      // eslint报错解决
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },

      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),

        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'icon',
        }),
      ],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
    }),

    Components({
      resolvers: [
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep', 'system-uicons', 'mdi', 'material-symbols', 'ri'],
          prefix: 'i',
          alias: {
            system: 'system-uicons',
            material: 'material-symbols',
          },
        }),
        // IconsResolver({
        // enabledCollections: ['ep'],
        // prefix: 'icon',
        // alias: {
        //   system: 'system-uicons',
        // },
        // }),
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
      ],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
    }),

    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
    viteMockServe({
      // TS文件支持，打开后将忽略js文件
      supportTs: false,
      // 模拟服务的文件夹，在设置了configPath后失效
      mockPath: './src/service/mock',
      // 是否实时更新
      watchFiles: true,
      // 在模拟时忽略的文件名格式
      ignore: /^\_/,
      // 是否启动本地的mock文件，实质上是Mock开关
      localEnabled: true,
      // 是否在生产环境使用Mock
      prodEnabled: false,
      // 用来动态控制生产环境是否开启Mock，通过动态添加代码到Main.ts中来实现
      // 如果直接把代码写到文件中，就会始终打包
      injectCode: `
        import { setupProdMockServer } from './mockProdServer';
        setupProdMockServer();
      `,
  })
  ],
  // 配置别名
  resolve: {
    alias: {
      '@': pathSrc,
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/global.scss";',
      },
    },
  },
});

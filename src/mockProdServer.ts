import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

const modules: any = import.meta.glob('./service/mock/*.ts', { eager: true });
const mockModules: any[] = [];
for (const item in modules) {
  if (modules[item].default) {
    mockModules.push(...modules[item].default);
  }
}

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
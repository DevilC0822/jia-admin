import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
const modules = import.meta.glob('./service/mock/*.ts');

const mockModules: any[] = [];
for (const path in modules) {
  modules[path]().then((mod) => {
    mockModules.push(mod);
  });
}

// export const mockModules = [...modules];

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
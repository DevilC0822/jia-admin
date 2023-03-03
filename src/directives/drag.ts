import { useMenuStore } from '@/store/menu';
// 拖拽的指令
const drag = {
  mounted(el: any, binding: any) {
    const menuStore = useMenuStore();
    nextTick(() => {
      console.log(binding.value);
      const currentValue = ref('');
      const elValue = el.getAttribute('drag-value');
      // const dragIndex = menuStore.openedMenuList.findIndex((i) => i.value === elValue);
      const currentEl: HTMLDivElement = document.querySelector(`#tab-${elValue}`)!;
      currentEl.setAttribute('draggable', 'true');
      currentEl!.style.cssText += ';cursor:move;';

      currentEl.ondragstart = (e: DragEvent) => {
        currentValue.value = elValue;
        console.log('ondragstart', elValue);
      };
      currentEl.ondragenter = (e: DragEvent) => {
        e.preventDefault();
        console.log('enter', elValue, currentValue.value, binding.value);
        if (elValue !== currentValue.value) {
          menuStore.openedMenuList.reverse();
          // const source = menuStore.openedMenuList[dragIndex];
          // const index = menuStore.openedMenuList.findIndex((i) => i.value === currentValue.value);
          // menuStore.openedMenuList.splice(dragIndex, 1);
          // menuStore.openedMenuList.splice(index, 0, source);
        }
      };
      currentEl.ondragover = (e: DragEvent) => {
        e.preventDefault();
        console.log('over', elValue, currentValue.value);
        // if (elValue === currentValue.value) {
        //   return;
        // }
        // console.log('ondragover', elValue);
      };
    });
  },
};
// 挂载，注册
const directives = {
  install(app: any) {
    app.directive('drag', drag);
  },
};
export default directives;

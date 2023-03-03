import screenfull from 'screenfull';
import { ElMessage } from 'element-plus';

const data = [
  {
    name: '内容全屏',
    iconName: 'FullScreen',
    disabled: false,
    clickMethod: () => {
      if (!screenfull.isEnabled) {
        ElMessage({
          message: '不支持全屏',
          type: 'warning',
        });
        return;
      }

      screenfull.request(document.querySelector('#main-content')!);
    },
  },
  {
    name: '刷新当前',
    iconName: 'RefreshRight',
    disabled: false,
    clickMethod: () => {
      window.location.reload();
    },
  },
  {
    name: '关闭当前',
    iconName: 'SemiSelect',
    disabled: false,
  },
  {
    name: '关闭其他',
    iconName: 'Switch',
    disabled: false,
  },
  {
    name: '关闭左侧',
    iconName: 'DArrowLeft',
    disabled: false,
  },
  {
    name: '关闭右侧',
    iconName: 'DArrowRight',
    disabled: false,
  },
  {
    name: '关闭全部',
    iconName: 'CloseBold',
    disabled: false,
  },
];
export default data;

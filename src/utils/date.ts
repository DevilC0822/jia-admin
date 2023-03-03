import dayjsRelativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

dayjs.extend(dayjsRelativeTime);
dayjs.locale('zh-cn');

export const getFromTodaysTime = (date: string | number) => {
  return dayjs(date).valueOf() < dayjs().valueOf() ? dayjs(date).fromNow() : 'error';
};
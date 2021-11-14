const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

// 通过dayjs 进行转化
export default function formatUtcFormat(
  utcString: string,
  format: string = DATE_TIME_FORMAT
): string {
  return dayjs.utc(utcString).format(format)
}

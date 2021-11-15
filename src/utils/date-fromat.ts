const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

// 通过dayjs 进行转化
// 格式化utc字符串
export default function formatUtcFormat(
  utcString: string,
  format: string = DATE_TIME_FORMAT
): string {
  return dayjs.utc(utcString).format(format)
}

// 格式化时间戳
export function formatTimestamp(
  utcString: string,
  format: string = DATE_TIME_FORMAT
): string {
  // console.log('dayjs(utcString): ', dayjs(utcString).format(format))
  // return dayjs(utcString)
  return ''
}


export const dateFormat = (fmt="YYYY-mm-dd", date=new Date()) => {
  let ret;
  const opt = {
      "Y+": date.getFullYear().toString(),        // 年
      "m+": (date.getMonth() + 1).toString(),     // 月
      "d+": date.getDate().toString(),            // 日
      "H+": date.getHours().toString(),           // 时
      "M+": date.getMinutes().toString(),         // 分
      "S+": date.getSeconds().toString()          // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
          fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      };
  };
  return fmt;
}

export const getInnerDates = (start, end) => {
  const arr = [];
  const ab = start.split("-");
  const ae = end.split("-");
  const db = new Date();
  db.setUTCFullYear(ab[0], ab[1] - 1, ab[2]);
  const de = new Date();
  de.setUTCFullYear(ae[0], ae[1] - 1, ae[2]);
  const unixDb = db.getTime() - 24 * 60 * 60 * 1000;
  const unixDe = de.getTime() - 24 * 60 * 60 * 1000;
  for (let k = unixDb; k <= unixDe;) {
    k = k + 24 * 60 * 60 * 1000;
    arr.push(dateFormat("YYYY-mm-dd",new Date(parseInt(k))));
  }
  return arr;
}
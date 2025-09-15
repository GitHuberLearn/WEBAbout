/*
 * @Descripttion: Sustainable
 * @version: 1.0.0
 * @Author: Kenny
 * @Date: 2024-03-11 09:44:10
 * @LastEditors: ~
 * @LastEditTime: 2024-12-31 10:11:12
 */
//医生信息
newGetDoctorInfoByUserId = [
  ["成交总金额", "成交总单里", "成交客户数", "总访客数", "总浏览量"],
  ["20.00", "10", "30", "44", "54"],
  ["本日 40.00", "本日 30", "本日 60", "本日 10", "本日 30"],
  ["本月 0.00", "本月 0", "本月 0", "本月 140", "本月 140"],
];
let arr = [];
const len = data.length;
if (len === 0) {
  for (let index = 0; index < 3; index++) {
    data.length = 5;
    arr.push(data);
  }
  return arr;
}

data.forEach((item, index) => {
  const { pro_title, quantify } = item;
  arr.push([pro_title, quantify]);
});

return [["商品名称", "加购量"], ...arr];

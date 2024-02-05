/*
 * @Author: SpengF
 * @Date: 2024-02-05 15:48:28
 * @LastEditTime: 2024-02-05 19:28:50
 * @LastEditors: SpengF
 * @Description: 组件导出出口文件
 */
const { name, version } = require("../package.json");
import Components from "../packages/index";
export default {
  ...Components,
  name,
  version,
};

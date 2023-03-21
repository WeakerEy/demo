/*
 * @Author: WeakerEy 280676418@qq.com
 * @Date: 2023-03-21 23:35:57
 * @LastEditors: WeakerEy 280676418@qq.com
 * @LastEditTime: 2023-03-21 23:55:46
 * @FilePath: \my-moni\craco.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = async () => {
  return {
    reactScriptsVersion: "react-scripts",
    devServer: {
      proxy: {
        "/api": {
          target: "http://yushicheng.tpddns.cn:15670/api/",
          changeOrigin: true
        }
      }
    }
  }
};
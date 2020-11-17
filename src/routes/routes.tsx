/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2020-11-17 16:32:15
 * @LastEditTime: 2020-11-17 17:57:48
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /parcel-antd/src/routes/routes.tsx
 * @LICENSE: Apache-2.0
 */
import BaseLayout from "../components/layout/BaseLayout";
import Demo1 from "./demo1/demo1";
import Demo2 from "./demo2/demo2";
export default [
  {
    path: "/",
    component: BaseLayout,
    children: [
      {
        path: "/demo1",
        title: "测试一",
        component: Demo1,
        children: [{ path: "/demo1/demo2",title:"asd", component: Demo2 }],
      },
      { path: "/demo2", title: "测试二", component: Demo2 },
    ],
  },
];

import { Button, Menu } from "antd";

export default function App() {
  return (
    <>
      <p className={"foo"}>Hi! Ant Design & Parcel.</p>
      <Button type="primary" href={"https://ant.design/index-cn"}>
        Antd Docs
      </Button>
      &nbsp;
      <Button type="primary" href={"https://parceljs.org/"}>
        Parcel Docs
      </Button>
      <Menu
        activeKey="1"
        items={[
          { key: "1", label: "first" },
          { key: "2", label: "second" },
        ]}
      />
    </>
  );
}

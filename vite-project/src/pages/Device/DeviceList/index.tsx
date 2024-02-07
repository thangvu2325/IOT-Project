import { Col, Input, Pagination, Row } from "antd";
import { FunctionComponent } from "react";
import DeviceListLayout from "./layout";
import { SearchProps } from "antd/es/input";
import Card from "@/components/ui/Card";

interface DeviceListProps {}
const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const DeviceList: FunctionComponent<DeviceListProps> = () => {
  return (
    <DeviceListLayout>
      <div className="w-full">
        <div className="flex justify-end">
          <div className="mt-2">
            <Input.Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="middle"
              spellCheck={false}
              onSearch={onSearch}
            />
          </div>
        </div>
        <div className="mt-6 mx-4">
          <Row align="middle" justify="space-between" gutter={[8, 16]}>
            <Col span={8}>
              <Card className="mx-auto"></Card>
            </Col>
            <Col span={8}>
              <Card className="mx-auto"></Card>
            </Col>
            <Col span={8}>
              <Card className="mx-auto"></Card>
            </Col>
            <Col span={8}>
              <Card className="mx-auto"></Card>
            </Col>
            <Col span={8}>
              <Card className="mx-auto"></Card>
            </Col>
            <Col span={8}>
              <Card className="mx-auto"></Card>
            </Col>
          </Row>
          <Pagination
            className="mt-8 mr-8 flex justify-end"
            total={85}
            showSizeChanger={false}
            pageSize={6}
            showTotal={(total) => `Total ${total} items`}
            onChange={(page: number, pageSize: number) => {
              console.log(page, pageSize);
            }}
          />
        </div>
      </div>
    </DeviceListLayout>
  );
};

export default DeviceList;

import { IconDots } from "@tabler/icons-react";
import Tippy from "@tippyjs/react/headless";
import { Button, Col, Row, Switch } from "antd";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Liquid } from "@ant-design/plots";
import Title from "antd/es/typography/Title";
interface CardProps {
  className?: string;
}

const Card: FunctionComponent<CardProps> = ({ className }) => {
  const config = {
    percent: 0.2,
    outline: {
      border: 4,
      distance: 8,
      style: {
        stroke: "#fff",
        strokeOpacity: 0.65,
      },
    },
    wave: {
      length: 128,
    },
  };
  return (
    <div
      className={`relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 ${
        className ?? ""
      }`}
    >
      <div className="p-4">
        <div className="mb-2 flex justify-between items-center">
          <h5 className="block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">
            Thiết bị 1
          </h5>
          <Tippy
            trigger={"click"}
            hideOnClick="toggle"
            placement="bottom-start"
            arrow={true}
            interactive={true}
            onClickOutside={(instance) => {
              instance.hide();
            }}
            offset={[4, 4]}
            render={(attrs) => {
              return (
                <div
                  className="shadow rounded-md bg-[#fff]"
                  tabIndex={-1}
                  {...attrs}
                >
                  <div className="p-4 flex flex-col gap-2 shadow-sm">
                    <Button>Chỉnh sửa</Button>
                    <Button>Làm mới</Button>
                    <Button>Delete</Button>
                  </div>
                </div>
              );
            }}
          >
            <button className="p-1 block bg-[#ccc] border-solid border-[#f0f0f0] border-[1px] rounded-full cursor-pointer">
              <IconDots className="text-white"></IconDots>
            </button>
          </Tippy>
        </div>
        <div className="flex justify-between w-full">
          <Liquid {...config} autoFit={true} width={160} height={160} />
          <div className="flex-1">
            <Title level={1}>Trạng Thái Thiết Bị</Title>
            <Row justify={"space-between"} className="mt-3">
              <Col span={12}>
                <Title level={3}>Trạng Thái:</Title>
              </Col>
              <Col span={12} className="text-center">
                <Switch
                  className="bg-[rgba(0,0,0,0.25)] hover:bg-[rgba(0,0,0,0.45)]"
                  checkedChildren="ON"
                  unCheckedChildren="OFF"
                  defaultChecked
                />
              </Col>
            </Row>
            <Row justify={"space-between"} className="mt-1">
              <Col span={12}>
                <Title level={3}>Giá trị:</Title>
              </Col>
              <Col span={12} className="text-center">
                <Title level={3}>500</Title>
              </Col>
            </Row>
            <Row justify={"space-between"} className="mt-1">
              <Col span={12}>
                <Title level={3}>Ngưỡng Cao:</Title>
              </Col>
              <Col span={12} className="text-center">
                <Title level={3}>1000</Title>
              </Col>
            </Row>
          </div>
        </div>
        <Link
          to={"/"}
          className="mr-4 text-blueBtn flex justify-end hover:underline"
        >
          Chi Tiết
        </Link>
      </div>
    </div>
  );
};

export default Card;

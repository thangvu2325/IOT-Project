import { Button, Dropdown, Tag, theme, message, Divider } from "antd";
import { FunctionComponent, useRef, useState } from "react";
import { EllipsisOutlined, PlusOutlined } from "@ant-design/icons";
import type { ActionType, ProColumns } from "@ant-design/pro-components";
import {
  ProTable,
  TableDropdown,
  ModalForm,
  ProDescriptions,
} from "@ant-design/pro-components";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { devicesSelector, userData } from "@/redux/selector";
import { createAxios, tokenType } from "@/services/createInstance";
import { loginSuccess } from "@/redux/slices/authSlice";
import { waitTime } from "@/constants";
import { fetchDataDevices } from "@/redux/slices/devicesSlice";
import {} from "@ant-design/pro-components";
import dayjs from "dayjs";
import Title from "antd/es/typography/Title";
import { deviceType } from "@/type/device";
const { useToken } = theme;

interface DeviceListProps {}

const columns: ProColumns<deviceType>[] = [
  {
    title: "#",
    dataIndex: "index",
    valueType: "indexBorder",
    width: 48,
  },
  {
    title: "Mã thiết bị",
    dataIndex: "deviceId",
    copyable: true,
    ellipsis: true,
    tooltip: "Tiêu đề quá dài sẽ tự động co lại",
    formItemProps: {
      rules: [
        {
          required: true,
          message: "Điều này là bắt buộc",
        },
      ],
    },
  },
  {
    title: "Mã Khách Hàng",
    dataIndex: "customer_id",
    copyable: true,
    ellipsis: true,
    tooltip: "Tiêu đề quá dài sẽ tự động co lại",
    formItemProps: {
      rules: [
        {
          required: true,
          message: "Điều này là bắt buộc",
        },
      ],
    },
  },
  {
    title: "Tên Khách Hàng",
    dataIndex: "fullname",
    copyable: true,
    search: false,
    ellipsis: true,
    tooltip: "Tiêu đề quá dài sẽ tự động co lại",
    formItemProps: {
      rules: [
        {
          required: true,
          message: "Điều này là bắt buộc",
        },
      ],
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    copyable: true,
    ellipsis: true,
    tooltip: "Tiêu đề quá dài sẽ tự động co lại",
  },
  {
    title: "Điện Thoại",
    dataIndex: "phone",
    copyable: true,
    ellipsis: true,
    tooltip: "Tiêu đề quá dài sẽ tự động co lại",
  },
  {
    title: "Lựa chọn",
    valueType: "option",
    key: "option",
    render: (_text, record, _, action) => [
      <Tag
        color={"purple"}
        style={{ cursor: "pointer", marginRight: "0" }}
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        Edit
      </Tag>,
      <ModalForm
        style={{ marginTop: "0", top: "50px" }}
        title={<Title level={2}>Thông Tin Chi Tiết</Title>}
        trigger={
          <Tag color={"green"} style={{ cursor: "pointer" }}>
            Detail
          </Tag>
        }
        submitter={{
          searchConfig: {
            submitText: "Xác Nhận",
            resetText: "Làm Mới",
          },
        }}
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          message.success("提交成功");
          return true;
        }}
      >
        <ProDescriptions
          column={2}
          title="Thiết Bị"
          tooltip="Danh sách chi tiết của thiết bị"
          className="ml-10"
        >
          <ProDescriptions.Item
            span={1}
            valueType="text"
            ellipsis
            label="Mã Thiết Bị"
          >
            {record.deviceId}
          </ProDescriptions.Item>
          <ProDescriptions.Item span={1} valueType="text" ellipsis label="Khói">
            {record.sensors.smokeValue}
          </ProDescriptions.Item>
          <ProDescriptions.Item
            label="Dung lượng Pin:"
            tooltip="Dung lượng pin, tối đa là 5000"
          >
            {record.battery.voltage}
          </ProDescriptions.Item>
          <ProDescriptions.Item
            span={1}
            valueType="text"
            ellipsis
            label="Nguồn"
          >
            {record.battery.source.toUpperCase()}
          </ProDescriptions.Item>
          <ProDescriptions.Item
            label="Time Updated"
            valueType="dateTime"
            span={2}
          >
            {dayjs(record.updatedAt).valueOf()}
          </ProDescriptions.Item>
          <ProDescriptions.Item span={2}>
            <Divider style={{ margin: "4px 0" }}></Divider>
          </ProDescriptions.Item>
          <ProDescriptions.Item span={2} valueType="text" ellipsis>
            <Title level={3}>Tín Hiệu</Title>
          </ProDescriptions.Item>
          <ProDescriptions.Item span={1} valueType="text" ellipsis label="Band">
            {record.signal.band}
          </ProDescriptions.Item>
          <ProDescriptions.Item
            span={1}
            valueType="text"
            ellipsis
            label="deviceNetworkRssiDbm"
          >
            {record.signal.deviceNetworkRssiDbm}
          </ProDescriptions.Item>
          <ProDescriptions.Item
            span={2}
            valueType="text"
            ellipsis
            label="gsmStatus"
          >
            {record.signal.gsmStatus}
          </ProDescriptions.Item>
          <ProDescriptions.Item span={2} valueType="text" ellipsis>
            <Title level={3}>Network</Title>
          </ProDescriptions.Item>
          <ProDescriptions.Item
            span={1}
            valueType="text"
            ellipsis
            label="absoluteRadioFrequencyChannel"
          >
            {record.signal.networkReport.absoluteRadioFrequencyChannel}
          </ProDescriptions.Item>
          <ProDescriptions.Item
            span={1}
            valueType="text"
            ellipsis
            label="areaTacChangeCount"
          >
            {record.signal.networkReport.areaTacChangeCount}
          </ProDescriptions.Item>
          <ProDescriptions.Item
            span={1}
            valueType="text"
            ellipsis
            label="cellChangeCount"
          >
            {record.signal.networkReport.cellChangeCount}
          </ProDescriptions.Item>
          <ProDescriptions.Item
            span={1}
            valueType="text"
            ellipsis
            label="cellId"
          >
            {record.signal.networkReport.cellId}
          </ProDescriptions.Item>
          <ProDescriptions.Item
            span={1}
            valueType="text"
            ellipsis
            label="connectionStatus"
          >
            {record.signal.networkReport.connectionStatus}
          </ProDescriptions.Item>
          <ProDescriptions.Item
            span={1}
            valueType="text"
            ellipsis
            label="extendedDiscontinuousReception"
          >
            {record.signal.networkReport.extendedDiscontinuousReception}
          </ProDescriptions.Item>
          <ProDescriptions.Item
            span={1}
            valueType="text"
            ellipsis
            label="ipAddress"
          >
            {record.signal.networkReport.ipAddress}
          </ProDescriptions.Item>
          <ProDescriptions.Item span={1} valueType="text" ellipsis label="mcc">
            {record.signal.networkReport.mcc}
          </ProDescriptions.Item>
          <ProDescriptions.Item span={1} valueType="text" ellipsis label="mnc">
            {record.signal.networkReport.mnc}
          </ProDescriptions.Item>
          <ProDescriptions.Item
            span={1}
            valueType="text"
            ellipsis
            label="referenceSignalReceivedPower"
          >
            {record.signal.networkReport.referenceSignalReceivedPower}
          </ProDescriptions.Item>
          <ProDescriptions.Item
            span={1}
            valueType="text"
            ellipsis
            label="referenceSignalReceivedQuality"
          >
            {record.signal.networkReport.referenceSignalReceivedQuality}
          </ProDescriptions.Item>
          <ProDescriptions.Item
            span={1}
            valueType="text"
            ellipsis
            label="requestedActiveTime"
          >
            {record.signal.networkReport.requestedActiveTime}
          </ProDescriptions.Item>
          <ProDescriptions.Item
            span={1}
            valueType="text"
            ellipsis
            label="requestedPeriodicTrackingAreaUpdate"
          >
            {record.signal.networkReport.requestedPeriodicTrackingAreaUpdate}
          </ProDescriptions.Item>
          <ProDescriptions.Item span={1} valueType="text" ellipsis label="tac">
            {record.signal.networkReport.tac}
          </ProDescriptions.Item>
          <ProDescriptions.Item
            label="Time Updated"
            valueType="dateTime"
            span={2}
          >
            {dayjs(record.signal.networkReport.updatedAt).valueOf()}
          </ProDescriptions.Item>
        </ProDescriptions>
      </ModalForm>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: "copy", name: "Edit" },
          { key: "delete", name: "Delete" },
        ]}
      />,
    ],
  },
];

const DeviceList: FunctionComponent<DeviceListProps> = () => {
  const { token } = useToken();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const userToken = useAppSelector(userData)?.currentUser as tokenType;
  const actionRef = useRef<ActionType>();

  const axiosClient = createAxios(userToken, dispatch, loginSuccess);
  const devices = useAppSelector(devicesSelector)?.devices;

  // const deviceCount = devicesData.devicesCount;
  return (
    <div className="w-full py-4 px-12">
      <div className="p-4" style={{ color: token.colorText }}>
        <ProTable<deviceType>
          columns={columns}
          cardBordered
          editable={{
            type: "multiple",
          }}
          actionRef={actionRef}
          loading={loading}
          request={async () => {
            setLoading(true);
            await waitTime(2000);
            dispatch(fetchDataDevices(axiosClient));
            // eslint-disable-next-line @typescript-eslint/no-explicit-any

            setLoading(false);
            return {
              data: devices.map((device) => {
                const { customer, ...props } = device;
                return {
                  ...props,
                  ...customer,
                  url: "",
                  fullname: customer.fullName,
                };
              }),
            };
          }}
          columnsState={{
            persistenceKey: "pro-table-singe-demos",
            persistenceType: "localStorage",
            defaultValue: {
              option: { fixed: "right", disable: true },
            },
            onChange(value) {
              console.log("value: ", value);
            },
          }}
          rowKey="id"
          search={{
            labelWidth: "auto",
          }}
          options={{
            setting: {
              listsHeight: 400,
            },
          }}
          form={{
            syncToUrl: (values, type) => {
              if (type === "get") {
                return {
                  ...values,
                  created_at: [values.startTime, values.endTime],
                };
              }
              return values;
            },
          }}
          pagination={{
            pageSize: 5,
            onChange: (page) => console.log(page),
          }}
          dateFormatter="string"
          headerTitle="Danh Sách Thiết Bị"
          toolBarRender={() => [
            <Button
              key="button"
              icon={<PlusOutlined />}
              onClick={() => {}}
              type="primary"
            >
              Thêm
            </Button>,
            <Dropdown
              key="menu"
              menu={{
                items: [
                  {
                    label: "1st item",
                    key: "1",
                  },
                  {
                    label: "2nd item",
                    key: "1",
                  },
                  {
                    label: "3rd item",
                    key: "1",
                  },
                ],
              }}
            >
              <Button>
                <EllipsisOutlined />
              </Button>
            </Dropdown>,
          ]}
        />
      </div>
    </div>
  );
};

export default DeviceList;

import { Form, Input, Select, DatePicker, Button } from 'antd';

// eslint-disable-next-line
import styles from './index.module.css';

export default function TimerAddState({
  data: { users },
  state: { loading },
  actions: { submitForm },
}) {
  const [form] = Form.useForm();

  const { Option } = Select;
  const { RangePicker } = DatePicker;

  return (
    <div className={styles.wrapper}>
      <Form form={form} style={{ width: 400 }} onFinish={submitForm}>
        <Form.Item
          name="userIdx"
          label="User"
          labelCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: 'Please select the user!',
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Type to search"
            style={{ width: 400 }}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {users.map((user, idx) => (
              <Option key={idx} value={idx}>
                {user.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="time"
          label="Time range"
          labelCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: 'Please select the time range!',
            },
          ]}
        >
          <RangePicker
            showTime
            format="YYYY-MM-DD HH:mm"
            style={{ width: 400 }}
          />
        </Form.Item>
        <Form.Item
          name="note"
          label="Note"
          labelCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: 'Please add the note!',
            },
          ]}
        >
          <Input.TextArea rows={7} style={{ minWidth: 400, maxWidth: 400 }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

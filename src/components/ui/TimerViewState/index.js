import { useEffect } from 'react';
import { Form, Input, Select, DatePicker, Button, Popconfirm } from 'antd';
import moment from 'moment';

// eslint-disable-next-line
import styles from './index.module.css';

export default function TimerViewState({
  data: { timer },
  actions: { goBack, deleteTimer },
}) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (timer.id) {
      const { user, timeFrom, timeTo, duration, note } = timer;
      form.setFieldsValue({
        user: user,
        time: [moment(timeFrom), moment(timeTo)],
        duration: duration,
        note: note,
      });
    }
  }, [form, timer]);

  const { RangePicker } = DatePicker;

  return (
    <div className={styles.wrapper}>
      <Form form={form} style={{ width: 400 }}>
        <Form.Item name="user" label="User" labelCol={{ span: 24 }}>
          <Select style={{ width: 400 }} disabled={true} />
        </Form.Item>
        <Form.Item name="time" label="Time range" labelCol={{ span: 24 }}>
          <RangePicker
            showTime
            format="YYYY-MM-DD HH:mm"
            style={{ width: 400 }}
            disabled={true}
          />
        </Form.Item>
        <Form.Item name="duration" label="Duration" labelCol={{ span: 24 }}>
          <Input style={{ minWidth: 400, maxWidth: 400 }} disabled={true} />
        </Form.Item>
        <Form.Item name="note" label="Note" labelCol={{ span: 24 }}>
          <Input.TextArea
            rows={7}
            style={{ minWidth: 400, maxWidth: 400 }}
            disabled={true}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            style={{
              marginRight: '10px',
            }}
            onClick={goBack}
          >
            Go back
          </Button>
          <Popconfirm
            placement="topRight"
            title="Are you sure to delete this timer?"
            onConfirm={() => deleteTimer(timer.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Form.Item>
      </Form>
    </div>
  );
}

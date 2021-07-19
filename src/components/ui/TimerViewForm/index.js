import { useEffect } from 'react';
import { Form, Input, Select, DatePicker, Button, Popconfirm } from 'antd';
import moment from 'moment';

// eslint-disable-next-line
import styles from './index.module.css';

export default function TimerViewForm({
  data: { timer },
  methods: { closeTimer, deleteTimer },
}) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (timer) {
      const { user, timeFrom, timeTo, duration, note } = timer;
      form.setFieldsValue({
        user: user,
        time: [moment(timeFrom), moment(timeTo)],
        duration: duration,
        note: note,
      });
    }
  }, [form, timer]);

  return (
    <div className={styles.wrapper}>
      <Form form={form} className={styles.form}>
        <Form.Item name="user" label="User" labelCol={{ span: 24 }}>
          <Select style={{ width: '100%' }} disabled={true} />
        </Form.Item>
        <Form.Item name="time" label="Time range" labelCol={{ span: 24 }}>
          <DatePicker.RangePicker
            showTime
            format="YYYY-MM-DD HH:mm"
            style={{ width: '100%' }}
            disabled={true}
          />
        </Form.Item>
        <Form.Item name="duration" label="Duration" labelCol={{ span: 24 }}>
          <Input style={{ width: '100%' }} disabled={true} />
        </Form.Item>
        <Form.Item name="note" label="Note" labelCol={{ span: 24 }}>
          <Input.TextArea rows={6} style={{ width: '100%' }} disabled={true} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            style={{
              marginRight: '10px',
            }}
            onClick={closeTimer}
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

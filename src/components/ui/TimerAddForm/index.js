import { useEffect, useState } from 'react';
import { Form, Input, Select, DatePicker, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line
import styles from './index.module.css';

export default function TimerAddForm({
  data: { loading },
  methods: { submitForm },
}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Sorry, something went wrong.');
        }
      })
      .then(json => setUsers(json))
      .catch(() => {});
  }, []);

  const preSubmitForm = form => {
    const { userIdx, time, note } = form;
    const [timeFrom, timeTo] = time;

    const timer = {
      id: uuidv4(),
      user: users[userIdx],
      time: [
        timeFrom.format('YYYY-MM-DD HH:mm'),
        timeTo.format('YYYY-MM-DD HH:mm'),
      ],
      note,
    };

    submitForm(timer);
  };

  return (
    <div className={styles.wrapper}>
      <Form className={styles.form} onFinish={preSubmitForm}>
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
            style={{ width: '100%' }}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {users.map((user, idx) => (
              <Select.Option key={idx} value={idx}>
                {user.name}
              </Select.Option>
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
          <DatePicker.RangePicker
            showTime
            format="YYYY-MM-DD HH:mm"
            style={{ width: '100%' }}
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
          <Input.TextArea rows={6} style={{ width: '100%' }} />
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

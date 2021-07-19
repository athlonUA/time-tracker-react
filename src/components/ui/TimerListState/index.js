import { useHistory } from 'react-router-dom';
import { Table, Typography } from 'antd';

// eslint-disable-next-line
import styles from './index.module.css';

export default function TimerListState({ data: { timers } }) {
  const history = useHistory();

  const columns = [
    {
      title: 'User',
      dataIndex: 'user',
      width: '200px',
    },
    {
      title: 'Start date',
      dataIndex: 'timeFrom',
      width: '180px',
    },
    {
      title: 'End date',
      dataIndex: 'timeTo',
      width: '180px',
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      width: '130px',
    },
    {
      title: 'Note',
      dataIndex: 'note',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, timer) => {
        return (
          <Typography.Link
            onClick={() => {
              history.push(`/view/${timer.id}`);
            }}
          >
            View
          </Typography.Link>
        );
      },
      width: '100px',
    },
  ];

  return (
    <>
      <Table
        rowKey="id"
        dataSource={timers}
        columns={columns}
        pagination={false}
      />
    </>
  );
}

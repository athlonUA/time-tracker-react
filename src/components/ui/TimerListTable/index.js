import { Table, Typography } from 'antd';

// eslint-disable-next-line
import styles from './index.module.css';

export default function TimerListTable({
  data: { timers },
  methods: { viewTimer },
}) {
  return (
    <>
      <Table rowKey="id" dataSource={timers} pagination={false}>
        <Table.Column title="User" dataIndex="user" width="200px" />
        <Table.Column title="Start date" dataIndex="timeFrom" width="180px" />
        <Table.Column title="End date" dataIndex="timeTo" width="180px" />
        <Table.Column title="Duration" dataIndex="duration" width="130px" />
        <Table.Column title="Note" dataIndex="note" />
        <Table.Column
          title="Action"
          dataIndex="action"
          width="120px"
          render={(_, timer) => (
            <>
              <Typography.Link onClick={() => viewTimer(timer.id)}>
                View
              </Typography.Link>
            </>
          )}
        />
      </Table>
    </>
  );
}

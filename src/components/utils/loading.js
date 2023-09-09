import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const loading = (
  <LoadingOutlined style={{ fontSize: 24, }} spin />
);
const styles = {
  margin: "auto",
  width: "24px",
}
const Loading = () => <div style={styles}><Spin indicator={loading} /></div>;
export default Loading;
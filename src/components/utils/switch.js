import React from 'react';
import { Switch } from 'antd';

const MySwitch = (props) => <Switch defaultChecked onClick={props.clickHandler} onChange={props.onChange} />;
export default MySwitch;
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import "./index.scss";
import { locUpdate} from "../../api/auth.js";
import { getList} from "../../api/auth.js";
import { Geolocation } from '@capacitor/geolocation';
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Table, Tag, Space } from 'antd';



export default function Home() {

  const [userList, setUserList] = useState(false);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Mobile Number',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: 'Latitude',
      dataIndex: 'lat',
      key: 'lat',
    },
    {
      title: 'Longitude',
      dataIndex: 'lng',
      key: 'lng',
    },
    
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <div className="map">
        <iframe
          width="100%"
          height="170"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src={`https://maps.google.com/maps?q=${record?.lat},${record?.lng}&hl=es&z=14&amp;&output=embed`}
        ></iframe>
      </div>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  
  

  let history = useHistory();
  const location = useLocation();

  
  useEffect(async() => {
  const Users=  await getList();
  console.log("users",Users);
  setUserList(Users?.data)
     
  }, []);

  return (
    <div className="home">
    <Table columns={columns} dataSource={userList} />
    </div>
  );
}

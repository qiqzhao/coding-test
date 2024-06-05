import React from 'react';
import { Avatar, Button, Tag } from 'antd';
import styled from 'styled-components';
import { createUser } from '../api/user';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreateButton = styled(Button)`
  margin-top: 24px;
`;

export const NotData = () => {
  const handleCreatUser = async () => {
    await createUser({
      avatar: 'https://p.ipic.vip/hllizo.JPG',
      city: 'Guangdong Huizhou',
      country: 'China',
      email: 'bme_ritter@foxmail.com',
      name: 'Qiqi Zhao',
      phone: '13152486382',
      role: 'FRONTEND',
      _id: '665ee30d488e7c70da14d48b',
    });
    window.location.reload();
  };

  return (
    <Container>
      <div>No User</div>
      <CreateButton type="primary" onClick={handleCreatUser}>
        Create User
      </CreateButton>
    </Container>
  );
};

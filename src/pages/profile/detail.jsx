import React from 'react';
import { Avatar, Button, Tag } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ROLE_LABEL_MAP = {
  FRONTEND: 'cyan',
  BACKEND: 'blue',
  QA: 'orange',
  PM: 'magenta',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
`;

const NameLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

const StyledTag = styled(Tag)`
  margin-left: 8px;
  height: 22px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  color: #111111;
`;

const InformationLine = styled.div`
  height: 24px;
`;

const OperationPanel = styled.div`
  margin-top: 24px;
  text-align: center;
`;

export const ProfileDetail = () => {
  return (
    <Container>
      <Avatar size={150} src="https://p.ipic.vip/hllizo.JPG" />

      <NameLine>
        <h3>Qiqi Zhao</h3>
        <StyledTag color={ROLE_LABEL_MAP.FRONTEND}>Role</StyledTag>
      </NameLine>

      <Detail>
        <InformationLine>
          <span>Country: </span>
          <strong>China</strong>
        </InformationLine>
        <InformationLine>
          <span>City: </span>
          <strong>Guangdong Huizhou</strong>
        </InformationLine>
        <InformationLine>
          <span>Phone: </span>
          <strong>13152486382</strong>
        </InformationLine>
        <InformationLine>
          <span>Email: </span>
          <strong>bme_ritter@foxmail.com</strong>
        </InformationLine>
      </Detail>

      <OperationPanel>
        <Button type="primary">
          <Link to="/profile/edit">Edit Profile</Link>
        </Button>
      </OperationPanel>
    </Container>
  );
};

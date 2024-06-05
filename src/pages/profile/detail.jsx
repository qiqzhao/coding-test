import React, { useEffect, useState } from 'react';
import { Avatar, Button, Tag } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getUser } from '../../api/user';
import { NotData } from '../../components/no-data';

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

const USER_ID = '665ee30d488e7c70da14d48b';

export const ProfileDetail = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUserInfo(id) {
      const data = await getUser(id);
      setUser(data);
    }
    getUserInfo(USER_ID);
  }, []);

  return (
    <Container>
      {!!user ? (
        <>
          <Avatar size={150} src={user?.avatar} />

          <NameLine>
            <h3>{user?.name}</h3>
            <StyledTag color={ROLE_LABEL_MAP[user?.role || 'FRONTEND']}>{user?.role}</StyledTag>
          </NameLine>

          <Detail>
            <InformationLine>
              <span>Country: </span>
              <strong>{user?.country}</strong>
            </InformationLine>
            <InformationLine>
              <span>City: </span>
              <strong>{user?.city}</strong>
            </InformationLine>
            <InformationLine>
              <span>Phone: </span>
              <strong>{user?.phone}</strong>
            </InformationLine>
            <InformationLine>
              <span>Email: </span>
              <strong>{user?.email}</strong>
            </InformationLine>
          </Detail>

          <OperationPanel>
            <Button type="primary">
              <Link to={`/profile/edit/${user?._id}`}>Edit Profile</Link>
            </Button>
          </OperationPanel>
        </>
      ) : (
        <NotData />
      )}
    </Container>
  );
};

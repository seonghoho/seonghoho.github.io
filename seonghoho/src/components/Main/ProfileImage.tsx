import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';

// 스타일 정의
const ProfileImageWrapper = styled.div`
    width: 120px;
    height: 120px;
    margin-bottom: 30px;
    border-radius: 50%;
    overflow: hidden; // 이미지가 둥글게 잘리도록 설정

    @media (max-width: 768px) {
        width: 80px;
        height: 80px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover; // 이미지가 래퍼 크기에 맞게 조절
    }
`;

// 컴포넌트 정의
const ProfileImage: FunctionComponent = function() {
  return (
    <ProfileImageWrapper>
      <StaticImage src="../../images/profileImage.jpg" alt="Profile Image" />
    </ProfileImageWrapper>
  );
};

export default ProfileImage;
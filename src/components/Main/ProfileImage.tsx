import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 50%;
  height: 80%;
  margin-bottom: 30px;
  border-radius: 20px;

  @media (max-width: 1050px) {
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 40vh;
  }

  @media (max-width: 450px) {
    /* width: 80%; */
    height: 60%;
  }
`

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage,
}) {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export default ProfileImage

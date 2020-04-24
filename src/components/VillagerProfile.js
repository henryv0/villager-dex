import React from 'react';
import styled from 'styled-components';
import vars from './styleVars';

const Passport = styled.div`
  display: block;
  position: absolute;
  padding: 1rem;
  width: calc(100% - 4rem);
  background-color: #fbf8dc;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23ccceb0' fill-opacity='0.24' fill-rule='evenodd'/%3E%3C/svg%3E");

  border-radius: 30px 0 0 30px;
  border-bottom: 4px solid ${vars.fontSecondary};
  color: ${vars.fontPrimary};

  // transform: translateY(100%);
  transition: 1s;
  transform: ${(props) =>
    props.isActive ? 'translateX(0)' : ' translateX(100%)'};

  @media (min-width: 768px) {
    padding: 4rem 0 0;
    border-radius: 0 0 30px 30px;
    transform: ${(props) =>
      props.isActive ? 'translateY(0)' : ' translateY(-100%)'};
  }
`;

const Hr = styled.hr`
  display: none;

  @media (min-width: 768px) {
    display: block;
    border-top: 1px dashed ${vars.fontSecondary};
    margin-bottom: 1.5rem;
  }
`;

const PassportHeading = styled.h2`
  text-transform: uppercase;
  line-height: 0.5;
  text-align: center;
  font-size: 1rem;
  color: ${vars.fontSecondary};
`;

const HeadingLines = styled.span`
  display: inline-block;
  position: relative;

  :before,
  :after {
    content: '';
    position: absolute;
    height: 5px;
    border-bottom: 1px solid ${vars.fontSecondary};
    top: 0;
    width: 75px;
  }
  :before {
    right: 100%;
    margin-right: 15px;
  }
  :after {
    left: 100%;
    margin-left: 15px;
  }
`;

const Profile = styled.div`
  // visibility: ${(props) => (props.isActive ? 'visible' : 'hidden')}
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 .5rem 3rem;
  justify-content: center;

  // background-color: #e8dbcd;
  // background-image: url("data:image/svg+xml,%3Csvg width='84' height='84' viewBox='0 0 84 84' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f9eee2' fill-opacity='0.4'%3E%3Cpath d='M84 23c-4.417 0-8-3.584-8-7.998V8h-7.002C64.58 8 61 4.42 61 0H23c0 4.417-3.584 8-7.998 8H8v7.002C8 19.42 4.42 23 0 23v38c4.417 0 8 3.584 8 7.998V76h7.002C19.42 76 23 79.58 23 84h38c0-4.417 3.584-8 7.998-8H76v-7.002C76 64.58 79.58 61 84 61V23zM59.05 83H43V66.95c5.054-.5 9-4.764 9-9.948V52h5.002c5.18 0 9.446-3.947 9.95-9H83v16.05c-5.054.5-9 4.764-9 9.948V74h-5.002c-5.18 0-9.446 3.947-9.95 9zm-34.1 0H41V66.95c-5.053-.502-9-4.768-9-9.948V52h-5.002c-5.184 0-9.447-3.946-9.95-9H1v16.05c5.053.502 9 4.768 9 9.948V74h5.002c5.184 0 9.447 3.946 9.95 9zm0-82H41v16.05c-5.054.5-9 4.764-9 9.948V32h-5.002c-5.18 0-9.446 3.947-9.95 9H1V24.95c5.054-.5 9-4.764 9-9.948V10h5.002c5.18 0 9.446-3.947 9.95-9zm34.1 0H43v16.05c5.053.502 9 4.768 9 9.948V32h5.002c5.184 0 9.447 3.946 9.95 9H83V24.95c-5.053-.502-9-4.768-9-9.948V10h-5.002c-5.184 0-9.447-3.946-9.95-9zM50 50v7.002C50 61.42 46.42 65 42 65c-4.417 0-8-3.584-8-7.998V50h-7.002C22.58 50 19 46.42 19 42c0-4.417 3.584-8 7.998-8H34v-7.002C34 22.58 37.58 19 42 19c4.417 0 8 3.584 8 7.998V34h7.002C61.42 34 65 37.58 65 42c0 4.417-3.584 8-7.998 8H50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-color: #ece7cc;
  background-image: url("data:image/svg+xml,%3Csvg width='48' height='32' viewBox='0 0 48 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f5efd5' fill-opacity='1'%3E%3Cpath d='M27 32c0-3.314 2.686-6 6-6 5.523 0 10-4.477 10-10S38.523 6 33 6c-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 6.627 0 12 5.373 12 12s-5.373 12-12 12c-2.21 0-4 1.79-4 4h-2zm-6 0c0-3.314-2.686-6-6-6-5.523 0-10-4.477-10-10S9.477 6 15 6c3.314 0 6-2.686 6-6h-2c0 2.21-1.79 4-4 4C8.373 4 3 9.373 3 16s5.373 12 12 12c2.21 0 4 1.79 4 4h2z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 2.5rem;
  }
`;

const ProfileFields = styled.div`
  padding-top: 0.5rem;
  flex: 1;
  max-width: 100%;
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    flex: 1 1 60%;
    max-width: 60%;
  }
`;

const ProfileField = styled.p`
  border-bottom: 1px solid #fbf8dc;
  margin: 0;
  padding: 0.8rem;
  color: ${(props) =>
    props.importance === 'subtext' ? vars.fontSecondary : vars.fontPrimary};
  font-size: ${(props) => (props.text === 'large' ? '1.5rem' : '1rem')};
  font-weight: bold;
`;

const HelloField = styled.p`
  // position: absolute;
  // width: 100%;
  margin: 0.5rem;
  border-radius: 20px;
  background-color: #fbf8dc;
  padding: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  color: ${vars.fontSecondary};

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const ProfilePic = styled.div`
  flex: 1 1 40%;
  margin-right: 1rem;
  margin-top: 1rem;
`;

const Img = styled.img`
  border-radius: 25px;
  border: 8px solid #fbf8dc;
  object-fit: cover;
  width: 150px;
  height: 160px;
  background-color: #eaeed4;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%23c0d0a5' fill-opacity='0.4' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E");
`;

const PassportMarks = styled.span`
  color: ${vars.fontSecondary};
  position: absolute;
  right: 2.5rem;
  bottom: 0.5rem;
`;

const VillagerProfile = ({data, isActive}) => {
  const { name, image, personality, birthday, phrase, skill, species } = data;

  return (
    <Passport isActive={isActive}>
      <Hr></Hr>
      <PassportHeading>
        <HeadingLines>Passport</HeadingLines>
      </PassportHeading>

      <Profile>
        <ProfilePic>
          <Img src={image} alt={name} />
        </ProfilePic>

        <ProfileFields>
          <HelloField>Sup, {phrase}!</HelloField>
          {/* <ProfileField>{species}</ProfileField> */}
          <ProfileField>{personality}</ProfileField>
          <ProfileField text="large">{name}</ProfileField>
          <ProfileField>Skill: {skill}</ProfileField>
          <ProfileField importance="subtext">Born {birthday}</ProfileField>
        </ProfileFields>
      </Profile>

      <PassportMarks>
        &lsaquo; &lsaquo; &lsaquo; &lsaquo; &lsaquo; &lsaquo; &lsaquo; &lsaquo;
        &lsaquo; &lsaquo; &lsaquo; &lsaquo; &lsaquo; &lsaquo; &lsaquo;
      </PassportMarks>
    </Passport>
  );
};

export default VillagerProfile;
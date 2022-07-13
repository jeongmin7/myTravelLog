import styled from "styled-components";
import travel from "../assets/travel.jpg";
import React, { useRef, useState } from "react";
import { LoginReqType } from "../types";
import { useDispatch } from "react-redux";
export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;
export const Content = styled.div`
  margin-top: 40px;
  background-color: #f1f9f9;
  margin: auto;
  width: 800px;
  height: 500px;
`;
export const Title = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: #18978f;
  text-transform: uppercase;
  margin-top: 80px;
`;
export const SubTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Underline = styled.div`
  width: 200px;
  height: 6px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  background: linear-gradient(to right, #18978f, #e9dac1);
`;
export const Email = styled.div`
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  margin-top: 40px;
  text-align: left;
  padding-left: 40px;
`;
export const Password = styled.div`
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
  text-align: left;
  padding-left: 40px;
`;
export const Input = styled.input`
  width: 100%;
  border-radius: 1px;
  border-width: 1px;
  font-family: Roboto;
`;
export const InputArea = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
`;
export const ButtonArea = styled.div`
  text-align: center;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 20px;
`;
export const Button = styled.button`
  border-color: #28546a;
  background-color: #28546a;
  text-transform: uppercase;
  border-radius: 1px;
  border-width: 2px;
  color: white;
  width: 100%;
  :hover {
    background-color: #28546a;
    color: white;
  }
`;
export const Img = styled.img`
  height: 500px;
  width: 400px;
  float: left;
`;
export const CoreContent = styled.div`
  height: 500px;
  width: 350px;
  float: right;
  padding-left: 25px;
  padding-right: 25px;
`;

interface SigninProps {
  login: (reqData: LoginReqType) => void;
}

const Signin: React.FC<SigninProps> = ({ login }) => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const handleInputValue =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginInfo({ ...loginInfo, [key]: e.target.value });
    };
  const handleLogin = () => {};

  return (
    <Container>
      <Content>
        <div>
          <Img src={travel} />
        </div>
        <CoreContent>
          <Title>My Travel</Title>
          <SubTitle>Please Note Your Journey</SubTitle>
          <Underline />
          <Email>
            Email
            <span> *</span>
          </Email>
          <InputArea>
            <Input
              placeholder="Email"
              autoComplete="email"
              name="email"
              onChange={handleInputValue("email")}
            />
          </InputArea>
          <Password>
            Password
            <span> *</span>
          </Password>
          <InputArea>
            <Input
              type="password"
              autoComplete="current-password"
              name="Password"
              placeholder="Password"
              onChange={handleInputValue("password")}
            />
          </InputArea>
          <ButtonArea>
            <Button onClick={handleLogin}>Sign In</Button>
          </ButtonArea>
        </CoreContent>
      </Content>
    </Container>
  );
};
export default Signin;

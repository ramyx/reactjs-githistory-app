import styled from "styled-components";
import Table from "../components/Table";
import { Center } from "../styles/Center";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const SubTitle = styled.h1`
  font-size: 1.2em;
  text-align: center;
  color: blue;
`;

const Wrapper = styled.section`
  padding: 4em;
`;

export const Commit = () => {
    return (
        <Wrapper>
            <Title>
                Commit History App!
            </Title>
            <SubTitle>
                FrontEnd
            </SubTitle>
            <Center V H>
                <Table data={[
                    { key1: "value11", key2: "value21"},
                    { key1: "value12", key2: "value22"},
                    { key1: "value13", key2: "value23"},
                ]} />
            </Center>
            <SubTitle>
                Backend
            </SubTitle>
        </Wrapper>
    );
}
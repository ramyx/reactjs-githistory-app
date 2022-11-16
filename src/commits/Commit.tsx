import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Table from "../components/Table";
import { Center } from "../styles/Center";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #3bd147;
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
    const [commitsFront, setcommitsFront] = useState();
    const [commitsBack, setcommitsBack] = useState();

    useEffect(() => {
        getCommits();
    }, []);

    const getCommits = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + `/commit/commits`);
            console.log(response.data);
            setcommitsFront(response.data.frontend.map((c: any) => {
                return {
                    sha: c.sha || '',
                    author_name: c.commit.author.name || '',
                    author_email: c.commit.author.email  ,
                    date: c.commit.author.date || '' ,
                    message: c.commit.message || ''
                }
            }));
            setcommitsBack(response.data.backend.map((c: any) => {
                return {
                    sha: c.sha || '',
                    author_name: c.commit.author.name || '' ,
                    author_email: c.commit.author.email  || '' ,
                    date: c.commit.author.date  || '',
                    message: c.commit.message || ''
                }
            }));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Wrapper>
            <Title>
                Commit History App!
            </Title>
            <SubTitle>
                FrontEnd
            </SubTitle>
            <Center V H>
                {commitsFront && <Table data={commitsFront} />}

            </Center>
            <SubTitle>
                Backend
            </SubTitle>
            <Center V H>
                {commitsBack && <Table data={commitsBack} />}
            </Center>
        </Wrapper>
    );
}
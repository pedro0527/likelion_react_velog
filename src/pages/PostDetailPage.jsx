import React from "react";
import { useParams } from "react-router-dom";
import { dummy_data } from "../data/dummy_data";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const MetaInfo = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14.4px;
  color: gray;
  margin-top: 0;
`;

const Author = styled.p`
  color: #212529;
  font-weight: bold;
`;

const Separator = styled.p`
  margin-left: 8px;
  margin-right: 8px;
`;

const TagList = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 14px;
  margin-bottom: -14px;
  min-height: 14px;
`;

const TagItem = styled.div`
  display: flex;
  margin-bottom: 14px;
  background: #F8F9FA;
  padding-left: 16px;
  padding-right: 16px;
  height: 32px;
  border-radius: 16px;
  align-items: center;
  margin-right: 14px;
  color: #12b886;
  font-weight: 500;
  font-size: 16px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 20px;
`;

const TextContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 10px;
`;

function PostDetailPage() {
  const { postID } = useParams();
  const post = dummy_data.find((post) => post.postID === parseInt(postID));

  return (
    <Container>
      <Title>[{post.title}]  {post.content}</Title>
      <MetaInfo>
        <Author>수용</Author> 
        <Separator>·</Separator>
        {post.createdAt}
      </MetaInfo>
      <TagList>
          <TagItem>React</TagItem>
          <TagItem>최강멋사</TagItem>
      </TagList>
      <Image src={post.thumbnail} alt={post.title} />
      <TextContent>{post.content}</TextContent>
    </Container>
  );
}

export default PostDetailPage;

import React from "react";
import { Link } from "react-router-dom";
import { dummy_data } from "../data/dummy_data";
import { MdOutlineTrendingUp, MdRssFeed, MdArrowDropDown } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LuClock4 } from "react-icons/lu";

import styled from "styled-components";

const NavbarWrapper = styled.div`
  padding: 30px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavbarLeft = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const NavbarRight = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavbarTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

const TabItem = styled.div`
  font-size: 18px;
  color: #868e96;
  display: flex;
  gap: 8px;
  align-items: center;
  margin-left: 1rem;

  &.active {
    font-size: 18px;
    color: #212529;
    font-weight: 700;
  }
`;

const ActiveTabIndicator = styled.div`
  left: 2%;
  width: 33%;
  position: absolute;
  height: 2px;
  background-color: #343a40;
  bottom: -10px;
`; 

const ActiveTabItem = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #212529;
  font-weight: 700;
`;

const FilterSelector = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  width: 70px;
  height: 32px;

  display: flex;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff; 
  border-radius: 4px;
  margin-right: 10px;
  font-weight: 600;
  color: #495957;
  box-shadow: 0 0 4px rgba(0, 0, 0, .05);
`;

const PostCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const PostCard = styled(Link)`
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  width: 300px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const PostThumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const PostDate = styled.p`
  color: gray;
`

function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarLeft>
        <NavbarTabs>
          <ActiveTabItem>
            <MdOutlineTrendingUp/>
            <span>트렌딩</span>
          </ActiveTabItem>
          <TabItem>
            <LuClock4/>
            <span>최신</span>
          </TabItem>
          <TabItem>
            <MdRssFeed/>
            <span>피드</span>
          </TabItem>
          <ActiveTabIndicator />
        </NavbarTabs>
      </NavbarLeft>
      <NavbarRight>
        <FilterSelector>
          이번주
          <MdArrowDropDown/>
        </FilterSelector>
        <HiOutlineDotsVertical color="#868e96" />
      </NavbarRight>
    </NavbarWrapper>
  );
}

function HomePage() {
  return (
    <>
      <Navbar />
      <PostCardContainer>
        {dummy_data.map((post) => (
          <PostCard key={post.postID} to={`detail/${post.postID}`}>
            <PostThumbnail src={post.thumbnail} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <PostDate>{post.createdAt}</PostDate>
          </PostCard>
        ))}
      </PostCardContainer>
    </>
  );
}

export default HomePage;

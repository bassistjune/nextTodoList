"use client";
import React from "react";
import { RecoilRoot } from "recoil";
import styled from "@emotion/styled";

import BreadCrumbs from "../common/breadCrumbs";
import TextComponent from "../common/InputText"
import Contents from "../common/contents"

const Container = styled.main``;

interface Props {}

const TodoUserListPage: React.FC = () => {
  return (
    <RecoilRoot>
        <Container>
            <BreadCrumbs />
            <TextComponent />
            <Contents />
        </Container>
    </RecoilRoot>
  );
};

export default TodoUserListPage;

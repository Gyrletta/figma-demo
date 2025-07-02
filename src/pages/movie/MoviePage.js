import React from "react";
import { Container } from "../../components/Container/index";
import {
  Tile,
  Image,
  Content,
  Title,
  Year,
  Tags,
  Tag,
  Description,
} from "../../components/Tile/index";

const MoviePage = () => {
  return (
    <Container>
      <Tile>
        <Image src={poster} alt="" />
        <Content>
          <Title>Mulan</Title>
          <Year>2020</Year>
          <Tags>
            <Tag>Action</Tag>
            <Tag>Adventure</Tag>
            <Tag>Drama</Tag>
          </Tags>
          <Description>
            A young Chinese maiden disguises herself as a male warrior in order
            to save her father. Disguises herself as a male warrior in order to
            save her father. A young Chinese maiden disguises herself as a male
            warrior in order to save her father.
          </Description>
        </Content>
      </Tile>
    </Container>
  );
};

export default MoviePage;

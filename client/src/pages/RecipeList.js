import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/projects")
      .then((r) => r.json())
      .then(setRecipes);
  }, []);

  return (
    <Wrapper>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <Recipe key={recipe.id}>
            <Box>
              <h2>{recipe.name}</h2>
              <p>
              {recipe.description}
                
              </p>
              <ReactMarkdown>{recipe.instructions}</ReactMarkdown>
            </Box>
          </Recipe>
        ))
      ) : (
        <>
          <h2>No Recipes Found</h2>
          <Button as={Link} to="/new">
            Make a New Recipe
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Recipe = styled.article`
  margin-bottom: 24px;
`;

export default RecipeList;

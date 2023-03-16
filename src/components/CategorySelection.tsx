import React from 'react';
import { useRouter } from 'next/router';
import { Message, CategoriesContainer, Category } from './CategorySelectionStyle';
import Button from './Button';

interface Props {
  categories: string[];
}

const CategorySelection: React.FC<Props> = ({ categories }) => {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`/quiz?category=${category}`);
  };

  return (
    <>
      <Message>Please choose a category:</Message>
      <CategoriesContainer>
        {categories.map((category) => (
          <Button key={category} onClick={() => handleCategoryClick(category)}>
            {category}
          </Button>
        ))}
      </CategoriesContainer>
    </>
  );
};

export default CategorySelection;

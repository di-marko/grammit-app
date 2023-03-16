import React from 'react';
import CategorySelection from '../components/CategorySelection';
import questions from '../data/questions';

const CategoryPage: React.FC = () => {
  const categories = Array.from(new Set(questions.map((question) => question.category)));

  return <CategorySelection categories={categories} />;
};

export default CategoryPage;

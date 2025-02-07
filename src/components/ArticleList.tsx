import React from 'react';
import Card from './Card';

const articles = [
  {
    title: '8 Food and Nutrition Trends for 2025, Predicted By The Experts',
    time: '15 minute read',
    image: 'https://blog.myfitnesspal.com/wp-content/uploads/2024/12/2025-nutrition-food-predictions.png',
  },
  {
    title: 'How to Prepare Thanksgiving Dinner for Less, According to a Dietitian',
    time: '15 minute read',
    image: 'https://blog.myfitnesspal.com/wp-content/uploads/2024/11/how-to-prepare-thanksgiving-dinner-for-less.jpg',
  },
  {
    title: "Dietitian Reacts to TikTok's New 'Protein Soda' Trend",
    time: '8 minute read',
    image: 'https://blog.myfitnesspal.com/wp-content/uploads/2024/10/protein-soda-trend.jpg',
  },
];

const ArticleList = () => {
  return (
    <section className="px-4 py-12">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <Card key={index} {...article} />
        ))}
      </div>
    </section>
  );
};

export default ArticleList;

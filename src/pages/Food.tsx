import HeroSection from '../components/HeroSection';
import ArticleList from '../components/ArticleList';
import Recipes from '../components/Recipes';
import Community from '../components/Community';

function Food() {
  return (
    <div className="container p-5 mx-auto font-sans">
      <HeroSection />
      <ArticleList />
      <Recipes />
      <Community />
    </div>
  );
}

export default Food;

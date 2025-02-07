import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Recipes() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
    const recipes = [
        {
          title: "Protein-Packed Cottage Cheese Queso",
          image: "https://blog.myfitnesspal.com/wp-content/uploads/2024/09/cottage-cheese-queso.jpg",
          nutrition: [
            { label: "Calories", value: "322" },
            { label: "Carbs", value: "7g" },
            { label: "Fat", value: "18.5g" },
            { label: "Protein", value: "28.5a" },
          ],
        },
        {
            title: "Easy Cucumber Salad",
            image: "https://blog.myfitnesspal.com/wp-content/uploads/2024/08/cucumber-salad.jpg",
            nutrition: [
              { label: "Calories", value: "154" },
              { label: "Carbs", value: "8.7g" },
              { label: "Fat", value: "3.8g" },
              { label: "Protein", value: "13.1a" },
            ],
          },
          {
            title: "Protein Pumpkin Pie",
            image: "https://blog.myfitnesspal.com/wp-content/uploads/2024/12/low_sugar_pumpkin_pie.jpeg",
            nutrition: [
              { label: "Calories", value: "148" },
              { label: "Carbs", value: "3.7g" },
              { label: "Fat", value: "6.9g" },
              { label: "Protein", value: "7.4ag" },
            ],
          },
        // Add more recipes here...
      ];
    
      return (
        <section className="container px-4 mx-auto my-8">
          <h2 className="mb-6 text-2xl font-semibold text-center">Recipes we're lovin' right now</h2>
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {recipes.map((recipe, index) => (
              <div
                key={index}
                className="min-w-[350px] border rounded-lg shadow hover:shadow-lg p-4" data-aos="fade-right"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="object-cover w-full rounded h-50"
                />
                <h3 className="mt-2 text-lg font-semibold">{recipe.title}</h3>
                <div className="mt-2">
                  {recipe.nutrition.map((item, i) => (
                    <p key={i} className="text-sm text-gray-600">
                      {item.label}: {item.value}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <a href="#" className="text-indigo-600 hover:underline">
              See More Recipes
            </a>
          </div>
        </section>
      );
}

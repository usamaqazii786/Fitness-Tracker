import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Exercises from "../asset/img/exercises.jpg";
import Exer from "../asset/images/category_chest.jpg";
// import Exer2 from "../asset/images/blank.png";
import Exer3 from "../asset/images/category_biceps.jpg"
import Exer4 from "../asset/images/category_triceps.jpg"
import Exer5 from "../asset/images/category_back.jpg"
import Exer6 from "../asset/images/category_shoulder.jpg"
import Exer7 from "../asset/images/category_legs.jpg"
import Exer8 from "../asset/images/category_abdominal.jpg"
import Exer9 from "../asset/images/category_combined.jpg"
import Exer10 from "../asset/images/category_cardio.jpg"
// import Abdominal from "../asset/images/exercises/1077_0_thumb.jpg"
import A1076_0_thumb from "../asset/images/exercises/1076_0_thumb.jpg"
import A1312_0_thumb from "../asset/images/exercises/1312_0_thumb.jpg"
import A1075_0_thumb from "../asset/images/exercises/1075_0_thumb.jpg"
import A1073_0_thumb from "../asset/images/exercises/1073_0_thumb.jpg"
import A1071_0_thumb from "../asset/images/exercises/1071_0_thumb.jpg"
import A1072_0_thumb from "../asset/images/exercises/1072_0_thumb.jpg"
import A1070_0_thumb from "../asset/images/exercises/1070_0_thumb.jpg"
import A1069_0_thumb from "../asset/images/exercises/1069_0_thumb.jpg"
import A1066_0_thumb from "../asset/images/exercises/1066_0_thumb.jpg"
import Auser11 from "../asset/images/exercises/user/11.jpg"
import Auser23794 from "../asset/images/exercises/user/23794.jpg";


const Landing = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
  const exercises = [
    {
      image: A1076_0_thumb,
      title: "Ab crunch machine",
      description: "Abs crunch machine",
    },
    {
      image: A1312_0_thumb,
      title: "Ab Rollout",
      description:
        "This exercise works the abs and lower back and is the proper version of an ab roller.",
    },
    {
      image: A1075_0_thumb,
      title: "Ab Rollout on Knees",
      description:
        "This exercise works the abs and lower back and is the proper version of an ab roller.",
    },
    {
      image: A1073_0_thumb,
      title: "Abdominal 4 Point Drawing In",
      description:
        "This is a simple but powerful exercise to strengthen the abs and core.",
    },
    {
      image: A1071_0_thumb,
      title: "Bent Knee Hip Raise",
      description: "This is a good exercise for core muscle development.",
    },
    {
      image: A1072_0_thumb,
      title: "Cross Body Crunches",
      description: "This version of the crunch works both the upper and lower portion of the abs.",
    },
    {
      image: A1070_0_thumb,
      title: "Crunches",
      description: "This is the most common abdominal exercise and possibly the most often improperly performed. Her...",
    },
    {
      image: A1069_0_thumb,
      title: "Crunches with Legs on Stability Ball",
      description: "This exercise uses a Stability Ball as the base during your crunches.",
    },
    {
      image: A1066_0_thumb,
      title: "Decline Crunches",
      description: "Using a decline crunch allows you keep your legs steady and isolate all of the abdominal muscles.",
    },
    {
      image: Auser11,
      title: "Decline Oblique Crunchese",
      description: "This version of a decline crunch isolates the oblique (side) muscles of the abs.",
    },
    {
      image: Auser23794,
      title: "Exercise Ball Pull-In",
      description: "This exercise uses a ball to isolate and work the lower abdominal muscles.",
    },
  ];

  return (
<>
<div className="min-h-screen bg-gray-100">
       <div>
      {/* Background Image and Title */}
      <div className="relative flex items-center justify-center bg-blue-500 h-60">
        <img
          src={Exercises}
          alt="Workout Background"
          className="absolute inset-0 object-cover w-full h-full opacity-60"
        />
        <h1 className="relative text-4xl font-bold text-white">Exercises</h1>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        <button className="px-4 py-2 text-sm font-medium text-blue-600 transition border border-blue-600 rounded hover:bg-blue-600 hover:text-white">
          Exercise List
        </button>
        <button className="px-4 py-2 text-sm font-medium text-blue-600 transition border border-blue-600 rounded hover:bg-blue-600 hover:text-white">
          Workout Plans
        </button>
      </div>

      {/* Section Title */}
      <h2 className="mt-5 text-2xl font-semibold text-center">Exercise List</h2>
    </div>
      {/* Top Images */}
      <div className="grid container justify-self-center grid-cols-3 gap-4 p-5 mx-5 w-[90%]" >
        <div className="relative" data-aos="zoom-in-right">
          <img
            src={Exer}
            width={'200px'}
            height={'200px'}
            alt="Abdominal"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 p-2 text-center text-white bg-black bg-opacity-50">
            Abdominal
          </div>
        </div>
        <div className="relative" data-aos="zoom-in-up">
          <img
            src={Exer3}
            width={'200px'}
            height={'200px'}
            alt="Combined"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 p-2 text-center text-white bg-black bg-opacity-50">
            Combined
          </div>
        </div>
        <div className="relative" data-aos="zoom-in-left">
          <img
            src={Exer4}
            width={'200px'}
            height={'200px'}
            alt="Cardio"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 p-2 text-center text-white bg-black bg-opacity-50">
            Cardio
          </div>
        </div>
        <div className="relative" data-aos="zoom-in-right">
          <img
            src={Exer5}
            width={'200px'}
            height={'200px'}
            alt="Abdominal"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 p-2 text-center text-white bg-black bg-opacity-50">
            Abdominal
          </div>
        </div>
        <div className="relative" data-aos="zoom-in">
          <img
            src={Exer6}
            width={'200px'}
            height={'200px'}
            alt="Combined"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 p-2 text-center text-white bg-black bg-opacity-50">
            Combined
          </div>
        </div>
        <div className="relative" data-aos="zoom-in-left">
          <img
            src={Exer7}
            width={'200px'}
            height={'200px'}
            alt="Cardio"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 p-2 text-center text-white bg-black bg-opacity-50">
            Cardio
          </div>
        </div>
        <div className="relative" data-aos="zoom-in-right">
          <img
            src={Exer8}
            width={'200px'}
            height={'200px'}
            alt="Abdominal"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 p-2 text-center text-white bg-black bg-opacity-50">
            Abdominal
          </div>
        </div>
        <div className="relative" data-aos="zoom-in-down">
          <img
            src={Exer9}
            width={'200px'}
            height={'200px'}
            alt="Combined"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 p-2 text-center text-white bg-black bg-opacity-50">
            Combined
          </div>
        </div>
        <div className="relative" data-aos="zoom-in-left">
          <img
            src={Exer10}
            width={'200px'}
            height={'200px'}
            alt="Cardio"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 p-2 text-center text-white bg-black bg-opacity-50">
            Cardio
          </div>
        </div>
      </div>

      {/* Abdominal Title */}
      <h2 className="my-6 text-2xl font-semibold text-center">Abdominal</h2>

      {/* Exercise Table */}
      <div className="container px-5 mx-auto mb-5">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300">Image</th>
                <th className="px-6 py-3 border-b-2 border-gray-300">Title</th>
                <th className="px-6 py-3 border-b-2 border-gray-300">Description</th>
              </tr>
            </thead>
            <tbody>
              {exercises.map((exercise, index) => (
                <tr key={index} className="hover:bg-gray-100" data-aos="fade-right">
                  <td className="px-6 py-4 border-b border-gray-200">
                    <img src={exercise.image} alt={exercise.title} className="w-12 h-12" />
                  </td>
                  <td className="px-6 py-4 font-semibold border-b border-gray-200">
                    {exercise.title}
                  </td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200">
                    {exercise.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
</>
  );
};

export default Landing;

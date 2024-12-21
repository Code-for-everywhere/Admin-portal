import { configureStore } from "@reduxjs/toolkit"
import testimonialReducer from "./testimonialSlice";
import awardReducer from "./awardSlice";
import blogReducer from "./blogSlice"
import careerReducer from "./careerSlice"
import eventReducer from "./eventSlice"
import galleryReducer from "./gallerySlice"
import serviceReducer from "./serviceSlice"
import teamReducer from "./teamSlice"

const store = configureStore (
    {
        reducer : {
            
            awards:awardReducer,
            blogs: blogReducer,
            career: careerReducer,
            events: eventReducer,
            gallery: galleryReducer,
            services: serviceReducer,
            team: teamReducer,
            testimonials: testimonialReducer,



        },
    },
);

export default store;
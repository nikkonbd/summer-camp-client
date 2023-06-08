// import React from 'react';

import Slider from "../../components/Carousel/Slider";
import PopularClasses from "../../components/PopularClassesSection/PopularClasses";
import MusicGroups from "../../components/musicGroups/MusicGroups";
import PopularInstructors from "../../components/populerInstructors/PopularInstructors";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <MusicGroups></MusicGroups>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;
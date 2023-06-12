// import React from 'react';

import { useEffect, useState } from "react";

const useInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    // console.log(instructors);

    useEffect(() => {
        fetch('https://summer-camp-school-server-nikkon1998-gmailcom.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
                setLoading(false);
            })
    }, [])

    return [instructors, loading];
};

export default useInstructors;
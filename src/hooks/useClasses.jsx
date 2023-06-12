// import React from 'react';

import { useEffect, useState } from "react";

const useClasses = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://summer-camp-school-server-nikkon1998-gmailcom.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
                setLoading(false);
            })
    }, [])

    return [classes, loading];
};

export default useClasses;
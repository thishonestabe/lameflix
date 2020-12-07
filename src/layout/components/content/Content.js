import React, {useEffect, useState} from "react";
import {useRouteMatch} from "react-router-dom";

export function Content({ children }) {
    const match = useRouteMatch() || {};
    const animationEndClass = "grid-animateContent-finished";
    const [cssClassesState, setCssClassesState] = useState([
        "grid-animateContent",
        animationEndClass
    ]);

    useEffect(() => {

        const fullClasses = [...cssClassesState];
        const startAnimation = fullClasses.filter(el => el !== animationEndClass);
        setCssClassesState(startAnimation);
        const timeOutId = setTimeout(() => {
            setCssClassesState(fullClasses);
        }, 200);

        return () => {
            clearTimeout(timeOutId);
        };

    }, [match.url]);

    return <>{children}</>;
}

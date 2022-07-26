import React from "react";

export default function Categories() {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const onClickCategory = (index) => {
        setActiveIndex(index)
    }
    const categories = ['All', 'Meat', 'Vegan', 'Grill']

    return (
        <div className="categories">
            <ul>
                {categories.map((value, index) => (
                    <li key={index} onClick={() => onClickCategory(index)}
                        className={activeIndex === index ? 'active' : ''}>
                        {value}
                    </li>
                ))}
            </ul>
        </div>
    )
}
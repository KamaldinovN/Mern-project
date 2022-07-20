import React from "react";
import Categories from "../components/Categories.js";
import Sort from "../components/Sort.js";
import Skeleton from "../components/Pizzablock/Skeleton.js";
import PizzaBlock from "../components/Pizzablock/pizza-block.js";


export const Home = () => {
    const [items, setItems] = React.useState([])
    const [isLoading, setLoading] = React.useState(true)

    React.useEffect(() => {
        fetch('/items')
            .then((res) => res.json())
            .then((arr) => {
console.log(arr)
                setItems(arr)
                setLoading(false)
            })
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">All pizza</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                    : items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)
                }
            </div>
        </>
    )
}
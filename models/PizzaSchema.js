import mongoose from "mongoose";

const pizza = new mongoose.Schema(
    {
        id: {
            type: Object,
            require: true,
        },
        image: {
            type: Object,
            require: true,
        },
        title: {
            type: Object,
            require: true,
        },
        types: {
            type: Object,
            require: true,
        },
sizes: {
            type: Object,
            require: true,
        },
        price: {
            type: Object,
            require: true,
        },
        category: {
            type: Object,
            require: true,
        },
        rating: {
            type: Object,
            require: true,
        },
    },
)

export default mongoose.model('pizza', pizza);
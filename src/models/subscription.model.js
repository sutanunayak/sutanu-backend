import mongoose, { Schema } from "mongoose"

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, // The user who subscribed
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId, // The channel to which the user subscribed
        ref: "User"
    }
}, {timestamps: true})



export const Subscription = mongoose.model("Subscription", subscriptionSchema)
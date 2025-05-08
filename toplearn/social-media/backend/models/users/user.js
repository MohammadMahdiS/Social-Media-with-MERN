import mongoose from "mongoose"

const userSchema = new mongoose.schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    profilePhoto: {
        type: String,
        default: ""
    },
    email: {
        type: String,
    },
    bio: {
        type: String,
    },
    password: {
        type: String,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isFollowing: {
        type: Boolean,
        default: false,
    },
    isAccountVerified: {
        type: Boolean,
        default: false    
    },
    accountVerificationToken: String,
    accountVerificationTokenExpires: Date,
    viewedBy: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    },
    followers: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    },
    following: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    },
    passwordChangeAt: Data,
    passwordResetToken: String,
    passwordResetExpire: Date,
    refresh_token:{
        type: String,
    }


},{
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
})


export default mongoose.model("User", userSchema)
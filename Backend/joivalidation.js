const joi=require("joi");

const validation=joi.object({
    name:joi.string().min(2).max(15).required(),
    ram:joi.number().max(99).required(),
    rom:joi.number().max(999).required(),
    os:joi.string().min(2).required(),
    image:joi.string().required(),
    price:joi.number().required(),
    review:joi.string().min(5),
    camera:joi.number(),
    battery:joi.number(),
    userData:joi.string()
})

module.exports=validation
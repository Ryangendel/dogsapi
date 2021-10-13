var express = require("express")
var app = express()
var PORT = process.env.PORT || 3000

var dogs = [
    {
    "fact": "All dogs can be traced back 40 million years ago to a weasel-like animal called the Miacis which dwelled in trees and dens. The Miacis later evolved into the Tomarctus, a direct forbear of the genus Canis, which includes the wolf and jackal as well as the dog.",
    "id":301
    },
    {
    "fact": "Ancient Egyptians revered their dogs. When a pet dog would die, the owners shaved off their eyebrows, smeared mud in their hair, and mourned aloud for days.",
    "id":302
    },
    {
    "fact": "Small quantities of grapes and raisins can cause renal failure in dogs. Chocolate, macadamia nuts, cooked onions, or anything with caffeine can also be harmful.",
    "id":303
    },
    {
    "fact": "Apple and pear seeds contain arsenic, which may be deadly to dogs.",
    "id":304
    },
    {
    "fact": "Rock star Ozzy Osborne saved his wife Sharon’s Pomeranian from a coyote by tackling ad wresting the coyote until it released the dog.",
    "id":307
},
    {
    "fact": "Dogs have sweat glands in between their paws.",
    "id":306
    },
    {
    "fact": "In 2003, Dr. Roger Mugford invented the \"wagometer,\" a device that claims to interpret a dog’s exact mood by measuring the wag of its tail.",
    "id":308
},
    {
    "fact": "Dogs have three eyelids. The third lid, called a nictitating membrane or \"haw,\" keeps the eye lubricated and protected.",
    "id":309
    }
]

app.get("/",(req, res)=>{
    res.send(dogs)
})

app.get("/dogs/:number", (req,res)=>{
    console.log(parseInt(req.params.number))
    var data = parseInt(req.params.number)
    fact = ""
    for (let i = 0; i < dogs.length; i++){
        if(dogs[i].id==data){
            console.log(dogs[i])
            fact = dogs[i]
        }
    }
    
    res.send(fact)
})

app.listen(3000)
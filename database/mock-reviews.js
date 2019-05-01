  //REVIEW
  //id_user --> foreign key
  //id_business --foreign key
  //text: string
  //rating_number: integer

module.exports.reviews = [
    {
        user_id: 7,
        business_id: 1,
        text: "very cool services, would come back/10",
        rating: 5,
    },
    {
        user_id: 2,
        business_id: 2,
        text: "the pie was great, but I came to the auto body shop for car repairs",
        rating: 4,
    },
    {
        user_id: 3,
        business_id: 3,
        text: "I'm not so sure I enjoy life anymore",
        rating: 3.5,
    },
    {
        user_id: 3,
        business_id: 4,
        text: "Fantastic waffles. Spectacular.",
        rating: 4,
    },
    {
        user_id: 4,
        business_id: 5,
        text: "I expected pie but was fed tires. Still tasted okay though",
        rating: 4,
    },
    {
        user_id: 2,
        business_id: 4,
        text: "I'm just here for the free samples so worth it mmm ",
        rating: 5,
    },
    {
        user_id: 1,
        business_id: 3,
        text: "Sometimes I sniff bike seats for gratification. I tell myself I'll stop sometimes but it's difficult. ya know?",
        rating: 4,
    },
]
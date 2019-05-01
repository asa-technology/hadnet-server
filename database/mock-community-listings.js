 //COMMUNITY_LISTING
  //user_id --> foreign key
  //business_id --> foreign key
  //title: string
  //body: string
  //image_url: string
  //listing_type: string

module.exports.communityListings = [
    {
        user_id: 7,
        business_id: 2,
        title: "Garage Sale",
        body: "bring the whole family, 2-5 pm sunday april 23rd, super fun byob!!", 
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsIC-OBh8BYZOdhuXd0dSlA_fx_CdwwYe--527W6KCtdsV2B8Zhw",
        listing_type: "event",
    },
    {
        user_id: 2,
        business_id: 1,
        title: "Discounted Fruit on sale NOW",
        body: "we don't want food to go to waste so we're selling all our oranges for super cheap, please swing by!!!", 
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW0uFynLURfX_rZdeeoCKJy3f91ZOSKmHTL5JQb0eZV5xqSmks",
        listing_type: "sale",
    },
    // { ///got lazy 
    //     title: "",
    //     body: "", 
    //     image_url: "",
    //     listing_type: "political gathering",
    // },
    // {
    //     title: "",
    //     body: "", 
    //     image_url: "",
    //     listing_type: "barbecue",
    // },
    // {
    //     title: "",
    //     body: "", 
    //     image_url: "",
    //     listing_type: "fundraiser",
    // },
    {
        user_id: 7,
        business_id: 4,
        title: "Some Random Festival Might Be Fun Come Find Out!",
        body: "We bring to you a very cool festival join in, it's gonna be a great time!!!", 
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREqnZeYpN5yQN-7rNu-VnEGCGm8RUZJ7eU7HiZ482lPBVFRtrI",
        listing_type: "festival",
    },
    {
        user_id: 8,
        business_id: 3,
        title: "Movie Showing: 'US' -- Come join us!",
        body: "watching the movie US, bring the friends and family but maybe don't bring the children!!! ITS SCARY but come join us for real super fun bring popcorn and some icees", 
        image_url: "https://amc-theatres-res.cloudinary.com/amc-cdn/production/2/movies/54000/53983/PosterDynamic/67723.jpg",
        listing_type: "movie",
    },
]
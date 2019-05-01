 //name: string
  //business_type: string
  //phone_number: integer
  //email: string
  //business_url: string
  //image_url: string
  //address: string
  //latitude: integer
  //longitude: integer
  //average_rating: integer
  //verified: boolean
  //legal_business_name: string
  //account_id --> foreign key

module.exports.businesses = [
    {
        business_type: "Automotive Services",
        phone_number: 5044311231,
        email: "autoserv@yahoo.com",
        business_url: "autoserv.com",
        image_url: "https://images.unsplash.com/photo-1449130015084-2d48a345ae62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        address: "1800 North Broad St New Orleans",
        latitude: 29.977350,
        longitude: -90.077200,
        average_rating: 4,
        verified: true,
        legal_business_name: "Autoserv",
        account_id: 1,
    },{
        business_type: "Law Office",
        phone_number: 5041424231,
        email: "johnandsons@gmail.com",
        business_url: "lawyerjohn.com",
        address: "4700 South Carrolton New Orleans",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3cRDmc5dVAscAst1gFyUYcgynW1y9gatpoWBlEtx4CWxeg6SN_A",
        latitude: 29.955100,
        longitude: -90.121190,
        average_rating: 4.5,
        verified: true,
        legal_business_name: "John and Sons Law Offices",
        account_id: 2,
    },{
        business_type: "Beauty Parlor",
        phone_number: 5044323412,
        email: "beautyhair@gmail.com",
        business_url: "beautyhair.com",
        address: "1800 North Broad St New Orleans",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-PVrsOZL1hKL3NcLYrdg76YEnbLJJtnrj-yQZufEL-FfottC-yQ",
        latitude: 29.975340,
        longitude: -90.078360,
        average_rating: 5,
        verified: true,
        legal_business_name: "Beautyhair Inc.",
        account_id: 3,
    },
    
]
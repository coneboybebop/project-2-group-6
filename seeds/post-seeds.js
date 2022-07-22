const { Post } = require('../models');

const postData = [
    {
        post_content: 'Gotta try BeaverDam Marina for a burger and brew!',
        category: 'restaurant',
        user_id: 1,
        zip_id: 1
    },
    {
        post_content: 'Best breakfast ever! Go to Finish Line Diner!',
        category: 'restaurant',
        user_id: 1,
        zip_id: 1
    },
    {
        post_content: "If you love hiking, you've got to check out Nathan Bedford Forrest State Park!",
        category: 'activity',
        user_id: 1,
        zip_id: 1
    },
    {
        post_content: "Get out on the water and rent a boat down at Birdsong Marina!",
        category: 'activity',
        user_id: 1,
        zip_id: 1
    },
    {
        post_content: 'Gotta try Wok and Roll! My favorite by far!',
        category: 'restaurant',
        user_id: 2,
        zip_id: 2
    },
    {
        post_content: 'Cathay is the best hibachi exprerience ever!',
        category: 'restaurant',
        user_id: 2,
        zip_id: 2
    },
    {
        post_content: 'Check out Murfeesboro Ax! Super fun!!',
        category: 'activity',
        user_id: 2,
        zip_id: 2
    },
    {
        post_content: "Disc Golf at Barfield Crescent Park! Best course I've ever played!" ,
        category: 'activity',
        user_id: 2,
        zip_id: 2
    },
    {
        post_content: 'Head over to Mr. Burrito Grill if you really love a good wrap!',
        category: 'restaurant',
        user_id: 3,
        zip_id: 3
    },
    {
        post_content: 'Tremont Tavern is the place for some great food!',
        category: 'restaurant',
        user_id: 3,
        zip_id: 3
    },
    {
        post_content: "You've got to take your dog to White Oak Dog Park! Mine always has so much fun!",
        category: 'activity',
        user_id: 3,
        zip_id: 3
    },
    {
        post_content: 'Check out Disc Golf at Portland Park! So much fun!',
        category: 'activity',
        user_id: 3,
        zip_id: 3
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

const mongoose = require('mongoose');
const Product = require('./models/blog');

const arr = [
    {
        name: 'Beyond The 9–5',
        desc:'Over the past 5 years, ever since graduating from college and my short stint as a Substitute Teacher, I have been a programmer. I go to work, solve problems, and go home. What this article brought to my attention is something that I believe but have frequently felt insecure about. It’s okay to go home. It’s okay to leave work at work. There is a rising trend in the programming world surrounding the idea of hard work. Even I wrote a post about how Hard Work Still Means Something. But hard work has taken on a whole other meaning in the workforce surrounding programming and software development.'
    },
    {
        name: 'Hard Work Still Means Something',
        desc: 'I grew up in a world where you had to work your ass off in order to make the team. I’m talking about five days a week a few hours at a time kind of work. I remember being tired, frustrated, and upset when I was younger because I just wanted to go home, and basketball is just a stupid game anyway. What I didn’t know was that 5\'7 white boys who sit around playing video games don’t make the team. But the 5\'7 kid who worked his ass off in the offseason did.'
    },
    {
        name: 'A Bribe in Vietnam',
        desc:'Our group was excited to begin a day of driving around the countryside exploring various caves. After a quick breakfast and a sorting out of how we were to make it to Hanoi the next day, we set off to find an ATM to withdraw the money to pay for the cave tours.'
    },
    {
        name: 'Burning Man Relationship',
        desc:'This year was my first year going to Burning Man. I had heard horror stories of relationships falling apart while at the burn but also read some great advice on how to get through the experience together. There were some challenges during the week, but overall we were prepared and we came out on the other side stronger than ever.'
    },

]



function seedDB() {
    
    Product.insertMany(arr)
        .then(() => {
            console.log("Data Seeded");
    })
    .catch(err => {
            console.log(err);
    })

}

module.exports = seedDB;
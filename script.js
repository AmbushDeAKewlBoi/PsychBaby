const stages = [
    {
        title: "Infancy",
        theorist: "Erik Erikson",
        age: "0-18 months",
        image: "baby1.jpg",
        event: "I knew that for a few years of my life I lived with my grandparents because my parents were moving around a lot. When I asked my parents about a interesting thing, they told me about how I was more attached to my grandparents for a few days of my life when they came over. The photo is of my first birthday and that was when I was kind of getting used to my parents.",
        explanation: "This is Erikson's Trust vs. Mistrust stage. Infants develop a sense of trust when caregivers provide reliable care and affection. Consistent positive experiences lead to feelings of safety and trust in the world.",
        connection: "I trusted my grandparents more then my parents at this point because I always saw them and I saw my parents much less in comparision. I learned to trust my grandparents because they provided more reliable care and affection at this point in life."
    },
    {
        title: "Toddlerhood",
        theorist: "Erik Erikson",
        age: "18 months - 3 years",
        image: "baby2.jpg",
        event: "This picture was taken after my 'first' dish that I cooked. Apparently when I was younger I wanted to be a cook and used to play with kitchen utensils a lot. This was at my grandparents house when they gave me some batter and a fake stove and pan and told me that it was real. I rubed some batter on the fake pan and thought I was really making food. Then my grandparents brought an actually cooked Dosa and told me that I made it.",
        explanation: "This is Erikson's Autonomy vs. Shame and Doubt stage. Toddlers start to assert their independence and develop a sense of personal control. They want to do things by themselves.",
        connection: "This event represents Erikson’s Autonomy vs. Shame and Doubt stage because my grandparents encouraged my independence instead of correcting or discouraging me. They allowed me to believe I was cooking and celebrated my effort. They supported my sense of autonomy."
    },
    {
        title: "Early Childhood",
        theorist: "Jean Piaget",
        age: "2-7 years",
        image: "baby3.jpg",
        event: "I was talking to my mom about this photo because I found it rather interesting and she mentioned that it was from my sisters name function. This jewlery is obviously supposed to go on women but I wore it for fun not understanding gender and complex topics like what one should and shouldn't wear. In my eyes everything there was mine and mine only and I refused to give it to anyone which caused quite a laugh in the room.",
        explanation: "This is Piaget's Preoperational Stage. Children develop symbolic thinking and use language, but their thinking is intuitive and egocentric. They believe everyone sees the world as they do.",
        connection: "In this photo I was able to clearly put on things that would require some extent of logical reasoning and motor efforts but I couldn't understand that there are some things that are limited to certain people and that not everything belongs to me just because its in my room."
    },
    {
        title: "Middle Childhood",
        theorist: "Jean Piaget",
        age: "7-11 years",
        image: "baby4.jpg",
        event: "This photo was during my schools annual day. I was participating in scooter racing(which I still remember), brick breaking, and scooter racing competition. During the race I geniusly figured out that the more inside you are the shorter your track is going to be. This was because everyone were starting from the same place in a circular race track. ",
        explanation: "This is Piaget's Concrete Operational Stage. Children develop logical thinking about concrete objects and situations. They can perform mental operations and understand conservation, reversibility, and classification.",
        connection: "Piaget showed that children in this stage can think logically about tangible problems and understand cause and effect. I was able to figure out that standing inside would allow me to be faster causing me to win my race."
    },
    {
        title: "Late Childhood",
        theorist: "Lawrence Kohlberg",
        age: "8-11 years",
        image: "baby5.jpg",
        event: "This school was rather prestegious in my area hence my parents wanted me to go there my whole life. Even though I was content with my friends at my current school, I wanted to make my parents proud and I also really liked the uniform. These became my two main factors to try to get into this school and did just that. This photo was my first day at this school with a poorly attempted smug face.",
        explanation: "This represents Kohlberg's Conventional Level of moral development. Children start to internalize social rules and make decisions based on pleasing others and maintaining social order.",
        connection: "Kohlberg's theory shows that moral reasoning develops in stages. At this level, children are concerned with being 'good' in the eyes of others and following established rules to maintain relationships and social order. This is exactly what I did. To be 'good' infront of my peers and parents, I worked hard to get into this school and felt proud about it."
    },
    {
        title: "Early Adolescence",
        theorist: "Erik Erikson",
        age: "12-14 years",
        image: "baby6.jpg",
        event: "This photo is when I came to America and really started to question my identity. Though this photo is much younger then the age range, this was when all my questions really started and still do go on. My style and the way I acted changed to as we can see with the unique choice to dressing.",
        explanation: "This is the beginning of Erikson's Identity vs. Role Confusion stage. Adolescents explore different roles, beliefs, and identities to develop a sense of self.",
        connection: "Even though I seem too young to be in Identity vs. Role Confusion, my move to America was a huge change creating a lot of questions. The picture shows the age at which they all started but it lasts well into the current me. "
    },
    {
        title: "Middle Adolescence",
        theorist: "Jean Piaget",
        age: "14-16 years",
        image: "baby7.jpg",
        event: "After stepping into High School, I met a lot of different and interesting people who made me think about wether I am living life to the fullest. Things like what I want to do when I grow up, how I want to look, how I want to be were all questioned. One of the biggest changes that came out of this stage was my step toward bettering myself for the sake of not only people around me but also myself. One of the biggest ways I did that was by starting to work out.",
        explanation: "This is Piaget's Formal Operational Stage. Adolescents develop abstract reasoning and can think about hypothetical situations, test hypotheses, and consider multiple perspectives.",
        connection: "I had many 'what ifs' in this time period. 'what if I grow up to have the conditions adults I know have', 'what if I fail to impress someone just because of the way I look', or 'what if I can't be a person that contributes to society'. These questions pushed me to be a better man and take action on these fears that I used to have. "
    },
    {
        title: "Late Adolescence",
        theorist: "Lawrence Kohlberg",
        age: "16-18 years",
        image: "baby8.jpg",
        event: "This picture was taken last year and it was with a famous celebrity from India named 'Nani.' He is my favorite Indian actor and had made many stunning movies. I may even say I consider him my biggest inspiration. I assumed he would be a flashy guy with bodyguards and the tipical celebrity aura but he was just a simple man sitting in the temple with absolutely no attention towards him.",
        explanation: "This can represent Kohlberg's Postconventional Level. Some adolescents begin to develop moral reasoning based on abstract principles of justice and individual rights rather than just following rules.",
        connection: "I always believed that success meant flashy wealth and huge cars and attention surrounding me. This man was the example of success in my opinion but I never saw how he really used that success. He didn't have a fancy car or a 10k suit or bodyguards everywhere. But he was the quiet type of wealth. The wealth that doesn't flex itself where ever it goes. Which made me think about what I want my version of succes to really be."
    }
];

function createCarousel() {
    const carousel = document.getElementById('carousel');
    stages.forEach((stage, index) => {
        const card = document.createElement('div');
        card.className = 'stage-card';
        card.style.animationDelay = `${0.1 * index}s`;
        card.onclick = () => openDetail(index);
        
        card.innerHTML = `
            <img src="${stage.image}" alt="${stage.title}" class="stage-card-image">
            <div class="stage-card-overlay">
                <div class="stage-card-title">${stage.title}</div>
                <div class="stage-card-age">${stage.age}</div>
            </div>
        `;
        
        carousel.appendChild(card);
    });
}

function openDetail(index) {
    const stage = stages[index];
    const detailView = document.getElementById('detailView');
    
    document.getElementById('detailImage').src = stage.image;
    document.getElementById('detailBackgroundImage').src = stage.image;
    document.getElementById('detailTitle').textContent = stage.title;
    document.getElementById('detailTheorist').textContent = stage.theorist;
    document.getElementById('detailAge').textContent = stage.age;
    document.getElementById('detailEvent').textContent = stage.event;
    document.getElementById('detailExplanation').textContent = stage.explanation;
    document.getElementById('detailConnection').textContent = stage.connection;
    
    detailView.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDetail() {
    const detailView = document.getElementById('detailView');
    detailView.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Initialize
createCarousel();

// Close detail view with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDetail();
    }
});

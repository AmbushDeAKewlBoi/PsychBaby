const stages = [
    {
        title: "Infancy",
        theorist: "Erik Erikson",
        age: "0-18 months",
        image: "baby1.jpg",
        event: "I asked my parents if they remembered anything interesting from when I was a baby, and they told me that for the first few years of my life I lived with my grandparents because they were moving around a lot. They explained that during that time I became very attached to my grandparents, and when my parents came to visit I sometimes needed time to warm up to them. They also mentioned that the photo from my first birthday was taken around the time I was beginning to get more comfortable with my parents and starting to form a stronger sense of trust with them, while still feeling secure with my grandparents.",
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
        event: "Wore jewelry that definitely wasn’t meant for me, but at the time that didn’t matter at all. According to my mom, this photo was taken at my sister’s naming function, and I grabbed the jewelry just to wear it for fun. I didn’t understand gender or social rules yet, so in my mind it belonged to me. I also refused to give it back to anyone, which caused a lot of laughter in the room.#peakme#egocentrism",
        explanation: "This is Piaget's Preoperational Stage. Children develop symbolic thinking and use language, but their thinking is intuitive and egocentric. They believe everyone sees the world as they do.",
        connection: "In this photo I was able to clearly put on things that would require some extent of logical reasoning and motor efforts but I couldn't understand that there are some things that are limited to certain people and that not everything belongs to me just because its in my room."
    },
    {
        title: "Middle Childhood",
        theorist: "Jean Piaget",
        age: "7-11 years",
        image: "baby4.jpg",
        event: "During the school’s annual day celebration, a student participated in multiple events including scooter racing and brick breaking. One moment that stood out occurred during the scooter race, which took place on a circular track. While all participants started at the same point, the student realized that staying closer to the inside of the track would result in a shorter distance to travel. Using this strategy, he raced more efficiently and impressed both teachers and classmates. The event became a memorable moment, highlighting problem-solving skills and confidence developed through participation in school activities.",
        explanation: "This is Piaget's Concrete Operational Stage. Children develop logical thinking about concrete objects and situations. They can perform mental operations and understand conservation, reversibility, and classification.",
        connection: "Piaget showed that children in this stage can think logically about tangible problems and understand cause and effect. I was able to figure out that standing inside would allow me to be faster causing me to win my race."
    },
    {
        title: "Late Childhood",
        theorist: "Lawrence Kohlberg",
        age: "8-11 years",
        image: "baby5.jpg",
        event: "Dear Diary, today was my first day at the new school. It’s pretty prestigious, and my parents have wanted me to go here my whole life. Even though I was happy with my friends at my old school, I really wanted to make them proud and I have to admit, I loved the uniform too. Those were the two main reasons I worked so hard to get in, and I did it! Looking at this photo from today, I tried to pull off a smug face… didn’t quite work, but I like that I tried.",
        explanation: "This represents Kohlberg's Conventional Level of moral development. Children start to internalize social rules and make decisions based on pleasing others and maintaining social order.",
        connection: "Kohlberg's theory shows that moral reasoning develops in stages. At this level, children are concerned with being 'good' in the eyes of others and following established rules to maintain relationships and social order. This is exactly what I did. To be 'good' infront of my peers and parents, I worked hard to get into this school and felt proud about it."
    },
    {
        title: "Early Adolescence",
        theorist: "Erik Erikson",
        age: "12-14 years",
        image: "baby6.jpg",
        event: "I remember this photo..my first time in America—and that’s when I really started questioning who I was. I was younger than I look here, but this is when all those questions first started, and honestly, they’re still going on. My style, the way I acted… everything started shifting. Even this outfit...I can’t believe I thought it was a “unique” choice. I guess it was me trying to figure myself out.",
        explanation: "This is the beginning of Erikson's Identity vs. Role Confusion stage. Adolescents explore different roles, beliefs, and identities to develop a sense of self.",
        connection: "Even though I seem too young to be in Identity vs. Role Confusion, my move to America was a huge change creating a lot of questions. The picture shows the age at which they all started but it lasts well into the current me. "
    },
    {
        title: "Middle Adolescence",
        theorist: "Jean Piaget",
        age: "14-16 years",
        image: "baby7.jpg",
        event: "Friend: So… how’s high school treating you so far?\n Me: Honestly? It’s been… eye-opening. I’ve met so many different people. Made me really think about whether I’m actually living life to the fullest.\n Friend: Like… in what way?\n Me: Everything, really. What I want to do when I grow up, how I want to look, how I want to be. All of it started feeling… up for question.\n Friend: That sounds intense. Did it change anything? \nMe: Yeah. One of the biggest changes was me trying to better myself—not just for the people around me, but for myself too. A big part of that? I started working out.",
        explanation: "This is Piaget's Formal Operational Stage. Adolescents develop abstract reasoning and can think about hypothetical situations, test hypotheses, and consider multiple perspectives.",
        connection: "I had many 'what ifs' in this time period. 'what if I grow up to have the conditions adults I know have', 'what if I fail to impress someone just because of the way I look', or 'what if I can't be a person that contributes to society'. These questions pushed me to be a better man and take action on these fears that I used to have. "
    },
    {
        title: "Late Adolescence",
        theorist: "Lawrence Kohlberg",
        age: "16-18 years",
        image: "baby8.jpg",
        event: "Last year, I got to meet Nani, my favorite Indian actor, and honestly, it blew my mind. I’ve always looked up to him—his movies, his acting, everything, but I expected him to be this flashy celebrity, all attention and bodyguards. But he wasn’t. He was just sitting there in the temple, completely calm, not caring about anyone noticing him. Seeing him like that made me realize that being great doesn’t have to mean being showy. Sometimes, it’s the quiet, simple presence that inspires the most. I think I’ll remember that moment for a long time.",
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

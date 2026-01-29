const stages = [
    {
        title: "Infancy",
        theorist: "Erik Erikson",
        age: "0-18 months",
        image: "baby1.jpg",
        event: "Learning to trust caregivers for basic needs like feeding, comfort, and security. The baby cries when hungry and learns whether someone will reliably respond.",
        explanation: "This is Erikson's Trust vs. Mistrust stage. Infants develop a sense of trust when caregivers provide reliable care and affection. Consistent positive experiences lead to feelings of safety and trust in the world.",
        connection: "Erikson believed that successful resolution of this stage creates hope and confidence. If needs are not met consistently, the child may develop mistrust and anxiety about the world around them."
    },
    {
        title: "Toddlerhood",
        theorist: "Erik Erikson",
        age: "18 months - 3 years",
        image: "baby2.jpg",
        event: "Beginning to assert independence through actions like choosing clothes, feeding themselves, or saying 'no' to parents.",
        explanation: "This is Erikson's Autonomy vs. Shame and Doubt stage. Toddlers start to assert their independence and develop a sense of personal control. They want to do things by themselves.",
        connection: "Erikson emphasized that allowing children to make choices and gain independence (within safe limits) helps them develop confidence and autonomy. Too much criticism or control can lead to feelings of shame and doubt about their abilities."
    },
    {
        title: "Early Childhood",
        theorist: "Jean Piaget",
        age: "2-7 years",
        image: "baby3.jpg",
        event: "Engaging in pretend play, like having tea parties with stuffed animals or pretending a box is a spaceship.",
        explanation: "This is Piaget's Preoperational Stage. Children develop symbolic thinking and use language, but their thinking is intuitive and egocentric. They believe everyone sees the world as they do.",
        connection: "Piaget identified that children at this age cannot yet perform mental operations or think logically about abstract concepts. They focus on one aspect of a situation at a time and struggle with conservation tasks."
    },
    {
        title: "Middle Childhood",
        theorist: "Jean Piaget",
        age: "7-11 years",
        image: "baby4.jpg",
        event: "Learning to solve math problems, understanding that the amount of water stays the same when poured into different containers, and thinking logically about concrete situations.",
        explanation: "This is Piaget's Concrete Operational Stage. Children develop logical thinking about concrete objects and situations. They can perform mental operations and understand conservation, reversibility, and classification.",
        connection: "Piaget showed that children in this stage can think logically about tangible problems and understand cause and effect. However, they still struggle with abstract or hypothetical concepts until they reach formal operations."
    },
    {
        title: "Late Childhood",
        theorist: "Lawrence Kohlberg",
        age: "8-11 years",
        image: "baby5.jpg",
        event: "Following classroom rules to avoid punishment and gain teacher approval. Understanding that rules help maintain order.",
        explanation: "This represents Kohlberg's Conventional Level of moral development. Children start to internalize social rules and make decisions based on pleasing others and maintaining social order.",
        connection: "Kohlberg's theory shows that moral reasoning develops in stages. At this level, children are concerned with being 'good' in the eyes of others and following established rules to maintain relationships and social order."
    },
    {
        title: "Early Adolescence",
        theorist: "Erik Erikson",
        age: "12-14 years",
        image: "baby6.jpg",
        event: "Exploring different friend groups, trying new hobbies, and beginning to question 'Who am I?' and 'Where do I fit in?'",
        explanation: "This is the beginning of Erikson's Identity vs. Role Confusion stage. Adolescents explore different roles, beliefs, and identities to develop a sense of self.",
        connection: "Erikson emphasized that adolescence is a critical period for developing personal identity. Successful exploration leads to a strong sense of self, while confusion can result from inability to establish a stable identity."
    },
    {
        title: "Middle Adolescence",
        theorist: "Jean Piaget",
        age: "14-16 years",
        image: "baby7.jpg",
        event: "Beginning to think about abstract concepts like justice, freedom, and mortality. Debating hypothetical scenarios and considering 'what if' questions.",
        explanation: "This is Piaget's Formal Operational Stage. Adolescents develop abstract reasoning and can think about hypothetical situations, test hypotheses, and consider multiple perspectives.",
        connection: "Piaget identified this as the final stage of cognitive development. Teens can now engage in systematic problem-solving, philosophical thinking, and can consider multiple variables simultaneously."
    },
    {
        title: "Late Adolescence",
        theorist: "Lawrence Kohlberg",
        age: "16-18 years",
        image: "baby8.jpg",
        event: "Questioning societal rules and developing personal ethical principles. Considering whether laws are just and thinking about universal human rights.",
        explanation: "This can represent Kohlberg's Postconventional Level. Some adolescents begin to develop moral reasoning based on abstract principles of justice and individual rights rather than just following rules.",
        connection: "Kohlberg found that only some people reach this level of moral reasoning, where they evaluate rules based on abstract ethical principles. They recognize that laws can be unjust and may choose to follow higher moral principles."
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

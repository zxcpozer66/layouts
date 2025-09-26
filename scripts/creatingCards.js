const animals = [
    {
        image: '../img/животные/тигр.webp',
        name: 'Дмитрий Смирнов',
        position: 'Тигренок Лева',
        description: 'Любит пачкаться в грязи и есть бананы. Очень игривый и общительный.',
        points: [
            'Любит плавать в водоемах',
            'Обожает играть с мячами',
            'Спит по 16 часов в сутки'
        ],
        width: 'double' // Первая карточка - двойная ширина
    },
    {
        image: '../img/животные/тигр.webp',
        name: 'Алексей Иванов',
        position: 'Лев Симба',
        description: 'Король саванны. Обладает величественной внешностью и спокойным характером.',
        points: [
            'Любит греться на солнце',
            'Имеет громкий рык',
            'Уважает личное пространство'
        ],
        width: 'single' // Вторая карточка - одинарная
    },
    {
        image: 'https://sun9-25.userapi.com/s/v1/ig2/cfA1taJ01gscUbCDnHaE0k_EkYJCNTq8iZHfpW80LK49yrZjDSB6i0RxEwpo484jwFfxflr8L7ZfjB0kvWgJDpRL.jpg?quality=95&crop=626,648,1087,1087&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&ava=1&u=jN6O9A8E2tbM30EV3WMOql-SS53xD753GnQh5b6epQI&cs=200x200',
        name: 'Обезьяна Обыкновенная',
        position: 'Обезьянка ЧиДАДАДАДА',
        description: 'Очень глуппая и неуклюжая. Любит играть в доту и исследовать нипов на миду.',
        points: [
            'Дота 2',
            'Любит темноту',
            'Не ест с рук'
        ],
        width: 'triple' // Третья карточка - тройная ширина
    },
    {
        image: '../img/животные/тигр.webp',
        name: 'Сергей Кузнецов',
        position: 'Слоненок Дамбо',
        description: 'Добродушный гигант с отличной памятью. Обожает водные процедуры.',
        points: [
            'Любит обливаться водой',
            'Обладает хорошей памятью',
            'Дружелюбный к другим животным'
        ],
        width: 'single' // Четвертая карточка - одинарная
    },
    {
        image: '../img/животные/тигр.webp',
        name: 'Елена Петрова',
        position: 'Жираф Женя',
        description: 'Самый высокий обитатель зоопарка. Имеет длинную шею и добрые глаза.',
        points: [
            'Питается листьями с высоких деревьев',
            'Любит бегать по вольеру',
            'Спокойный и наблюдательный'
        ],
        width: 'single' // Пятая карточка - одинарная
    }
];

function createAnimalCard(animal, index) {
    const card = document.createElement('div');
    card.classList.add('animal-card');
    
    card.classList.add(`width-${animal.width}`);
    
    const animalImage = document.createElement('div');
    animalImage.classList.add('animal-image')
    
    const img = document.createElement('img');
    img.src = animal.image;
    img.alt = animal.position;
    animalImage.appendChild(img);
    
    const animalInfo = document.createElement('div');
    animalInfo.classList.add('animal-info');
    
    const name = document.createElement('h3');
    name.textContent = animal.name;
    animalInfo.appendChild(name);
    
    const position = document.createElement('p');
    position.classList.add('position');
    position.textContent = animal.position;
    animalInfo.appendChild(position);
    
    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = animal.description;
    animalInfo.appendChild(description);
    
    if (animal.points && animal.points.length > 0) {
        const skills = document.createElement('div');
        skills.classList.add('skills');
        
        animal.points.forEach(point => {
            const skill = document.createElement('span');
            skill.classList.add('skill');
            skill.textContent = point;
            skills.appendChild(skill);
        });
        
        animalInfo.appendChild(skills);
    }
    
    card.appendChild(animalImage);
    card.appendChild(animalInfo);
    
    return card;
}

function initAnimalCards() {
    const container = document.getElementById('animalsContainer');
    
    container.innerHTML = '';
    
    animals.forEach((animal, index) => {
        const card = createAnimalCard(animal, index);
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', initAnimalCards);
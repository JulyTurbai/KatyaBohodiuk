'use script'

let doc = document;

const questionItems = [
    {
        title: 'Lorem ipsum dolor sit amet, consectetur',
        content: 'Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis',
        
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur',
        content: 'Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis',
        
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur',
        content: 'Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae.',
        
    },
    {
        title: 'Lorem ipsum dolor sit amet, consecteturr',
        content: 'Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis',
        
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur',
        content: 'Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus' ,
        
    }

];


const question = doc.querySelector('.question__list');

question.innerHTML = questionItems.map((item, index) =>{
    return `
            <div class="question__item">
                <div class="question__title">${item.title} 
            </div>
                <div class="question__content">${item.content}</div>
            </div>
        `
}).join('');

document.querySelector('.questions-block').addEventListener('click', (e) => {

    const title = e.target.closest('.question__item');

    if (!title) return;

    const item = title.closest('.question__item');

    document.querySelectorAll('.question__item').forEach(el => {
        if (el !== item) el.classList.remove('active');
    });

    item.classList.toggle('active');

});



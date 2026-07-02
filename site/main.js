'use script'

let doc = document;

const questionItems = [
    {
        title: 'Lorem ipsum dolor sit amet, consectetur',
        content: 'Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur',
        
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur',
        content: 'Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur',
        
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur',
        content: 'Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur',
        
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur',
        content: 'Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur',
        
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur',
        content: 'Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur Tempore perspiciatis commodi impedit, ad necessitatibus ratione cupiditate ucimus ut veritatis quae quibusdam qui. Eius libero quae consequatur ' ,
        
    }

];


const question = doc.querySelector('.question-block');

question.innerHTML = questionItems.map((item, index) =>{
    return `
            <div class="question__item">
                <div class="question__title">${item.title} 
            </div>
                <div class="question__content">${item.content}</div>
            </div>
        `
}).join('');

document.querySelector('.question-block').addEventListener('click', (e) => {

    const title = e.target.closest('.question__title');

    if (!title) return;

    const item = title.closest('.question__item');

    document.querySelectorAll('.question__item').forEach(el => {
        if (el !== item) el.classList.remove('active');
    });

    item.classList.toggle('active');

});



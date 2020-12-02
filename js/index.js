const filterСustomization = {
    distance: 10,
    dueDdate: ["any"],
    zeroServicePrice:  true,
    dataOptions: ["no_cars"],
}

//selecting all cards witg info
const allCards = document.querySelectorAll('.card');

//adding rotation to chevron
const chevron = document.querySelectorAll('.chevron').forEach(element => {
    element.addEventListener('click', (element) => {
        element.target.classList.toggle('chevron-down');
        element.target.nextElementSibling.classList.toggle('hidden');

    });
});

//adding activ nonActive classes
const distatnceItems = document.querySelectorAll('.distatnce-item');
distatnceItems.forEach(element => {
    element.addEventListener('click', (element) => {
        element.target.classList.toggle('btn-distatnce--active');
        document.querySelector('.distatnce-any').classList.remove('btn-distatnce--active');
    });
});
const distatnceAny = document.querySelector('.distatnce-any');
distatnceAny.addEventListener('click', (element) => {
        element.target.classList.toggle('btn-distatnce--active');
        document.querySelectorAll('.distatnce-item').forEach(item => item.classList.remove('btn-distatnce--active'))
    });
    


const moreDueDateBtn = document.querySelector('.more-due-date');
const additionalDueDateOptions = document.querySelectorAll('.due-date-aaditional');
moreDueDateBtn.addEventListener ('click',
    (event) => {
        additionalDueDateOptions.forEach(item => {
            item.classList.toggle('hidden');
        }) 
    }
)
    
const a = 1;
// const addDueDateOptions = document.querySelectorAll('.due-date-aaditional')
//     .forEach((item) => item.classList.)


// working width "Дополнительные опции" as data-option-type of dataset
const implementFiltersBtn = document.querySelector('.implement-filters-btn');
implementFiltersBtn.addEventListener('click', () => applyAddOptions()) 
const applyAddOptions = () => {
    filterСustomization.dataOptions = []; //reset all data options in general state
    const allDataOptionType = document.querySelectorAll('.option-type');
    
    //add actual selected options to filterСustomization
    allDataOptionType.forEach(item => {
        if (item.checked) {
            filterСustomization.dataOptions.push(item.dataset.optionType);
        }
    })
    
    //applying Option filter
    allCards.forEach(card => {
        //взять каждый элемент из allCards и проверить: если у него есть ВСЕ такие датасеты
        //dataOptions, которые есть в списке filterСustomization.dataOptions, то
        //только тогда его показать

        //если нет dataset.options - просто спрятать его и не идти дальше
        
        // здесь ниже выбираю все здачения из options dsts-seta элемента DOM
        // превращаю в массив 
        // чтобы потом проверить, что все они есть в filterСustomization
        let selectedOptionsForCurrentCard;
        if (card.dataset.options) {
            selectedOptionsForCurrentCard = card.dataset.options.split(' ');
        } else {
            card.classList.add('hidden');
            return;
        }

        filterСustomization.dataOptions.forEach(item => {
            debugger;
            if (!selectedOptionsForCurrentCard.includes(item)) {
                card.classList.add('hidden');
            }
        })


    })
}   


export const clearFiltersBtn = document.querySelector('.clear-filters-btn');
clearFiltersBtn.addEventListener('click', () => {
    filterСustomization.distance = null;
    filterСustomization.dueDdate = [];
    filterСustomization.zeroServicePrice = false;
    filterСustomization.dataOptions = [];
    console.log('------------ ', filterСustomization);
    debugger;
    allCards.forEach(card => {
        if (!card.classList.contains('additional-card')) {
            card.classList.remove('hidden');
        } 
    })
})


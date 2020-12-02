import { 
    apllyOptionFilterToCard,
    apllyDueDateFilterToCard,
    resetfilterСustomization
} from './addfantions.js';

const filterСustomization = {};
resetfilterСustomization(filterСustomization);

//selecting all cards witg info
const allCards = document.querySelectorAll('.card');

//adding rotation to chevron
const chevron = document.querySelectorAll('.chevron').forEach(element => {
    element.addEventListener('click', (element) => {
        element.target.classList.toggle('chevron-down');
        element.target.nextElementSibling.classList.toggle('hidden');
    });
});

//adding activ&nonActive classes
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

//adding hide&show functionality to moreDueDateBtn 
const moreDueDateBtn = document.querySelector('.more-due-date');
const additionalDueDateOptions = document.querySelectorAll('.due-date-aaditional');
moreDueDateBtn.addEventListener ('click',
    (event) => {
        additionalDueDateOptions.forEach(item => {
            item.classList.toggle('hidden');
        }) 
    }
)
    
// working width "Дополнительные опции" as data-option-type of dataset
const implementFiltersBtn = document.querySelector('.implement-filters-btn');
implementFiltersBtn.addEventListener('click', () => applyAddOptions()) 
const applyAddOptions = () => {
    resetfilterСustomization(filterСustomization);
    
    //add actual selected options to filterСustomization
    const allDataOptionType = document.querySelectorAll('.option-type');
    allDataOptionType.forEach(item => {
        if (item.checked) {
            filterСustomization.dataOptions.push(item.dataset.optionType);
        }
    })

    const allDueDateType = document.querySelectorAll('.radio');
    allDueDateType.forEach(item => {
        if (item.checked) {
            filterСustomization.dueDate = item.id;
        }
    })
    
    //applying "Option" and "DueDate" filter
    allCards.forEach(card => {
        let selectedOptionsForCurrentCard;
        if (card.dataset.options) {
            selectedOptionsForCurrentCard = card.dataset.options.split(' ');
            apllyOptionFilterToCard(filterСustomization.dataOptions, card, selectedOptionsForCurrentCard )
        } 

        let selectedDueDateForCurrentCard;
        if (card.dataset.dueDate) {
            selectedDueDateForCurrentCard = card.dataset.dueDate;
            debugger;
            apllyDueDateFilterToCard(filterСustomization.dueDate, card, selectedDueDateForCurrentCard )
        }
    })
}   

export const clearFiltersBtn = document.querySelector('.clear-filters-btn');
clearFiltersBtn.addEventListener('click', () => {
    filterСustomization.distance = null;
    filterСustomization.dueDate = [];
    filterСustomization.zeroServicePrice = false;
    filterСustomization.dataOptions = [];
    console.log('------------ ', filterСustomization);
    allCards.forEach(card => {
        if (!card.classList.contains('additional-card')) {
            card.classList.remove('hidden');
        } 
    })
})


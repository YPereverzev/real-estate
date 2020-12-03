import { 
    apllyServiceFilterToCard,
    apllyOptionFilterToCard,
    apllyDueDateFilterToCard,
    apllyDistanceFilterToCard,
    resetfilterСustomization,
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

//adding activ&nonActive fanctionality 
const distanceItems = document.querySelectorAll('.distance-item');
distanceItems.forEach(element => {
    element.addEventListener('click', (event) => {
        event.target.classList.toggle('btn-distance--active');
        document.getElementById('distance-any').classList.remove('btn-distance--active');
        if (filterСustomization.distance.includes('distance-any')) {
            filterСustomization.distance.splice(filterСustomization.distance.indexOf('distance-any'), 1);
        }

        if (filterСustomization.distance.includes(event.target.id)) {
            filterСustomization.distance.splice(filterСustomization.distance.indexOf(event.target.id), 1);
        } else {
            filterСustomization.distance.push(event.target.id);
        }
        
    });
});

const distanceAny = document.getElementById('distance-any');
distanceAny.addEventListener('click', (element) => {
        element.target.classList.toggle('btn-distance--active');
        document.querySelectorAll('.distance-item').forEach(item => item.classList.remove('btn-distance--active'))
        filterСustomization.distance = ["distance-any"];
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
    

    const alldistanceType = document.querySelectorAll('.distance-item-mark');
    filterСustomization.distance = [];
    alldistanceType.forEach(item => {
        if (item.classList.contains('btn-distance--active')) {
            filterСustomization.distance.push(item.id);
        }
    })

    
    const zeroServicePriceCheckBox = document.getElementById('zero-service');
    filterСustomization.zeroServicePrice = zeroServicePriceCheckBox.checked;

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
            apllyDueDateFilterToCard(filterСustomization.dueDate, card, selectedDueDateForCurrentCard )
        }

        let selectedDistanceForCurrentCard;
        if (card.dataset.distance) {
            selectedDistanceForCurrentCard = card.dataset.distance;
            apllyDistanceFilterToCard(filterСustomization.distance, card, selectedDistanceForCurrentCard )
        }

        let selectedServiceForCurrentCard;
        if (card.dataset.zeroServicePrice) {
            selectedServiceForCurrentCard = card.dataset.zeroServicePrice;
            
            apllyServiceFilterToCard(filterСustomization.zeroServicePrice, card, selectedServiceForCurrentCard )
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


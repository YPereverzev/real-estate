// dataOptions: string[];
// card: typeOf card;
// selectedOptionsForCurrentCard: string[];
export const apllyOptionFilterToCard = (
    dataOptions, 
    card,
    selectedOptionsForCurrentCard 
) => {
    dataOptions.forEach(condition => {
        if (!selectedOptionsForCurrentCard.includes(condition)) {
            card.classList.add('hidden');
        }
    })
}

// dueDate: string;
// card: typeOf card;
// selectedOptionsForCurrentCard: string[];
export const apllyDueDateFilterToCard = (
    dueDate, 
    card,
    selectedDueDateForCurrentCard 
) => {
    if (dueDate === 'anyDueDate') {
        return
    }

    if (selectedDueDateForCurrentCard !== dueDate) 
    {
        card.classList.add('hidden');
    }
}

// distance: string[];
// card: typeOf card;
// selectedDistanceForCurrentCard: string[];
export const apllyDistanceFilterToCard = (
    distance, 
    card,
    selectedDistanceForCurrentCard 
) => {
    const applyedDistance = parseInt(selectedDistanceForCurrentCard);
    let isDisplaying = false;
    distance.forEach(condition => {
        switch (condition) {
            case "distance-any":
                isDisplaying = true;
                return;
    
            case "distance-less-then-10":
                if ( applyedDistance < 10) {
                    isDisplaying = true;
                }
                break;
    
            case "distance-10-to-20":
                if ( 10 <= applyedDistance && applyedDistance < 20) {
                    isDisplaying = true;
                }
            break;
    
            case "distance-20-to-30":
                if ( 20 <= applyedDistance && applyedDistance < 30) {
                    isDisplaying = true;
                }
                break;
    
            case "distance-more-then-30":
                if ( 30 <= applyedDistance) {
                    isDisplaying = true;
                }
                break;
            default:
                break;
        }
        
    })
    if (!isDisplaying) {
        card.classList.add('hidden');
    }
    return
}

// zeroServicePrice: boolean;
// card: typeOf card;
// selectedDistanceForCurrentCard: string[];
export const apllyServiceFilterToCard = (
    zeroServicePrice, 
    card,
    selectedServiceForCurrentCard 
) => {
    debugger;
    if (!zeroServicePrice) return;
    
    if (selectedServiceForCurrentCard === "false") {
        card.classList.add('hidden');
    }

}


export const resetfilterСustomization = (filterСustomization) => {
    filterСustomization.distance = ["distance-any"],
    filterСustomization.dueDate = "anyDueDate",
    filterСustomization.zeroServicePrice = false,
    filterСustomization.dataOptions = []; 
}
    
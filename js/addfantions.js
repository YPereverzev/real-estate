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
    if (dueDate === 'any') {
        return
    }

    if (selectedDueDateForCurrentCard !== dueDate) 
    {
        card.classList.add('hidden');
    }
}

export const resetfilterСustomization = (filterСustomization) => {
    filterСustomization.distance = ["any"],
    filterСustomization.dueDate = "any",
    filterСustomization.zeroServicePrice = false,
    filterСustomization.dataOptions = []; 
}
    
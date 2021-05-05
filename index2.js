const getAverageWordLength = ar => ar.map(word => word.split(' ').length).reduce((acc,cur) => acc + cur) / ar.length

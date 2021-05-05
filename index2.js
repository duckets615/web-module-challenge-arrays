// const removeFlavorByName = (ar,idx) => [...ar.slice(0,idx), ...ar.slice(idx+1)];
const removeFlavorByName = (ar,idx) => ar.slice(0,idx).concat(ar.slice(idx+1));
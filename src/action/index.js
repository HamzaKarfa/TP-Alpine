
export  function SelectVersion(payload) {
    return { type :'SELECT_VERSION',payload: payload}
};
export  function SelectColor(payload) {
    return { type :'SELECT_COLOR',payload: payload}
};
export  function SelectWheel(payload) {
   return { type :'SELECT_WHEEL',payload: payload}
};
export  function SelectScellerie(payload) {
   return { type :'SELECT_SCELLERIE',payload: payload}
};
export  function SelectEquipement(payload) {
    return { type :'SELECT_EQUIPEMENT',payload: payload}
 };
 export  function SelectAccessoire(payload) {
    return { type :'SELECT_ACCESSOIRE',payload: payload}
 };
 export  function ResetEquipement() {
   return { type :'RESET_EQUIPEMENT'}
};
export  function ResetAccessoire() {
   return { type :'RESET_ACCESSOIRE'}
};
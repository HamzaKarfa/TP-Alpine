
 export  function SelectVersion(payload) {
     return { type :'SELECT_VERSION',payload: payload}
 };
 export  function SelectColor(payload) {
     console.log('KICHTA',payload)
    return { type :'SELECT_COLOR',payload: payload}
};

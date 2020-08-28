import { version } from "react";

const initialState = {
    car:{
        version: {
            Pure: {    
                name: "Pure", 
                price: 54700, 
                initialPicture:"./asset/configurateur/modele/selection/pure.png", 
                allPictures:{ 
                    blanc:{
                        serac:{
                            1:"./asset/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg",
                            2:"./asset/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (2).jpg",
                            3:"./asset/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (3).jpg",
                            4:"./asset/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (4).jpg"
                        },
                        standard:{
                            1:"./asset/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (1).jpg",
                            2:"./asset/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (2).jpg",
                            3:"./asset/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (3).jpg",
                            4:"./asset/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (4).jpg"
                        }
                    },
                    bleu:{
                        serac:{
                            1:"./asset/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (1).jpg",
                            2:"./asset/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (2).jpg",
                            3:"./asset/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (3).jpg",
                            4:"./asset/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (4).jpg"
                        },
                        standard:{
                            1:"./asset/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (1).jpg",
                            2:"./asset/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (2).jpg",
                            3:"./asset/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (3).jpg",
                            4:"./asset/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (4).jpg"
                        }
                    },
                    noir:{
                        serac:{
                            1:"./asset/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (1).jpg",
                            2:"./asset/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (2).jpg",
                            3:"./asset/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (3).jpg",
                            4:"./asset/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (4).jpg"
                        },
                        standard:{
                            1:"./asset/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (1).jpg",
                            2:"./asset/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (2).jpg",
                            3:"./asset/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (3).jpg",
                            4:"./asset/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (4).jpg"
                        }
                    }
                }, 
                description: "Cette nouvelle alpine ne serais pas ce qu'elle est si elle garde pas la pureté qui fera de la votre une alpine unique",
                id: 1 
            },
            Legende: {    
                name: "Legende", 
                price: 58500, 
                initialPicture:"./asset/configurateur/modele/selection/legende.png", 
                allPictures:{ 
                    blanc:{
                        legende:{
                            1:"./asset/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg",
                            2:"./asset/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg",
                            3:"./asset/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg",
                            4:"./asset/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg"
                        }
                    },
                    bleu:{
                        legende:{
                            1:"./asset/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-1.jpg",
                            2:"./asset/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-2.jpg",
                            3:"./asset/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-3.jpg",
                            4:"./asset/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg"
                        }
                    },
                    noir:{
                        legende:{
                            1:"./asset/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-1.jpg",
                            2:"./asset/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-2.jpg",
                            3:"./asset/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-3.jpg",
                            4:"./asset/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-4.jpg"
                        }
                    }
                }, 
                description: "Pourquoi changer quand la legende nous rappelle tous les souvenirs de notre enfance?",
                id: 2 
            },
        },

        color:{
            1: { color:"bleu", name: "Teinte spéciale Bleu Alpine", price: 1800, picture:"./asset/configurateur/couleurs/selection/bleu.jpg", id: 1 },
            2: { color:"noir", name: "Teinte métallisée Noir Profond", price: 840, picture:"./asset/configurateur/couleurs/selection/noir.jpg", id: 2 },
            3: { color:"blanc", name: "Peinture opaque Blanc Glacier", price: 0, picture:"./asset/configurateur/couleurs/selection/blanc.jpg", id: 3 },
        },
        wheels: {
            1: { 
                name: "Standard",
                price: 0, 
                picture:{
                    blanc:"./asset/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg",
                    bleu:"./asset/configurateur/jantes/vues/couleur-bleu_jante-standard (3).jpg",
                    noir:"./asset/configurateur/jantes/vues/couleur-noir_jante-standard (1).jpg"
                }, 
                id: 1 
            },
            2: { 
                name: "Serac", 
                price: 1000, 
                picture:{
                    blanc:"./asset/configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg",
                    bleu:"./asset/configurateur/jantes/vues/couleur-bleu_jante-serac (3).jpg",
                    noir:"./asset/configurateur/jantes/vues/couleur-noir_jante-serac (1).jpg"
                }, 
                id: 2 
            },
            3: { 
                name: "Legende", 
                price: 0, 
                version:"legende", 
                picture:{
                    blanc:"./asset/configurateur/jantes/vues/couleur-blanc_jante-legende (2).jpg",
                    bleu:"./asset/configurateur/jantes/vues/couleur-bleu_jante-legende (3).jpg",
                    noir:"./asset/configurateur/jantes/vues/couleur-noir_jante-legende (1).jpg"
                }, 
                id: 3
            }
        },
        scellerie: {
            1: { name: "Sièges baquets en cuir noir et Dinamica", version:"pure", price: 0,             
                picture:{
                    1:"./asset/configurateur/interieurs/vues/cuir-noir_dinamica-1.jpg",
                    2:"./asset/configurateur/interieurs/vues/cuir-noir_dinamica-2.jpg",
                    3:"./asset/configurateur/interieurs/vues/cuir-noir_dinamica-3.jpg"
                }, id: 1 },
            2: { name: "Sièges Confort en cuir noir perforé", version:"pure", price: 800, 
                picture:{
                    1:"./asset/configurateur/interieurs/vues/cuir-noir_perfore-1.jpg",
                    2:"./asset/configurateur/interieurs/vues/cuir-noir_perfore-2.jpg",
                    3:"./asset/configurateur/interieurs/vues/cuir-noir_perfore-3.jpg"
                }, id: 2 },
            3: { name: "Sièges Confort en cuir noir", version:"legende", price: 0,            
                picture:{
                    1:"./asset/configurateur/interieurs/vues/cuir-noir-1.jpg",
                    2:"./asset/configurateur/interieurs/vues/cuir-noir-2.jpg",
                    3:"./asset/configurateur/interieurs/vues/cuir-noir-3.jpg"
                }, id: 3},
            4: { name: "Sièges Confort en cuir brun", version:"legende", price: 800, 
                picture:{
                    1:"./asset/configurateur/interieurs/vues/cuir-brun-1.jpg",
                    2:"./asset/configurateur/interieurs/vues/cuir-brun-2.jpg",
                    3:"./asset/configurateur/interieurs/vues/cuir-brun-3.jpg"
                }, id: 4 },
        },
        equipements: {
            design: {
                1: { name: "Pack héritage", price: 180, picture:"./asset/configurateur/equipements/categories/design/pack-heritage.jpg", id: 1 },
                2: { name: "Repose-pieds passager en aluminium", price: 96, picture:"./asset/configurateur/equipements/categories/design/repose-pied-alu.jpg", id: 2 },  
            },
            mediaNavigation: {
                1: { name: "Alpine Télémétrics", price: 204, picture:"./asset/configurateur/equipements/categories/media et navigation/alpine-metrics.jpg", id: 1 },
                2: { name: "Système Audio Focal", price: 600, picture:"./asset/configurateur/equipements/categories/media et navigation/audio-focal.jpg", id: 2 },
                3: { name: "Système Audio Focal Premium", price: 1200, picture:"./asset/configurateur/equipements/categories/media et navigation/audio-premium.jpg", id: 3},
                4: { name: "Système Audio standard", price: 0, picture:"./asset/configurateur/equipements/categories/media et navigation/audio-standard.jpg", id: 4 },
            },
            confort: { 
                1: { name: "Retroviseur intérieur électrochrome", price: 0, picture:"./asset/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg", id: 1 },
                2: { name: "Rétroviseurs ext. chauf. rabattables élec.", price: 504, picture:"./asset/configurateur/equipements/categories/confort/retro-ext-chaffant.jpg", id: 2 },
                3: { name: "Pack de rangement", price: 504, picture:"./asset/configurateur/equipements/categories/confort/pack-rangement.jpg", id: 3},
                4: { name: "Régulateur / limiteur de vitesse", price: 0, picture:"./asset/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg", id: 4 },
            },
            conduite: {         
                1: { name: "Aide au stationnement AR", price: 420, picture:"./asset/configurateur/equipements/categories/conduite/aide-stationnement-ar.jpg", id: 1 },
                2: { name: "Aide au stationnement AV et AR", price: 750, picture:"./asset/configurateur/equipements/categories/conduite/aide-stationnement-av-ar.jpg", id: 2 },
                3: { name: "Aide au stationnement AV AR et caméra de recul", price: 1200, picture:"./asset/configurateur/equipements/categories/conduite/camera-recul.jpg", id: 3},
                4: { name: "Echappement Sport actif", price: 1500, picture:"./asset/configurateur/equipements/categories/conduite/echappement-sport.jpg", id: 4 }, 
            },
            security: {
                1: { name: "Système de freinage Haute-Perf 320mm", price: 1000, picture:"./asset/configurateur/equipements/categories/securite/freinage-haute-perf.jpg", id: 1 },
                2: { name: "Assistance au freinage d'urgence", price: 0, picture:"./asset/configurateur/equipements/categories/securite/aide-freinage-durgence.jpg", id: 2 },
                3: { name: "Airbags frontaux conducteur et passager", price: 0, picture:"./asset/configurateur/equipements/categories/securite/airbag.jpg", id: 3}
            },
            personalizedExterieur: { 
                1: { name: "Etriers de frein couleur Bleu Alpine", price: 384, picture:"./asset/configurateur/equipements/categories/personnalisation exterieure/etrier-bleu.jpg", id: 1 },
                2: { name: "Logo Alpine sur les ailes avant", price: 120, picture:"./asset/configurateur/equipements/categories/personnalisation exterieure/logo-alpine.jpg", id: 2 },
                3: { name: "Etriers de frein couleur Gris Anthracite", price: 0, picture:"./asset/configurateur/equipements/categories/personnalisation exterieure/etrier-gris.jpg", id: 3}
            },
            personalizedInterior: { 
                1: { name: "Pédalier en aluminium", price: 120, picture:"./asset/configurateur/equipements/categories/personnalisation interieure/pedal-alu.jpg", id: 1 },
                2: { name: "Harmonie carbone mat", price: 0, picture:"./asset/configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg", id: 2 },
                3: { name: "Logo au centre du volant en Bleu Alpine", price: 84, picture:"./asset/configurateur/equipements/categories/personnalisation interieure/logo-volant.jpg", id: 3},
                4: { name: "Sièges chauffants", price: 400, picture:"./asset/configurateur/equipements/categories/personnalisation interieure/siege-chauffant.jpg", id: 4 },
            }
        },
        accessory: {
            safetyTransport: { 
                1: { name: "Extincteur 1kg avec manomètre", price: 22, picture:"./asset/configurateur/accessoires/transport et protection/extincteur.jpg", id: 1 },
                2: { name: "Chaine à neige Premium Grip", price: 336, picture:"./asset/configurateur/accessoires/transport et protection/chaine-neige.jpg", id: 2 },  
                3: { name: "Alarme", price: 543, picture:"./asset/configurateur/accessoires/transport et protection/alarme.jpg", id: 3},
                4: { name: "Protection Prise OBD", price: 99, picture:"./asset/configurateur/accessoires/transport et protection/protection-obd.jpg", id: 4 },
                5: { name: "Kit de sécurité", price: 20, picture:"./asset/configurateur/accessoires/transport et protection/kit-securite.jpg", id: 5 }, 
                6: { name: "Fixation extincteur", price: 72, picture:"./asset/configurateur/accessoires/transport et protection/fixation-extincteur.jpg", id: 6 }, 
            },
            multimedia: {
                1: { name: "Support caméra sport", price: 89, picture:"./asset/configurateur/accessoires/multimedia/support-camera.jpg", id: 1 },
                2: { name: "Support smartphone magnétique - Fixation sur tableau de bord", price: 21, picture:"./asset/configurateur/accessoires/multimedia/support-smartphone.jpg", id: 2 },
            },
            interior: { 
                1: { name: "Tapis de coffre", price: 83, picture:"./asset/configurateur/accessoires/interieur/tapis-coffre.jpg", id: 1 },
                2: { name: "Filet de rangement - Horizontal", price: 59, picture:"./asset/configurateur/accessoires/interieur/filet-rangement.jpg", id: 2 },
            },
            storageMaterial: {
                1: { name: "Chargeur batterie", price: 240, picture:"./asset/configurateur/accessoires/garage/chargeur-batterie.jpg", id: 1 },
                2: { name: "Kit Outils Alpine", price: 398, picture:"./asset/configurateur/accessoires/garage/kit-outils.jpg", id: 2 },
            },
            exterior: {
                1: { name: "Cabochons Alpine - Métalisés", price: 24, picture:"./asset/configurateur/accessoires/exterieur/cabochons-metal.jpg", id: 1 },
                2: { name: "Housse de protection Alpine", price: 216, picture:"./asset/configurateur/accessoires/exterieur/housse.jpg", id: 2 },
                3: { name: "Antivols pour jante - Noirs", price: 51, picture:"./asset/configurateur/accessoires/exterieur/antivol-jantes.jpg", id: 3}
            }
        }
    },
    modelisation: ""
  };
   
function rootReducer(state = initialState, action) {
    let newState = null

    switch (action.type) {
        
        case 'SELECT_VERSION' :
            newState = { 
                ...state,
                modelisation : { 
                    car :{version: action.payload},
                    color: [],
                    wheels : [],
                    scellerie : [],
                    equipement : [],
                    accessoire : []
                } 
            }
            return newState

        case 'SELECT_COLOR' :
            newState = { 
                ...state,
                modelisation:{ 
                   ...state.modelisation,
                    car : {
                        ...state.modelisation.car,
                        version:{
                            ...state.modelisation.car.version,
                            allPictures : {...state.car.version[state.modelisation.car.version.name].allPictures[action.payload.color]}
                        },
                    color: action.payload,
                    wheels : [],
                    scellerie : [],
                    equipement : [],
                    accessoire : []
                    }
                }
            }
            return newState

        case 'SELECT_WHEEL' :
            newState = { 
                ...state,
                modelisation:{ 
                    ...state.modelisation,
                    car : {
                        ...state.modelisation.car,
                        version:{
                            ...state.modelisation.car.version,
                            allPictures : {
                                ...state.car.version[state.modelisation.car.version.name].allPictures[state.modelisation.car.color.color][action.payload.Wheels.name.toLowerCase()]
                            }
                        },
                    color: { ...state.modelisation.car.color},
                    wheels : action.payload.Wheels,
                    scellerie : [],
                    equipement : [],
                    accessoire : []
                    }
                }
            }
            return newState

        case 'SELECT_SCELLERIE':
            newState = {               
                    ...state,
                modelisation:{ 
                    ...state.modelisation,
                    car : {
                        ...state.modelisation.car,
                        version:{
                            ...state.modelisation.car.version
                        },
                        color: { ...state.modelisation.car.color},
                        wheels : {...state.modelisation.car.wheels},
                        scellerie : action.payload,
                        equipement : [],
                        accessoire : []
                    }
                }
            }
            return newState
        case 'SELECT_EQUIPEMENT':
            newState = {               
                    ...state,
                modelisation:{ 
                    ...state.modelisation,
                    car : {
                        ...state.modelisation.car,
                        version:{
                            ...state.modelisation.car.version
                        },
                        color: { ...state.modelisation.car.color},
                        wheels : {...state.modelisation.car.wheels},
                        scellerie :  {...state.modelisation.car.scellerie},
                        equipement : {
                            ...state.modelisation.car.equipement,
                            [action.payload.name] : action.payload },
                        accessoire : []
                        
                    }
                }
            }
            console.log(newState)
            return newState
        case 'RESET_EQUIPEMENT':
            newState = {               
                    ...state,
                modelisation:{ 
                    ...state.modelisation,
                    car : {
                        ...state.modelisation.car,
                        version:{
                            ...state.modelisation.car.version
                        },
                        color: { ...state.modelisation.car.color},
                        wheels : {...state.modelisation.car.wheels},
                        scellerie :  {...state.modelisation.car.scellerie},
                        equipement : [],
                        accessoire : []
                    }
                }
            }
            console.log(newState)
            return newState
        case 'SELECT_ACCESSOIRE':
            newState = {               
                    ...state,
                modelisation:{ 
                    ...state.modelisation,
                    car : {
                        ...state.modelisation.car,
                        version:{
                            ...state.modelisation.car.version
                        },
                        color: { ...state.modelisation.car.color},
                        wheels : {...state.modelisation.car.wheels},
                        scellerie :  {...state.modelisation.car.scellerie},
                        equipement : {...state.modelisation.car.equipement},
                        accessoire : {
                            ...state.modelisation.car.accessoire,
                            [action.payload.name] : action.payload },
                    }
                }
            }
            console.log(newState)
            return newState
        case 'SELECT_ACCESSOIRE':
            newState = {               
                    ...state,
                modelisation:{ 
                    ...state.modelisation,
                    car : {
                        ...state.modelisation.car,
                        version:{
                            ...state.modelisation.car.version
                        },
                        color: { ...state.modelisation.car.color},
                        wheels : {...state.modelisation.car.wheels},
                        scellerie :  {...state.modelisation.car.scellerie},
                        equipement : {...state.modelisation.car.equipement},
                        accessoire : []
                    }
                }
            }
            console.log(newState)
            return newState
        default: 
            return state
    }
      
  };

  export default rootReducer;
  
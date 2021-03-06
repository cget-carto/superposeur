/*

	@ File : layer_styles.js
	@ Author : Hassen Chougar, Service Cartographie du CGET
	@ Date : 08/2019

	@ For : ViZonage - Carte interactive des contrats et zonages de politiques publiques
	@ Main file : layer_management.js

	@ Description : script d'attribution des styles graphiques aux fichers de contrat/zonage.

*/


/****************************************************************************************************************/
/******************************************* COULEUR DOMINANTE CONTRATS/ZONAGES ********************************************/
/****************************************************************************************************************/
let acvColor = "rgb(255, 80, 0)";
let afrColor = "#32879f";
let amicbColor = "#5c0002";
let berColor = "#00235c";
let budColor;
let cdtColor = "#bb4454";
let cpierColor = '#bf782b';
let cteColor = "#17d9ff";
let crColor = "#5b8626";
let cvColor = "#f24444";
let zfuColor = "#be5fbe";
let zrrColor = "#83b732";

/****************************************************************************************************************/
/******************************************* SYMBOLOGIE DES FICHIERS ********************************************/
/****************************************************************************************************************/

let acvTexture = textures.lines()
                  .orientation("vertical")
                  .stroke(acvColor)
                  .size(10)
                  .strokeWidth(10);

let afrTexture = textures.circles()
                  .lighter()
                  .size(10)
                  .fill("#32879f")
                  .background(afrColor);

let amicbTexture = textures.circles()
                  // .lighter()
                  .size(2)
                  .radius(2)
                  .fill(amicbColor)
                  .background("transparent");

let berTexture = textures.circles()
                  .size(10)
                  .fill("transparent")
                  .strokeWidth(2)
                  .stroke(berColor);

let budTexture = textures.circles()
                  .lighter()
                  .radius(1)
                  .size(5)
                  .fill("white")
                  .background("purple");

let cdtTexture = textures.circles()
                  .radius(1.75)
                  .size(6.5)
                  .fill(cdtColor);

let cpierTexture = textures.lines()
                  .size(10)
                  .strokeWidth(2)
                  .stroke(cpierColor);

let crTexture = textures.paths()
                  .d("woven")
                  .stroke(crColor)
                  // .background("rgb(188, 189, 34)")
                  .thicker();

let cteTexture = textures.circles()
                  .radius(2)
                  .fill(cteColor) // intérieur des cercles
                  .background("rgba(23, 217, 255,0.2)") // arrière plan
                  .strokeWidth(2)
                  .stroke("#35b8f7")
                  .complement();

let cvTexture = textures.lines()
                  .orientation("vertical")
                  .size(5)
                  .stroke(cvColor)
                  .strokeWidth(1.5);

let zfuTexture = textures.lines()
                  .orientation("vertical")
                  .stroke(zfuColor)
                  .size(10)
                  .strokeWidth(10);

let zrdTexture = textures.lines()
                  .size(8)
                  .strokeWidth(10)
                  .stroke('rgb(140, 86, 75)');

let zrrTexture = textures.circles()
                         .thicker()
                         .size(3)
                         .fill(zrrColor);

/****************************************************************************************************************/
/****************************************** TABLEAU .json DES STYLES ********************************************/
/****************************************************************************************************************/

let textureArray = [
                    {
                      layer:'afr',
                      lib:"Zone d'Aide à Finalité Régionale",
                      style:afrTexture,
                      stroke:afrColor
                    },
                    {
                      layer:'acv',
                      lib:"Action Coeur de ville",
                      style:acvTexture,
                      stroke:acvColor
                    },
                    {
                      layer:'amicb',
                      lib:"Appel à Manifestation d'Intérêt Centre-bourg",
                      style:amicbTexture,
                      stroke:amicbColor
                    },
                    {
                      layer:'ber',
                      lib:"Bassin d'Emploi à Redynamiser",
                      style:berTexture,
                      stroke:berColor
                    },
                    {
                      layer:'bud',
                      lib:"Bassin Urbain à Dynamiser",
                      style:budTexture,
                      stroke:budColor
                    },
                    {
                      layer:'cdt',
                      lib:"Contrat de Développement Territorial",
                      style:cdtTexture,
                      stroke: cdtColor,
                    },
                    {
                      layer:'cpier',
                      lib:"Contrat de Plan Interrégional État-Région",
                      style:cpierTexture,
                      stroke:cpierColor,
                    },
                    {
                      layer:'cr',
                      lib:"Contrat de ruralité",
                      style:crTexture,
                      stroke:crColor
                    },
                    {
                      layer:'cte',
                      lib:"Contrat de Transition Écologique",
                      style:cteTexture,
                      stroke:cteColor
                    },
                    {
                      layer:'cv',
                      lib:"Contrat de ville",
                      style:cvTexture,
                      stroke:cvColor
                    },
                    {
                      layer:'zfu',
                      lib:"Zone Franche urbaine - Territoire Entrepreneur",
                      style:zfuTexture,
                      stroke:zfuColor
                    },
                    {
                      layer:'zrd',
                      lib:"Zone de Restructuration de la Défense",
                      style:zrdTexture,
                    },
                    {
                      layer:'zrr',
                      lib:"Zone de Revitalisation Rurale",
                      style:zrrTexture,
                      stroke:zrrColor
                    }
                  ];

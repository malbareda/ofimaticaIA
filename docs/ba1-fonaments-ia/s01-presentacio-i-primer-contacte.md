---
title: "Presentació del mòdul i primer contacte amb la IA"
sidebar_label: "S01 · Presentació del mòdul i primer contacte amb la IA"
sidebar_position: 1
description: "Setmana 1 — Presentació del mòdul i primer contacte amb la IA"
---

import Activitat from '@site/src/components/Activitat';

# Setmana 1 — Presentació del mòdul i primer contacte amb la IA

**BA1 — Fonaments i infraestructura d'IA** · 3 h

:::info Primera sessió
Aquesta sessió té dues parts. La primera és explicar-te com funciona el mòdul.
La segona és deixar l'ordinador a punt i fer el primer encàrrec.
:::

## Objectius

En acabar la sessió has de ser capaç de:

1. Accedir a les eines d'IA del mòdul i deixar l'entorn de treball operatiu.
2. Instal·lar i configurar una extensió de navegador seguint unes especificacions.
3. Descriure diferències observables entre les respostes de diversos models a un
   mateix prompt.
4. Documentar una incidència d'instal·lació de manera que una altra persona la
   pugui resoldre.

## De què va aquest mòdul

Es diu «Aplicacions ofimàtiques». Si has vist el nom i has pensat en un curs de
Word, t'has equivocat de mòdul.

El que aprendràs aquí és **fer feina d'oficina amb l'ajuda de la intel·ligència
artificial i respondre'n**. Les dues parts són igual d'importants. La primera
sense la segona és copiar i enganxar; la segona sense la primera és treballar amb
una mà lligada.

La diferència entre algú que fa servir la IA bé i algú que la fa servir malament
no és la velocitat d'escriure prompts. És **saber quan la resposta és bona**. I
per saber-ho has de saber fer la feina.

### La regla de l'ús de la IA

> **Pots fer servir la IA sempre, excepte quan l'enunciat digui explícitament que
> no.**

No hi ha trampa. No et penalitzarem per fer-la servir. El que sí que farem és
preguntar-te per què has fet el que has fet, i aquí és on es nota qui ha entès el
que ha lliurat.

Hi haurà poques activitats sense IA. Serveixen per saber on ets sense ajuda, i
sortiran anunciades amb temps.

### Com s'avalua

| Què | Pes |
|---|---|
| Activitats fetes a classe | La major part |
| Entrevistes curtes sobre la teva pròpia feina | Contínua |
| Examen (només a BA1 i BA4) | Complementari |

Les **entrevistes** són tres o quatre preguntes sobre el que acabes de lliurar.
Duren dos minuts. Si has entès el que has fet, són fàcils; si has enganxat un
resultat sense mirar-lo, no.

A gairebé totes les activitats has de lliurar **dues coses**: el producte i el
procés. El procés vol dir la conversa amb la IA, els prompts que has fet servir i
què has acceptat, modificat o descartat. Un producte perfecte sense procés no
val.

## Les eines

En farem servir moltes al llarg del curs. Avui n'has de deixar a punt les primeres.

| Eina | Per a què | Compte |
|---|---|---|
| **Kimi** | Model frontier xinès, bon raonament i context llarg | Personal |
| **DeepSeek** | Model open weights xinès, potent i gratuït | Personal |
| **ChatGPT** (gratuït) | Referència del mercat, comparació i skills | Personal |
| **Gemini** | Comparació i integració amb Google | Del centre |

Al llarg del curs n'apareixeran més: l'**Open WebUI** del centre (una interfície
pròpia amb diversos models, que estem muntant i estarà operativa a l'octubre),
NotebookLM, Leonardo, Gamma, Suno i alguna altra. Les anirem obrint quan calgui.

:::warning Sobre Claude
Veuràs Claude a exemples i demostracions, però **no n'obriràs cap compte**:
exigeix 18 anys. Quan surti, serà projectat a classe.
:::

### Kimi i DeepSeek

Avui farem servir dues eines que potser no coneixes:

- **Kimi** ([kimi.ai](https://kimi.ai)) — un model frontier fet per Moonshot AI.
  Destaca pel seu context llarg (pot llegir documents sencers) i el seu raonament.
  Obre't un compte gratuït.
- **DeepSeek** ([chat.deepseek.com](https://chat.deepseek.com)) — un model open
  weights fet per DeepSeek. És sorprenentment potent per ser gratuït i obert, i
  ha sacsejat el mercat demostrant que no cal un pressupost multimilionari per fer
  un bon model. Obre't un compte gratuït.

Tots dos són xinesos, sí. Més endavant parlarem de privacitat i geopolítica de
les dades. Avui, el que importa és que funcionen i que els provis.

### Open WebUI (a partir d'octubre)

El centre està muntant una interfície web pròpia, l'**Open WebUI**, on tindràs
diversos models al mateix lloc i les converses quedaran al servidor del centre,
no a les empreses que fan els models. Quan estigui operativa — previst per
l'octubre — passarà a ser l'eina principal del mòdul. Avui encara no hi podem
entrar.

:::tip Els paràmetres del model
A moltes eines de xat trobaràs dos ajustos importants:

**Temperatura.** Controla com de previsible és la resposta: baixa, el model tria
gairebé sempre la continuació més probable; alta, obre el ventall. Baixa per
extreure dades o calcular. Alta per generar idees. Si el mateix prompt et dona
resultats molt diferents cada vegada, ja saps per què.

**Esforç de raonament (*reasoning effort*).** Alguns models recents permeten
ajustar quanta estona «pensen» abans de respondre. Un esforç baix dona respostes
ràpides per a tasques senzilles; un esforç alt fa que el model dediqui més passos
interns a raonar, cosa que millora les respostes a problemes complexos però triga
més i costa més tokens. DeepSeek, per exemple, té un mode de «pensament profund»
(*deep think*) que pots activar.

Ho tens explicat a la [guia de prompting](/recursos/guia-prompting).
:::

## Conceptes clau d'avui

### Model

Un **model** és el programa que genera el text. GPT, Gemini, Qwen o Llama són
famílies de models diferents, fetes per empreses diferents, entrenades amb dades
diferents i amb mides diferents.

Que dos models responguin a la mateixa pregunta no vol dir que responguin igual.
Un model petit és més ràpid i més barat; un de gran raona millor però costa més.
**Triar el model és una decisió tècnica**, com triar entre un disc dur i un SSD.

### Models frontier i models open weights

No tots els models es distribueixen igual. La diferència és important perquè
afecta el que hi pots fer, el que costa i qui controla les teves dades.

**Models frontier (propietaris).** Són els models més potents del moment, fets
per empreses que no en publiquen els pesos (els números interns que defineixen com
raona el model). Per fer-los servir, envies el text als seus servidors i reps la
resposta. Exemples: GPT-4o (OpenAI), Claude (Anthropic), Gemini (Google). Solen
tenir la millor qualitat en tasques complexes, però no pots saber exactament com
funcionen per dins, depens de la seva infraestructura i les teves dades hi
passen.

**Models open weights (pesos oberts).** L'empresa publica els pesos del model
perquè qualsevol se'ls pugui descarregar i executar al seu propi maquinari.
Exemples: Llama (Meta), Qwen (Alibaba), DeepSeek, Mistral. No sempre són tan
potents com els frontier de darrera generació, però tens control total: pots
executar-los sense connexió, les dades no surten del teu servidor, i pots
adaptar-los. L'Open WebUI que muntarem al centre, per exemple, podrà executar
models open weights al nostre propi maquinari.

**Per què importa la distinció?** Perquè quan tries una eina d'IA no estàs triant
només «quina respon millor». Estàs decidint on van les teves dades, de qui
depens, i què pots fer si l'empresa canvia les condicions o tanca. Un tècnic
informàtic ha de saber-ho.

A la pràctica, avui faràs servir tots dos tipus: ChatGPT i Kimi són frontier;
DeepSeek és open weights (tot i que el fas servir pel seu web, també el podries
descarregar i executar localment).

### Prompt

El **prompt** és el que li escrius. Sembla obvi, però la major part dels mals
resultats venen d'un prompt dolent, no d'un model dolent.

### Al·lucinació

Quan un model **s'inventa informació i te la presenta amb la mateixa seguretat
que la informació certa**. No és una avaria: és com funcionen. Un model genera
text plausible, i el text fals sovint és plausible.

Això no és un detall menor. És la raó per la qual t'has de saber la feina.

<Activitat num={1}>

## Activitat: Quatre IA, la mateixa pregunta

:::note Enunciat en format Word
Aquesta activitat també està disponible com a document per lliurar al Moodle: <a href="../activitats/Activitat-01-presentacio-i-primer-contacte.docx">Activitat-01-presentacio-i-primer-contacte.docx</a>
:::

### Context

És el teu segon dia a Vallcorba Informàtica. L'Aleix Ferrer t'ha deixat aquesta
nota a la taula:

> «Bon dia. La Núria vol que provem eines d'IA i m'ha demanat un informe. Jo no
> tinc temps aquesta setmana. Fes-me una comparació de quatre eines amb la mateixa
> pregunta i digue'm quina et sembla millor i per què. Que sigui curt, que no me
> l'acabaré.
>
> Ah, i abans instal·la't el corrector al navegador, que els informes que envieu
> fan mal als ulls. — A.»

### Part 1 — Deixar l'entorn a punt

Abans de res, l'entorn de treball.

1. Obre un compte a **Kimi** ([kimi.ai](https://kimi.ai)) i verifica que hi pots
   escriure.
2. Obre un compte a **DeepSeek** ([chat.deepseek.com](https://chat.deepseek.com))
   i verifica que hi pots escriure.
3. Obre un compte a **ChatGPT** (si no en tens) i verifica que hi pots escriure.
4. Comprova que tens accés a **Gemini** amb el compte del centre.
5. **Instal·la l'extensió de corrector ortogràfic** que t'indiqui el professorat,
   configura-la en català i comprova que funciona escrivint una frase amb faltes
   en un camp de text.
6. Comprova que l'extensió es pot **desactivar i tornar a activar** sense
   desinstal·lar-la, i mira si té actualitzacions pendents.

:::tip Si alguna cosa falla
Que alguna cosa no funcioni forma part de l'activitat. Apunta't què has provat i
què ha passat exactament: el missatge d'error literal, no «no anava».
:::

### Part 2 — La mateixa pregunta, quatre eines

Tria **una** d'aquestes tres preguntes:

- «Explica'm què és una adreça IP com si tingués 12 anys.»
- «Un client em diu que l'ordinador va lent. Quines cinc coses comprovaries
  primer?»
- «Escriu-me un correu per dir a un client que la reparació costarà més del
  pressupostat.»

Fes **exactament la mateixa pregunta**, sense canviar ni una coma, a:

1. **Kimi**
2. **DeepSeek**
3. **ChatGPT**
4. **Gemini**

Guarda les quatre respostes senceres.

### Part 3 — La comparació

Compara les tres respostes en aquests quatre punts:

| Punt | Què has de mirar |
|---|---|
| **Longitud** | Quantes paraules fa cadascuna |
| **Format** | Fa servir llistes, títols, taules? Text seguit? |
| **To** | Formal, proper, tècnic, condescendent? |
| **Contingut** | Alguna diu alguna cosa que les altres no diguin? Alguna diu res que et sembli dubtós? |

### Què has de lliurar

Un document amb:

1. **Captura o registre** que demostri que tens accés a les quatre eines i que
   l'extensió està instal·lada i configurada.
2. **La pregunta** que has triat, escrita literalment.
3. **Les quatre respostes** senceres, identificant quina eina i quin model ha
   generat cadascuna.
4. **La comparació** dels quatre punts de la taula.
5. **La teva conclusió**: quina faries servir per a aquesta feina i per què. Una
   frase, però que sigui teva.
6. **Registre d'incidències**: tot el que no ha funcionat a la primera, què has
   provat i com ho has resolt. Si no ha fallat res, escriu-ho també.

:::tip Ús de la IA
Permès. Recorda que has de documentar el procés: els prompts, les iteracions i
què has acceptat, modificat o descartat.
:::

### Com s'avalua

| Nivell | Què vol dir |
|---|---|
| **Insuficient** | Falta alguna de les quatre respostes, o la comparació es limita a dir que «són semblants» |
| **Suficient** | Les quatre respostes hi són i la comparació cobreix els quatre punts |
| **Notable** | La comparació assenyala diferències concretes amb exemples del text |
| **Excel·lent** | A més, la conclusió justifica la tria amb un criteri aplicable a altres casos, i el registre d'incidències permetria a un company resoldre el mateix problema |

### Preguntes que et poden fer

- Quina diferència hi ha entre un model frontier i un open weights? Posa un exemple de cada.
- Alguna de les tres respostes diu alguna cosa que et sembli falsa? Com ho
  comprovaries?
- Si demà l'Aleix et demana la mateixa comparació amb una altra pregunta, què
  faries diferent?


</Activitat>

## Per saber-ne més

<!-- Pendent: enllaços i lectures opcionals. -->

## Criteris d'avaluació

| Codi | Criteri | Tractament |
|---|---|---|
| 1.1 | Identifica i estableix les fases del procés d'instal·lació. | Principal |
| 1.2 | Respecta les especificacions tècniques del procés d'instal·lació. | Principal |
| 1.3 | Configura les aplicacions segons els criteris establerts. | Principal |
| 1.5 | Soluciona problemes en la instal·lació o integració amb el sistema informàtic. | Principal |
| 1.6 | Elimina i/o afegeix components de la instal·lació en l'equip. | Principal |
| 1.7 | Actualitza les aplicacions. | Principal |
| 1.4 | Documenta les incidències. | Principal |
| 9.7 | Utilitza els recursos disponibles per solucionar incidències. | Reforç |

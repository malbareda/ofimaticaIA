---
title: "Vídeo digital i generació de música amb IA"
sidebar_label: "S21 · Vídeo digital i generació de música amb IA"
sidebar_position: 10
description: "Setmana 21 — Vídeo digital i generació de música amb IA"
---

import Activitat from '@site/src/components/Activitat';

# Setmana 21 — Vídeo digital i generació de música amb IA

**BA3 — Contingut, fonts i comunicació visual** · 3 h · Part B del bloc

## Objectius

En acabar la sessió has de ser capaç de:

1. Reconèixer els elements, formats i còdecs d'una seqüència de vídeo.
2. Capturar, editar i exportar un videotutorial breu.
3. Valorar les implicacions de drets d'autor del contingut generat per IA.

## Què és un vídeo per dins

Un vídeo és una successió d'imatges més, normalment, una o més pistes d'àudio.

| Element | Què és | Valors habituals |
|---|---|---|
| **Fotogrames per segon** | Imatges cada segon | 24 (cinema), 25 (TV europea), 30, 60 (pantalla) |
| **Resolució** | Píxels per fotograma | 1280×720, 1920×1080, 3840×2160 |
| **Relació d'aspecte** | Proporció | 16:9 horitzontal, 9:16 vertical |
| **Taxa de bits** | Dades per segon | Decideix qualitat i pes |
| **Pistes** | Vídeo, àudio, subtítols | |

**Per a un videotutorial de pantalla, 1920×1080 a 30 fps sobra.** Pujar a 60 fps
duplica el pes sense que es noti res: no hi ha moviment ràpid.

## Còdecs i contenidors

Aquí hi ha la confusió clàssica i val la pena desfer-la.

Un **còdec** és l'algorisme que comprimeix i descomprimeix. Un **contenidor** és el
fitxer que ho empaqueta tot.

`.mp4` és un contenidor. A dins hi pot haver H.264, H.265, AV1 o altres. **Per això
dos fitxers `.mp4` poden comportar-se de manera diferent**: un el reprodueix
qualsevol cosa i l'altre no.

| Còdec | Compatibilitat | Compressió |
|---|---|---|
| **H.264** | Universal | Bona |
| **H.265 (HEVC)** | Bona, no universal | Millor: la meitat de mida |
| **AV1** | Creixent, lliure de patents | Molt bona |
| **VP9** | Web | Molt bona |

| Contenidor | Per a què |
|---|---|
| **MP4** | El que has de fer servir per defecte |
| **MKV** | Flexible, per a arxiu |
| **MOV** | Entorns Apple i edició |
| **WebM** | Web |

:::tip La regla
**Per a res que hagi de veure algú altre: MP4 amb H.264.** Es reprodueix a tot
arreu, i és el que evita la trucada de «no se'm veu el vídeo».
:::

## Capturar pantalla

Quatre coses que separen un videotutorial usable d'un d'inútil:

**Prepara l'escena abans.** Tanca notificacions, pestanyes personals i tot el que
no hi hagi de sortir. Una notificació de WhatsApp al mig d'un vídeo per a un client
és un problema, no una anècdota.

**Grava només el que cal.** Una finestra, no tot l'escriptori amb dues pantalles.

**El cursor.** Que es vegi, i moure'l a poc a poc. Els moviments ràpids no es
poden seguir.

**L'àudio.** És el que decideix si es veu el vídeo sencer. Un vídeo amb imatge
regular i àudio bo es mira; a l'inrevés, no. Grava en un lloc silenciós i acosta't
al micròfon.

## Edició bàsica

Amb quatre operacions n'hi ha prou:

**Retallar l'inici i el final.** Els primers i últims segons sempre sobren.

**Tallar els temps morts.** Les esperes de càrrega, els dubtes, els «a veure…».

**Text a pantalla.** Per a coses que la veu no diu bé: rutes, ordres exactes,
avisos.

**Zoom en el moment clau.** Si el que has de mostrar és un botó petit, ampliar-lo
val més que qualsevol explicació.

I una que no és edició però és igual de important: **els subtítols**. Molta gent
mira els vídeos sense so. Les eines automàtiques ho fan prou bé i cal
repassar-los, sobretot amb noms propis i termes tècnics.

## Guions amb IA

Un videotutorial curt necessita guió. Improvisar davant del micròfon dona vídeos
de sis minuts que n'haurien de durar dos.

La IA ajuda a estructurar-lo, però has de vigilar el mateix de sempre: **si no
coneix el procediment real, se l'inventarà**. Val la mateixa regla de la sessió 8:
tu decideixes els passos, ella els redacta.

Estructura d'un guió de videotutorial:

1. **Què resoldrem**, en una frase. Sense presentacions.
2. **Què cal tenir** abans de començar.
3. **Els passos**, un per un, amb el que es veurà a pantalla.
4. **Com saber que ha anat bé.**
5. **Què fer si no funciona.**

## Música generada i drets

Suno genera música a partir d'una descripció. És un domini creatiu diferent i
serveix per veure que el prompting funciona igual: descriure amb precisió, iterar,
i revisar el resultat amb criteri.

I obre un debat que val la pena tenir explícitament.

**Sobre el que generes:** les condicions varien molt segons el servei i el pla.
Molts serveis de música per IA distingeixen entre ús personal i ús comercial, i
alguns reserven drets sobre el que es genera amb el pla gratuït. **Abans de posar
una música generada a un vídeo de l'empresa, cal llegir les condicions del servei
concret.**

**Sobre el que va aprendre:** els generadors de música s'han entrenat amb música
existent, i hi ha litigis oberts sobre si això és lícit. Hi ha músics que ho
consideren un ús no autoritzat de la seva obra.

No és una pregunta d'examen amb resposta única. Però la posició «no ho sabia» no
és acceptable en algú que treballa d'això.

<Activitat num={21}>

## Activitat: Videotutorial i sintonia

:::note Enunciat en format Word
Aquesta activitat també està disponible com a document per lliurar al Moodle: <a href="../activitats/Activitat-21-video-digital-i-musica-ia.docx">Activitat-21-video-digital-i-musica-ia.docx</a>
:::

### Context

La Núria ha vist el manual del Forn Cardús i vol anar més enllà:

> «El manual està bé, però la Sílvia em va dir que li costa seguir-lo. Un vídeo
> curt li aniria millor: que el pugui mirar al mòbil amb la impressora al davant.
>
> Un o dos minuts, no més. I ja que hi sou, poseu-hi una sintonia curta al principi
> i al final, que quedi de la casa.»

### Part 1 — El guió

Escriu el guió del videotutorial amb els cinc apartats d'aquests apunts.

El tema: **resoldre una incidència tècnica concreta** que t'assignarà el
professorat.

El guió ha de portar dues columnes: **què es diu** i **què es veu a pantalla**.

### Part 2 — La captura

Grava la pantalla.

Abans de gravar, la llista de preparació:

- [ ] Notificacions desactivades
- [ ] Pestanyes i finestres personals tancades
- [ ] Només la finestra necessària
- [ ] Prova d'àudio feta i escoltada
- [ ] Guió a mà

Anota **la resolució, els fps i la mida del fitxer en brut**.

### Part 3 — L'edició

Edita el vídeo:

- Retalla inici i final.
- Talla els temps morts.
- Afegeix text a pantalla on la veu no n'hi ha prou.
- Fes zoom on calgui.
- Afegeix subtítols i **repassa'ls**.

**Durada final: entre 1 i 2 minuts.**

### Part 4 — La sintonia

Genera amb Suno una sintonia curta (10-15 segons) per a Vallcorba Informàtica.

Documenta el prompt, almenys **dues iteracions** i què has canviat entre elles.

Incorpora-la al vídeo a l'entrada i a la sortida, **amb el volum per sota de la
veu**.

### Part 5 — L'exportació

Exporta el vídeo. Justifica **contenidor i còdec** triats tenint en compte que la
Sílvia el mirarà al mòbil.

Anota la mida final i compara-la amb la del fitxer en brut.

### Part 6 — La nota sobre drets

Escriu **mitja pàgina** responent:

- Quines condicions d'ús té el servei de música que has utilitzat, i si permeten
  fer-la servir en un vídeo comercial.
- Si Vallcorba podria posar aquest vídeo al seu web sense problemes.
- Quina és la teva posició sobre l'entrenament dels generadors amb obres amb
  drets, i per què.

L'última pregunta no té resposta correcta. **Té resposta argumentada o no en té.**

### Què has de lliurar

1. El guió a dues columnes.
2. Les dades de la captura en brut.
3. El vídeo final, d'1 a 2 minuts, amb subtítols.
4. Els prompts de la sintonia amb les iteracions.
5. La justificació de contenidor i còdec, amb les mides.
6. La nota sobre drets.

:::tip Ús de la IA
Permès per al guió i per a la sintonia. **El procediment tècnic que expliques ha
de ser correcte**: si el vídeo ensenya un pas que no funciona, el problema és molt
més gros que si el manual el porta escrit, perquè es veu fent-ho.
:::

### Com s'avalua

| Nivell | Què vol dir |
|---|---|
| **Insuficient** | El vídeo passa dels 2 minuts, no té subtítols, o el procediment mostrat és incorrecte |
| **Suficient** | El vídeo compleix els requisits i la sintonia està incorporada |
| **Notable** | L'edició elimina temps morts de veritat i la tria de còdec està justificada amb dades |
| **Excel·lent** | A més, el vídeo es podria enviar de veritat a la Sílvia, i la nota sobre drets pren una posició argumentada amb les condicions reals del servei a la mà |

### Preguntes que et poden fer

- Per què has exportat amb aquest còdec i no un altre?
- Quant ha baixat la mida entre el brut i el final? A costa de què?
- Ensenya'm el moment del vídeo on has hagut de fer zoom. Per què allà?
- La sintonia que has generat: la podríeu fer servir al web de l'empresa? Amb què
  ho has comprovat?


</Activitat>

## Per saber-ne més

<!-- Pendent: enllaços i lectures opcionals. -->

## Criteris d'avaluació

| Codi | Criteri | Tractament |
|---|---|---|
| 6.1 | Reconeix els elements que componen una seqüència de vídeo. | Principal |
| 6.2 | Estudia els tipus de formats i còdecs més emprats. | Principal |
| 6.3 | Importa i exporta seqüències de vídeo. | Principal |
| 6.4 | Captura seqüències de vídeo amb recursos adequats. | Principal |
| 6.5 | Elabora videotutorials. | Principal |
| 9.1 | Elabora guies visuals amb els conceptes bàsics d'ús d'una aplicació. | Reforç |

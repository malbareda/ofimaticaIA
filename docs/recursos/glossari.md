---
title: Glossari
sidebar_position: 5
description: Vocabulari del mòdul.
---

# Glossari

Els termes que apareixen al mòdul, en ordre alfabètic. Cada entrada diu on es
treballa a fons.

---

### Agent

Sistema que, a partir d'un objectiu, **executa passos per aconseguir-lo** en
comptes de limitar-se a respondre. Pot llegir fitxers, escriure'n i executar
ordres, segons els permisos que tingui.

La diferència amb un xat és el risc: un xat que s'equivoca escriu una bestiesa i
tu la llegeixes; un agent que s'equivoca **ja ho ha fet**.

*Sessió 30.*

### Al·lucinació

Quan un model **s'inventa informació i te la presenta amb la mateixa seguretat
que la informació certa**.

No és una avaria: és com funcionen. Un model genera text plausible, i el text
fals sovint és plausible. Els tipus més traïdors no són les bestieses evidents
sinó les xifres versemblants, els detalls afegits i les omissions.

*Sessions 1 i 13.*

### API

*Interfície de programació d'aplicacions.* La manera que té un programa de parlar
amb un altre.

Quan fas servir una IA per API en comptes del xat web: hi accedeixes amb una
**clau** en comptes d'un usuari, **pagues pel que consumeixes**, i tries el model
a cada petició.

*Sessions 3 i 30.*

### Autoconsistència

Fer **la mateixa pregunta diverses vegades en converses separades** i comparar les
respostes.

Si coincideixen, és millor senyal. Si es contradiuen, no et refiïs de cap: el
model se l'està inventant cada vegada d'una manera.

No serveix repetir-ho a la mateixa conversa: la segona vegada ja té la primera
resposta al davant.

*[Guia de prompting](/recursos/guia-prompting).*

### BPE

*Byte Pair Encoding.* La tècnica amb què es construeix el vocabulari d'un
tokenitzador: es parteix dels caràcters solts i es van fusionant les parelles més
freqüents, desenes de milers de vegades.

El resultat és que els trossos de text habituals acaben sent tokens sencers i els
rars queden partits.

*Sessió 2.*

### Cadena de pensament

*Chain of Thought, CoT.* Demanar-li al model que **escrigui els passos del
raonament** abans de donar el resultat.

Encerta més amb càlculs i classificacions, i sobretot **et deixa comprovar on
s'ha equivocat**. Que el raonament sigui impecable no garanteix que el resultat
sigui correcte.

*[Guia de prompting](/recursos/guia-prompting).*

### Clau d'API

Credencial que permet fer peticions **en el teu nom i amb el teu saldo**. No
protegeix un compte com una contrasenya: és més aviat com una targeta de crèdit
sense PIN.

La causa número u de filtració és pujar-la a un repositori públic dins d'un
fitxer de codi.

*Sessió 30.*

### Còdec

Algorisme que comprimeix i descomprimeix vídeo o àudio (H.264, H.265, AV1). **No
és el mateix que el contenidor**: dos fitxers `.mp4` poden portar còdecs
diferents i comportar-se de manera diferent.

*Sessió 21.*

### Contenidor

Format de fitxer que empaqueta les pistes de vídeo, àudio i subtítols (MP4, MKV,
MOV, WebM). Diu com està organitzat el fitxer, no com està comprimit.

*Sessió 21.*

### Context (finestra de)

Quantitat màxima de tokens que un model pot tenir en compte de cop: instruccions,
conversa i resposta, tot junt.

Quan una conversa la desborda, el més habitual és que **es talli el principi
sense avisar**. Per això un model pot començar a contradir coses que havíeu
acordat abans: no s'ha espatllat, han caigut de la finestra.

*Sessió 2.*

### Context feeding

Donar-li al model **el material real** —el correu anterior, el fragment del
contracte, l'exemple d'un document que sí que va agradar— en comptes de descriure
la situació i esperar que se la imagini bé.

*Sessió 7.*

### Dada personal

Qualsevol informació que permeti identificar una persona. No cal el DNI: un nom i
un poble ja poden ser suficients.

Les de **categories especials** (salut, origen ètnic, conviccions, orientació
sexual, biometria, afiliació sindical) i les **de menors** tenen protecció
reforçada.

*Sessió 3.*

### Delimitadors

Marques que separen les parts d'un prompt: `###`, cometes triples `"""`, o
etiquetes com `<correu>...</correu>`.

Serveixen perquè el model sàpiga on acaben les teves instruccions i on comencen
les dades. Quan enganxes material llarg, milloren el resultat de manera
immediata.

*[Guia de prompting](/recursos/guia-prompting).*

### Encadenament de prompts

*Prompt chaining.* Partir una tasca gran en passos, on **la sortida de cada pas
és l'entrada del següent**.

Millora el resultat perquè cada instrucció és més simple, i sobretot perquè pots
comprovar cada pas abans que contamini la resta.

*Sessions 8, 14, 17 i 19.*

### Few-shot

Donar-li **un parell d'exemples resolts** abans de demanar-li el teu cas. El
contrari és **zero-shot**: demanar-ho sense cap exemple.

Serveix quan el que vols és difícil de descriure però fàcil de mostrar. Amb dos o
tres n'hi sol haver prou; si en calen deu, el problema és que la tasca no està ben
definida.

*[Guia de prompting](/recursos/guia-prompting).*

### Format amb pèrdua / sense pèrdua

**Amb pèrdua** (JPEG): l'algorisme llença informació que l'ull nota poc. Pesa molt
menys, però la pèrdua és **acumulativa** i es nota molt amb text i línies netes.

**Sense pèrdua** (PNG): no es perd res. Pesa més, i és el que has de fer servir
per a captures, gràfics i qualsevol cosa amb text.

*Sessió 15.*

### Fuita de prompt

*Prompt leaking.* Aconseguir que un model **reveli les instruccions que té
configurades**.

Si el system prompt conté informació interna —preus, proveïdors, condicions no
públiques—, això és una filtració. **Un system prompt no és un lloc segur.**

*Sessió 4.*

### Injecció de prompt

Intent de fer que un model **es salti les instruccions** que té configurades,
sovint de manera indirecta: emmarcant la petició com una hipòtesi, com la pregunta
d'un tercer o com la continuació d'una frase.

Provar de trencar el teu propi assistent abans de posar-lo davant d'un client és
feina, no entremaliadura.

*Sessió 4.*

### Jailbreak

Fer que un model **se salti les restriccions del fabricant**.

Es diferencia de la injecció de prompt en què l'objectiu no són les teves
instruccions sinó les del qui ha fet el model.

*Sessió 4.*

### LLM

*Large Language Model*, model de llenguatge gran. El tipus de model que hi ha
darrere de gairebé totes les eines del mòdul.

Prediu quin text és més plausible a continuació del que ja hi ha. Tot el que en
sembla comprensió emergeix d'aquesta operació repetida.

### Meta-prompt

Fer servir la IA **per millorar el teu propi prompt**: ensenyar-li el que penses
escriure i demanar-li què li falta.

És especialment útil quan no entens per què un resultat no surt bé: sovint et diu
que li falta una informació que ni t'havies plantejat donar-li.

*[Guia de prompting](/recursos/guia-prompting).*

### Model

El programa que genera el text. GPT, Gemini, Qwen o Llama són famílies diferents,
de fabricants diferents, amb mides i preus diferents.

**Triar el model és una decisió tècnica**, com triar entre un disc dur i un SSD.
La pregunta professional no és quin és el millor, sinó **quin és el més barat que
resol la feina prou bé**.

*Sessió 1.*

### PPP

*Punts per polzada* (DPI). **No és una propietat de la imatge**: és una instrucció
sobre a quina mida s'ha d'imprimir.

El càlcul que has de saber fer: **píxels ÷ PPP = polzades**.

*Sessió 15.*

### Prompt

El que li escrius al model. Té tres parts que convé diferenciar: **instrucció**,
**context** i **format de sortida**.

La major part dels mals resultats venen d'un prompt dolent, no d'un model dolent.

*Sessió 4.*

### RAG

*Retrieval-Augmented Generation*, generació augmentada per recuperació. La tècnica
que fa que un sistema busqui els fragments rellevants **dins de les teves fonts** i
els faci servir per construir la resposta.

És la base de gairebé tots els assistents empresarials, i el que permet que una
resposta porti citació i sigui verificable.

*Sessió 12.*

### RGPD

*Reglament General de Protecció de Dades*, la norma europea que regula el
tractament de dades personals.

A Espanya es complementa amb la LOPDGDD (Llei orgànica 3/2018), que fixa en **14
anys** l'edat mínima perquè un menor pugui consentir el tractament de les seves
dades.

*Sessió 3.*

### Skill

Paquet d'instruccions que **es guarda, s'activa sol quan la tasca ho requereix i
es pot compartir**. Té nom, descripció, instruccions i, opcionalment, recursos.

La part que decideix si funciona és la **descripció**: és l'únic que el sistema
llegeix per decidir si l'activa.

*Sessió 29.*

### System prompt

Instruccions que s'apliquen a **tota** una conversa, sense haver-les de repetir.

És la diferència entre explicar a algú com vols una cosa cada vegada, i
contractar-lo explicant-li la feina el primer dia.

*Sessió 4.*

### Temperatura

Paràmetre que controla **com de previsible és la resposta**. Baixa, el model tria
gairebé sempre la continuació més probable; alta, obre el ventall.

Baixa per extreure dades, classificar o calcular. Alta per generar idees.

Si el mateix prompt et dona resultats molt diferents cada vegada, no és que el
model vagi boig: és que la temperatura és alta.

Hi ha un paràmetre germà, **top-p**, que fa una cosa semblant. La recomanació és
tocar-ne només un.

*[Guia de prompting](/recursos/guia-prompting). Es pot ajustar a l'Open WebUI.*

### Token

Tros de text d'una mida entre la lletra i la paraula. **És la unitat amb què els
models compten i cobren.**

Regla pràctica per al català: **1 token ≈ 3 o 4 caràcters**. Una paraula corrent
són 1 o 2 tokens.

Es paguen dues vegades: els d'**entrada** (tot el que envies, incloent-hi tota la
conversa anterior) i els de **sortida** (el que respon), que solen ser més cars.

*Sessió 2.*

### Tokenitzador

El programa que converteix el teu text en tokens i al revés. **El model només veu
números**: la paraula «ordinador» li arriba com uns quants identificadors sencers.

Cada model té el seu, i els està entrenats sobretot amb text en anglès: **el
català i el castellà en surten perjudicats**, amb un 20 o 30 % més de tokens per
al mateix contingut.

*Sessió 2.*

### Vectorial / mapa de bits

Un **mapa de bits** és una graella de píxels: una fotografia. Si l'amplies, es
pixela.

Una imatge **vectorial** és un conjunt d'instruccions de dibuix: un logotip. Es
pot ampliar tant com vulguis perquè es torna a dibuixar cada vegada.

Un logotip hauria de ser sempre vectorial.

*Sessió 15.*

### Zero-shot

Demanar una cosa **sense donar cap exemple**. És el que fas normalment i per a
tasques corrents funciona bé.

Vegeu **few-shot** per al cas contrari.

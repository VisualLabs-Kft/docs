---
sidebar_position: 1
id: templateDesc
title: 'Sablonok és konvenciók'
sidebar_label: Sablon és Konvenció
slug: 'template'
---

## Dokumentum sablon

### Dokumentum metadata
Minden dokumentum a következő sorokkal kezdődik ([Front Matter](https://jekyllrb.com/docs/front-matter/)):
```
---
sidebar_position: 1
id: dokumentumID
title: 'Dokuemntum cím'
sidebar_label: A sidebar-on megjelenő dokumentum név
slug: 'URL-en elérési út'
---
```

#### Magyarázat
- Kötelező módon, a dokumentum elejére kell beszúrni és "---" közé kell beszúrni a paramétereket.
- Minden dokumentum meg fog jelenni az adott alkategórián belül. Ezeket a **_sidebar_position_** beállításával lehet a megfelelő helyre beosztani (pozíció beállítása alkategóráin belül).
- A dokumentum ID-ja ha nincs meghatározva, akkor a dokumentum neve lesz az, viszont érdemes megadni, hogy legyen könnyebb a dokumentumra hivatkozás.
- A **_title_** megadásával a dokumentumon belül a cím a dokumentum név helyett a megadottra cserélődik.
- A **_sidebar_label_** a sidebar-on megjelenített nevet jelenti. Amennyiben nincs megadva, a dokumentum nevenjelenítődik meg.
- A **_slug_**-ot nem kötelező megadni, ez azért fontos, hogy a URL-ben milyen elérési útvonala legyen a dokumentumnak. Ez azért lehet hasznos, mivel a dokumentum név lehet hosszú és beszédes (ahogy a konvenció is kéri), de a URL az lehet csak egy ID, egy kulcsszó, stb.


## Folder struktúra
A /docs folder-ben minden fontosabb kategória alá csoportosítva vannak az alkatgóriák.

A következő folder struktúra van használatban: ** /docs/kategória/alkategória/... **
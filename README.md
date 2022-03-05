
# Futebol Wordle - [![CircleCI](https://circleci.com/gh/JuanFontes/futebol-wordle/tree/main.svg?style=svg)](https://circleci.com/gh/JuanFontes/futebol-wordle/tree/main)

[Futebol Wordle](https://juanfontes.github.io/futebol-wordle/) é um projeto _forkado_ do [react-wordle](https://github.com/cwackerfuss/react-wordle). Thanks [cwackerfuss](https://github.com/cwackerfuss).

## Resumo

Assim como no [Wordle](https://www.nytimes.com/games/wordle/index.html), um novo nome de time é sorteado diariamente para que você tente adivinhar, as tentativas dependem do tamanho do nome. São mais de [680](https://github.com/JuanFontes/futebol-wordle/blob/main/src/constants/wordlist.ts) times disponíveis atualmente, todos em português.

Quer contribuir com algum nome ou melhoria? Sinta-se livre para abrir um [pull request](https://github.com/JuanFontes/futebol-wordle/pulls). Esse é um projeto livre e toda ajuda é bem-vinda. :)
  
## Deploy

### Localmente:

Você só precisa clonar o repositório e executar alguns comandos.
  
#### Método #1

```bash
<<<<<<< HEAD
$ git clone https://github.com/JuanFontes/futebol-wordle.git
$ cd futebol-wordle
$ npm ci
$ npm run start
=======
$> docker build -t reactle:dev -f docker/Dockerfile .
$> docker run -d -p 3000:3000 --name reactle-dev reactle:dev
>>>>>>> 7d1a95b867d250bd060c4faa244b7eff9c929f10
```
E então você conseguirá acessar http://localhost:3000.

#### Método #2
O projeto possui um [Dockerfile](https://github.com/JuanFontes/futebol-wordle/blob/main/Dockerfile) e também um [docker-compose](https://github.com/JuanFontes/futebol-wordle/blob/main/docker-compose.yaml), caso você não tenha node/npm instalados, essa é a melhor opção.

```bash
$> docker build --target=prod -t reactle:prod -f docker/Dockerfile .
$> docker run -d -p 80:8080  --name reactle-prod reactle:prod
```
Ele irá usar um `nginx` e só a pasta  `build` será copiada, com isso a imagem terá aproximadamente **30MB**. **Caso a sua porta 80 esteja em uso, será preciso alterar nesses dois arquivos mencionados acima.**

Open [http://localhost](http://localhost) in browser.

## Projects built using this repo

### Other languages

- [Arwordle](https://arwordle.netlify.app/): Arabic
- [Boludle](https://www.boludle.com/): Argentinian
- [Gerdle](https://gerdle.vext.co.uk/): Cornish (Kernowek)
- [Keclap](https://keclap.xyz/): Sundanese
- [Kelmaly](https://kelmaly.com/): Arabic
- [Latindictionary.io](https://wordle.latindictionary.io/): Latin
- [Lexoula](https://lexoula.com/): Ελληνικά (Greek)
- [Malay](https://malay-wordle.netlify.app/): Bahasa Malaysia
- [Mondle](https://mondle.vercel.app/): Mongolian
- [Parolette](https://parolette.netlify.app/): Italian
- [Parolle.it](https://parolle.it): Italian
- [Pashtoodle](https://pashtoodle.lingdocs.com): Pashto
- [Persian](https://www.persian-wordle.ir/): Persian (Farsi)
- [Pinyin](https://www.pinyindle.com/): Pinyin (romanization system for Mandarin Chinese)
- [Rudle](https://rudle.vercel.app): Russian
- [Sindhal](https://hellosindh.com/sindhal): Sindhi
- [Szózat](https://szozat.miklosdanka.com/): Hungarian
- [Tàu Tâi-gí (Taigi Wordle)](https://tau.taigi.info/): Taigi (Taiwanese)
- [Tlembung](https://tlembung.vercel.app/): Japanese
- [Tugma](https://tugma.vercel.app): Hiligaynon (spoken in the Philippines)
- [Ukrainian](https://goroh.pp.ua/games/wordle): Ukrainian
- [Urdle](https://urdle.chaoticity.com/): Urdu
- [Vārdulis](https://wordle.lielakeda.lv/): Latvian
- [Word-leh!](https://word-leh.com): Singlish
- [Wordlar](http://wordlar.uz/): Uzbek
- [Wordle (BOS)](https://elahmo.github.io/wordle/): Bosnian
- [Wordle (Spanish)](https://wordle-es.xavier.cc): Spanish/Espanol
- [Wordle-RO](https://wordle-ro.sirb.net/): Romanian
- [Wortel](https://wortel.wrintiewaar.co.za): Afrikaans
- [Wörtchen](https://woertchen.sofacoach.de): German
- [SGWordle](https://sgwordle.now.sh/): Swiss German
- [kelma.mt](https://kelma.mt): Maltese
- [Слівце](https://slivce.com/): Ukrainian
- [ਪੰਜਾਬੀ](https://punjabipuzzle.netlify.app/): Punjabi
- [சொல்லாடல் Soladle](https://omtamil.com/soladle): Tamil
- [字知之明](https://zedaizd.github.io/zh-char-puzzle/): Traditional Chinese
- [꼬들 - 한국어](https://belorin.github.io/): Korean
- [한글 풀어쓰기 5자](https://nakosung.github.io/wordle/): Korean
- [ไทย](https://buddhistuniversity.net/wordle-thai/): Thai

### Fun themes

- ['en si lì'ur](https://tirea.learnnavi.org/wordle): Na'vi, the constructed language from James Cameron's AVATAR (2009)
- [Airportle](https://airportle.scottscheapflights.com/): Airport Codes
- [Anidal](https://anidal-abrarhayat.web.app/): Animals
- [Birdle - Emojis](https://birdle.dev): Bird emojis
- [Birdle](https://www.creek-birdle.com/): Birds
- [Buildly](https://buildly.procurepro.co/): Construction themed
- [Crosswordle](https://crosswordle.mekoppe.com/): Crossword mashup
- [Dundle](https://dundle.dunmiffcord.com/): The Office
- [FFXIVrdle](https://ffxivrdle.com/): Final Fantasy XIV
- [Harry Potter](https://www.harrypotterwordle.com/): Harry Potter
- [JoJodle](https://jojo-news.com/fun/jojodle/): JoJo’s Bizarre Adventure
- [Mahjong Handle](https://mahjong-handle.update.sh/): Mahjong Hands
- [Filmle](https://filmle.now.sh/): Movie titles
- [Movie Wordle](https://movie-wordle.vercel.app): Bollywood
- [Murdle](https://murdle.vercel.app/): Spooky hangman mashup
- [Poker Handle](https://kikychow.github.io/poker-wordle/): Poker
- [Quettale](https://quettale.vercel.app/): Quenya, Elven language in LOTR
- [Radiole](https://radiole.vercel.app/): Radio-themed (for World Radio Day)
- [Squirdle](https://squirdle-inky.vercel.app/): Pokeman
- [Taylordle](https://www.taylordle.com/): Taylor Swift
- [Trekle](https://treklegame.com): Star Trek
- [Weedel](https://meetmeinouter.space/wordle/): Video game characters
- [Wordle.cl](https://www.wordle.cl): Chilean modisms, cities, places
- [Wrdl](https://wrdl-abae.vercel.app/): Words that are 5 letters long after getting rid of their vowels

### Math, Acronyms, Science, Tech, and more

- [AI-powered](https://github.com/asirota/wordle-ai): Includes an AI component
- [Genel](https://andrewholding.github.io/gene-wordle/): Gene symbols
- [Jazle](https://jazle.quest/): Javascript
- [Mathler](https://www.mathler.com/): Find the solution that equals X
- [Morsel](https://plingbang.github.io/morsel/): Morse
- [Numble](https://rbrignall.github.io/numble/): Maths
- [Opsle](https://opsle.vercel.app/): Ops
- [Passwordle](https://passwordle.sp8c3.com/): Passwords
- [Primel](https://converged.yt/primel/): Prime numbers
- [Qwordle](https://qwordle.bhat.ca/): Quantum version of Wordle (uses entangled word-pairs)
- [Quantle](https://deduckproject.github.io/quantle/): Another quantum variant where guesses are quantum equations
- [Rundle](https://furstenheim.github.io/react-wordle/): Like wordle, but only last three guesses are considered.
- [Stockle](https://stockle.win/): Guess the stock or ETF
- [Syscordle](https://nezza.github.io/syscordle/): SYSCALL
- [UNLOCOdle](https://unlocodle.collabital.com/): UNLOCODEs
- [Visionle](https://orisenbazuru.github.io/visionle/): Guess the label of randomly chosen image from ImageNet/ImageNet-Sketch dataset (Machine learning)

_Want to add one to the list? Just make a pull request or [let us know via a comment here](https://github.com/cwackerfuss/react-wordle/issues/120)_

## FAQ

### How can I change the length of a guess?

- Update the `MAX_WORD_LENGTH` variable in [src/constants/settings.ts](src/constants/settings.ts) to the desired length.
- Update the `WORDS` array in [src/constants/wordlist.ts](src/constants/wordlist.ts) to only include words of the new length.
- Update the `VALID_GUESSES` array in [src/constants/validGuesses.ts](src/constants/validGuesses.ts) arrays to only include words of the new length.

### How can I create a version in another language?

- In [.env](.env):
  - Update the title and the description
  - Set the `REACT_APP_LOCALE_STRING` to your locale
- In [public/index.html](public/index.html):
  - Update the "You need to enable JavaScript" message
  - Update the language attribute in the HTML tag
  - If the language is written right-to-left, add `dir="rtl"` to the HTML tag
- Update the name and short name in [public/manifest.json](public/manifest.json)
- Update the strings in [src/constants/strings.ts](src/constants/strings.ts)
- Add all of the five letter words in the language to [src/constants/validGuesses.ts](src/constants/validGuesses.ts), replacing the English words
- Add a list of goal words in the language to [src/constants/wordlist.ts](src/constants/wordlist.ts), replacing the English words
- Update the "Settings" modal in [src/components/modals/SettingsModal.tsx](src/components/modals/SettingsModal.tsx)
- Update the "Info" modal in [src/components/modals/InfoModal.tsx](src/components/modals/InfoModal.tsx)
- If the language has letters that are not present in English update the keyboard in [src/components/keyboard/Keyboard.tsx](src/components/keyboard/Keyboard.tsx)
- If the language is written right-to-left, prepend `\u202E` (the unicode right-to-left override character) to the return statement of the inner function in `generateEmojiGrid` in [src/lib/share.ts](src/lib/share.ts)

### How can I add usage tracking?

This repository includes support for Google Analytics or [Plausible Analytics](https://plausible.io), but, by default, this is disabled.

To enable Google Analytics:

- Create a Google Analytics 4 property and obtain the measurement ID (of the format `G-XXXXXXXXXX`)
- In [.env](.env), add `REACT_APP_GOOGLE_MEASUREMENT_ID=G-XXXXXXXXXX`

PS: Esse setup funciona em "produção".

### GitHub Pages, AWS, Heroku..

Veja a documentação oficial do React: https://create-react-app.dev/docs/deployment

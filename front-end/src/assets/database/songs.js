import { songsArray } from '../../../api/api.js'

export { songsArray }
// export const songsArray = [
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e0272f5ede1b025cf73249c83ce',
//     name: 'CLONE - Ao Vivo',
//     duration: '2:44',
//     artist: 'Luan Santana',
//     audio: 'https://jornada-fullstack.s3.us-east-2.amazonaws.com/parece.mp3',
//     id: 172
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e0272f5ede1b025cf73249c83ce',
//     name: 'CERTEZA - Ao Vivo',
//     duration: '3:08',
//     artist: 'Luan Santana',
//     audio: 'https://jornada-fullstack.s3.us-east-2.amazonaws.com/parece.mp3',
//     id: 173
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e0273f044b863be0033982cd767',
//     name: 'Melação - Ao Vivo',
//     duration: '2:57',
//     artist: 'Luan Santana',
//     audio: 'https://jornada-fullstack.s3.us-east-2.amazonaws.com/parece.mp3',
//     id: 174
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e0282344e9572ebd4236160c6fb',
//     name: 'EU SOU SENTIMENTO',
//     duration: '3:06',
//     artist: 'Luan Santana',
//     audio: 'https://jornada-fullstack.s3.us-east-2.amazonaws.com/parece.mp3',
//     id: 175
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e0293b7f0d53b20302ee6e28f13',
//     name: 'Tudo Que Você Quiser - Ao Vivo',
//     duration: '4:09',
//     artist: 'Luan Santana',
//     audio: 'https://jornada-fullstack.s3.us-east-2.amazonaws.com/parece.mp3',
//     id: 176
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e021711f153c860d22a47e70893',
//     name: 'Eu, Você, O Mar e Ela',
//     duration: '3:07',
//     artist: 'Luan Santana',
//     audio: 'https://jornada-fullstack.s3.us-east-2.amazonaws.com/parece.mp3',
//     id: 177
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e02e035c09f33e2a896edef4bdb',
//     name: 'DEJA VU',
//     duration: '3:19',
//     artist: 'Luan Santana',
//     audio: 'https://jornada-fullstack.s3.us-east-2.amazonaws.com/parece.mp3',
//     id: 178
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e02845b7e5dfb634d609b154e7a',
//     name: 'MEIO TERMO - Ao Vivo',
//     duration: '2:55',
//     artist: 'Luan Santana',
//     audio: 'https://jornada-fullstack.s3.us-east-2.amazonaws.com/parece.mp3',
//     id: 179
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e02c847c97de21b491fc0daf8b5',
//     name: 'Chuva de Arroz - Ao Vivo',
//     duration: '3:06',
//     artist: 'Luan Santana',
//     audio: 'https://jornada-fullstack.s3.us-east-2.amazonaws.com/parece.mp3',
//     id: 180
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e02d2fc1ee38f06c4c760380925',
//     name: 'Nada Com Nada - Ao Vivo',
//     duration: '2:41',
//     artist: 'Gustavo Mioto',
//     audio:
//       'https://jornada-fullstack.s3.us-east-2.amazonaws.com/nada-com-nada.mp3',
//     id: 181
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e02c61b4691d0ba09631399ffd3',
//     name: 'Me Caiu Tão Bem - Ao Vivo',
//     duration: '2:36',
//     artist: 'Gustavo Mioto',
//     audio:
//       'https://jornada-fullstack.s3.us-east-2.amazonaws.com/nada-com-nada.mp3',
//     id: 182
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e0262af36bd5c8f7c12a5b0c6d8',
//     name: 'Fronteira - Ao Vivo',
//     duration: '2:46',
//     artist: 'Gustavo Mioto',
//     audio:
//       'https://jornada-fullstack.s3.us-east-2.amazonaws.com/nada-com-nada.mp3',
//     id: 183
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e02047ad702243f8d6ff1318fe0',
//     name: 'Anti Amor - Ao Vivo',
//     duration: '2:45',
//     artist: 'Gustavo Mioto',
//     audio:
//       'https://jornada-fullstack.s3.us-east-2.amazonaws.com/nada-com-nada.mp3',
//     id: 184
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e0219bb2fb697a42c1084d71f6c',
//     name: 'Eu Gosto Assim - Ao Vivo',
//     duration: '2:28',
//     artist: 'Gustavo Mioto',
//     audio:
//       'https://jornada-fullstack.s3.us-east-2.amazonaws.com/nada-com-nada.mp3',
//     id: 185
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e024abfa282f55d62fcf562de69',
//     name: 'Solteiro Não Trai - Ao Vivo',
//     duration: '3:07',
//     artist: 'Gustavo Mioto',
//     audio:
//       'https://jornada-fullstack.s3.us-east-2.amazonaws.com/nada-com-nada.mp3',
//     id: 186
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e02ffd2d660deff5b892388b8db',
//     name: 'Eu Fujo',
//     duration: '2:37',
//     artist: 'Gustavo Mioto',
//     audio:
//       'https://jornada-fullstack.s3.us-east-2.amazonaws.com/nada-com-nada.mp3',
//     id: 187
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e02047ad702243f8d6ff1318fe0',
//     name: 'Contramão - Ao Vivo',
//     duration: '3:11',
//     artist: 'Gustavo Mioto',
//     audio:
//       'https://jornada-fullstack.s3.us-east-2.amazonaws.com/nada-com-nada.mp3',
//     id: 188
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e0247084e79f27e97b3b4f21ba0',
//     name: 'Cama Embrasa',
//     duration: '2:58',
//     artist: 'Gustavo Mioto',
//     audio:
//       'https://jornada-fullstack.s3.us-east-2.amazonaws.com/nada-com-nada.mp3',
//     id: 189
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e0234be7f78f89236075cc69c56',
//     name: 'Com Ou Sem Mim - Ao Vivo',
//     duration: '3:21',
//     artist: 'Gustavo Mioto',
//     audio:
//       'https://jornada-fullstack.s3.us-east-2.amazonaws.com/nada-com-nada.mp3',
//     id: 190
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e028594dca64e3bb87aa620362e',
//     name: 'Imã de Problema',
//     duration: '2:17',
//     artist: 'Henry Freitas',
//     audio:
//       'https://jornada-fullstack.s3.us-east-2.amazonaws.com/ima-de-problema.mp3',
//     id: 191
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e02ae682a9f57cbb545e5d20a17',
//     name: 'Tando',
//     duration: '3:32',
//     artist: 'Henry Freitas',
//     audio:
//       'https://jornada-fullstack.s3.us-east-2.amazonaws.com/ima-de-problema.mp3',
//     id: 192
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e023a4e35b91f953a8be1848c2e',
//     name: 'Dia 1 - Versão Forró',
//     duration: '2:54',
//     artist: 'Henry Freitas',
//     audio:
//       'https://jornada-fullstack.s3.us-east-2.amazonaws.com/ima-de-problema.mp3',
//     id: 193
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e028594dca64e3bb87aa620362e',
//     name: 'Toque de Romance (feat. Dodô Pressão) - Remix Forró',
//     duration: '3:37',
//     artist: 'Henry Freitas',
//     audio:
//       'https://jornada-fullstack.s3.us-east-2.amazonaws.com/ima-de-problema.mp3',
//     id: 194
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e02606797e233df5f9099190dc9',
//     name: 'Tem Café',
//     duration: '2:38',
//     artist: 'Henry Freitas',
//     audio:
//       'https://jornada-fullstack.s3.us-east-2.amazonaws.com/ima-de-problema.mp3',
//     id: 195
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e021f2dfab84eb482d552e15826',
//     name: 'Barulho do Prazer',
//     duration: '2:30',
//     artist: 'Henry Freitas',
//     audio:
//       'https://jornada-fullstack.s3.us-east-2.amazonaws.com/ima-de-problema.mp3',
//     id: 196
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e029bb5775ce0dfc66b855f9bda',
//     name: 'Eu Nem Lembro',
//     duration: '2:39',
//     artist: 'Henry Freitas',
//     audio:
//       'https://jornada-fullstack.s3.us-east-2.amazonaws.com/ima-de-problema.mp3',
//     id: 197
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e0276a4c1b1067d49c85c151351',
//     name: 'Malvadinho (Sei Que Ela é do Job)',
//     duration: '3:13',
//     artist: 'Henry Freitas',
//     audio:
//       'https://jornada-fullstack.s3.us-east-2.amazonaws.com/ima-de-problema.mp3',
//     id: 198
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e02926e93b1e9507dc027ab7f90',
//     name: 'Novinha Bandida',
//     duration: '2:46',
//     artist: 'Henry Freitas',
//     audio:
//       'https://jornada-fullstack.s3.us-east-2.amazonaws.com/ima-de-problema.mp3',
//     id: 199
//   },
//   {
//     image: 'https://i.scdn.co/image/ab67616d00001e021a28c191d45f61eb7b7af3b1',
//     name: 'Match Perfeito',
//     duration: '1:47',
//     artist: 'Henry Freitas',
//     audio:
//       'https://jornada-fullstack.s3.us-east-2.amazonaws.com/ima-de-problema.mp3',
//     id: 200
//   }
// ]

import 'prismjs';
import 'prismjs/components/prism-graphql.js';
import 'prismjs/components/prism-sql.js';
import 'prismjs/themes/prism-twilight.css';
import runQuery from './graphql';
import Reveal from '../reveal.js/js/reveal.js';
window.Reveal = Reveal;
import '../reveal.js/css/reveal.css';
import '../reveal.js/css/theme/black.css';
Reveal.initialize();

import './style.css';

// (async () => {
//     const test = await runQuery(`
//         query {
//             attendees {
//                 name
//                 profile {
//                     url
//                 }
//                 friends {
//                     name
//                 }
//             }
//             person (id: 1) {
//                 name
//             }
//             answer
//         }
//     `);
// })();

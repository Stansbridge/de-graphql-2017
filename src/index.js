import Reveal from '../reveal.js/js/reveal.js';
window.Reveal = Reveal;
import '../reveal.js/css/reveal.css';
import '../reveal.js/css/theme/black.css';
import graphiql from './GraphiQL.js';

Reveal.initialize({
    width: '100%',
    height: '100%',
});
// /* Slides */
// import graphqlSlide from './graphql-slide.js';

// graphqlSlide('graphql-slide');

const graphiql1 = graphiql(`
query {
    attendees {
        name
        friends {
            name
        }
    }
}
`.trim(), document.querySelector('#graphiql-demo-1'));

Reveal.addEventListener('demo1', () => {
    setTimeout(graphiql1);
});

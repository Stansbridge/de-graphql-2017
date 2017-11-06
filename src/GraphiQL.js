import React, { Component } from 'react';
import GraphiQL from 'graphiql';
import ReactDOM from 'react-dom';

import { execute, Source, parse } from 'graphql';
import schema from './graphql';

const formatting = `
    html, body {
        margin: 0;
    }

    .graphiql-container, .editorWrap {
        overflow: hidden;
    }
`;

const fetcher = ({ query, variables }) => execute(
    schema,
    parse(new Source(query)),
    undefined,
    {},
    variables
);

export default (query, element) => {
    const doc = element.contentDocument;
    const body = doc.body;
    const styles = doc.createElement('link');
    const otherStyles = doc.createElement('style');
    const target = doc.createElement('div');

    otherStyles.innerHTML = formatting;

    styles.rel = 'stylesheet';
    styles.href = '/graphiql.css';

    body.appendChild(target);
    body.appendChild(styles);
    body.appendChild(otherStyles);

    return () => {
        ReactDOM.render((
            <GraphiQL
                query={query}
                fetcher={fetcher}
                schema={schema}
            />
        ), target);
    };
};

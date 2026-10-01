import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

import { useReadingView } from './use-reading-view.js';

function View() {
  return createElement('span', null, useReadingView() || 'all');
}

test('static markup remains the same for query and path-only entry', () => {
  for (const url of ['/cases', '/cases?view=operator', '/cases?view=previous', '/cases/bulk-partial-results?view=operator']) {
    const html = renderToString(createElement(MemoryRouter, { initialEntries: [url] }, createElement(View)));
    assert.equal(html, '<span>all</span>');
  }
});

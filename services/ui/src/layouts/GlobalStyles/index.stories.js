import React from 'react';
import GlobalStyles from './index';

export default {
  component: GlobalStyles,
  title: 'Components|Layouts',
};

export const globalStyles = () => (
  <GlobalStyles>
    <h1>Sample content to demonstrate the global styles.</h1>

    <h2>Headings</h2>
    <div>Text is placed around the headings to demonstrate margins.</div>
    <h1>A primary heading</h1>
    <div>Text is placed around the headings to demonstrate margins.</div>
    <h2>A secondary heading</h2>
    <div>Text is placed around the headings to demonstrate margins.</div>
    <h3>A tertiary heading</h3>
    <div>Text is placed around the headings to demonstrate margins.</div>
    <h4>An h4 heading</h4>
    <div style={{marginBottom: '20px'}}>Text is placed around the headings to demonstrate margins.</div>

    <h2>Links</h2>
    <p><a href="#">This link is a standard link</a>.</p>
    <p><a href="#" className="hover-state">This link has a special hover
      state</a>.</p>

    <h2>Text styles</h2>
    <p><strong>This is bolded.</strong> <em>And this is italicized.</em></p>

    <h2>Lists</h2>
    <ul>
      <li>A list item</li>
      <li>Another list item</li>
      <li><a href="#">A list item containing a link</a></li>
    </ul>
    <ol>
      <li>A list item</li>
      <li>Another list item</li>
      <li><a href="#">A list item containing a link</a></li>
    </ol>

    <h2>Labels</h2>
    <div>
      <label for="example-input">This is a label for a form element:</label>
      <input id="example-input" />
    </div>

    <h2>Containers</h2>
    <div className="field-wrapper">
      <div className="field">
        <p>These divs are in a ".field-wrapper" container.</p>
      </div>
      <div className="field">
        This is a ".field" div. <a href="#">It contains a link</a>.
      </div>
    </div>
    <div id="__next">
      <div>
        <p>This div is in the "#__next" container.</p>
      </div>
      <div className="content-wrapper">
        <p>This ".content-wrapper" container is in the "#__next" container.</p>
      </div>
      <div className="content-wrapper">
        <p>This ".content-wrapper" container is in the "#__next" container.</p>
      </div>
      <div>
        <p>This div is in the "#__next" container.</p>
      </div>
    </div>
  </GlobalStyles>
);

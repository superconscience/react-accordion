import {StandardAccordion} from "./components/accordion/standard";
import {PreventCloseAccordion} from "./components/accordion/prevent-close";
import {SingleAccordion} from "./components/accordion/single";
import {StandardTabs} from "./components/tabs/standard";
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

const items = [
  {
    title: 'React',
    contents: (
      <div>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and
        React will efficiently update and render just the right components when your data changes.
      </div>
    )
  },
  {
    title: 'Angular',
    contents: (
      <div>
        With Angular, you're taking advantage of a platform that can scale from single-developer projects to
        enterprise-level applications. Angular is designed to make updating as straightforward as possible,
        so take advantage of the latest developments with a minimum of effort.
      </div>
    )
  },
  {
    title: 'Vue',
    contents: (
      <div>
        Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of
        standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you
        efficiently develop user interfaces, be it simple or complex.
      </div>
    )
  },
]

function App() {
  return (
    <div
      css={css({
        display: 'grid',
        gridGap: '2em',
        gridTemplateColumns: '1fr 1fr 1fr',
        padding: 20,
        fontSize: 24,
        '@media(max-width: 1200px)': {
          gridTemplateColumns: '1fr 1fr',
          gridGap: '1.5em',
        },
        '@media(max-width: 768px)': {
          gridTemplateColumns: '1fr',
          gridGap: '1em',
        }
      })}
    >
      <div>
        <strong>Standard</strong>
        <StandardAccordion items={items}  />
      </div>

      <div>
        <strong>Prevent close</strong>
        <PreventCloseAccordion items={items} />
      </div>

      <div>
        <strong>Single</strong>
        <SingleAccordion items={items} />
      </div>

      <div>
        <strong>Standard Tabs</strong>
        <StandardTabs items={items} />
      </div>
    </div>
  );
}

export default App;

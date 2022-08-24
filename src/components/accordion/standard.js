import * as React from 'react'
import {Accordion} from "../accordion"
import {css} from "../shared"

import {AccordionButton, AccordionItem, AccordionContents} from "../shared"

function StandardAccordion({items, ...props}) {
  return (
    <Accordion {...props}>
      {({openIndexes, handleItemClick}) => (
        <div>
          {items.map((item, index) => (
            <AccordionItem key={item.title}>
              <AccordionButton

                css={css({textAlign: 'left', minWidth: 80})}
                isOpen={openIndexes.includes(index)}
                onClick={() => handleItemClick(index)}
              >
                {item.title}{' '}
                <span>{openIndexes.includes(index) ? '👇' : '👉'}</span>
              </AccordionButton>
              <AccordionContents
                css={css({overflowY: 'hidden', textAlign: 'justify'})}
                variant={openIndexes.includes(index) ? 'open' : 'closed'}
                // initialVariant={index === 0 ? 'open' : 'closed'}
                initialVariant={openIndexes.includes(index) ? 'open' : 'closed'}
              >
                {item.contents}
              </AccordionContents>
            </AccordionItem>
          ))}
        </div>
      )}
    </Accordion>
  )
}

export {StandardAccordion}
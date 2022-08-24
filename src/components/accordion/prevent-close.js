import * as React from 'react'
import {Accordion} from "../accordion"
import {
  css,
  AccordionButton,
  AccordionContents,
  AccordionItem,
  preventClose
} from "../shared"

function PreventCloseAccordion({items, ...props}) {
  return (
    <Accordion stateReducer={preventClose} {...props}>
      {({openIndexes, handleItemClick}) => (
        <div>
          {items.map((item, index) => (
            <AccordionItem key={item.title} >
              <AccordionButton
                css={css`text-align: left; min-width: 80px`}
                isOpen={openIndexes.includes(index)}
                onClick={() => handleItemClick(index)}
              >
                {item.title}{' '}
                <span>{openIndexes.includes(index) ? '👇' : '👉'}</span>
              </AccordionButton>
              <AccordionContents
                css={css`overflow-y: hidden; text-align: justify`}
                variant={openIndexes.includes(index) ? 'open' : 'closed'}
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

export {PreventCloseAccordion}
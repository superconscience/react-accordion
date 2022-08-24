/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import * as React from 'react'
import {Tabs} from '../tabs'
import {AccordionButton, BelowTabItem} from "../shared"

function StandardTabs({items}) {
  return (
    <Tabs>
      {({openIndexes, handleItemClick}) => (
        <div>
          <div css={css({display: 'flex'})} >
            {items.map((item, index) => (
              <AccordionButton
                key={item.title}
                isOpen={openIndexes.includes(index)}
                onClick={() => handleItemClick(index)}
              >
                {item.title}
              </AccordionButton>
            ))}
          </div>
          <div css={css({position: 'relative', minHeight: 120})}>
            {items.map((item, index) => (
              <BelowTabItem
                css={css({position:'absolute', overflowY: 'hidden'})}
                key={index}
                variant={openIndexes.includes(index) ? 'open' : 'closed'}
                initialVariant={openIndexes.includes(index) ? 'open' : 'closed'}
              >
                {items[index].contents}
              </BelowTabItem>
            ))}
          </div>
        </div>
      )}
    </Tabs>
  )
}export {StandardTabs}
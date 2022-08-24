/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import {motion} from 'framer-motion'
import styled from '@emotion/styled'

// const css = (...args) => ({css: emoCSS(...args)})

const AccordionButton = styled('button')(
  {
    cursor: 'pointer',
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
    border: 'none',
    ':focus': {
      outline: 'none',
      backgroundColor: '#c9c9c9',
    },
  },
  ({isOpen, css, ...props}) =>
  ({
    ...props,
    ...css,
    ...(isOpen
      ? {
        backgroundColor: '#d9d9d9',
      }
      : null)
  })
)

const AccordionContents = ({initialVariant, variant, ...props}) => {
  const variants = {
    open: {maxHeight: 300}, closed: {maxHeight: 0}
  }
  return <motion.div
    initial={initialVariant}
    animate={variant}
    variants={variants}
    {...props}
  />
}

const AccordionItem = styled('div')({
  display: 'grid',
  gridTemplate: 'auto auto',
  gridGap: 4,
  gridAutoFlow: 'row'
})

const BelowTabItem = ({initialVariant, variant, ...props}) => {
  const variants = {
    open: {opacity: 1, top: 0},
    closed: {opacity: 0, top: 30}
  }
  return <motion.div
    initial={initialVariant}
    animate={variant}
    variants={variants}
    {...props}
  />
}

const AboveTabItem = ({initialVariant, variant, ...props}) => {
  const variants = {
    open: {opacity: 1, bottom: 0},
    closed: {opacity: 0, bottom: 30}
  }
  return <motion.div
    initial={initialVariant}
    animate={variant}
    variants={variants}
    {...props}
  />
}

function preventClose(state, changes) {
  if (changes.type === 'closing' && state.openIndexes.length < 2) {
    return {...changes, openIndexes: state.openIndexes}
  }
  return changes
}

function single(state, changes) {
  if (changes.type === 'opening') {
    return {openIndexes: changes.openIndexes.slice(-1)}
  }
  return changes;
}

function combineReducers(...reducers) {
  return (state, changes) => {
    for (let reducer of reducers) {
      const result = reducer(state, changes)
      if (result !== changes) {
        return result
      }
    }
    return changes
  }
}

export {
  css,
  AccordionButton,
  AccordionItem,
  AccordionContents,
  AboveTabItem,
  BelowTabItem,
  combineReducers,
  preventClose,
  single
}
import React, { ReactNode } from "react"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

type Props = {
  children?: ReactNode
  location?: string
}

const TIMEOUT = 2000
const getTransitionStyles: any = {
  entering: {
    position: `absolute`,
    transition: `2s`,
    borderRadius: `30%`,
  },
  entered: {
    position: `absolute`,
    transition: `2s`,
    borderRadius: `100%`,
  },
  exiting: {
    position: `absolute`,
    transition: `2s`,
    borderRadius: `30%`,
  },
}

const Transition = ({ children, location }: Props) => {
  return (
    <TransitionGroup style={{ position: "relative" }}>
      <ReactTransition
        key={location}
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT,
        }}
      >
        {status => (
          <div
            style={{
              ...getTransitionStyles[status],
              background: "blue",
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  )
}
export default Transition
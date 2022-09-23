/* eslint-disable react/display-name */
import React, { ComponentProps, FC } from 'react'

export const combineComponents = (...components: FC[]): FC => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      // @ts-ignore
      return ({ children }: ComponentProps<FC>): JSX.Element => {
        return (
          // @ts-ignore
          <AccumulatedComponents>
            {/* @ts-ignore */}
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        )
      }
    },
    // @ts-ignore

    ({ children }) => <>{children}</>
  )
}

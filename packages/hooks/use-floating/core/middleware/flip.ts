import {
  evaluate,
  getAlignmentSides,
  getExpandedPlacements,
  getOppositeAxisPlacements,
  getOppositePlacement,
  getSide,
} from '../../utils'
import { detectOverflow } from '../detect-overflow'
import type { DetectOverflowOptions } from '../detect-overflow'
import type { Derivable, Middleware } from '../types'
import type { Placement } from '../../utils'

export type FlipOptions = Partial<
  DetectOverflowOptions & {
    /**
     * @default true
     */
    mainAxis: boolean

    /**
     * @default true
     */
    crossAxis: boolean

    /**
     * @default [oppositePlacement] (computed)
     */
    fallbackPlacements: Array<Placement>

    /**
     * @default 'bestFit'
     */
    fallbackStrategy: 'bestFit' | 'initialPlacement'

    /**
     * @default 'none' (disallow fallback)
     */
    fallbackAxisSideDirection: 'none' | 'start' | 'end'

    /**
     * @default true
     */
    flipAlignment: boolean
  }
>

export const flip = (
  options: FlipOptions | Derivable<FlipOptions> = {}
): Middleware => ({
  name: 'flip',
  options,
  async fn(state) {
    const {
      placement,
      middlewareData,
      rects,
      initialPlacement,
      platform,
      elements,
    } = state

    const {
      mainAxis: checkMainAxis = true,
      crossAxis: checkCrossAxis = true,
      fallbackPlacements: specifiedFallbackPlacements,
      fallbackStrategy = 'bestFit',
      fallbackAxisSideDirection = 'none',
      flipAlignment = true,
      ...detectOverflowOptions
    } = evaluate(options, state)

    if (middlewareData.arrow?.alignmentOffset) {
      return {}
    }

    const side = getSide(placement)
    const isBasePlacement = getSide(initialPlacement) === initialPlacement
    const rtl = await platform.isRTL?.(elements.floating)

    const fallbackPlacements =
      specifiedFallbackPlacements ||
      (isBasePlacement || !flipAlignment
        ? [getOppositePlacement(initialPlacement)]
        : getExpandedPlacements(initialPlacement))

    if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
      fallbackPlacements.push(
        ...getOppositeAxisPlacements(
          initialPlacement,
          flipAlignment,
          fallbackAxisSideDirection,
          rtl
        )
      )
    }

    const placements = [initialPlacement, ...fallbackPlacements]

    const overflow = await detectOverflow(state, detectOverflowOptions)

    const overflows: number[] = []
    let overflowsData = middlewareData.flip?.overflows || []

    if (checkMainAxis) {
      overflows.push(overflow[side])
    }

    if (checkCrossAxis) {
      const sides = getAlignmentSides(placement, rects, rtl)
      overflows.push(overflow[sides[0]], overflow[sides[1]])
    }

    overflowsData = [...overflowsData, { placement, overflows }]

    if (!overflows.every((side) => side <= 0)) {
      const nextIndex = (middlewareData.flip?.index || 0) + 1
      const nextPlacement = placements[nextIndex]

      if (nextPlacement) {
        return {
          data: {
            index: nextIndex,
            overflows: overflowsData,
          },
          reset: {
            placement: nextPlacement,
          },
        }
      }

      let resetPlacement = overflowsData
        .filter((d) => d.overflows[0] <= 0)
        .sort((a, b) => a.overflows[1] - b.overflows[1])[0]?.placement

      if (!resetPlacement) {
        switch (fallbackStrategy) {
          case 'bestFit': {
            const placement = overflowsData
              .map(
                (d) =>
                  [
                    d.placement,
                    d.overflows
                      .filter((overflow) => overflow > 0)
                      .reduce((acc, overflow) => acc + overflow, 0),
                  ] as const
              )
              .sort((a, b) => a[1] - b[1])[0]?.[0]
            if (placement) {
              resetPlacement = placement
            }
            break
          }
          case 'initialPlacement':
            resetPlacement = initialPlacement
            break
          default:
        }
      }

      if (placement !== resetPlacement) {
        return {
          reset: {
            placement: resetPlacement,
          },
        }
      }
    }

    return {}
  },
})

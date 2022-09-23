/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { CustomArrowProps } from 'react-slick'

export const SlickArrowLeft = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => (
  <div {...props}>
    <button
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      type="button"
      aria-hidden="true"
      aria-label="Voltar slide"
    >
      <FaChevronLeft />
    </button>
  </div>
)
export const SlickArrowRight = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => (
  <div {...props}>
    <button
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount ? ' slick-disabled' : '')
      }
      type="button"
      aria-hidden="true"
      aria-label="Avançar slide"
    >
      <FaChevronRight />
    </button>
  </div>
)

import {render, fireEvent} from '@testing-library/vue'
import ReactiveCounter from '@/components/ReactiveCounter.vue';
import '@testing-library/jest-dom'

// eslint-disable-next-line no-undef
test('renders button with text', () => {
  const text = "Reactivity"

  // Set the prop value by using the second argument of `render()`.
  const {getByRole} = render(ReactiveCounter, {
    props: {text},
  })

  // Get the only element with a 'button' role.
  const button = getByRole('button')

  // eslint-disable-next-line no-undef
  expect(button).toHaveTextContent(text)
})

// eslint-disable-next-line no-undef
test('emits click event when button is clicked', async () => {
  const text = 'Click me'

  const {getByRole, emitted} = render(ReactiveCounter, {
    props: {text},
  })

  // Send a click event.
  await fireEvent.click(getByRole('button'))

  // Expect that the event emitted a "click" event. We should test for emitted
  // events has they are part of the public API of the component.
  // eslint-disable-next-line no-undef
  expect(emitted()).toHaveProperty('click')
})

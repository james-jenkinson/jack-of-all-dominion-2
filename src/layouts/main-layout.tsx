import { A } from '@solidjs/router'
import { type JSX, type ParentProps } from 'solid-js'

function MainLayout (props: ParentProps): JSX.Element {
  return (
    <>
      <A href='/'>Home</A>
      <A href='/page-2'>Page 2</A>
      <div>This is the layout</div>
      {props.children}
    </>
  )
}

export default MainLayout

import { type JSX, type ParentProps } from 'solid-js'
import Header from '../components/header'

function MainLayout(props: ParentProps): JSX.Element {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}

export default MainLayout

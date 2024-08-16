import React from 'react'
import LayerColor  from './LayerColor'
import LayerButton from './LayerButton'
import LayerBadge  from './LayerBadge'
import LayerForm   from './LayerForm'
import LayerModal  from './LayerModal'
import LayerBank  from './LayerBank'

function Layer() {

  return (
    <>
      <LayerColor />
      <LayerButton />
      <LayerBadge />
      <LayerForm />
      <LayerModal />
      <LayerBank />
    </>
  )

}

export default Layer
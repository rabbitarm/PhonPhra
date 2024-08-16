import React, { useState } from 'react'

function LayerButton() {

  /* Color - Select */
  const [colorSelect, setColorSelect] = useState('primary')
  const handleColorSelect = (color) => {
    setColorSelect(color)
  }
  const colorOptions = ['primary', 'secondary', 'tertiary', 'error', 'warning', 'success', 'info', 'grey', 'slate']

  return (
    <section id="layerButton" className="layer">
      <h5 className="heading">Button - Size</h5>
      <div>
        <button className="btn btn-icon btn-2xs">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-2xs">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span>2XS</span>
        </button>
        <button className="btn btn-icon btn-xs">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-xs">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">XS</span>
        </button>
        <button className="btn btn-icon btn-sm">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-sm">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">SM</span>
        </button>
        <button className="btn btn-icon">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">Default</span>
        </button>
        <button className="btn btn-icon btn-lg">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-lg">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">LG</span>
        </button>
        <button className="btn btn-icon btn-xl">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-xl">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">XL</span>
        </button>
        <button className="btn btn-icon btn-2xl">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-2xl">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">2XL</span>
        </button>
      </div>
      <div>
        <button className="btn btn-icon btn-outline btn-2xs">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-outline btn-2xs">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">2XS</span>
        </button>
        <button className="btn btn-icon btn-outline btn-xs">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-outline btn-xs">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">XS</span>
        </button>
        <button className="btn btn-icon btn-outline btn-sm">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-outline btn-sm">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">SM</span>
        </button>
        <button className="btn btn-icon btn-outline">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-outline">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">Default</span>
        </button>
        <button className="btn btn-icon btn-outline btn-lg">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-outline btn-lg">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">LG</span>
        </button>
        <button className="btn btn-icon btn-outline btn-xl">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-outline btn-xl">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">XL</span>
        </button>
        <button className="btn btn-icon btn-outline btn-2xl">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-outline btn-2xl">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">2XL</span>
        </button>
      </div>
      <h5>Button - Color</h5>
      <div>
        <button className="btn btn-icon">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">Default</span>
        </button>
        <button className="btn btn-icon btn-color-primary">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-color-primary">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">Primary</span>
        </button>
        <button className="btn btn-icon btn-color-secondary">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-color-secondary">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">Secondary</span>
        </button>
        <button className="btn btn-icon btn-color-tertiary">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-color-tertiary">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">Tertiary</span>
        </button>
        <button className="btn btn-icon btn-color-error">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-color-error">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">Error</span>
        </button>
        <button className="btn btn-icon btn-color-warning">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-color-warning">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">Warning</span>
        </button>
        <button className="btn btn-icon btn-color-success">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-color-success">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">Success</span>
        </button>
        <button className="btn btn-icon btn-color-info">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-color-info">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">Info</span>
        </button>
        <button className="btn btn-icon btn-color-grey">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-color-grey">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">Grey</span>
        </button>
        <button className="btn btn-icon btn-color-slate">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-color-slate">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">Slate</span>
        </button>
      </div>
      <h5>Button - Style</h5>
      <div>
        <button className="btn btn-icon">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">default</span>
        </button>
        <button className={`btn btn-icon btn-alternate-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className={`btn btn-alternate-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">btn-alternate-{colorSelect}</span>
        </button>
        <button className={`btn btn-icon btn-color-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className={`btn btn-color-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">btn-color-{colorSelect}</span>
        </button>
        <button className="btn btn-icon btn-reverse">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-reverse">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">btn-reverse</span>
        </button>
        <button className={`btn btn-icon btn-reverse-alternate-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className={`btn btn-reverse-alternate-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">btn-reverse-alternate-{colorSelect}</span>
        </button>
        <button className={`btn btn-icon btn-reverse-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className={`btn btn-reverse-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">btn-reverse-{colorSelect}</span>
        </button>
        <button className="btn btn-icon btn-outline">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-outline">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">btn-outline</span>
        </button>
        <button className={`btn btn-icon btn-outline-alternate-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className={`btn btn-outline-alternate-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">btn-outline-alternate-{colorSelect}</span>
        </button>
        <button className={`btn btn-icon btn-outline-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className={`btn btn-outline-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">btn-outline-{colorSelect}</span>
        </button>
        <button className="btn btn-icon btn-ghost">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-ghost">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">btn-ghost</span>
        </button>
        <button className={`btn btn-icon btn-ghost-alternate-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className={`btn btn-ghost-alternate-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">btn-ghost-alternate-{colorSelect}</span>
        </button>
        <button className={`btn btn-icon btn-ghost-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className={`btn btn-ghost-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">btn-ghost-{colorSelect}</span>
        </button>
        <button className="btn btn-icon btn-mix">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-mix">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">btn-mix</span>
        </button>
        <button className={`btn btn-icon btn-mix-alternate-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className={`btn btn-mix-alternate-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">btn-mix-alternate-{colorSelect}</span>
        </button>
        <button className={`btn btn-icon btn-mix-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className={`btn btn-mix-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">btn-mix-{colorSelect}</span>
        </button>
        <button className="btn btn-icon btn-text">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className="btn btn-text">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">btn-text</span>
        </button>
        <button className={`btn btn-icon btn-text-alternate-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className={`btn btn-text-alternate-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">btn-text-alternate-{colorSelect}</span>
        </button>
        <button className={`btn btn-icon btn-text-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <button className={`btn btn-text-${colorSelect}`}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text">btn-text-{colorSelect}</span>
        </button>
        <hr />
        <section className="form mx-auto">
          <fieldset className="fieldset-inline border bg-white">
            <label className="label-border">เลือกสีที่ต้องการแสดง</label>
            <div className="field gap-2">
              {colorOptions.map((color) => (
                <button key={color} className={`btn btn-xs btn-color-${color}`} onClick={() => handleColorSelect(color)}>{color}</button>
              ))}
            </div>
          </fieldset>
        </section>
      </div>
    </section>
  )

}

export default LayerButton
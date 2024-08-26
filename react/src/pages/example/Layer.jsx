import React from 'react';
import LayerColor  from './LayerColor';
import LayerButton from './LayerButton';
import LayerBadge  from './LayerBadge';
import LayerForm   from './LayerForm';
import LayerModal  from './LayerModal';
import LayerBank   from './LayerBank';

import StatusHttp       from '../../utilities/StatusHttp';
import StatusItem       from '../../utilities/StatusItem';
import StatusUserGender from '../../utilities/StatusUserGender';

function Layer() {

  return (
    <>
      <LayerColor />
      <LayerButton />
      <LayerBadge />
      <LayerForm />
      <LayerModal />
      <LayerBank />
      <section id="layerBank" className="layer">
        <h5 className="heading">Status HTTP</h5>
        <div>
          <span className="badge badge-sm"><StatusHttp statusHttp={'loading'} addClassNameIcon={''} addClassNameText={''} /></span>
          <span className="badge badge-sm"><StatusHttp statusHttp={'item-404'} addClassNameIcon={''} addClassNameText={''} /></span>
          <span className="badge badge-sm"><StatusHttp statusHttp={'itemcategory-404'} addClassNameIcon={''} addClassNameText={''} /></span>
          <span className="badge badge-sm"><StatusHttp statusHttp={'bookmark-404'} addClassNameIcon={''} addClassNameText={''} /></span>
          <span className="badge badge-sm"><StatusHttp statusHttp={'page-404'} addClassNameIcon={''} addClassNameText={''} /></span>
          <span className="badge badge-sm"><StatusHttp statusHttp={''} addClassNameIcon={''} addClassNameText={''} /></span>
        </div>
        <h5 className="heading">Status HTTP - Large size</h5>
        <div>
          <span className="statue-http"><StatusHttp statusHttp={'loading'} addClassNameIcon={''} addClassNameText={''} /></span>
          <span className="statue-http"><StatusHttp statusHttp={'item-404'} addClassNameIcon={''} addClassNameText={''} /></span>
          <span className="statue-http"><StatusHttp statusHttp={'itemcategory-404'} addClassNameIcon={''} addClassNameText={''} /></span>
          <span className="statue-http"><StatusHttp statusHttp={'bookmark-404'} addClassNameIcon={''} addClassNameText={''} /></span>
          <span className="statue-http"><StatusHttp statusHttp={'page-404'} addClassNameIcon={''} addClassNameText={''} /></span>
          <span className="statue-http"><StatusHttp statusHttp={''} addClassNameIcon={''} addClassNameText={''} /></span>
        </div>
        <h5 className="heading">Status Item</h5>
        <div>
          <span className="badge badge-sm"><StatusItem statusItem={'pending'} addClassNameIcon={''} addClassNameText={''} /></span>
          <span className="badge badge-sm"><StatusItem statusItem={'public'} addClassNameIcon={''} addClassNameText={''} /></span>
          <span className="badge badge-sm"><StatusItem statusItem={'private'} addClassNameIcon={''} addClassNameText={''} /></span>
          <span className="badge badge-sm"><StatusItem statusItem={'delete'} addClassNameIcon={''} addClassNameText={''} /></span>
          <span className="badge badge-sm"><StatusItem statusItem={''} addClassNameIcon={''} addClassNameText={''} /></span>
        </div>
        <h5 className="heading">Status User Gender</h5>
        <div>
          <span className="badge badge-sm"><StatusUserGender statusUserGender={'male'} addClassNameIcon={''} addClassNameText={''} /></span>
          <span className="badge badge-sm"><StatusUserGender statusUserGender={'female'} addClassNameIcon={''} addClassNameText={''} /></span>
          <span className="badge badge-sm"><StatusUserGender statusUserGender={'notspecified'} addClassNameIcon={''} addClassNameText={''} /></span>
          <span className="badge badge-sm"><StatusUserGender statusUserGender={''} addClassNameIcon={''} addClassNameText={''} /></span>
        </div>
      </section>
    </>
  );

};

export default Layer;
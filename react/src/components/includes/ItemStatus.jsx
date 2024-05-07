import React from 'react';

function ItemStatus({ itemStatus, addClassName }) {

  const className = 'material-symbols-outlined' + (addClassName ? ' ' + addClassName : '');

  return (
    <>
      {(() => {
        switch (itemStatus) {
          case 'pending':
            return <span className={className}>update</span>
          case 'public':
            return <span className={className}>public</span>;
          case 'private':
            return <span className={className}>lock</span>;
          case 'delete':
            return <span className={className}>remove_selection</span>;
          default:
            return <span className={className}>error</span>;
          }
        }
      )()}
    </>
  );

};

export default ItemStatus;
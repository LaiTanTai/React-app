import React from 'react'

function Modal({content}) {
  return (
<div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header bg-dark">
        <h5 className="modal-title text-white" id="exampleModalLongTitle">Chi Tiết Sản Phẩm</h5>
        <button type="button" className="close bg-dark text-white" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">X</span>
        </button>
      </div>
      <div className="modal-body">
        <img className='img-fluid' src={content.image}></img>
        <div className='modal-title'>Name : {content.name}</div>
        <div className='modal-text'>Price : {content.price} $</div>
        <div className='modal-text'>Description : {content.shortDescription}</div>
        <div className='modal-text'>Quantity : {content.quantity}</div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-dark" data-dismiss="modal">Đóng</button>
      </div>
    </div>
  </div>
</div>

  );
}

export default Modal
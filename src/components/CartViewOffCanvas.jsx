import React from "react";

export default function CartViewOffCanvas() {
  return (
    <>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="cartviewoffcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">
          Cart Items
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">show cart items here ...</div>
    </div>
    </>
  );
}

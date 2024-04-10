import { PropsWithChildren } from 'react';

export interface ModalContainerProps extends PropsWithChildren {}

function ModalContainer({ children }: ModalContainerProps) {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        {children}
      </div>
    </dialog>
  );
}

export default ModalContainer;

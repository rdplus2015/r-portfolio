

interface ConfirmDeleteModalProps {
  id: string          // unique id, must match the button that opens this modal
  itemLabel: string   // human-readable name of what's being deleted, shown in the message
  onConfirm: () => void
}

export function ConfirmDeleteModal({ id, itemLabel, onConfirm }: ConfirmDeleteModalProps) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Delete {itemLabel}?</h3>
        <p className="py-4">
          This action cannot be undone. Are you sure you want to delete{" "}
          <span className="font-semibold">{itemLabel}</span>?
        </p>

        <div className="modal-action">
          {/* Closes the modal without deleting anything */}
          <form method="dialog">
            <button className="btn">Cancel</button>
          </form>

          {/* Confirms the deletion, then closes the modal */}
          <form method="dialog">
            <button className="btn btn-error" onClick={onConfirm}>
              Delete
            </button>
          </form>
        </div>
      </div>
    </dialog>
  )
}
export const modal = (id: string): HTMLElement => {
    let modal: HTMLElement = document.createElement('div')
    modal.id = `modal_dialog_${id}`
    modal.className = 'modal open'
    modal.innerHTML = `
        <div class="modal-window">
            <span class="close" data-dismiss="modal">&times;</span>
        </div>
    `
    return modal
}
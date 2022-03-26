function onClickSlot(button) {
    if (button.dataset.state === "available") {
        button.className = "slot__button slot__button--selected";
        button.dataset.state = "selected";
    }
    else {
        button.className = "slot__button slot__button--available";
        button.dataset.state = "available";
    }
}
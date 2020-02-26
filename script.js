const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	this.classList.add('tab-border');
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	tabContentItem.classList.add('show');
}

// border
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// show
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});

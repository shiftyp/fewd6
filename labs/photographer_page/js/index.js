$(function() {
	var win = $(window);
	var modal = $('.modal');
	var modalBackdrop = $('.modal-backdrop');
	var galleryImages = $('.gallery-image');
	var modalHeader = $('.modal-header');
	var modalClose = $('.modal-close');
	var modalBody = $('.modal-body');
	var modalImage = $('.modal-image');
	var modalFooter = $('.modal-footer');
	var modalCaption = $('.modal-caption');
	var modalNext = $('.modal-next');
	var modalPrev = $('.modal-prev');
	var lastIndex;

	function showImage(galleryImage) {
		lastIndex = galleryImages.index(galleryImage);

		if(lastIndex === 0) {
			modalPrev.addClass('invisible');
		} else {
			modalPrev.removeClass('invisible');
		}

		if(lastIndex === galleryImages.length - 1) {
			modalNext.addClass('invisible');
		} else {
			modalNext.removeClass('invisible');
		}

		modalImage.attr('src', galleryImage.find('img').attr('src'));
		modalCaption.html(galleryImage.find('.gallery-image-caption').html());
		modalBody.height(win.height() - modalHeader.height() - modalFooter.height() - 20);
		modal.width(modalImage.width());
		modal.css('margin-left', -1 * modal.width() /  2);
	}

	function showModal() {
		modal.removeClass('hidden');
		modalBackdrop.removeClass('hidden');

		showImage($(this));
	}

	function hideModal() {
		modal.addClass('hidden');
		modalBackdrop.addClass('hidden');
	}

	function nextImage() {
		showImage(galleryImages.eq(lastIndex + 1));
	}

	function prevImage() {
		showImage(galleryImages.eq(lastIndex - 1));
	}
	
	galleryImages.click(showModal);
	modalClose.click(hideModal);
	modalNext.click(nextImage);
	modalPrev.click(prevImage);
});
